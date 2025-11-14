import { google } from "@ai-sdk/google";
import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { NextResponse } from "next/server";
import { z, type ZodTypeAny } from "zod";

// ---- Shared types & schemas ----

const jsonTypeSchema = z.enum([
  "string",
  "number",
  "object",
  "array",
  "boolean",
  "null",
]);
type JsonType = z.infer<typeof jsonTypeSchema>;

const fieldNodeSchema: z.ZodType<FieldNode>  = z.lazy(() =>
  z.object({
    id: z.string(),
    name: z.string().min(1, { message: "Field name is required" }),
    type: jsonTypeSchema,
    value: z.string(),
    description: z.string().optional().default(""),
    children: z.array(fieldNodeSchema),
  })
);

type FieldNode = {
  id: string;
  name: string;
  type: JsonType;
  value: string;
  description: string;
  children: FieldNode[];
};

const MODEL_OPTIONS = ["chatgpt", "gemini"] as const;
type ModelOption = (typeof MODEL_OPTIONS)[number];

const dummyPayloadSchema = z.object({
  model: z.enum(MODEL_OPTIONS),
  samples: z
    .number()
    .int()
    .min(1, { message: "At least one sample is required" })
    .max(5, { message: "A maximum of 5 samples is supported" }),
  recordsPerSample: z
    .number()
    .int()
    .min(1, { message: "At least one record per sample is required" })
    .max(50, { message: "A maximum of 50 records per sample is supported" }),
  fields: z
    .array(fieldNodeSchema)
    .min(1, { message: "At least one field is required" }),
});
type DummyPayload = z.infer<typeof dummyPayloadSchema>;

// ---- Model registry ----

const MODEL_REGISTRY: Record<
  ModelOption,
  { label: string; env: string; model: ReturnType<typeof openai> | ReturnType<typeof google> }
> = {
  chatgpt: {
    label: "OpenAI GPT-4.1 Mini",
    env: "OPENAI_API_KEY",
    model: openai("gpt-4.1-mini"),
  },
  gemini: {
    label: "Google Gemini 2.5 Flash",
    env: "GOOGLE_GENERATIVE_AI_API_KEY",
    model: google("gemini-2.5-flash"),
  },
};

// ---- Helpers ----

const MAX_FIELDS = 60;
const MAX_SAMPLES = 5;
const MAX_RECORDS_PER_SAMPLE = 50;

const countFields = (fields: FieldNode[]): number =>
  fields.reduce((total, field) => total + 1 + countFields(field.children), 0);

const toBlueprint = (fields: FieldNode[], depth = 0): string =>
  fields
    .map((field) => {
      const indent = "  ".repeat(depth);
      const description = field.description ? ` — ${field.description}` : "";
      const line = `${indent}- ${field.name} (${field.type})${description}`;

      if (field.children.length === 0) return line;
      return `${line}\n${toBlueprint(field.children, depth + 1)}`;
    })
    .join("\n");

const toSkeleton = (fields: FieldNode[]): Record<string, unknown> =>
  fields.reduce<Record<string, unknown>>((shape, field) => {
    shape[field.name] = buildExample(field);
    return shape;
  }, {});

const buildExample = (field: FieldNode): unknown => {
  switch (field.type) {
    case "string":
      return field.description || "sample string";
    case "number":
      return 42;
    case "boolean":
      return true;
    case "null":
      return null;
    case "array":
      return [];
    case "object":
      return toSkeleton(field.children);
    default:
      return "sample value";
  }
};

const buildFieldSchema = (field: FieldNode): ZodTypeAny => {
  switch (field.type) {
    case "string":
      return z.string();
    case "number":
      return z.number();
    case "boolean":
      return z.boolean();
    case "null":
      return z.null();
    case "array":
      if (field.children.length === 0) {
        return z.array(z.unknown());
      }
      // Treat nested array elements as objects defined by child nodes.
      return z.array(buildRecordSchema(field.children));
    case "object":
      return buildRecordSchema(field.children);
    default:
      return z.unknown();
  }
};

const buildRecordSchema = (fields: FieldNode[]) => {
  const shape = fields.reduce<Record<string, ZodTypeAny>>((acc, field) => {
    acc[field.name] = buildFieldSchema(field);
    return acc;
  }, {});

  return z.object(shape).catchall(z.unknown());
};

// ---- Route handler ----

export async function POST(req: Request) {
  let parsedBody: unknown;

  try {
    parsedBody = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Unable to parse JSON payload." },
      { status: 400 }
    );
  }

  const validation = dummyPayloadSchema.safeParse(parsedBody);

  if (!validation.success) {
    return NextResponse.json(
      {
        error: "The request payload is invalid or incomplete.",
        details: validation.error.flatten(),
      },
      { status: 400 }
    );
  }

  const payload: DummyPayload = validation.data;
  const totalFields = countFields(payload.fields);
  const requestedSamples = Math.min(payload.samples, MAX_SAMPLES);
  const requestedAlternateSamples = Math.max(0, requestedSamples - 1);
  const requestedRecordsPerSample = Math.min(
    payload.recordsPerSample,
    MAX_RECORDS_PER_SAMPLE
  );

  if (totalFields > MAX_FIELDS) {
    return NextResponse.json(
      { error: `Payload exceeds the maximum of ${MAX_FIELDS} fields.` },
      { status: 400 }
    );
  }

  const provider = MODEL_REGISTRY[payload.model];

  if (!process.env[provider.env]) {
    return NextResponse.json(
      { error: `${provider.label} is not configured on the server.` },
      { status: 500 }
    );
  }

  const blueprint = toBlueprint(payload.fields);
  const skeleton = toSkeleton(payload.fields);
  const recordSchema = buildRecordSchema(payload.fields);
  const recordSetSchema = z
    .array(recordSchema)
    .length(requestedRecordsPerSample);
  const alternateSamplesSchema =
    requestedAlternateSamples === 0
      ? z.array(recordSetSchema).length(0).default([])
      : z.array(recordSetSchema).length(requestedAlternateSamples);

  try {
    const { object } = await generateObject({
      model: provider.model,
      temperature: 0.2,
      maxRetries: 2,
      schema: z.object({
        primaryRecord: recordSetSchema,
        alternateSamples: alternateSamplesSchema,
        summary: z.string(),
        validationNotes: z
          .array(z.string())
          .max(5)
          .default([]),
      }),
      prompt: [
        "You are a senior QA engineer tasked with crafting realistic dummy JSON data for automated tests.",
        "Use the following field blueprint. Respect names, data types, and hierarchy:",
        blueprint,
        "Here is a JSON skeleton that illustrates the overall shape. Preserve it exactly, filling in thoughtful sample values:",
        JSON.stringify(skeleton, null, 2),
        `Generate exactly ${requestedSamples} total sample${
          requestedSamples > 1 ? "s" : ""
        }: 1 primary sample${
          requestedAlternateSamples > 0
            ? ` and ${requestedAlternateSamples} alternate sample${
                requestedAlternateSamples > 1 ? "s" : ""
              }`
            : ""
        }.`,
        `Each sample must contain exactly ${requestedRecordsPerSample} record${
          requestedRecordsPerSample > 1 ? "s" : ""
        } arranged as an array of objects.`,
        "Return JSON that matches the provided schema: one primary array plus the requested alternate sample arrays, along with a short summary and optional validation notes.",
        "Avoid personally identifiable information, secrets, or offensive content.",
      ].join("\n\n"),
    });

    console.log("[Dummy Data Raw]", {
      model: provider.label,
      response: object,
      requestedSamples,
      requestedAlternateSamples,
      requestedRecordsPerSample,
    });

    const { summary, validationNotes } = object;
    const primaryRecords = Array.isArray(object.primaryRecord)
      ? object.primaryRecord
      : [];
    const alternateSampleSets = Array.isArray(object.alternateSamples)
      ? object.alternateSamples
      : [];

    console.log("[Dummy Data Generated]", {
      model: provider.label,
      toBlueprint: blueprint,
      toSkeleton: skeleton,
      schema: recordSchema,
      requestedSamples,
      requestedAlternateSamples,
      requestedRecordsPerSample,
      primaryRecords,
      alternateSampleSets,
      summary,
      validationNotes,
    });

    return NextResponse.json({
      success: true,
      message: summary,
      submittedAt: new Date().toISOString(),
      model: provider.label,
      totals: {
        fields: totalFields,
        variations: (alternateSampleSets?.length ?? 0) + 1,
      },
      data: {
        primary: primaryRecords,
        variations: alternateSampleSets,
      },
      notes: validationNotes,
    });
  } catch (error) {
    const fallbackMessage =
      error instanceof Error
        ? error.message
        : "Failed to generate dummy data.";

    return NextResponse.json(
      { error: fallbackMessage },
      { status: 500 }
    );
  }
}

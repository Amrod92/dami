"use client";

import { useMemo, useState } from "react";
import {
  Control,
  FieldArrayPath,
  Path,
  UseFormRegister,
  UseFormSetValue,
  useFieldArray,
  useForm,
  useWatch,
} from "react-hook-form";
import { FieldDescription, FieldSet } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type JsonType = "string" | "number" | "object" | "array" | "boolean" | "null";

type FieldNode = {
  id: string;
  name: string;
  type: JsonType;
  value: string;
  description: string;
  children: FieldNode[];
};

const typeOptions: { value: JsonType; label: string }[] = [
  { value: "string", label: "string" },
  { value: "number", label: "number" },
  { value: "object", label: "object" },
  { value: "array", label: "array" },
  { value: "boolean", label: "boolean" },
  { value: "null", label: "null" },
];

const MODEL_OPTIONS = [
  { value: "chatgpt", label: "OpenAI GPT-4.1 Mini", logo: "🌀" },
  { value: "gemini", label: "Gemini 2.5 Flash", logo: "🔷" },
] as const;

type ModelOption = (typeof MODEL_OPTIONS)[number]["value"];

type FormValues = {
  model: ModelOption;
  fields: FieldNode[];
};

type DummyApiResponse = {
  message?: string;
  submittedAt?: string;
  model?: string;
  totals?: {
    fields: number;
    variations: number;
  };
  data?: {
    primary: Record<string, unknown>;
    variations: Record<string, unknown>[];
  };
  notes?: string[];
  error?: string;
};

function defaultValueForType(type: JsonType): string {
  switch (type) {
    case "boolean":
      return "boolean";
    case "null":
      return "null";
    case "number":
      return "number";
    case "object":
      return "object";
    case "array":
      return "array";
    case "string":
    default:
      return "string";
  }
}

function previewForType(type: JsonType): string {
  switch (type) {
    case "string":
      return '"sample text"';
    case "number":
      return "123";
    case "array":
      return '["a", "b"]';
    case "boolean":
      return "true";
    case "null":
      return "null";
    case "object":
    default:
      return "{ … }";
  }
}

function createField(partial?: Partial<FieldNode>): FieldNode {
  const baseType = partial?.type ?? "string";
  const defaults: FieldNode = {
    id: Math.random().toString(36).slice(2, 10),
    name: "",
    type: baseType,
    value: defaultValueForType(baseType),
    description: "",
    children: [],
  };
  return {
    ...defaults,
    ...partial,
    value: partial?.value ?? defaults.value,
    children: partial?.children ?? defaults.children,
  };
}

type FieldRowProps = {
  field: FieldNode & { id: string };
  depth: number;
  path: Path<FormValues>;
  control: Control<FormValues>;
  register: UseFormRegister<FormValues>;
  setValue: UseFormSetValue<FormValues>;
  onRemove: () => void;
  isLast: boolean;
  lineNumber: string;
};

function FieldRow({
  field,
  depth,
  path,
  control,
  register,
  setValue,
  onRemove,
  isLast,
  lineNumber,
}: FieldRowProps) {
  const typePath = `${path}.type` as Path<FormValues>;
  const namePath = `${path}.name` as Path<FormValues>;
  const descriptionPath = `${path}.description` as Path<FormValues>;
  const valuePath = `${path}.value` as Path<FormValues>;
  const childrenPath = `${path}.children` as FieldArrayPath<FormValues>;

  const childArray = useFieldArray({
    control,
    name: childrenPath,
  });

  const typeValue = (useWatch({
    control,
    name: typePath,
  }) ?? field.type) as JsonType;

  const indentation = useMemo(() => (depth === 0 ? 0 : depth * 20), [depth]);
  const previewValue = previewForType(typeValue);

  const handleTypeChange = (next: JsonType) => {
    setValue(typePath, next, { shouldDirty: true });
    setValue(
      valuePath,
      defaultValueForType(next) as FormValues["fields"][number]["value"],
      { shouldDirty: true }
    );

    if (next !== "object" && childArray.fields.length > 0) {
      childArray.replace([]);
    }
  };

  return (
    <div className="space-y-2" style={{ marginLeft: indentation }}>
      <div className="flex items-start gap-3 font-mono text-sm text-foreground">
        <span className="w-9 select-none text-right text-xs text-muted-foreground">
          {lineNumber}
        </span>
        <div className="flex flex-1 flex-wrap items-center gap-2 rounded-lg border border-transparent px-2 py-1 transition hover:border-border/70 hover:bg-muted/50">
          <span className="text-muted-foreground">&quot;</span>
          <Input
            defaultValue={field.name}
            {...register(namePath, { required: "Name is required" })}
            placeholder="fieldName"
            aria-required="true"
            aria-label="Field name"
            required
            className="w-40 border-none bg-transparent px-0 py-0 text-emerald-200 placeholder:text-muted-foreground focus-visible:border-transparent focus-visible:ring-0"
          />
          <span className="text-muted-foreground">&quot;</span>
          <span className="text-muted-foreground">:</span>
          <Select
            value={typeValue}
            onValueChange={(value) => handleTypeChange(value as JsonType)}
          >
            <SelectTrigger className="h-auto border-none bg-transparent px-1 py-0 text-emerald-300 hover:text-emerald-200 focus:border-transparent focus:ring-0 focus-visible:ring-0">
              <SelectValue placeholder="type" />
            </SelectTrigger>
            <SelectContent className="border-border/70 bg-muted text-foreground">
              {typeOptions.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="data-[state=checked]:bg-emerald-500/20 data-[state=checked]:text-emerald-200"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {typeValue !== "object" && (
            <span className="text-emerald-300">{previewValue}</span>
          )}
          {typeValue !== "object" && !isLast && (
            <span className="text-muted-foreground">,</span>
          )}
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            className="ml-auto border border-border/70 bg-muted px-2 py-0 text-xs text-muted-foreground hover:border-red-400/60 hover:text-red-200"
            aria-label="Remove field"
            onClick={onRemove}
          >
            -
          </Button>
        </div>
      </div>
      <input
        type="hidden"
        defaultValue={field.value}
        {...register(valuePath, { required: "Value is required" })}
      />
      <input
        type="hidden"
        defaultValue={field.id}
        {...register(`${path}.id` as Path<FormValues>)}
      />
      {typeValue === "object" && (
        <div className="flex items-start gap-3 font-mono text-sm text-foreground">
          <span className="w-9 select-none text-right text-xs text-muted-foreground">
            {" "}
          </span>
          <div className="space-y-2 border-l border-border/70 pl-4">
            <div>{"{"}</div>
            <div className="space-y-2">
              {childArray.fields.map(
                (child: FieldNode & { id: string }, childIndex: number) => {
                  const childPath =
                    `${path}.children.${childIndex}` as Path<FormValues>;
                  return (
                    <FieldRow
                      key={child.id}
                      field={child}
                      depth={depth + 1}
                      path={childPath}
                      control={control}
                      register={register}
                      setValue={setValue}
                      onRemove={() => childArray.remove(childIndex)}
                      isLast={childIndex === childArray.fields.length - 1}
                      lineNumber={`${lineNumber}.${childIndex + 1}`}
                    />
                  );
                }
              )}
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => childArray.append(createField())}
                className="px-0 text-left text-emerald-300 hover:text-emerald-200"
              >
                + Add child field
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <span>{"}"}</span>
              {!isLast && <span className="text-muted-foreground">,</span>}
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
        <span className="w-9 select-none text-right text-muted-foreground">
          {" "}
        </span>
        <span>&#47;&#47;</span>
        <Input
          defaultValue={field.description}
          {...register(descriptionPath)}
          placeholder="Describe the purpose (optional)"
          className="w-full max-w-md border-none bg-transparent px-0 py-0 text-muted-foreground placeholder:text-muted-foreground focus-visible:border-transparent focus-visible:ring-0"
        />
      </div>
    </div>
  );
}

export function DummyBuilder() {
  const defaultValues = useMemo<FormValues>(
    () => ({
      model: MODEL_OPTIONS[0].value,
      fields: [createField()],
    }),
    []
  );

  const form = useForm<FormValues>({
    defaultValues,
  });

  const [submitState, setSubmitState] = useState<
    | { status: "idle" }
    | { status: "loading" }
    | { status: "success"; message?: string }
    | { status: "error"; message: string }
  >({
    status: "idle",
  });

  const [lastResponse, setLastResponse] = useState<DummyApiResponse | null>(
    null
  );

  const { control, register, handleSubmit, reset, setValue } = form;

  const rootArray = useFieldArray({
    control,
    name: "fields",
  });

  const resetToDefaults = () => {
    const freshDefaults = {
      model: MODEL_OPTIONS[0].value,
      fields: [createField()],
    };
    reset(freshDefaults);
    rootArray.replace(freshDefaults.fields);
  };

  const handleAddField = () => {
    rootArray.append(createField());
  };

  const handleRemoveField = (index: number) => {
    if (rootArray.fields.length <= 1) {
      resetToDefaults();
      return;
    }
    rootArray.remove(index);
  };

  const handleReset = () => {
    resetToDefaults();
    setSubmitState({ status: "idle" });
    setLastResponse(null);
  };

  const onSubmit = async (data: FormValues) => {
    setSubmitState({ status: "loading" });
    setLastResponse(null);

    try {
      const response = await fetch("/api/dummy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        let errorMessage = "Failed to submit dummy payload";

        try {
          const errorBody = await response.json();
          errorMessage = errorBody?.error ?? errorMessage;
        } catch {
          // ignore body parsing errors - keep default message
        }

        throw new Error(errorMessage);
      }

      const responseBody = (await response.json()) as DummyApiResponse;

      setSubmitState({
        status: "success",
        message:
          responseBody?.message ?? "Dummy payload submitted successfully.",
      });
      setLastResponse(responseBody);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unexpected error while submitting payload";

      setSubmitState({ status: "error", message });
      setLastResponse(null);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldSet>
        <FieldDescription>
          Define the keys, data types, and optional descriptions you want in the
          exported JSON file. Add nested fields for objects and expand the
          structure as you go.
        </FieldDescription>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_24px_60px_-30px_rgba(15,23,42,0.65)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 bg-muted/70 px-4 py-3">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span className="text-emerald-400">Damī</span>
              JSON Editor
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <ModelSelect control={control} setValue={setValue} />
              <Button
                type="button"
                variant="ghost"
                onClick={handleAddField}
                className="border border-border/70 bg-muted/70 px-3 py-1 text-xs text-emerald-300 hover:bg-muted/40 hover:text-emerald-200"
              >
                + Add property
              </Button>
            </div>
          </div>
          <div className="px-4 py-6">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              &#47;&#47; root object
            </div>
            <div className="mt-3 space-y-3 font-mono text-sm text-foreground">
              <div>{"{"}</div>
              <div className="space-y-3 border-l border-border/70 pl-6">
                {rootArray.fields.map(
                  (field: FieldNode & { id: string }, index: number) => {
                    const fieldPath = `fields.${index}` as Path<FormValues>;
                    return (
                      <FieldRow
                        key={field.id}
                        field={field}
                        path={fieldPath}
                        depth={0}
                        control={control}
                        register={register}
                        setValue={setValue}
                        onRemove={() => handleRemoveField(index)}
                        isLast={index === rootArray.fields.length - 1}
                        lineNumber={`${index + 1}`}
                      />
                    );
                  }
                )}
                {rootArray.fields.length === 0 && (
                  <div className="text-xs text-muted-foreground">
                    &#47;&#47; No properties yet — add your first one
                  </div>
                )}
              </div>
              <div>{"}"}</div>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t border-border/70 bg-muted/40 px-4 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <Button type="submit" disabled={submitState.status === "loading"}>
                {submitState.status === "loading" ? "Submitting..." : "Submit"}
              </Button>
              <Button type="button" variant="outline" onClick={handleReset}>
                Reset
              </Button>
            </div>
            <span
              className={`font-mono text-xs ${
                submitState.status === "error"
                  ? "text-red-300"
                  : submitState.status === "success"
                  ? "text-emerald-300"
                  : "text-muted-foreground"
              }`}
            >
              {submitState.status === "idle" &&
                "// Submit to send the JSON structure to the API"}
              {submitState.status === "loading" &&
                "// Sending payload to /api/dummy"}
              {submitState.status === "success" &&
                `// ${submitState.message ?? "Payload accepted"}`}
              {submitState.status === "error" && `// ${submitState.message}`}
            </span>
          </div>
          {lastResponse?.data && (
            <div className="border-t border-border/70 bg-card/60 px-4 py-4">
              <div className="flex flex-col gap-2 font-mono text-xs text-muted-foreground">
                <div className="flex flex-wrap items-center justify-between gap-2 text-foreground">
                  <span className="tracking-widest uppercase">
                    Generated dataset
                  </span>
                  {lastResponse.totals && (
                    <span>
                      {lastResponse.totals.variations} sample
                      {lastResponse.totals.variations === 1 ? "" : "s"} •{" "}
                      {lastResponse.totals.fields} fields
                    </span>
                  )}
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-muted-foreground">
                      {"// primary record"}
                    </div>
                    <pre className="mt-1 max-h-64 overflow-auto rounded-lg bg-background/70 p-3 text-xs text-emerald-100">
                      {JSON.stringify(lastResponse.data.primary, null, 2)}
                    </pre>
                  </div>
                  {lastResponse.data.variations.length > 0 && (
                    <div>
                      <div className="text-muted-foreground">
                        {"// alternate samples"}
                      </div>
                      <div className="mt-1 space-y-2">
                        {lastResponse.data.variations.map(
                          (variation, index) => {
                            return (
                              <pre
                                key={index}
                                className="max-h-64 overflow-auto rounded-lg bg-background/60 p-3 text-xs text-blue-100"
                              >
                                {JSON.stringify(variation, null, 2)}
                              </pre>
                            );
                          }
                        )}
                      </div>
                    </div>
                  )}
                  {lastResponse.notes && lastResponse.notes.length > 0 && (
                    <div>
                      <div className="text-muted-foreground">
                        {"// validation notes"}
                      </div>
                      <ul className="mt-1 list-disc space-y-1 pl-6 text-foreground">
                        {lastResponse.notes.map((note, index) => {
                          return <li key={index}>{note}</li>;
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </FieldSet>
    </form>
  );
}

type ModelSelectProps = {
  control: Control<FormValues>;
  setValue: UseFormSetValue<FormValues>;
};

function ModelSelect({ control, setValue }: ModelSelectProps) {
  const model = useWatch({
    control,
    name: "model",
  }) as ModelOption | undefined;

  const activeModel =
    MODEL_OPTIONS.find((option) => option.value === model) ?? MODEL_OPTIONS[0];

  return (
    <Select
      value={activeModel.value}
      onValueChange={(value) => {
        setValue("model", value as ModelOption, { shouldDirty: true });
      }}
    >
      <SelectTrigger className="w-full cursor-pointer justify-between rounded-md border border-border bg-card px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 md:w-56">
        <div className="flex items-center gap-2">
          <span className="text-lg">{activeModel.logo}</span>
          <span>{activeModel.label}</span>
        </div>
      </SelectTrigger>
      <SelectContent
        align="end"
        className="border border-border bg-card text-foreground shadow-lg"
      >
        {MODEL_OPTIONS.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="data-[state=checked]:bg-primary/10 data-[state=checked]:text-primary"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{option.logo}</span>
              <span>{option.label}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

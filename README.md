# Damī

Damī is an AI-assisted dummy data builder that turns field blueprints into production-ready JSON fixtures. Define the structure you need, pick a provider (OpenAI or Google Gemini), and Damī generates one or more sample sets that respect your schema and business context.

## Features

- **Visual JSON designer** – Add nested fields, specify data types, and annotate descriptions in a code-like builder.
- **AI model switcher** – Toggle between OpenAI GPT-4.1 mini or Gemini 2.5 Flash. The server negotiates schemas and prompts automatically.
- **Sample controls** – Choose up to 5 sample arrays and up to 50 records per sample; responses are validated against dynamic Zod schemas.
- **Per-card clipboard** – Copy any generated sample (primary or variation) directly from the UI for quick reuse in tests or docs.
- **Validation feedback** – Server enforces payload limits (max 60 fields) and surfaces detailed errors when a schema can’t be satisfied.

## Requirements

- Node.js 18+
- npm (or pnpm/yarn/bun if you prefer)
- API keys for at least one provider:
  - `OPENAI_API_KEY`
  - `GOOGLE_GENERATIVE_AI_API_KEY`

Create a `.env.local` with whichever keys you plan to use:

```env
OPENAI_API_KEY=sk-your-openai-key
GOOGLE_GENERATIVE_AI_API_KEY=your-gemini-key
```

If a key is missing, that provider is disabled server-side and the UI will surface an error when selected.

## Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
# http://localhost:3000
```

Damī is built on the Next.js App Router. Relevant entry points:

- `src/app/dummy/_components/dummy-builder.tsx` – React Hook Form + UI builder.
- `src/app/api/dummy/route.ts` – Validates payloads, builds Zod schemas from user-defined fields, and calls `generateObject`.
- `components/ui/*` – Shared UI primitives (buttons, select, etc.).

Hot reload is enabled, so UI changes appear instantly in the browser.

## Usage

1. **Design fields** – Use “+ Add property” to add root or nested fields. Choose type (`string`, `object`, `array`, etc.), optional descriptions, and child nodes.
2. **Select provider & sample counts** – Pick the AI model, set `Samples (1–5)`, and `Records (1–50)`.
3. **Submit** – The server counts fields, clamps sample limits, and crafts a blueprint + skeleton prompt for the selected provider.
4. **Review output** – Primary sample plus alternate variations render as separate cards. Copy any card to the clipboard with the inline button.
5. **Iterate** – Adjust the schema or sample controls and resubmit to regenerate data.

## Testing & Validation

- Field validation is handled with Zod in both the form and API layer.
- `generateObject` retries twice by default; errors bubble up as JSON responses consumed by the client.
- For manual QA, use both providers to ensure schemas, limits, and copy buttons behave as expected.

## Deployment

Deploy like any standard Next.js app (Vercel, Netlify, container, etc.). Ensure the required API keys are configured in your hosting environment. No additional build steps are needed beyond `next build`.

## Contributing

1. Fork or branch.
2. Keep changes focused (UI, API, etc.) and include comments where logic is non-obvious (e.g., schema builders).
3. Verify lint/build (`npm run lint`, `npm run build`) before submitting.

Damī is young—bug reports, ideas, and PRs are welcome! Open an issue describing the use case or bug so we can keep the roadmap aligned with real testing workflows.

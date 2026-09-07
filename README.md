# Mthiya LaunchKit V1 — BUILD #017

## Business Model Builder Intelligence

BUILD #017 adds a real Business Model Builder on top of the reusable module engine.

### Added
- Nine-block business model builder UI.
- Business model decision ledger for risky assumptions.
- Project-scoped RLS for business model assumptions.
- Structured AI business model diagnosis using OpenAI Structured Outputs.
- Context-aware analysis using Idea, Customer Discovery, Competition and Business Model data.
- Business model facts synchronized into project memory.
- Scores for coherence, customer fit, economics, delivery and evidence.
- Strengths, gaps, risky assumptions, recommendations and next best action.

### Data flow
Idea + Customer Evidence + Competition → Business Model → Assumptions → AI Diagnosis → Project Memory → Offer Builder

### Safety principle
AI does not invent market facts, demand, pricing, costs, traction, or profitability. Missing evidence remains missing.

### Run
1. Install dependencies: `npm install`
2. Configure Supabase and OpenAI environment variables from `.env.example`.
3. Apply migrations through `supabase/migrations/`.
4. Start with `npm run dev`.

This archive has not been deployed. Full production build testing may depend on the local environment's ability to install dependencies.

BUILD #018 — Offer Builder Intelligence

Adds the Offer Builder as a real project module with persistent structured offer data, deliverables and objections, an Offer Architect AI diagnosis using strict structured output, and a project-scoped offer_versions table. AI is instructed not to invent demand, testimonials, competitor facts, pricing, results, guarantees, or customer behavior.

Not production-tested in this environment. Dependency installation/build may require a network-enabled development environment.

# Mthiya LaunchKit V1 — Build #027

## Launch Readiness Engine

Build #027 adds a deterministic launch-readiness gate at `/projects/[projectId]/readiness`.

### What it does
- Evaluates the core launch engines from stored module state.
- Checks customer evidence depth and hypothesis status.
- Checks competitive context and business-model assumptions.
- Checks launch execution blockers and critical open tasks.
- Produces RED / YELLOW / GREEN readiness.
- Produces an explainable score, blockers, warnings and next best move.
- Keeps readiness separate from AI opinion.
- Enforces project ownership server-side before reading project data.

### Important
The readiness engine is intentionally conservative and deterministic. Thresholds are product rules, not claims of scientific certainty.

# Orchestration Model

## Single Entry Point

`marketing-orchestrator` is the primary agent users talk to. It owns intake, planning, routing, synthesis, review, reporting, and learning handoff.

Specialist agents stay modular. They receive scoped task briefs and return structured output reports.

## Task States

- `queued`: task is planned but not started.
- `in_progress`: task is being handled by a specialist.
- `needs_input`: task needs user input before continuing.
- `blocked`: task cannot continue without external change or approval.
- `draft_done`: specialist produced a draft output.
- `review_done`: output passed review or has review notes.
- `approved`: user approved a gated action.

## Default Flow

1. Intake user request.
2. Load or create project profile.
3. Build campaign execution plan.
4. Create task briefs.
5. Delegate to specialist agents.
6. Collect agent output reports.
7. Synthesize one coherent recommendation.
8. Run ethics, security, and claims review.
9. Create approval gate for external actions.
10. Deliver executive marketing report.
11. Save approved non-sensitive learnings.

## Routing Rules

- Use the fewest specialist agents needed for the user goal.
- Use `ethics-compliance-reviewer` for any final campaign, publish recommendation, public doc, or external action.
- Use `analytics-optimization-analyst` when metrics, experiments, or performance decisions are involved.
- Use `project-learning-personalization-agent` at the beginning for context and at the end for learnings.
- Use `agent-update-manager` only when update/sync/repository maintenance is requested or scheduled.

## Approval Rules

The orchestrator must request approval before:

- Publishing content.
- Sending emails or messages.
- Spending ad budget.
- Changing external account settings.
- Sharing public links.
- Updating repository files from upstream.
- Storing sensitive or business-critical durable learning.
- Using customer-level data.

## Reporting Rules

Every final report should include:

- What the user asked for.
- What plan was used.
- Which agents contributed.
- What outputs were created.
- What decisions were made.
- What risks remain.
- What approvals are needed.
- What should happen next.

## Security Baseline

- Do not store or expose credentials.
- Treat frontend and public docs as public.
- Do not ask users to paste secrets.
- Prefer anonymized summaries over raw customer data.
- Keep the stricter security rule when local and upstream policies differ.

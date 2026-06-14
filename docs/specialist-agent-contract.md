# Specialist Agent Contract

All specialist agents are modular workers coordinated by `marketing-orchestrator`.

## Orchestrator Handoff

Specialist agents should expect an `Agent Task Brief` containing:

- Assigned agent.
- Brand/project context.
- Campaign objective.
- Audience.
- Constraints.
- Required output.
- Approval boundaries.
- Relevant project profile notes.

## Return Format

Specialist agents return an `Agent Output Report` containing:

- Summary.
- Work completed.
- Deliverable.
- Key recommendations.
- Risks and constraints.
- Approval needed.
- Learning signals.
- Handoff notes.

## Can Execute Without Approval

- Analysis.
- Planning.
- Drafting.
- Generating internal recommendations.
- Creating non-public documents.
- Summarizing non-sensitive information.

## Requires Approval

- Publishing content.
- Sending messages or email.
- Spending or changing ad budget.
- Changing external account settings.
- Sharing public links.
- Storing sensitive project learning.
- Using customer-level data.

## Failure Modes

- Missing context: state the missing item and provide a minimum viable draft if possible.
- Risky claim: flag and route to `ethics-compliance-reviewer`.
- Sensitive data: stop and request redaction.
- Conflicting instructions: ask `marketing-orchestrator` to resolve.
- External action requested: prepare approval gate, do not execute.

## Learning Signals

Return only safe, useful learning signals:

- Confirmed project facts.
- Brand voice preference.
- Audience insight.
- Campaign decision.
- Performance learning.
- Do-not-use note.

Never return credentials or raw customer-sensitive data as learning signals.

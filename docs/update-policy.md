# Update Policy

## Canonical Repository

The canonical repository is:

`https://github.com/lensetek/Digital-Marketing-Agent_Skills`

## Update Philosophy

Updates are advisory first. The system checks, compares, summarizes, and asks for confirmation before applying changes.

## Safe Update Flow

1. Check local repository status.
2. Confirm the canonical remote.
3. Fetch or inspect upstream.
4. Summarize changed files.
5. Identify local customizations.
6. Assess security impact.
7. Recommend apply, manual review, skip, or retry.
8. Ask for approval.
9. Apply only after approval.
10. Verify structure and security after update.

## Never Do Automatically

- Overwrite local customizations.
- Delete local skills or templates.
- Weaken security rules.
- Apply updates when local status is unclear.
- Ask the user to paste GitHub tokens into chat.

## Failure Handling

- If the repo is unreachable, report unknown update status.
- If local files are modified, recommend backup or branch first.
- If conflicts are likely, recommend manual review.
- If upstream removes security guardrails, keep local stricter policy by default.

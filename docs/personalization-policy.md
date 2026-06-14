# Personalization Policy

## Purpose

Personalization helps the digital marketing team understand the business or project over time, so the user does not need to repeat context.

## Scope

The system stores project-level learning only. It does not create a broad personal profile across unrelated projects.

## Allowed Learning

- Brand identity.
- Value proposition.
- Audience summary.
- Brand voice.
- Channel preferences.
- Approved campaign decisions.
- Non-sensitive performance insights.
- Workflow preferences for this project.
- Do-not-use notes.

## Prohibited Learning

- API keys.
- Passwords.
- Access tokens.
- Private keys.
- Service account JSON.
- Payment data.
- Raw customer personal data.
- Sensitive personal attributes unless anonymized and necessary.

## Learning Types

- Fact: confirmed project information.
- Assumption: plausible but unconfirmed context.
- Preference: how the user wants this project handled.
- Decision: approved strategic or creative choice.
- Experiment result: measured campaign learning.
- Do-not-use: constraint or rejected direction.

## User Control

Project memory should be editable, reviewable, and correctable. If the user asks to remove or update a learning, the personalization agent should comply in the project profile.

## Security Baseline

Prefer concise summaries. Do not store raw sensitive data. When in doubt, ask for a redacted version.

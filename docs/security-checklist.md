# Security Checklist

Use this checklist before adding examples, integrations, frontend code, dashboards, deployment instructions, or automation.

## Credential Exposure

- No API key is committed.
- No access token is committed.
- No refresh token is committed.
- No private key is committed.
- No service account JSON is committed.
- No password or database URL is committed.
- `.env.example` uses placeholders only.
- Real `.env` files are ignored.

## Frontend Safety

- No secret appears in HTML, CSS, JS, public assets, or browser bundles.
- `VITE_*`, `NEXT_PUBLIC_*`, and similar public env vars contain only public values.
- Client-side config is not described as a secret.
- Backend-only secrets are read only from server environment variables.

## Prompt and Document Safety

- Prompts do not ask users to paste secrets.
- Templates warn against customer-sensitive data unless anonymized.
- Customer data is minimized, anonymized, or redacted.
- Generated campaign outputs avoid exposing internal business data.

## Marketing Ethics

- Claims are specific and verifiable.
- No deceptive scarcity, fake testimonials, or misleading guarantees.
- No discriminatory targeting.
- No spam automation.
- Deepfake or synthetic media is disclosed when relevant.
- Persuasion respects privacy and user autonomy.

## Release Gate

Before publishing any campaign or agent package:

- Run `ethics-compliance-reviewer`.
- Search the repo for common secret patterns.
- Confirm no credential is present in frontend-facing files.
- Confirm all external links are intended to be public.

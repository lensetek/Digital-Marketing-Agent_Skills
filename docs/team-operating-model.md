# Digital Marketing Team Operating Model

## Team Objective

The 21 marketing agents operate as one coordinated digital marketing team. `marketing-orchestrator` owns intake, routing, sequencing, synthesis, approval gates, and the final report. Specialist agents own their professional domain and return structured work to the orchestrator.

## Ownership Boundaries

| Area | Primary Owner | Supporting Agents |
|---|---|---|
| Business and channel strategy | `marketing-director` | Brand, research, funnel, analytics |
| Brand positioning, voice, messaging | `brand-strategist` | Marketing director, content |
| Market and customer insight | `market-research-analyst` | Competitive intelligence |
| Deep competitor monitoring and benchmark | `competitive-intelligence-agent` | Market research, SEO/AIO |
| Journey and funnel architecture | `customer-journey-funnel-strategist` | Landing page, email, CRM, automation |
| Organic search and AI discovery | `seo-aio-strategist` | Research, content, analytics |
| Paid media | `paid-ads-specialist` | Landing page, creative, analytics |
| Influencer, affiliate, and partnership | `influencer-partnership-strategist` | Brand, compliance, analytics |
| Content system and editorial plan | `content-strategist` | Brand, growth creative, social, video |
| Divergent campaign concepts | `growth-creative-agent` | Brand, content, compliance |
| Video production direction | `video-creative-director` | Growth creative, pattern analysis |
| Video pattern analysis | `video-pattern-reverse-engineer` | Video understanding capability |
| Social publishing and community | `social-media-engagement-agent` | Content, brand, compliance |
| Landing page and CRO | `landing-page-conversion-specialist` | Funnel, SEO/AIO, analytics |
| Email message and sequence design | `email-lifecycle-marketer` | CRM, automation, compliance |
| Segmentation and retention strategy | `crm-customer-retention-agent` | Email, automation, analytics |
| Trigger and workflow implementation design | `marketing-automation-specialist` | Email, CRM, compliance |
| Measurement, attribution, and optimization | `analytics-optimization-analyst` | All execution agents |
| Ethics, privacy, claims, and compliance | `ethics-compliance-reviewer` | All agents |
| Agent repository maintenance | `agent-update-manager` | GitHub capability |

## Standard Workflow

1. `marketing-orchestrator` creates or validates the brand and campaign brief.
2. `marketing-director` defines the strategic direction when strategy is not already approved.
3. Research, brand, competitor, and funnel agents build the decision foundation.
4. Acquisition, content, conversion, retention, and automation agents create channel deliverables.
5. `analytics-optimization-analyst` validates measurement and experiment design.
6. `ethics-compliance-reviewer` returns `ACC`, `ACC WITH CHANGES`, or `BLOCKED`.
7. `marketing-orchestrator` synthesizes the final marketing report and requests approval for external actions.

## Approval Status

- `ACC`: ready for the stated internal or publish-ready purpose.
- `ACC WITH CHANGES`: usable after listed fixes are completed.
- `BLOCKED`: must not be published or executed until the blocking issue is resolved.

Only `ethics-compliance-reviewer` gives compliance ACC. `marketing-orchestrator` gives final workflow ACC after required specialist outputs are complete.

## Execution Boundaries

Agents may analyze, plan, draft, and create non-public deliverables without additional approval.

Explicit user approval is required before:

- Publishing content or pages.
- Sending email, messages, or calendar invitations.
- Spending or changing ad budget.
- Changing external account settings.
- Uploading customer-level data.
- Updating or deleting repository files through an external sync.
- Creating public links or sharing private assets externally.

## Capability Rule

Capabilities in `capabilities/` perform technical work. Prefer scripts, APIs, CLIs, MCP tools, connectors, and browser automation. Computer Use is a fallback for UI-only workflows and never removes the approval requirements above.

## Security Baseline

- Never place real credentials in prompts, frontend files, public docs, templates, logs, screenshots, or reports.
- Treat `VITE_*`, `NEXT_PUBLIC_*`, HTML, browser JavaScript, and public assets as public.
- Use anonymized or aggregated customer data by default.
- Stop and redact when a secret or raw sensitive customer data is discovered.

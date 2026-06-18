# Digital Marketing Agent Skills

[Bahasa Indonesia](README.id.md) | [Landing Page](index.html)

Digital Marketing Agent Skills is a portable modular AI marketing team with 21 professional marketing agents. Users talk to `marketing-orchestrator`; the orchestrator receives the brief, creates the work plan, coordinates specialist agents, runs review, asks for approval when needed, and delivers a final marketing report.

The pack uses Markdown-based instructions, so it can be adapted for Antigravity, Claude, Codex, Gemini/custom agents, and other agent runtimes that can consume role or project instructions.

## Install Prompt

Copy this prompt and paste it into your AI agent workspace:

```text
download and install this agent https://github.com/lensetek/Digital-Marketing-Agent_Skills
```

Expected confirmation prompt:

```text
Found 21 agent skills in this project. Install all agent skills?
```

## Agent Skills

| Agent | Job |
|---|---|
| `marketing-orchestrator` | Main coordinator for briefs, workflow, specialist routing, synthesis, and final report. |
| `marketing-director` | Strategy, positioning, target market, channel allocation, and campaign priority. |
| `brand-strategist` | Brand positioning, value proposition, brand voice, messaging, and differentiation. |
| `market-research-analyst` | Market, trend, customer, competitor, and opportunity research. |
| `competitive-intelligence-agent` | Competitor monitoring, pricing, campaign, SEO, and industry benchmarks. |
| `customer-journey-funnel-strategist` | Journey mapping, funnel design, touchpoints, conversion path, and optimization. |
| `seo-aio-strategist` | Keyword research, topic clusters, semantic SEO, AIO, and content opportunity mapping. |
| `paid-ads-specialist` | Google Ads, Meta Ads, TikTok Ads, targeting, budget planning, and ad copy. |
| `influencer-partnership-strategist` | Influencer selection, affiliate, partnership, collaboration, and sponsorship planning. |
| `content-strategist` | Content pillars, editorial calendar, campaign content, and storytelling. |
| `growth-creative-agent` | Viral concepts, unconventional campaigns, meme marketing, and creative angle generation. |
| `video-creative-director` | Video concepts, scripts, storyboards, hooks, YouTube, TikTok, and Reels. |
| `video-pattern-reverse-engineer` | Video pattern analysis, hook structure, CTA analysis, and reusable creative templates. |
| `social-media-engagement-agent` | Captions, engagement, community growth, social calendar, and audience interaction. |
| `landing-page-conversion-specialist` | Landing page structure, conversion copy, CTA optimization, and CRO recommendations. |
| `email-lifecycle-marketer` | Welcome, nurture, promotional, retention, and reactivation email campaigns. |
| `crm-customer-retention-agent` | Segmentation, loyalty, repeat purchase, churn prevention, and win-back campaigns. |
| `marketing-automation-specialist` | Workflow, lead nurturing, CRM, email, WhatsApp automation, and trigger design. |
| `analytics-optimization-analyst` | KPI tracking, campaign evaluation, attribution, funnel analytics, and optimization. |
| `ethics-compliance-reviewer` | Compliance, legal risk, claim validation, privacy, and reputation risk review. |
| `agent-update-manager` | Repository updates, changelog review, version management, and update recommendation. |

## Removed From Marketing Suite

`capstone-orchestrator` and `project-learning-personalization-agent` are intentionally excluded because they are learning/LMS functions, not core digital marketing roles.

## Capability Layer

The [capabilities/](capabilities/) folder contains 12 reusable technical capabilities. They are not counted as marketing agents; they are helper contracts for technical work that any marketing agent can request.

| Capability | Job |
|---|---|
| `browser-automation` | Navigation, clicks, forms, screenshots, and web QA. |
| `web-research` | Source-backed research with dates and evidence. |
| `web-scraping` | Public web data extraction. |
| `video-understanding` | Hook, scene, structure, CTA, and creative pattern analysis. |
| `github-repository` | Repo, issue, PR, changelog, and release inspection. |
| `file-operations` | Workspace file read, write, search, validation, and organization. |
| `document-processing` | DOCX/PDF/Markdown extraction, formatting, and review. |
| `spreadsheet-operations` | CSV/XLSX analysis, formulas, tables, and charts. |
| `presentation-operations` | PPTX/slides creation, review, and export. |
| `email-operations` | Drafting, QA, segmentation notes, and gated sending. |
| `scheduling-operations` | Calendar, reminders, cadence, and scheduling gates. |
| `knowledge-base-rag` | Document indexing, retrieval, citations, and grounded answers. |

Prefer scripts, APIs, CLIs, MCP tools, connectors, or browser automation first. Use Computer Use only as a fallback for desktop/browser UI work that has no safer automation path.

## Security

Do not paste API keys, passwords, tokens, private keys, service account JSON, billing credentials, or raw customer-sensitive data into prompts, templates, frontend files, or public docs. Treat `VITE_*`, `NEXT_PUBLIC_*`, browser JavaScript, HTML, and public assets as public.

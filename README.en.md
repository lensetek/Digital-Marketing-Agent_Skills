# Digital Marketing Agent Skills

[Bahasa Indonesia](README.id.md) | [Landing Page](index.html)

Digital Marketing Agent Skills is a modular autonomous digital marketing agent team with one orchestrator and specialist agents. Users talk to `marketing-orchestrator`; the orchestrator understands the project, creates the plan, coordinates specialist agents, runs review, asks for approval, and reports execution results.

The pack uses Markdown-based instructions, so it can be adapted for Antigravity, Claude, Codex, Gemini/custom agents, and other agent runtimes that can consume role or project instructions.

## Install Prompt

Copy this prompt and paste it into your AI agent workspace:

```text
download install agent ini https://github.com/lensetek/Digital-Marketing-Agent_Skills
```

The installer agent must:

1. Download or clone the repository.
2. Count `skills/*/SKILL.md`.
3. Show the source repository, install destination, detected agent count, and agent list.
4. Ask for approval before installing.

Expected confirmation prompt:

```text
Found 15 agent skills in this project. Install all agent skills?
```

## Agent Skills

| Agent | Job |
|---|---|
| `marketing-orchestrator` | Main user entrypoint, planning lead, agent coordinator, approval gate, and execution reporter. |
| `marketing-director` | Digital strategy, KPI, channel priority, and 30-day action plan. |
| `market-research-analyst` | Market research, competitor analysis, persona, digital twin, and social listening. |
| `seo-aio-strategist` | Keyword map, SEO, local SEO, and AIO/post-search optimization. |
| `landing-page-conversion-specialist` | Landing page, conversion copy, CTA, FAQ, and mobile audit. |
| `content-strategist` | Content pillars, brand voice, content calendar, and content drafts. |
| `social-media-engagement-agent` | Engagement loop, response playbook, sentiment, and trend fit. |
| `paid-ads-specialist` | Google Ads, display ads, media buying, budget, and A/B testing. |
| `video-creative-director` | Video scripts, storyboards, visual prompts, micro-ad prompts, and audio direction. |
| `email-lifecycle-marketer` | Email plan, campaign drafts, CRM lifecycle, and personalization map. |
| `analytics-optimization-analyst` | Analytics insight, optimization, channel performance, and experiment backlog. |
| `ethics-compliance-reviewer` | Claims, privacy, credential exposure, spam, bias, and persuasion ethics review. |
| `capstone-orchestrator` | Final Ultimate Marketing AI Agent/certification project package. |
| `agent-update-manager` | Checks the canonical repository for updates and asks for confirmation before updating. |
| `project-learning-personalization-agent` | Stores project profile, brand voice, decisions, and non-sensitive learnings. |

## How to Use

1. Start with `marketing-orchestrator`.
2. Provide a business brief or ask the orchestrator to create an intake.
3. The orchestrator creates a `campaign-execution-plan`.
4. The orchestrator delegates tasks to specialist agents.
5. Specialist agents return `agent-output-report`.
6. `ethics-compliance-reviewer` runs final review.
7. The orchestrator delivers an `executive-marketing-report`.

## Use Cases

- Build a 30-day digital marketing strategy.
- Create market research and personas.
- Plan SEO/AIO and draft a landing page.
- Create content calendars and social media plans.
- Plan Google Ads, display ads, and A/B testing.
- Build email lifecycle campaigns.
- Analyze marketing data and recommend optimizations.
- Assemble a final AI marketing agent package.

## Security

Do not paste API keys, passwords, tokens, private keys, service account JSON, or raw customer data into prompts, templates, frontend files, project profiles, or public docs.

See the [security checklist](docs/security-checklist.md), [orchestration model](docs/orchestration-model.md), [update policy](docs/update-policy.md), and [personalization policy](docs/personalization-policy.md).

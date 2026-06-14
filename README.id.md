# Digital Marketing Agent Skills

[English](README.en.md) | [Landing Page](index.html)

Digital Marketing Agent Skills adalah tim agent modular untuk menjalankan pekerjaan digital marketing dari strategi sampai laporan. Pengguna cukup bicara dengan `marketing-orchestrator`; orchestrator akan memahami project, membuat rencana, mengoordinasikan agent spesialis, menjalankan review, meminta approval, dan memberi laporan hasil eksekusi.

Skill ini berbasis instruksi Markdown sehingga bisa digunakan di Antigravity, Claude, Codex, Gemini/custom agent, dan agent lain yang dapat membaca role instruction atau project instruction.

## Install Prompt

Copy prompt ini dan paste ke agent workspace kamu:

```text
download install agent ini https://github.com/lensetek/Digital-Marketing-Agent_Skills
```

Agent installer wajib:

1. Download atau clone repository.
2. Hitung jumlah file `skills/*/SKILL.md`.
3. Tampilkan repository sumber, lokasi install, jumlah agent, dan daftar agent.
4. Minta konfirmasi sebelum install.

Prompt konfirmasi yang diharapkan:

```text
Ditemukan 15 agent skills di project ini. Install semua agent skills ini?
```

## Daftar Agent Skills

| Agent | Tugas |
|---|---|
| `marketing-orchestrator` | Pintu utama user, pembuat rencana, koordinator agent, approval gate, dan laporan eksekusi. |
| `marketing-director` | Strategi digital marketing, KPI, channel priority, dan 30-day action plan. |
| `market-research-analyst` | Riset pasar, kompetitor, persona, digital twin, dan social listening. |
| `seo-aio-strategist` | Keyword map, SEO, local SEO, dan AIO/post-search optimization. |
| `landing-page-conversion-specialist` | Landing page, conversion copy, CTA, FAQ, dan mobile audit. |
| `content-strategist` | Content pillar, brand voice, content calendar, dan draft konten. |
| `social-media-engagement-agent` | Engagement loop, response playbook, sentiment, dan trend fit. |
| `paid-ads-specialist` | Google Ads, display ads, media buying, budget, dan A/B testing. |
| `video-creative-director` | Script video, storyboard, visual prompt, micro-ad prompt, dan audio direction. |
| `email-lifecycle-marketer` | Email plan, campaign draft, CRM lifecycle, dan personalization map. |
| `analytics-optimization-analyst` | Analytics insight, optimization, channel performance, dan experiment backlog. |
| `ethics-compliance-reviewer` | Review klaim, privasi, credential exposure, spam, bias, dan etika persuasi. |
| `capstone-orchestrator` | Final package untuk Ultimate Marketing AI Agent/certification project. |
| `agent-update-manager` | Cek update dari repository canonical dan minta konfirmasi sebelum update. |
| `project-learning-personalization-agent` | Menyimpan project profile, brand voice, keputusan, dan learning non-sensitif. |

## Cara Penggunaan

1. Mulai dari `marketing-orchestrator`.
2. Beri brief bisnis atau minta orchestrator membuat intake.
3. Orchestrator akan membuat `campaign-execution-plan`.
4. Orchestrator membagi tugas ke agent spesialis.
5. Agent spesialis mengembalikan `agent-output-report`.
6. `ethics-compliance-reviewer` melakukan final review.
7. Orchestrator memberi `executive-marketing-report`.

## Use Cases

- Membuat strategi digital marketing 30 hari.
- Menyusun riset pasar dan persona.
- Membuat SEO/AIO plan dan landing page draft.
- Membuat content calendar dan social media plan.
- Membuat Google Ads, display ads, dan A/B testing plan.
- Membuat email lifecycle campaign.
- Membaca data analytics dan membuat rekomendasi optimasi.
- Membuat final AI marketing agent package.

## Security

Jangan masukkan API key, password, token, private key, service account JSON, atau data pelanggan mentah ke prompt, template, frontend, project profile, atau dokumen publik.

Lihat [security checklist](docs/security-checklist.md), [orchestration model](docs/orchestration-model.md), [update policy](docs/update-policy.md), dan [personalization policy](docs/personalization-policy.md).

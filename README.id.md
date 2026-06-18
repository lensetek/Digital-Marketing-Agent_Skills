# Digital Marketing Agent Skills

Kumpulan agent skills modular untuk membentuk tim digital marketing profesional berbasis AI. Repo ini dirancang agar user bisa memberi satu brief bisnis, lalu `marketing-orchestrator` memilih specialist yang tepat, menggabungkan output, dan menghasilkan rekomendasi marketing yang siap dieksekusi.

## Prinsip Produk

- Terasa seperti tim marketing sungguhan: ada leadership, strategy, research, acquisition, content, conversion, retention, measurement, dan governance.
- Setiap agent punya peran profesional, input, workflow, output, checklist kualitas, dan guardrail security.
- Capability teknis seperti browser automation, scraping, video understanding, GitHub, file, document, spreadsheet, presentation, email, scheduling, dan RAG berada di folder `capabilities/` sebagai helper lintas-agent.
- Tidak ada agent pembelajaran, LMS, sertifikasi, atau capstone pendidikan di suite marketing ini.

## Agent Team

### Layer 1 - Leadership & Strategy

| Skill | Fungsi |
|---|---|
| `marketing-orchestrator` | Koordinator utama: menerima brief, membuat rencana, memilih agent, mengelola workflow, menggabungkan output, dan membuat laporan akhir. |
| `marketing-director` | CMO virtual: strategi marketing, positioning, target market, alokasi channel, dan prioritas campaign. |
| `brand-strategist` | Penjaga identitas brand: positioning, value proposition, brand voice, messaging framework, dan diferensiasi. |

### Layer 2 - Research & Intelligence

| Skill | Fungsi |
|---|---|
| `market-research-analyst` | Market research, trend analysis, customer research, competitor research, dan market opportunity. |
| `competitive-intelligence-agent` | Monitoring kompetitor, pricing, campaign, competitor SEO, dan benchmark industri. |
| `customer-journey-funnel-strategist` | Customer journey mapping, funnel design, touchpoint, conversion path, dan funnel optimization. |

### Layer 3 - Traffic Acquisition

| Skill | Fungsi |
|---|---|
| `seo-aio-strategist` | Keyword research, topic cluster, semantic SEO, AI Search Optimization, dan content opportunity mapping. |
| `paid-ads-specialist` | Google Ads, Meta Ads, TikTok Ads, targeting, budget planning, dan ad copy. |
| `influencer-partnership-strategist` | Influencer selection, affiliate, partnership, collaboration campaign, dan sponsorship planning. |

### Layer 4 - Content Production

| Skill | Fungsi |
|---|---|
| `content-strategist` | Content pillar, editorial calendar, campaign content planning, dan storytelling framework. |
| `growth-creative-agent` | Ide divergen: viral concepts, unconventional campaigns, meme marketing, attention engineering, dan creative angles. |
| `video-creative-director` | Video concept, script writing, storyboard, hook design, YouTube, TikTok, dan Reels. |
| `video-pattern-reverse-engineer` | Analisis video contoh, pola viral, hook, struktur, CTA, dan reusable creative template. |
| `social-media-engagement-agent` | Caption, engagement, community growth, social calendar, dan audience interaction. |

### Layer 5 - Conversion & Retention

| Skill | Fungsi |
|---|---|
| `landing-page-conversion-specialist` | Landing page structure, conversion copywriting, CTA optimization, dan CRO recommendation. |
| `email-lifecycle-marketer` | Welcome sequence, nurturing, promotional email, retention email, dan reactivation campaign. |
| `crm-customer-retention-agent` | Segmentation, loyalty program, repeat purchase strategy, churn prevention, dan win-back campaign. |
| `marketing-automation-specialist` | Workflow automation, lead nurturing, CRM/email/WhatsApp automation, dan trigger design. |

### Layer 6 - Measurement & Governance

| Skill | Fungsi |
|---|---|
| `analytics-optimization-analyst` | KPI tracking, campaign evaluation, attribution, funnel analytics, dan optimization recommendation. |
| `ethics-compliance-reviewer` | Compliance, legal risk, claim validation, privacy, dan reputation risk review. |
| `agent-update-manager` | Update repository, changelog review, version management, dan update recommendation. |

## Recommended Workflow

1. Isi `templates/brand-brief.md` atau berikan brief bebas ke `marketing-orchestrator`.
2. `marketing-orchestrator` membuat rencana kerja dan memilih specialist yang dibutuhkan.
3. Jalankan layer strategy dan research sebelum channel execution.
4. Jalankan acquisition, content, conversion, retention, dan automation sesuai objective campaign.
5. Jalankan `analytics-optimization-analyst` untuk measurement plan.
6. Jalankan `ethics-compliance-reviewer` sebelum publikasi atau rekomendasi final.
7. `marketing-orchestrator` menyatukan semua output menjadi final marketing report.

Kontrak kerja tim, ownership, approval gate, dan definisi status `ACC` tersedia di [docs/team-operating-model.md](docs/team-operating-model.md).

Hasil review lengkap seluruh agent tersedia di [docs/agent-team-review.md](docs/agent-team-review.md). Status saat ini: **TEAM ACC**.

## Removed From Marketing Suite

- `capstone-orchestrator`: fungsi pembelajaran/sertifikasi, bukan fungsi marketing.
- `project-learning-personalization-agent`: fungsi LMS/personalization memory, bukan fungsi digital marketing inti.

## Capability Layer

Folder [capabilities/](capabilities/) berisi 13 kemampuan reusable. Ini bukan marketing agent baru, jadi tidak dihitung ke 21 agent marketing.

| Capability | Fungsi |
|---|---|
| `browser-automation` | Navigasi, klik, form, screenshot, dan QA web. |
| `web-research` | Riset web berbasis sumber dan tanggal. |
| `web-scraping` | Ekstraksi data publik dari halaman web. |
| `video-understanding` | Analisis hook, scene, struktur, CTA, dan pola video. |
| `github-repository` | Inspect repo, issue, PR, changelog, dan release. |
| `file-operations` | Baca, tulis, cari, validasi, dan reorganisasi file workspace. |
| `document-processing` | DOCX/PDF/Markdown extraction, formatting, dan review. |
| `spreadsheet-operations` | CSV/XLSX analysis, formulas, tables, dan charts. |
| `presentation-operations` | PPTX/slides creation, review, dan export. |
| `email-operations` | Draft, QA, segmentation notes, dan send-gate email. |
| `scheduling-operations` | Calendar, reminders, cadence, dan scheduling gates. |
| `knowledge-base-rag` | Indexing dokumen, retrieval, citation, dan grounded answers. |
| `project-memory-learning` | Personalisasi aman dari fakta, preferensi, keputusan, feedback, dan eksperimen yang disetujui. |

Gunakan script/API/MCP/browser automation lebih dulu. Computer Use hanya fallback untuk UI desktop/browser yang tidak punya jalur otomasi lebih aman.

Update repository dapat dicek otomatis secara berkala melalui `agent-update-manager` dan `scheduling-operations`. Default-nya read-only weekly check; install update tetap membutuhkan ACC.

Personalisasi menggunakan `project-memory-learning`. Ini bukan hidden model training: hanya learning project ringkas yang disetujui, dapat diaudit, diperbaiki, diekspor, dan dihapus.

## Security First

Jangan pernah memasukkan API key, token, private key, service account JSON, password, credential asli, billing data, atau raw customer-sensitive data ke file publik, prompt, frontend, template, atau contoh konfigurasi. Semua konfigurasi frontend seperti `VITE_*`, `NEXT_PUBLIC_*`, HTML, JS browser, dan public assets harus dianggap publik.

Lihat [docs/security-checklist.md](docs/security-checklist.md) sebelum menambahkan integrasi, dashboard, API, automation, deployment, atau contoh konfigurasi.

## Source Plan

Blueprint lengkap ada di [AGENT_SKILLS_PLAN.md](AGENT_SKILLS_PLAN.md).

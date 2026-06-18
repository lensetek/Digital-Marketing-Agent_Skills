# Digital Marketing Agent Skills Plan

## Tujuan

Membangun kumpulan agent skills yang terasa seperti tim marketing profesional sungguhan. User cukup membawa brief bisnis atau campaign, lalu agent utama mengatur strategi, memilih specialist, menjalankan workflow, mengecek risiko, dan menyatukan hasil menjadi laporan marketing final.

## Prinsip Produk

- Agent suite ini adalah sistem kerja marketing, bukan LMS, kelas, atau capstone sertifikasi.
- Setiap skill harus punya peran profesional, input, workflow, output, quality checklist, dan security/ethics guardrail.
- `marketing-orchestrator` adalah entrypoint utama.
- Specialist agent tetap modular agar bisa dipanggil langsung bila user tahu kebutuhan spesifik.
- Capability teknis lintas-agent ditempatkan di folder `capabilities/` agar bisa dipakai semua agent tanpa mengotori daftar 21 marketing agent.

## Layer 1 - Leadership & Strategy

### 1. Marketing Orchestrator

Koordinator utama seluruh agent.

Tugas:

- Menerima brief.
- Membuat rencana kerja.
- Menentukan agent yang terlibat.
- Mengelola workflow.
- Menggabungkan output.
- Menghasilkan laporan akhir.

### 2. Marketing Director

CMO virtual.

Tugas:

- Menentukan strategi marketing.
- Positioning.
- Target market.
- Alokasi channel.
- Prioritas campaign.

### 3. Brand Strategist

Penjaga identitas brand.

Tugas:

- Brand positioning.
- Value proposition.
- Brand voice.
- Messaging framework.
- Diferensiasi kompetitor.

## Layer 2 - Research & Intelligence

### 4. Market Research Analyst

Tugas:

- Market research.
- Trend analysis.
- Customer research.
- Competitor research.
- Market opportunity.

### 5. Competitive Intelligence Agent

Tugas:

- Monitoring kompetitor.
- Pricing analysis.
- Competitor campaign analysis.
- Competitor SEO analysis.
- Benchmark industri.

### 6. Customer Journey & Funnel Strategist

Tugas:

- Customer journey mapping.
- Funnel design.
- Touchpoint analysis.
- Conversion path analysis.
- Funnel optimization strategy.

## Layer 3 - Traffic Acquisition

### 7. SEO / AIO Strategist

Tugas:

- Keyword research.
- Topic cluster.
- Semantic SEO.
- AI Search Optimization.
- Content opportunity mapping.

### 8. Paid Ads Specialist

Tugas:

- Google Ads.
- Meta Ads.
- TikTok Ads.
- Targeting.
- Budget planning.
- Ad copy.

### 9. Influencer & Partnership Strategist

Tugas:

- Influencer selection.
- Affiliate strategy.
- Partnership strategy.
- Collaboration campaign.
- Sponsorship planning.

## Layer 4 - Content Production

### 10. Content Strategist

Tugas:

- Content pillar.
- Editorial calendar.
- Campaign content planning.
- Storytelling framework.

### 11. Growth Creative Agent

Agent kreatif non-linear yang sengaja berpikir divergen sebelum menyaring ide.

Tugas:

- Ide absurd.
- Viral concepts.
- Unconventional campaigns.
- Meme marketing.
- Attention engineering.
- Creative angle generation.

### 12. Video Creative Director

Tugas:

- Video concept.
- Script writing.
- Storyboard.
- Hook design.
- YouTube, TikTok, dan Reels.

### 13. Video Pattern Reverse Engineer

Tugas:

- Menganalisis video contoh.
- Membongkar pola viral.
- Membaca hook.
- Membaca struktur video.
- Membaca CTA.
- Membuat template kreatif yang dapat digunakan ulang.

Input:

- YouTube.
- TikTok.
- Reels.
- Shorts.
- File video.

### 14. Social Media Engagement Agent

Tugas:

- Caption.
- Engagement.
- Community growth.
- Social calendar.
- Audience interaction.

## Layer 5 - Conversion & Retention

### 15. Landing Page Conversion Specialist

Tugas:

- Landing page structure.
- Conversion copywriting.
- CTA optimization.
- CRO recommendation.

### 16. Email Lifecycle Marketer

Tugas:

- Welcome sequence.
- Nurturing.
- Promotional email.
- Retention email.
- Reactivation campaign.

### 17. CRM & Customer Retention Agent

Tugas:

- Segmentation.
- Loyalty program.
- Repeat purchase strategy.
- Churn prevention.
- Win-back campaign.

### 18. Marketing Automation Specialist

Tugas:

- Workflow automation.
- Lead nurturing.
- CRM automation.
- Email automation.
- WhatsApp automation.
- Trigger design.

## Layer 6 - Measurement & Governance

### 19. Analytics & Optimization Analyst

Tugas:

- KPI tracking.
- Campaign evaluation.
- Attribution analysis.
- Funnel analytics.
- Optimization recommendation.

### 20. Ethics & Compliance Reviewer

Tugas:

- Compliance review.
- Legal risk review.
- Claim validation.
- Privacy review.
- Reputation risk review.

### 21. Agent Update Manager

Tugas:

- Update repository.
- Changelog review.
- Version management.
- Update recommendation.

## Yang Dihapus

### Capstone Orchestrator

Alasan:

- Bukan fungsi marketing.
- Fungsi pembelajaran/sertifikasi.

### Project Learning Personalization Agent

Alasan:

- Fungsi LMS.
- Fungsi pendidikan/personalization memory.
- Bukan digital marketing inti.

## Capability Layer

Bukan agent marketing, tetapi kemampuan teknis yang bisa dipakai semua agent Lensetek. Untuk sekarang capability dibuat di repo ini pada folder `capabilities/`; nanti bisa dipindahkan ke repo terpisah jika perlu distribusi lintas produk.

- Browser Automation Capability: `capabilities/browser-automation`.
- Web Research Capability: `capabilities/web-research`.
- Web Scraping Capability: `capabilities/web-scraping`.
- Video Understanding Capability: `capabilities/video-understanding`.
- GitHub Repository Capability: `capabilities/github-repository`.
- File Operations Capability: `capabilities/file-operations`.
- Document Processing Capability: `capabilities/document-processing`.
- Spreadsheet Operations Capability: `capabilities/spreadsheet-operations`.
- Presentation Operations Capability: `capabilities/presentation-operations`.
- Email Operations Capability: `capabilities/email-operations`.
- Scheduling Operations Capability: `capabilities/scheduling-operations`.
- Knowledge Base / RAG Capability: `capabilities/knowledge-base-rag`.
- Project Memory and Learning Capability: `capabilities/project-memory-learning`.

Capability boleh diimplementasikan sebagai:

- `SKILL.md` sebagai kontrak instruksi.
- `scripts/*.py` atau `scripts/*.js` untuk pekerjaan teknis.
- `templates/` untuk input/output.
- MCP/tool adapter jika nanti butuh pemanggilan formal lintas platform.

Computer Use hanya fallback jika capability tidak bisa dijalankan dengan script, API, CLI, MCP, connector, atau browser automation biasa.

## Struktur Repo

```text
Digital-Marketing-Agent_Skill/
  AGENT_SKILLS_PLAN.md
  README.md
  docs/
    security-checklist.md
  skills/
    marketing-orchestrator/
      SKILL.md
    marketing-director/
      SKILL.md
    brand-strategist/
      SKILL.md
    market-research-analyst/
      SKILL.md
    competitive-intelligence-agent/
      SKILL.md
    customer-journey-funnel-strategist/
      SKILL.md
    seo-aio-strategist/
      SKILL.md
    paid-ads-specialist/
      SKILL.md
    influencer-partnership-strategist/
      SKILL.md
    content-strategist/
      SKILL.md
    growth-creative-agent/
      SKILL.md
    video-creative-director/
      SKILL.md
    video-pattern-reverse-engineer/
      SKILL.md
    social-media-engagement-agent/
      SKILL.md
    landing-page-conversion-specialist/
      SKILL.md
    email-lifecycle-marketer/
      SKILL.md
    crm-customer-retention-agent/
      SKILL.md
    marketing-automation-specialist/
      SKILL.md
    analytics-optimization-analyst/
      SKILL.md
    ethics-compliance-reviewer/
      SKILL.md
    agent-update-manager/
      SKILL.md
  capabilities/
    browser-automation/
      SKILL.md
    web-research/
      SKILL.md
    web-scraping/
      SKILL.md
    video-understanding/
      SKILL.md
    github-repository/
      SKILL.md
    file-operations/
      SKILL.md
    document-processing/
      SKILL.md
    spreadsheet-operations/
      SKILL.md
    presentation-operations/
      SKILL.md
    email-operations/
      SKILL.md
    scheduling-operations/
      SKILL.md
    knowledge-base-rag/
      SKILL.md
    project-memory-learning/
      SKILL.md
  templates/
    brand-brief.md
    campaign-brief.md
    final-agent-package.md
```

## Skill Template Standard

Setiap `SKILL.md` mengikuti format:

```text
# Skill Name

## When to Use

## Role

## Inputs

## Workflow

## Outputs

## Quality Checklist

## Security and Ethics
```

## Security Guardrails

- Jangan menaruh API key, token, client secret, refresh token, private key, service account JSON, password, billing data, atau credential asli di frontend, prompt, template, atau docs publik.
- Anggap `VITE_*`, `NEXT_PUBLIC_*`, file HTML, JS browser, dan public assets sebagai data publik.
- Gunakan `.env.example` hanya dengan placeholder.
- Jika ada backend, secret hanya dibaca dari environment server atau secret store.
- Jangan menyarankan user menempelkan credential ke prompt agent.
- Jangan memasukkan data pelanggan sensitif ke template tanpa redaksi.
- Semua output campaign harus dicek agar tidak menyesatkan, diskriminatif, manipulatif, melanggar privasi, atau melanggar platform policy.

## Definition of Done

Repo dianggap siap sebagai tim full digital marketing jika:

- Ada 21 agent marketing dengan `SKILL.md` lengkap.
- Tidak ada `capstone-orchestrator` atau `project-learning-personalization-agent` di root suite.
- Ada workflow end-to-end dari brief ke final marketing report.
- Ada security checklist yang eksplisit.
- Ethics reviewer menjadi approval gate sebelum publikasi.
- Tidak ada credential asli di repo atau frontend-facing file.

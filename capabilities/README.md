# Universal Agent Capabilities

Capability layer ini berisi kemampuan teknis yang bisa dipakai oleh semua marketing agent di repo ini. Folder ini sengaja dipisah dari `skills/` agar jumlah 21 marketing agent tetap bersih, sementara kemampuan teknis tetap tersedia sebagai reusable helper.

## Prinsip

- Marketing agents mengambil keputusan marketing.
- Capabilities menjalankan pekerjaan teknis.
- Prefer script, API, CLI, MCP, atau browser automation yang eksplisit.
- Gunakan Computer Use hanya sebagai fallback saat tidak ada API, tidak ada script, atau workflow harus dilakukan melalui UI desktop/browser yang tidak bisa diakses dengan cara lain.
- Semua capability harus menjaga security: jangan meminta credential di prompt, jangan expose secret di frontend, dan jangan menyimpan raw customer-sensitive data tanpa redaksi.

## Capability Inventory

| Capability | Folder | Fungsi |
|---|---|---|
| Browser Automation | `browser-automation` | Navigasi, klik, form, screenshot, dan QA web. |
| Web Research | `web-research` | Riset web dengan sumber, tanggal, dan ringkasan. |
| Web Scraping | `web-scraping` | Ekstraksi data publik dari halaman web. |
| Video Understanding | `video-understanding` | Analisis video, hook, struktur, scene, CTA, dan pola kreatif. |
| GitHub Repository | `github-repository` | Inspect repo, issue, PR, changelog, dan release. |
| File Operations | `file-operations` | Baca, tulis, cari, validasi, dan reorganisasi file workspace. |
| Document Processing | `document-processing` | DOCX/PDF/Markdown extraction, formatting, dan review. |
| Spreadsheet Operations | `spreadsheet-operations` | CSV/XLSX analysis, formulas, tables, dan charts. |
| Presentation Operations | `presentation-operations` | PPTX/slides creation, review, dan export. |
| Email Operations | `email-operations` | Draft, QA, segmentation notes, dan send-gate untuk email. |
| Scheduling Operations | `scheduling-operations` | Calendar, reminders, campaign cadence, dan scheduling gates. |
| Knowledge Base / RAG | `knowledge-base-rag` | Indexing dokumen, retrieval, citation, dan grounded answers. |

## Standard Handoff

Marketing agent yang memanggil capability harus memberi task brief:

```text
Capability:
Objective:
Inputs:
Allowed sources/files:
Forbidden data:
Expected output:
Approval needed:
Security notes:
```

## Computer Use Rule

Computer Use boleh dipakai hanya jika:

- User memang meminta operate aplikasi desktop atau browser UI.
- Website tidak punya API/CLI yang memadai.
- Login/session user dibutuhkan dan user sudah mengizinkan.
- Visual inspection tidak bisa diganti oleh script, API, atau browser automation.

Jika Computer Use dipakai, capability wajib mencatat alasan dan batasan tindakan.

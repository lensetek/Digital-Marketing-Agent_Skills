const COPY_SUCCESS_MS = 1800;
const THEME_STORAGE_KEY = "digital-marketing-agent-theme";
const LANGUAGE_STORAGE_KEY = "digital-marketing-agent-language";

const themeToggle = document.querySelector("[data-theme-toggle]");
const themeLabel = document.querySelector("[data-theme-label]");
const themeIconPath = document.querySelector("[data-theme-icon-path]");
const installPrompt = document.getElementById("installPrompt");

const translations = {
  en: {
    pageTitle: "Digital Marketing Agent Skills",
    docHref: "docs-en.html",
    installPrompt: "download and install this agent https://github.com/lensetek/Digital-Marketing-Agent_Skills",
    heroBadge: "15 modular agent skills + one marketing orchestrator",
    heroTitle: "A full digital marketing team you can install with one prompt.",
    heroSubtitle:
      "Talk to one orchestrator. It plans the work, coordinates specialist agents, asks for approval, and reports the result. Portable Markdown instructions for Antigravity, Claude, Codex, Gemini, and other agent workspaces.",
    copyInstallPrompt: "Copy install prompt",
    readDocs: "Read docs",
    installLabel: "Install Prompt",
    installHelp: "Paste this into your AI agent workspace.",
    copyButton: "Copy",
    copiedButton: "Copied",
    selectText: "Select text",
    installNote:
      'The installer agent should download the repository, count <span class="font-mono text-slate-200">skills/*/SKILL.md</span>, show the detected agents, and ask for confirmation before installing.',
    statAgents: "agent skills detected in the project",
    statOrchestrator: "orchestrator coordinates the full team",
    statCredentials: "credentials required in prompts or frontend files",
    aioEyebrow: "SEO and AIO Ready",
    aioTitle: "Clear answers for people, search engines, and AI assistants",
    aioIntro:
      "This page describes the agent pack in direct, structured language so humans can understand it quickly and AI answer engines can extract accurate summaries.",
    aioWhatTitle: "What is it?",
    aioWhatText:
      "A portable Markdown-based AI agent pack for running digital marketing work through one orchestrator and 15 specialist agents.",
    aioWhoTitle: "Who is it for?",
    aioWhoText:
      "Founders, marketers, agencies, course creators, and teams that want structured AI help for strategy, content, ads, analytics, and reporting.",
    aioHowTitle: "How does it work?",
    aioHowText:
      "The user talks to the marketing orchestrator. The orchestrator creates a plan, delegates tasks, reviews outputs, asks for approval, and reports results.",
    coversTitle: "What the team covers",
    coverStrategyTitle: "Strategy",
    coverStrategyText: "Digital strategy, KPIs, channel priority, and 30-day action plans.",
    coverResearchTitle: "Research",
    coverResearchText: "Competitors, personas, social listening, narrative intelligence, and market insight.",
    coverSeoTitle: "SEO and AIO",
    coverSeoText: "Keyword maps, on-page SEO, local SEO, and post-search visibility.",
    coverContentTitle: "Content and Social",
    coverContentText: "Brand voice, content calendars, social media plans, and engagement workflows.",
    coverAdsTitle: "Ads and Video",
    coverAdsText: "Google Ads, display concepts, A/B tests, scripts, storyboards, and micro-ad prompts.",
    coverLearningTitle: "Learning and Updates",
    coverLearningText: "Project personalization, safe memory, update checks, approval gates, and final reports.",
    detailEyebrow: "Agent Skills Detail",
    detailTitle: "A modular team for the full digital marketing cycle",
    detailText:
      "Each skill is a focused role instruction. The orchestrator creates the plan, sends task briefs to the right specialist agents, collects their output reports, runs review, and turns everything into one clear marketing execution report.",
    agentMarketingOrchestrator:
      "The main user-facing agent. It performs intake, creates campaign execution plans, delegates tasks, manages approvals, synthesizes results, and reports progress.",
    agentMarketingDirector:
      "Turns a business brief into strategy: objectives, audience, positioning, channel priorities, KPIs, and a practical 30-day action plan.",
    agentMarketResearch:
      "Researches the market, competitors, customer pains, personas, digital twins, social listening signals, and opportunity gaps.",
    agentSeoAio:
      "Builds keyword maps, search intent groups, on-page SEO recommendations, local SEO checklists, and AI answer optimization briefs.",
    agentLandingPage:
      "Creates landing page structure, conversion copy, CTA options, FAQ, objection handling, trust elements, and mobile-friendly recommendations.",
    agentContent:
      "Defines content pillars, brand voice, content calendars, captions, article ideas, hooks, CTAs, and repurposing workflows.",
    agentSocial:
      "Designs engagement loops, comment response playbooks, sentiment handling, trend-fit checks, escalation rules, and automation boundaries.",
    agentPaidAds:
      "Plans Google Ads, paid search, display ads, media buying assumptions, ad copy variations, budget logic, and A/B testing reports.",
    agentVideo:
      "Creates short video concepts, scripts, storyboards, product shot direction, visual prompts, micro-ad prompts, and audio vibe notes.",
    agentEmail:
      "Builds email plans, nurture sequences, promo emails, re-engagement flows, lifecycle maps, and personalization message matrices.",
    agentAnalytics:
      "Reads marketing metrics, interprets channel performance, identifies bottlenecks, recommends optimizations, and proposes next experiments.",
    agentEthics:
      "Reviews claims, privacy risk, credential exposure, spam risk, synthetic media risk, bias, and approval readiness before publishing.",
    agentCapstone:
      "Assembles the final Ultimate Marketing AI Agent package, including instructions, knowledge base inventory, creative brief, and walkthrough script.",
    agentUpdate:
      "Checks the canonical repository for updates, compares local files, summarizes changes and risks, then asks for confirmation before updating.",
    agentLearning:
      "Maintains a safe project profile with brand voice, preferences, decisions, campaign learnings, and do-not-use notes without storing secrets.",
    faqEyebrow: "FAQ",
    faqTitle: "Frequently asked questions",
    faqWhatQuestion: "What is Digital Marketing Agent Skills?",
    faqWhatAnswer:
      "It is a modular AI agent skills pack for digital marketing. One orchestrator coordinates specialist agents for strategy, research, SEO/AIO, content, ads, email, analytics, compliance, updates, and personalization.",
    faqInstallQuestion: "How do I install it?",
    faqInstallAnswer:
      "Copy the install prompt, paste it into your AI agent workspace, let the installer download the repository, confirm the detected agent count, and approve the installation.",
    faqPlatformsQuestion: "Which platforms can use it?",
    faqPlatformsAnswer:
      "The skills are portable Markdown instructions for Antigravity, Claude, Codex, Gemini custom agents, and other agent environments that can consume role instructions.",
    faqSafeQuestion: "Can it publish or spend ad budget automatically?",
    faqSafeAnswer:
      "No. The default workflow is draft plus approval. Publishing, email sending, account changes, repository updates, and ad spend require explicit user approval.",
    footerCopyright: "Copyright 2026 Lensetek International, LLC.",
  },
  id: {
    pageTitle: "Digital Marketing Agent Skills",
    docHref: "docs-id.html",
    installPrompt: "download install agent ini https://github.com/lensetek/Digital-Marketing-Agent_Skills",
    heroBadge: "15 agent skills modular + satu marketing orchestrator",
    heroTitle: "Tim digital marketing lengkap yang bisa diinstall dengan satu prompt.",
    heroSubtitle:
      "Cukup bicara dengan satu orchestrator. Ia membuat rencana, mengoordinasikan agent spesialis, meminta approval, dan memberi laporan hasil. Instruksi Markdown portable untuk Antigravity, Claude, Codex, Gemini, dan workspace agent lainnya.",
    copyInstallPrompt: "Copy prompt install",
    readDocs: "Baca docs",
    installLabel: "Prompt Install",
    installHelp: "Paste prompt ini ke AI agent workspace kamu.",
    copyButton: "Copy",
    copiedButton: "Tersalin",
    selectText: "Pilih teks",
    installNote:
      'Agent installer harus download repository, menghitung <span class="font-mono text-slate-200">skills/*/SKILL.md</span>, menampilkan agent yang ditemukan, lalu meminta konfirmasi sebelum install.',
    statAgents: "agent skills terdeteksi di project",
    statOrchestrator: "orchestrator mengoordinasikan seluruh tim",
    statCredentials: "credential dibutuhkan di prompt atau file frontend",
    aioEyebrow: "Siap SEO dan AIO",
    aioTitle: "Jawaban jelas untuk manusia, mesin pencari, dan AI assistant",
    aioIntro:
      "Halaman ini menjelaskan agent pack dengan bahasa langsung dan terstruktur agar mudah dipahami manusia serta mudah diringkas oleh AI answer engine.",
    aioWhatTitle: "Apa ini?",
    aioWhatText:
      "AI agent pack berbasis Markdown yang portable untuk menjalankan pekerjaan digital marketing lewat satu orchestrator dan 15 agent spesialis.",
    aioWhoTitle: "Untuk siapa?",
    aioWhoText:
      "Founder, marketer, agensi, course creator, dan tim yang butuh bantuan AI terstruktur untuk strategi, konten, iklan, analytics, dan reporting.",
    aioHowTitle: "Cara kerjanya?",
    aioHowText:
      "User bicara ke marketing orchestrator. Orchestrator membuat rencana, membagi tugas, mereview output, meminta approval, dan melaporkan hasil.",
    coversTitle: "Yang dicakup tim agent",
    coverStrategyTitle: "Strategi",
    coverStrategyText: "Strategi digital, KPI, prioritas channel, dan action plan 30 hari.",
    coverResearchTitle: "Riset",
    coverResearchText: "Kompetitor, persona, social listening, narrative intelligence, dan insight pasar.",
    coverSeoTitle: "SEO dan AIO",
    coverSeoText: "Keyword map, on-page SEO, local SEO, dan visibilitas post-search.",
    coverContentTitle: "Konten dan Sosial",
    coverContentText: "Brand voice, kalender konten, rencana social media, dan workflow engagement.",
    coverAdsTitle: "Iklan dan Video",
    coverAdsText: "Google Ads, konsep display, A/B test, script, storyboard, dan micro-ad prompt.",
    coverLearningTitle: "Learning dan Update",
    coverLearningText: "Personalisasi project, safe memory, cek update, approval gate, dan laporan final.",
    detailEyebrow: "Detail Agent Skills",
    detailTitle: "Tim modular untuk siklus digital marketing lengkap",
    detailText:
      "Setiap skill adalah role instruction yang fokus. Orchestrator membuat rencana, mengirim task brief ke agent spesialis, mengumpulkan output report, menjalankan review, dan mengubah semuanya menjadi laporan eksekusi marketing yang jelas.",
    agentMarketingOrchestrator:
      "Agent utama yang diajak bicara user. Ia melakukan intake, membuat campaign execution plan, membagi tugas, mengelola approval, menyatukan hasil, dan melaporkan progres.",
    agentMarketingDirector:
      "Mengubah brief bisnis menjadi strategi: objektif, audience, positioning, prioritas channel, KPI, dan action plan 30 hari yang praktis.",
    agentMarketResearch:
      "Meriset pasar, kompetitor, pain point pelanggan, persona, digital twin, sinyal social listening, dan celah peluang.",
    agentSeoAio:
      "Membuat keyword map, pengelompokan search intent, rekomendasi on-page SEO, local SEO checklist, dan AI answer optimization brief.",
    agentLandingPage:
      "Membuat struktur landing page, conversion copy, opsi CTA, FAQ, objection handling, trust element, dan rekomendasi mobile-friendly.",
    agentContent:
      "Menentukan content pillar, brand voice, kalender konten, caption, ide artikel, hook, CTA, dan workflow repurposing.",
    agentSocial:
      "Mendesain engagement loop, comment response playbook, sentiment handling, trend-fit check, escalation rule, dan batas automation.",
    agentPaidAds:
      "Merencanakan Google Ads, paid search, display ads, asumsi media buying, variasi ad copy, budget logic, dan laporan A/B testing.",
    agentVideo:
      "Membuat konsep video pendek, script, storyboard, arahan product shot, visual prompt, micro-ad prompt, dan audio vibe note.",
    agentEmail:
      "Membuat email plan, nurture sequence, promo email, re-engagement flow, lifecycle map, dan personalization message matrix.",
    agentAnalytics:
      "Membaca metrik marketing, menafsirkan performa channel, menemukan bottleneck, merekomendasikan optimasi, dan eksperimen berikutnya.",
    agentEthics:
      "Mereview klaim, risiko privasi, credential exposure, spam risk, synthetic media risk, bias, dan kesiapan approval sebelum publish.",
    agentCapstone:
      "Menyusun paket akhir Ultimate Marketing AI Agent, termasuk instructions, knowledge base inventory, creative brief, dan walkthrough script.",
    agentUpdate:
      "Mengecek update repository canonical, membandingkan file lokal, merangkum perubahan dan risiko, lalu meminta konfirmasi sebelum update.",
    agentLearning:
      "Menjaga project profile yang aman berisi brand voice, preferensi, keputusan, learning campaign, dan do-not-use note tanpa menyimpan secret.",
    faqEyebrow: "FAQ",
    faqTitle: "Pertanyaan umum",
    faqWhatQuestion: "Apa itu Digital Marketing Agent Skills?",
    faqWhatAnswer:
      "Ini adalah AI agent skills pack modular untuk digital marketing. Satu orchestrator mengoordinasikan agent spesialis untuk strategi, riset, SEO/AIO, konten, iklan, email, analytics, compliance, update, dan personalisasi.",
    faqInstallQuestion: "Bagaimana cara install?",
    faqInstallAnswer:
      "Copy prompt install, paste ke AI agent workspace, biarkan installer download repository, konfirmasi jumlah agent yang terdeteksi, lalu approve instalasi.",
    faqPlatformsQuestion: "Platform apa yang bisa memakai ini?",
    faqPlatformsAnswer:
      "Skills ini berupa instruksi Markdown portable untuk Antigravity, Claude, Codex, Gemini custom agents, dan environment agent lain yang bisa membaca role instructions.",
    faqSafeQuestion: "Apakah agent bisa publish atau memakai budget iklan otomatis?",
    faqSafeAnswer:
      "Tidak. Workflow default adalah draft plus approval. Publishing, pengiriman email, perubahan akun, update repository, dan ad spend membutuhkan approval eksplisit dari user.",
    footerCopyright: "Copyright 2026 Lensetek International, LLC.",
  },
};

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.body.dataset.theme = isDark ? "dark" : "light";
  document.body.classList.toggle("dark-mode", isDark);
  document.body.classList.toggle("theme-light", !isDark);

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  }

  if (themeLabel) {
    themeLabel.textContent = isDark ? "Light" : "Dark";
  }

  if (themeIconPath) {
    themeIconPath.setAttribute(
      "d",
      isDark
        ? "M12 3v2m0 14v2m9-9h-2M5 12H3m15.36-6.36-1.41 1.41M7.05 16.95l-1.41 1.41m12.72 0-1.41-1.41M7.05 7.05 5.64 5.64M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"
        : "M12 3a6 6 0 0 0 9 7.5A9 9 0 1 1 12 3Z"
    );
  }
}

function getStoredTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
}

function storeTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    return false;
  }
  return true;
}

function getStoredLanguage() {
  try {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch {
    return null;
  }
}

function storeLanguage(language) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    return false;
  }
  return true;
}

function applyLanguage(language) {
  const selectedLanguage = translations[language] ? language : "en";
  const dictionary = translations[selectedLanguage];

  document.documentElement.lang = selectedLanguage === "id" ? "id" : "en";
  document.title = dictionary.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.getAttribute("data-i18n-html");
    if (dictionary[key]) element.innerHTML = dictionary[key];
  });

  if (installPrompt) {
    installPrompt.textContent = dictionary.installPrompt;
  }

  const docLink = document.querySelector("[data-doc-link]");
  if (docLink) {
    docLink.setAttribute("href", dictionary.docHref);
  }

  document.querySelectorAll("[data-lang]").forEach((button) => {
    const isActive = button.getAttribute("data-lang") === selectedLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

applyTheme(getStoredTheme() || "light");
applyLanguage(getStoredLanguage() || "en");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
    storeTheme(nextTheme);
    applyTheme(nextTheme);
  });
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    const language = button.getAttribute("data-lang") || "en";
    storeLanguage(language);
    applyLanguage(language);
  });
});

function selectText(element) {
  const range = document.createRange();
  range.selectNodeContents(element);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
}

async function copyText(text, element) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  selectText(element);
  return document.execCommand("copy");
}

document.querySelectorAll("[data-copy-target]").forEach((button) => {
  button.addEventListener("click", async () => {
    const targetId = button.getAttribute("data-copy-target");
    const target = document.getElementById(targetId);
    const label = button.querySelector("[data-copy-label]");

    if (!target || !label) return;

    const language = getStoredLanguage() || document.documentElement.lang || "en";
    const originalLabel = translations[language]?.copyButton || label.textContent;
    const text = target.textContent.trim();

    try {
      await copyText(text, target);
      label.textContent = translations[language]?.copiedButton || "Copied";
      button.classList.add("copy-success");
    } catch {
      selectText(target);
      label.textContent = translations[language]?.selectText || "Select text";
    }

    window.setTimeout(() => {
      label.textContent = originalLabel;
      button.classList.remove("copy-success");
    }, COPY_SUCCESS_MS);
  });
});

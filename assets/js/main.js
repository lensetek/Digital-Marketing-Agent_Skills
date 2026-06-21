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
    heroBadge: "21-agent marketing team + 14 capabilities",
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
      'The installer agent should download the repository, count <span class="font-mono">skills/*/SKILL.md</span>, show the detected agents, and ask for confirmation before installing.',
    statAgents: "agent skills detected in the project",
    statOrchestrator: "technical capabilities support execution",
    statCredentials: "credentials required in prompts or frontend files",
    aioEyebrow: "SEO and AIO Ready",
    aioTitle: "Clear answers for people, search engines, and AI assistants",
    aioIntro:
      "This page describes the agent pack in direct, structured language so humans can understand it quickly and AI answer engines can extract accurate summaries.",
    aioWhatTitle: "What is it?",
    aioWhatText:
      "A portable Markdown-based pack for running end-to-end digital marketing with 21 coordinated agents and 14 reusable capabilities.",
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
    coverLearningTitle: "Governance and Updates",
    coverLearningText: "Compliance review, privacy checks, update checks, approval gates, and final reports.",
    reviewEyebrow: "Reviewed Team System",
    reviewTitle: "One complete, coordinated marketing team",
    reviewText: "All 21 agents have clear ownership, structured handoffs, measurement requirements, approval gates, and security rules.",
    capBrowser: "Navigation, forms, screenshots, and web QA.",
    capResearch: "Current, source-backed market and competitor research.",
    capScraping: "Permission-aware extraction of public structured data.",
    capVideo: "Hook, scene, pacing, CTA, and pattern analysis.",
    capGithub: "Repository, PR, issue, changelog, and release support.",
    capFiles: "Safe file, PDF, DOCX, and Markdown operations.",
    capOffice: "Spreadsheet analysis and presentation production.",
    capEmail: "Approval-gated email and campaign scheduling.",
    capRag: "Grounded retrieval, citations, and approved knowledge indexing.",
    capMemory: "Approval-based personalization from project facts, preferences, decisions, feedback, and experiments.",
    capabilityRuleTitle: "Execution Rule",
    capabilityRuleText: "Scripts, APIs, connectors, and browser automation come first. Computer Use is reserved for UI-only workflows.",
    updateRuleTitle: "Update Rule",
    updateRuleText: "Repository checks can run weekly in read-only mode. Installing an update still requires explicit approval.",
    useCasesEyebrow: "Practical Use Cases",
    useCasesTitle: "What this marketing team can do for you",
    useCasesText: "Start with one business goal. The orchestrator selects the right specialists, coordinates the work, and returns an integrated plan with measurable next actions.",
    useLaunchTitle: "Launch a Product or Brand",
    useLaunchText: "Build positioning, audience research, launch messaging, channel priorities, campaign assets, and measurement from one brief.",
    useAcquisitionTitle: "Build an Acquisition Campaign",
    useAcquisitionText: "Coordinate SEO/AIO, paid ads, influencer partnerships, landing pages, creative variants, targeting, and budget guardrails.",
    useContentTitle: "Run a Content Engine",
    useContentText: "Create content pillars, editorial calendars, social captions, video concepts, repurposing workflows, and community engagement plans.",
    useConversionTitle: "Improve Funnel Conversion",
    useConversionText: "Map the customer journey, diagnose funnel friction, improve landing pages and CTA, and define measurable CRO experiments.",
    useRetentionTitle: "Increase Retention and Revenue",
    useRetentionText: "Design customer segments, lifecycle emails, loyalty programs, churn prevention, win-back campaigns, and safe automation.",
    useOptimizeTitle: "Analyze and Optimize Performance",
    useOptimizeText: "Review KPI, attribution, tracking quality, channel results, competitor moves, and the next experiment backlog.",
    detailEyebrow: "Agent Skills Detail",
    detailTitle: "A modular team for the full digital marketing cycle",
    detailText:
      "Each skill is a focused role instruction. The orchestrator creates the plan, sends task briefs to the right specialist agents, collects their output reports, runs review, and turns everything into one clear marketing execution report.",
    agentMarketingOrchestrator:
      "The main user-facing agent. It performs intake, creates campaign execution plans, delegates tasks, manages approvals, synthesizes results, and reports progress.",
    agentMarketingDirector:
      "Turns a business brief into strategy: objectives, audience, positioning, channel priorities, KPIs, and a practical 30-day action plan.",
    agentBrand:
      "Defines brand positioning, value proposition, voice, messaging framework, and competitor differentiation.",
    agentMarketResearch:
      "Researches the market, trends, customers, competitors, and opportunity gaps.",
    agentCompetitive:
      "Monitors competitors, pricing, campaign patterns, competitor SEO, and industry benchmarks.",
    agentJourney:
      "Maps customer journeys, funnels, touchpoints, conversion paths, and optimization opportunities.",
    agentSeoAio:
      "Builds keyword maps, search intent groups, on-page SEO recommendations, local SEO checklists, and AI answer optimization briefs.",
    agentLandingPage:
      "Creates landing page structure, conversion copy, CTA options, FAQ, objection handling, trust elements, and mobile-friendly recommendations.",
    agentContent:
      "Defines content pillars, brand voice, content calendars, captions, article ideas, hooks, CTAs, and repurposing workflows.",
    agentSocial:
      "Designs engagement loops, comment response playbooks, sentiment handling, trend-fit checks, escalation rules, and automation boundaries.",
    agentPaidAds:
      "Plans Google Ads, Meta Ads, TikTok Ads, targeting, budget logic, ad copy, and testing.",
    agentInfluencer:
      "Designs influencer selection, affiliate strategy, partnerships, collaboration campaigns, and sponsorship plans.",
    agentCreative:
      "Generates divergent viral concepts, unconventional campaigns, meme ideas, attention hooks, and creative angles.",
    agentVideo:
      "Creates video concepts, scripts, storyboards, hook designs, and platform-specific video directions.",
    agentVideoPattern:
      "Analyzes video examples, viral patterns, hooks, structure, CTAs, and reusable creative templates.",
    agentEmail:
      "Builds welcome, nurture, promotional, retention, and reactivation email campaigns.",
    agentCrm:
      "Creates segmentation, loyalty, repeat purchase, churn prevention, and win-back strategies.",
    agentAutomation:
      "Designs workflow automation, lead nurturing, CRM, email, WhatsApp automation, and trigger logic.",
    agentAnalytics:
      "Reads marketing metrics, interprets channel performance, identifies bottlenecks, recommends optimizations, and proposes next experiments.",
    agentEthics:
      "Reviews claims, privacy risk, credential exposure, spam risk, synthetic media risk, bias, and approval readiness before publishing.",
    agentUpdate:
      "Checks the canonical repository for updates, compares local files, summarizes changes and risks, then asks for confirmation before updating.",
    faqEyebrow: "FAQ",
    faqTitle: "Frequently asked questions",
    faqWhatQuestion: "What is Digital Marketing Agent Skills?",
    faqWhatAnswer:
      "It is a modular AI agent skills pack for digital marketing. One orchestrator coordinates specialist agents for strategy, research, SEO/AIO, content, ads, video, conversion, retention, analytics, compliance, and updates.",
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
    heroBadge: "Tim marketing 21 agent + 14 capability",
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
      'Agent installer harus download repository, menghitung <span class="font-mono">skills/*/SKILL.md</span>, menampilkan agent yang ditemukan, lalu meminta konfirmasi sebelum install.',
    statAgents: "agent skills terdeteksi di project",
    statOrchestrator: "capability teknis mendukung eksekusi",
    statCredentials: "credential dibutuhkan di prompt atau file frontend",
    aioEyebrow: "Siap SEO dan AIO",
    aioTitle: "Jawaban jelas untuk manusia, mesin pencari, dan AI assistant",
    aioIntro:
      "Halaman ini menjelaskan agent pack dengan bahasa langsung dan terstruktur agar mudah dipahami manusia serta mudah diringkas oleh AI answer engine.",
    aioWhatTitle: "Apa ini?",
    aioWhatText:
      "Paket berbasis Markdown untuk menjalankan digital marketing end-to-end dengan 21 agent terkoordinasi dan 14 capability reusable.",
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
    coverLearningTitle: "Governance dan Update",
    coverLearningText: "Review compliance, cek privasi, cek update, approval gate, dan laporan final.",
    reviewEyebrow: "Sistem Tim Tereview",
    reviewTitle: "Satu tim marketing lengkap dan terkoordinasi",
    reviewText: "Semua 21 agent memiliki ownership jelas, handoff terstruktur, kebutuhan measurement, approval gate, dan aturan security.",
    capBrowser: "Navigasi, form, screenshot, dan QA web.",
    capResearch: "Riset pasar dan kompetitor terkini berbasis sumber.",
    capScraping: "Ekstraksi data publik terstruktur dengan batas izin.",
    capVideo: "Analisis hook, scene, pacing, CTA, dan pola video.",
    capGithub: "Dukungan repository, PR, issue, changelog, dan release.",
    capFiles: "Operasi file, PDF, DOCX, dan Markdown yang aman.",
    capOffice: "Analisis spreadsheet dan produksi presentasi.",
    capEmail: "Email dan scheduling campaign dengan approval gate.",
    capRag: "Retrieval berbasis bukti, citation, dan indexing knowledge yang disetujui.",
    capMemory: "Personalisasi berbasis approval dari fakta project, preferensi, keputusan, feedback, dan eksperimen.",
    capabilityRuleTitle: "Aturan Eksekusi",
    capabilityRuleText: "Utamakan script, API, connector, dan browser automation. Computer Use hanya untuk workflow yang wajib melalui UI.",
    updateRuleTitle: "Aturan Update",
    updateRuleText: "Pengecekan repository dapat berjalan mingguan dalam mode read-only. Install update tetap membutuhkan approval eksplisit.",
    useCasesEyebrow: "Use Case Praktis",
    useCasesTitle: "Yang dapat dikerjakan tim marketing ini untuk Anda",
    useCasesText: "Mulai dari satu tujuan bisnis. Orchestrator memilih specialist yang tepat, mengoordinasikan pekerjaan, dan memberikan rencana terpadu dengan langkah berikutnya yang terukur.",
    useLaunchTitle: "Meluncurkan Produk atau Brand",
    useLaunchText: "Bangun positioning, riset audience, launch messaging, prioritas channel, aset campaign, dan measurement dari satu brief.",
    useAcquisitionTitle: "Membangun Campaign Acquisition",
    useAcquisitionText: "Koordinasikan SEO/AIO, paid ads, partnership influencer, landing page, variasi creative, targeting, dan budget guardrail.",
    useContentTitle: "Menjalankan Content Engine",
    useContentText: "Buat content pillar, editorial calendar, caption social, konsep video, workflow repurposing, dan rencana community engagement.",
    useConversionTitle: "Meningkatkan Konversi Funnel",
    useConversionText: "Petakan customer journey, temukan friction funnel, perbaiki landing page dan CTA, lalu susun eksperimen CRO terukur.",
    useRetentionTitle: "Meningkatkan Retention dan Revenue",
    useRetentionText: "Rancang segmentasi customer, lifecycle email, loyalty program, churn prevention, win-back campaign, dan automation yang aman.",
    useOptimizeTitle: "Menganalisis dan Mengoptimalkan Performa",
    useOptimizeText: "Review KPI, attribution, kualitas tracking, hasil channel, pergerakan kompetitor, dan backlog eksperimen berikutnya.",
    detailEyebrow: "Detail Agent Skills",
    detailTitle: "Tim modular untuk siklus digital marketing lengkap",
    detailText:
      "Setiap skill adalah role instruction yang fokus. Orchestrator membuat rencana, mengirim task brief ke agent spesialis, mengumpulkan output report, menjalankan review, dan mengubah semuanya menjadi laporan eksekusi marketing yang jelas.",
    agentMarketingOrchestrator:
      "Agent utama yang diajak bicara user. Ia melakukan intake, membuat campaign execution plan, membagi tugas, mengelola approval, menyatukan hasil, dan melaporkan progres.",
    agentMarketingDirector:
      "Mengubah brief bisnis menjadi strategi: objektif, audience, positioning, prioritas channel, KPI, dan action plan 30 hari yang praktis.",
    agentBrand:
      "Menentukan brand positioning, value proposition, brand voice, messaging framework, dan diferensiasi kompetitor.",
    agentMarketResearch:
      "Meriset pasar, tren, customer, kompetitor, dan celah peluang.",
    agentCompetitive:
      "Memonitor kompetitor, pricing, pola campaign, SEO kompetitor, dan benchmark industri.",
    agentJourney:
      "Memetakan customer journey, funnel, touchpoint, conversion path, dan peluang optimasi.",
    agentSeoAio:
      "Membuat keyword map, pengelompokan search intent, rekomendasi on-page SEO, local SEO checklist, dan AI answer optimization brief.",
    agentLandingPage:
      "Membuat struktur landing page, conversion copy, opsi CTA, FAQ, objection handling, trust element, dan rekomendasi mobile-friendly.",
    agentContent:
      "Menentukan content pillar, brand voice, kalender konten, caption, ide artikel, hook, CTA, dan workflow repurposing.",
    agentSocial:
      "Mendesain engagement loop, comment response playbook, sentiment handling, trend-fit check, escalation rule, dan batas automation.",
    agentPaidAds:
      "Merencanakan Google Ads, Meta Ads, TikTok Ads, targeting, budget logic, ad copy, dan testing.",
    agentInfluencer:
      "Mendesain influencer selection, affiliate strategy, partnership, collaboration campaign, dan sponsorship plan.",
    agentCreative:
      "Menghasilkan konsep viral divergen, unconventional campaign, meme idea, attention hook, dan creative angle.",
    agentVideo:
      "Membuat video concept, script, storyboard, hook design, dan arahan video per platform.",
    agentVideoPattern:
      "Menganalisis contoh video, pola viral, hook, struktur, CTA, dan reusable creative template.",
    agentEmail:
      "Membuat welcome, nurture, promotional, retention, dan reactivation email campaign.",
    agentCrm:
      "Membuat segmentation, loyalty, repeat purchase, churn prevention, dan win-back strategy.",
    agentAutomation:
      "Mendesain workflow automation, lead nurturing, CRM, email, WhatsApp automation, dan trigger logic.",
    agentAnalytics:
      "Membaca metrik marketing, menafsirkan performa channel, menemukan bottleneck, merekomendasikan optimasi, dan eksperimen berikutnya.",
    agentEthics:
      "Mereview klaim, risiko privasi, credential exposure, spam risk, synthetic media risk, bias, dan kesiapan approval sebelum publish.",
    agentUpdate:
      "Mengecek update repository canonical, membandingkan file lokal, merangkum perubahan dan risiko, lalu meminta konfirmasi sebelum update.",
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

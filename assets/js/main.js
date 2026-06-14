const COPY_SUCCESS_MS = 1800;
const THEME_STORAGE_KEY = "digital-marketing-agent-theme";

const themeToggle = document.querySelector("[data-theme-toggle]");
const themeLabel = document.querySelector("[data-theme-label]");
const themeIconPath = document.querySelector("[data-theme-icon-path]");

function applyTheme(theme) {
  const isDark = theme === "dark";
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

applyTheme(getStoredTheme() || "light");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
    storeTheme(nextTheme);
    applyTheme(nextTheme);
  });
}

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

    const originalLabel = label.textContent;
    const text = target.textContent.trim();

    try {
      await copyText(text, target);
      label.textContent = "Copied";
      button.classList.add("copy-success");
    } catch {
      selectText(target);
      label.textContent = "Select text";
    }

    window.setTimeout(() => {
      label.textContent = originalLabel;
      button.classList.remove("copy-success");
    }, COPY_SUCCESS_MS);
  });
});

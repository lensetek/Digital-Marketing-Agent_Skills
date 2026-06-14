const COPY_SUCCESS_MS = 1800;

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

const existing = document.getElementById("invert-style");

if (existing) {
  existing.remove(); // Toggle off
} else {
  const style = document.createElement("style");
  style.id = "invert-style";
  style.textContent = `
    html {
      filter: invert(100%) hue-rotate(180deg);
    }
    img, video {
      filter: invert(100%) hue-rotate(180deg) !important;
    }
  `;
  document.head.appendChild(style); // Toggle on
}

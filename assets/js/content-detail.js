(function () {
  const root = document.querySelector("[data-content-detail]");
  if (!root) return;

  const type = root.dataset.contentDetail;
  const items = type === "news" ? window.NEWS_POSTS : window.MEDIA_ITEMS;
  const slug = new URLSearchParams(window.location.search).get("slug");
  const item = (items || []).find((entry) => entry.slug === slug) || items?.[0];

  if (!item) {
    root.innerHTML = "<h1>No post found.</h1>";
    return;
  }

  document.title = `${item.title} — Brandon Chen`;
  root.innerHTML = `
    <article class="content-article">
      <div class="eyebrow red">${item.category} · ${item.date}</div>
      <h1>${item.title}</h1>
      <p class="content-lead">${item.summary}</p>
      ${item.image ? `<img class="content-hero-image" src="${item.image}" alt="" />` : ""}
      ${item.embed ? `<div class="media-embed">${item.embed}</div>` : ""}
      <div class="prose">
        ${(item.body || []).map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
      <div class="content-links">
        ${(item.links || [])
          .map(
            (link) =>
              `<a class="btn" href="${link.url}" target="_blank">${link.label} →</a>`,
          )
          .join("")}
      </div>
    </article>`;
})();

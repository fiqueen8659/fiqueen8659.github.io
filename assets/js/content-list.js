(function () {
  const root = document.querySelector("[data-content-list]");
  if (!root) return;

  const type = root.dataset.contentList;
  const items = type === "news" ? window.NEWS_POSTS : window.MEDIA_ITEMS;
  const folder = type === "news" ? "news/post.html" : "media/item.html";

  root.innerHTML = (items || [])
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))
    .map(
      (item) => `
        <article class="card content-card">
          ${
            item.image
              ? `<a class="content-image" href="${folder}?slug=${encodeURIComponent(item.slug)}">
                   <img src="${item.image}" alt="" />
                 </a>`
              : `<a class="content-image content-image-placeholder" href="${folder}?slug=${encodeURIComponent(item.slug)}"></a>`
          }
          <div class="content-card-body">
            <span class="num">${item.date} · ${item.category}</span>
            <h3>
              <a href="${folder}?slug=${encodeURIComponent(item.slug)}">
                ${item.title} →
              </a>
            </h3>
            <p>${item.summary}</p>
          </div>
        </article>`,
    )
    .join("");
})();

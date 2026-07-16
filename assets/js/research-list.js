(function () {
  const grid = document.querySelector("[data-research-grid]");
  if (!grid || !window.RESEARCH_TOPICS) return;

  grid.innerHTML = window.RESEARCH_TOPICS.map(
    (topic, index) => `
      <article class="card research-card">
        <span class="num">${String(index + 1).padStart(2, "0")} · ${topic.label}</span>
        <h3>
          <a href="research/topic.html?topic=${encodeURIComponent(topic.slug)}">
            ${topic.title} →
          </a>
        </h3>
        <p>${topic.summary}</p>
        <div class="kv research-card-tags">
          ${topic.tags
            .slice(0, 3)
            .map((tag) => `<span>${tag}</span>`)
            .join("")}
        </div>
      </article>
    `,
  ).join("");
})();

(function () {
  const root = document.querySelector("[data-team]");
  if (!root || !window.TEAM) return;

  const card = (person) => `
    <article class="card person-card">
      <div class="person-photo ${person.photo ? "has-photo" : ""}">
        ${
          person.photo
            ? `<img src="${person.photo}" alt="${person.name}" />`
            : `<span>${person.name
                .split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 2)}</span>`
        }
      </div>
      <div class="person-card-body">
        <span class="num">${person.position}</span>
        <h3>${person.name}</h3>
        <p class="person-org">${person.organisation}</p>
        <p>${person.bio}</p>
        <div class="kv">${person.interests
          .map((interest) => `<span>${interest}</span>`)
          .join("")}</div>
        <div class="person-links">
          ${person.website ? `<a href="${person.website}" target="_blank">Website →</a>` : ""}
          ${person.email ? `<a href="mailto:${person.email}">Email →</a>` : ""}
        </div>
      </div>
    </article>`;

  const supervisors = TEAM.filter((person) => person.role === "supervisor");
  const members = TEAM.filter((person) => person.role !== "supervisor");

  root.innerHTML = `
    <section class="team-group">
      <div class="section-heading">
        <div class="eyebrow red">Supervisors</div>
        <h2>Research guidance and mentorship.</h2>
      </div>
      <div class="grid">${supervisors.map(card).join("")}</div>
    </section>
    <section class="team-group">
      <div class="section-heading">
        <div class="eyebrow red">Team</div>
        <h2>Researchers and collaborators.</h2>
      </div>
      <div class="grid">${members.map(card).join("")}</div>
    </section>`;
})();

/* EDIT THIS FILE to update every research and project subpage. English only. */
window.DETAILS = {
  "research/urban-gnss": {
    title: "Urban GNSS",
    eyebrow: "RESEARCH PILLAR 01",
    subtitle:
      "Understanding and mitigating satellite-navigation degradation in dense cities.",
    tags: ["GNSS", "multipath", "NLOS", "urban canyon"],
    overview:
      "Dense buildings block and reflect satellite signals. This work studies how those effects appear in measurements and how positioning methods can become more environment-aware.",
    challenge:
      "Conventional receivers often assume direct line-of-sight signals. Urban canyons violate that assumption, producing biased pseudoranges and unstable solutions.",
    methods: [
      "RINEX / NMEA analysis",
      "Satellite visibility",
      "Multipath & NLOS",
      "Map-aware reasoning",
    ],
    related: ["projects/urban-gnss-research", "projects/field-data-analysis"],
  },
  "research/resilient-navigation": {
    title: "Resilient Navigation",
    eyebrow: "RESEARCH PILLAR 02",
    subtitle:
      "Maintaining useful positioning when satellite measurements become unreliable.",
    tags: ["resilience", "integrity", "sensor fusion", "fault detection"],
    overview:
      "Resilient navigation combines measurement quality assessment, complementary sensors, and integrity thinking so a system knows not only where it is, but when to distrust its answer.",
    challenge:
      "A precise-looking position can still be wrong. Navigation for transport and robotics therefore requires confidence, fault awareness, and graceful degradation.",
    methods: [
      "Integrity monitoring",
      "Fault detection",
      "GNSS/INS concepts",
      "Quality control",
    ],
    related: ["projects/urban-gnss-research", "research/robotics"],
  },
  "research/intelligent-transport": {
    title: "Intelligent Transport",
    eyebrow: "RESEARCH PILLAR 03",
    subtitle:
      "Connecting dependable positioning with safer and smarter urban mobility.",
    tags: ["transport", "mobility", "vehicles", "pedestrians"],
    overview:
      "Urban transport depends on location: vehicles, pedestrians, infrastructure and services must share a useful understanding of where movement occurs.",
    challenge:
      "The places with the highest mobility demand are often the places where GNSS performs worst. Research must connect positioning performance to transport outcomes.",
    methods: [
      "Urban mobility",
      "Vehicle positioning",
      "Pedestrian navigation",
      "Location-aware systems",
    ],
    related: ["research/urban-gnss", "projects/field-data-analysis"],
  },
  "research/robotics": {
    title: "Robotics & Embodied Systems",
    eyebrow: "RESEARCH PILLAR 04",
    subtitle:
      "Turning navigation and perception into reliable physical action.",
    tags: ["robotics", "hardware", "mechanics", "perception"],
    overview:
      "Robotics provides a practical test of navigation: sensing, computation, mechanisms and control must work together in a physical environment.",
    challenge:
      "A navigation algorithm is only one part of a deployed robot. Mechanical constraints, sensor placement, power, repeatability and safety shape the full system.",
    methods: [
      "Mechanical design",
      "Sensor placement",
      "Prototype testing",
      "System integration",
    ],
    related: ["projects/stairio", "research/resilient-navigation"],
  },
  "projects/stairio": {
    title: "Stairio",
    eyebrow: "ROBOTICS · ACTIVE",
    subtitle:
      "An autonomous staircase inspection platform combining locomotion, perception and practical deployment. https://stairio.io/",
    tags: ["robotics", "hardware", "inspection", "GNSS-denied"],
    overview:
      "Stairio is a translational robotics project for routine staircase inspection. Brandon contributes to hardware and mechanical components during spring and summer 2026.",
    challenge:
      "Public-building staircases require repeated safety inspection, yet they are constrained, vertical, and GNSS-denied environments that challenge conventional mobile robots.",
    methods: [
      "Handrail locomotion",
      "Mechanical prototyping",
      "Onboard perception",
      "Inspection workflow",
    ],
    meta: { status: "Active", period: "2026", role: "Hardware / mechanical" },
    related: ["research/robotics", "research/resilient-navigation"],
  },
  "projects/urban-gnss-research": {
    title: "Urban GNSS Research",
    eyebrow: "POSITIONING · ACTIVE",
    subtitle:
      "Independent investigation of GNSS behaviour in dense urban transport environments.",
    tags: ["urban GNSS", "RINEX", "NMEA", "transport"],
    overview:
      "This project develops a reproducible workflow for inspecting matched GNSS files, receiver outputs, satellite availability and urban trajectories.",
    challenge:
      "Urban datasets often contain several file formats and reference products. Correct temporal and receiver matching is essential before meaningful positioning analysis.",
    methods: [
      "File matching",
      "Observation quality",
      "Trajectory comparison",
      "Reproducible analysis",
    ],
    meta: { status: "Active", period: "2026", role: "Independent researcher" },
    related: ["research/urban-gnss", "projects/field-data-analysis"],
  },
  "projects/field-data-analysis": {
    title: "Field Data & Analysis",
    eyebrow: "DATA · DEVELOPING",
    subtitle:
      "A practical workflow for GNSS receiver files and urban navigation experiments.",
    tags: ["data", "ephemeris", "observations", "validation"],
    overview:
      "The work focuses on understanding what each GNSS file contains, whether files correspond in time and receiver, and how to organize evidence for later positioning experiments.",
    challenge:
      "Small mismatches in date, receiver, constellation or sampling interval can invalidate an otherwise careful experiment.",
    methods: [
      "Metadata inspection",
      "Epoch matching",
      "Format validation",
      "Experiment notes",
    ],
    meta: { status: "Developing", period: "2026", role: "Analysis" },
    related: ["projects/urban-gnss-research", "research/intelligent-transport"],
  },
};

/* Research topics are merged automatically from research-data.js. */
(window.RESEARCH_TOPICS || []).forEach((topic, index) => {
  window.DETAILS[`research/${topic.slug}`] = {
    ...topic,
    eyebrow: `RESEARCH PILLAR ${String(index + 1).padStart(2, "0")}`,
    subtitle: topic.summary,
  };
});

(function () {
  const d = DETAILS[document.body.dataset.detailKey];
  if (!d) return;
  const name = (k) => DETAILS[k]?.title || k;
  const link = (k) =>
    k.startsWith("research/")
      ? `../research/topic.html?topic=${encodeURIComponent(k.slice(9))}`
      : `../${k}.html`;
  document.title = d.title + " — Brandon Chen";
  document.querySelector("[data-detail-hero]").innerHTML =
    `<div class="eyebrow">${d.eyebrow}</div><h1>${d.title}</h1><p>${d.subtitle}</p>`;
  document.querySelector("[data-detail]").innerHTML =
    `<div class="detail-grid"><nav class="section-nav" data-section-nav><a href="#overview">Overview</a><a href="#challenge">Challenge</a><a href="#methods">Methods</a><a href="#related">Related</a></nav><article class="detail-content"><div class="kv">${d.tags.map((x) => `<span>${x}</span>`).join("")}</div>${d.meta ? `<div class="meta-panel"><div><b>STATUS</b>${d.meta.status}</div><div><b>PERIOD</b>${d.meta.period}</div><div><b>ROLE</b>${d.meta.role}</div></div>` : ""}<div class="tech-figure"></div><section class="detail-section" id="overview"><h2>Overview</h2><p>${d.overview}</p></section><section class="detail-section" id="challenge"><h2>The challenge</h2><p>${d.challenge}</p><div class="accordion"><details><summary>Why does it matter?</summary><p>${d.subtitle}</p></details><details><summary>Scope of work</summary><p>${d.methods.join(" · ")}</p></details></div></section><section class="detail-section" id="methods"><h2>Methods & workflow</h2><div class="pnt-stack" data-pnt-viz>${d.methods.map((x, i) => `<div class="pnt-node${i === 0 ? " is-active" : ""}"><b>0${i + 1}</b><strong>${x}</strong></div>`).join("")}</div><div data-tabs><div class="tab-buttons"><button class="tab-btn is-active" data-tab="measure">Measure</button><button class="tab-btn" data-tab="analyse">Analyse</button><button class="tab-btn" data-tab="validate">Validate</button></div><div class="tab-panel is-active" data-panel="measure">Collect and inspect raw data, sensor outputs, and experimental context.</div><div class="tab-panel" data-panel="analyse">Build reproducible analysis that identifies environmental effects and system limits.</div><div class="tab-panel" data-panel="validate">Test conclusions against references, repeated trials, and clear documentation.</div></div></section><section class="detail-section" id="related"><h2>Related research & projects</h2><div class="related-grid">${d.related.map((k) => `<a class="related-card" href="${link(k)}"><b>${name(k)}</b><br><span>View details →</span></a>`).join("")}</div></section></article></div>`;
})();

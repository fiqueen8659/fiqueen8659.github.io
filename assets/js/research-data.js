/*
 * ADD OR EDIT RESEARCH CARDS HERE.
 *
 * To add a topic:
 * 1. Copy one complete { ... } block.
 * 2. Give it a unique slug using lowercase words and hyphens.
 * 3. Edit its text.
 *
 * The Research card and its detail page are created automatically.
 */
window.RESEARCH_TOPICS = [
  {
    slug: "urban-gnss",
    title: "Urban GNSS",
    label: "URBAN POSITIONING",
    summary:
      "Understanding signal obstruction, multipath, and NLOS reception in dense cities.",
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
    related: ["research/3dma-gnss", "projects/urban-gnss-research"],
  },
  {
    slug: "3dma-gnss",
    title: "3DMA GNSS",
    label: "MAP-AIDED POSITIONING",
    summary:
      "Using three-dimensional building information to improve positioning in urban canyons.",
    tags: ["3DMA GNSS", "3D maps", "NLOS", "urban canyon"],
    overview:
      "Three-dimensional mapping-aided GNSS uses knowledge of surrounding buildings to reason about satellite visibility, reflected signals, and likely receiver locations.",
    challenge:
      "Urban GNSS errors are strongly shaped by local geometry. A useful method must connect satellite measurements with an accurate and computationally practical environmental model.",
    methods: [
      "Building models",
      "Visibility prediction",
      "Shadow matching",
      "Likelihood scoring",
    ],
    related: ["research/urban-gnss", "research/ai-ml-gnss"],
  },
  {
    slug: "ai-ml-gnss",
    title: "AI/ML GNSS",
    label: "MULTI-SENSOR ESTIMATION",
    summary:
      "Utilising the innovations of artificial intelligence (AI) and machine learning (ML) for accurate and precise positioning",
    tags: ["AI", "ML", "state estimation", "optimization"],
    overview:
      "Through the use of existing methods such as vision-language-model (VLM) and machine learning for multipath detection (Hsu, 2017)",
    challenge:
      "Navigation systems combine measurements with different rates, uncertainties, and failure modes. This model must remain computationally effective as well as effective for precise positioning in urban canyons",
    methods: [
      "State variables",
      "Measurement factors",
      "Robust loss functions",
      "Batch optimization",
    ],
    related: ["research/resilient-navigation", "research/3dma-gnss"],
  },
  {
    slug: "resilient-navigation",
    title: "Resilient Navigation",
    label: "INTEGRITY & RELIABILITY",
    summary:
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
    related: ["research/ai-ml-gnss", "research/robotics"],
  },
  {
    slug: "intelligent-transport",
    title: "Intelligent Transport",
    label: "URBAN MOBILITY",
    summary:
      "Connecting dependable positioning with safer and smarter urban mobility.",
    tags: ["transport", "mobility", "vehicles", "pedestrians"],
    overview:
      "Urban transport depends on location: vehicles, pedestrians, infrastructure, and services must share a useful understanding of where movement occurs.",
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
  {
    slug: "robotics",
    title: "Robotics & Embodied Systems",
    label: "ROBOTICS & HARDWARE",
    summary: "Turning navigation and perception into reliable physical action.",
    tags: ["robotics", "hardware", "mechanics", "perception"],
    overview:
      "Robotics provides a practical test of navigation: sensing, computation, mechanisms, and control must work together in a physical environment.",
    challenge:
      "A navigation algorithm is only one part of a deployed robot. Mechanical constraints, sensor placement, power, repeatability, and safety shape the full system.",
    methods: [
      "Mechanical design",
      "Sensor placement",
      "Prototype testing",
      "System integration",
    ],
    related: ["projects/stairio", "research/resilient-navigation"],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Ray Tracer",
    description:
      "A software ray tracer built from scratch. Renders reflections, refractions, and soft shadows in real time.",
    tech: ["Rust", "WASM"],
    link: "https://github.com/kavinjey",
  },
  {
    title: "Markdown Note Graph",
    description:
      "Local-first note taking app that visualizes connections between notes as a force-directed graph.",
    tech: ["TypeScript", "D3.js", "SQLite"],
    link: "https://github.com/kavinjey",
  },
  {
    title: "CLI Task Runner",
    description:
      "A minimal task runner that reads YAML configs and executes dependency-ordered build steps in parallel.",
    tech: ["Go"],
    link: "https://github.com/kavinjey",
  },
  {
    title: "Chess Engine",
    description:
      "Bitboard-based chess engine with alpha-beta pruning and a terminal UI. Plays at ~1800 ELO.",
    tech: ["Python", "Bitboards"],
  },
];

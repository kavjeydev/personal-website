export type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  badge?: string;
};

export const projects: Project[] = [
  {
    title: "Absorb",
    description:
      "Chrome extension that turns lectures into lasting knowledge. Integrates with Canvas, YouTube, Zoom, and Coursera to auto-transcribe content and generate flashcard sets with spaced repetition.",
    tech: ["Chrome Extension", "TypeScript", "FastAPI", "Deepgram", "PostgreSQL"],
    link: "https://github.com/kavjeydev/absorb",
  },
  {
    title: "Trainly",
    description:
      "RAG infrastructure for reliable AI apps. Built-in versioning, response scoring, and regression tracking so developers can ship AI features with confidence.",
    tech: ["Neo4j Vector Search", "FastAPI", "OpenAI Embeddings", "Convex", "Stripe Connect"],
    link: "https://trainlyai.com",
  },
  {
    title: "Skill Notes",
    description:
      "Skill-based learning platform with video playlists, progress tracking, achievements, and usage-based billing via Stripe. Built with Trainly for AI-powered Q&A.",
    tech: ["Convex Real-time DB", "Stripe Billing", "YouTube Data API", "Clerk Auth"],
    link: "https://github.com/kavjeydev/skill-notes",
    badge: "Built with Trainly",
  },
  {
    title: "Notepod",
    description:
      "Notion-style editor with AI-powered code understanding. Clones repos, builds vector embeddings from ASTs, and lets you Q&A over entire codebases.",
    tech: ["FAISS Vector Search", "AST Parsing", "OpenAI Embeddings", "Convex"],
    link: "https://github.com/kavjeydev/notepod",
  },
  {
    title: "Shuffle",
    description:
      "Video-sharing platform with AI-automated content creation, upload transcoding, cloud storage, and a Dockerized Python video processing pipeline.",
    tech: ["FFmpeg", "Docker", "OpenAI", "Cloud Storage", "Firebase Auth"],
    link: "https://github.com/kavjeydev/Shuffle-Social-Media",
  },
  {
    title: "Resume Analyzer",
    description:
      "Upload a PDF resume, get AI-powered analysis. Processes documents, generates thumbnails, and stores results in Google Cloud Storage.",
    tech: ["OpenAI GPT-4", "PDF Parsing", "Cloud Storage", "Flask"],
    link: "https://github.com/kavjeydev/Resume-Analyzer",
  },
];

export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "Causal Discovery Framework",
    description:
      "A framework for discovering causal relationships in high-dimensional time series data using state-of-the-art machine learning techniques.",
    technologies: ["Python", "PyTorch", "React"],
    projectUrl: "https://project-demo.com",
    imageUrl:
      "https://drive.google.com/file/d/1wW_XAMqGEqGF8TE-q_vAk2lfuop_ICZs/preview",
    codeUrl: "https://github.com/username/project",
  },
];

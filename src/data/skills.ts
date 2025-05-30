
import { Code, Database, Layout, Terminal, Cpu, Palette, BrainCircuit } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      icon: Terminal,
      skills: ["Python", "R", "SQL", "C++"],
    },
    {
      name: "Machine Learning & AI",
      icon: BrainCircuit,
      skills: ["Transformers", "LLMs", "LoRA", "NLP", "Computer Vision"],
    },
    {
      name: "Frameworks & Libraries",
      icon: Code,
      skills: ["Hugging Face", "PyTorch", "scikit-learn", "FastAPI"],
    },
    {
      name: "Data & Cloud Platforms",
      icon: Database,
      skills: ["AWS (EC2, DynamoDB)", "Apache Airflow", "MLflow", "Docker"],
    },
    {
      name: "Tools & Technologies",
      icon: Cpu,
      skills: ["Git", "Postman", "VS Code", "Linux", "Agile"],
    },
    {
      name: "Frontend & Web Dev",
      icon: Layout,
      skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
    },
  ];

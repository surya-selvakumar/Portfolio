// /data/achievements.ts

import { Trophy, Star, Award, Mic, Users } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Achievement = {
  id: number;
  title: string;
  type: "competition" | "academic" | "certification" | "workshop" | "leadership";
  year: string;
  description: string;
  icon: LucideIcon;
  image: string; // <-- NEW
};

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Top 4 Finalist – Venture Further Awards UK",
    type: "competition",
    year: "2025",
    description:
      "Recognized among the top 4 projects in the UK for SeniorVision, a voice-assisted AI solution for dementia care.",
    icon: Trophy,
    image: "/imgs/a1.png",
  },
  {
    id: 2,
    title: "Bicentenary Global Futures Award",
    type: "academic",
    year: "2024",
    description:
      "Awarded the prestigious £8000 scholarship from the University of Manchester for academic excellence and global impact.",
    icon: Star,
    image: "/imgs/a6.jpg",
  },
  {
    id: 3,
    title: "Technical Speaker – AI & Cloud Workshops",
    type: "workshop",
    year: "2023",
    description:
      "Delivered lectures on AI, Machine Learning, and Cloud Computing to diverse student groups.",
    icon: Mic,
    image: "/imgs/a3.png",
  },
  {
    id: 4,
    title: "Technical Head – Google DSC",
    type: "leadership",
    year: "2023–2024",
    description:
      "Led the Google Developer Student Club, organizing technical sessions, hackathons, and developer meetups.",
    icon: Users,
    image: "/imgs/a4.png",
  },
  {
    id: 5,
    title: "Department Rank Holder – 3 Years",
    type: "academic",
    year: "2021–2024",
    description:
      "Maintained consistent top ranks throughout bachelor's degree at Anna University.",
    icon: Star,
    image: "/imgs/a5.png",
  }
];

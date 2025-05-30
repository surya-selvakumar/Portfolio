
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "SeniorVision – Dementia Support App",
    description:
      "Voice-enabled web app for dementia patients. Fine-tuned LLaMA for personalized recall, used DistilBERT for privacy filtering, and deployed on AWS with secure login.",
    tags: ["LLM", "AWS", "Voice AI", "DynamoDB", "Face Recognition"],
    image: "/imgs/p1.png", // Replace with actual image path
    links: {
      live: "https://seniorvisionproject.com/",
    },
  },
  {
    id: 2,
    title: "Content Moderation using RoBERTa & Gemma",
    description:
      "Built a sentiment classification system with RoBERTa, integrated Gemma3 LLM for nuanced toxicity detection on a social media platform.",
    tags: ["RoBERTa", "LLM", "NLP", "Content Moderation", "AWS"],
    image: "/imgs/p2.png",
    links: {
      github: "https://github.com/surya-selvakumar",
    },
  },
  {
    id: 3,
    title: "Financial Relation Extraction (BERT + CNN)",
    description:
      "Designed TablERTCNN to extract financial relations. Improved relation F1-score by 3.04% using hybrid BERT-CNN with enhanced span detection.",
    tags: ["BERT", "CNN", "Finance", "Deep Learning"],
    image: "/imgs/p3.png",
    links: {
      github: "https://github.com/surya-selvakumar/RelationExtraction-CNN",
    },
  },
  {
    id: 4,
    title: "NLP-Powered Offensive Content Detection",
    description:
      "Used DistilBERT to detect offensive content with 91% accuracy. Deployed with FastAPI and Docker on AWS EC2 for scalable access.",
    tags: ["DistilBERT", "FastAPI", "Docker", "AWS"],
    image: "/imgs/p4.png",
    links: {
      github: "https://github.com/surya-selvakumar",
    },
  },
  {
    id: 5,
    title: "Privacy-Aware Recommendation System",
    description:
      "Built with Sentence-BERT to generate privacy-respecting recommendations using cosine similarity and rule-based NER filters.",
    tags: ["SBERT", "Privacy", "Recommendation", "NER"],
    image: "/imgs/p5.png",
    links: {
      github: "https://github.com/surya-selvakumar",
    },
  }
  // {
  //   id: 6,
  //   title: "Retail Forecasting Pipeline (LightGBM + Prophet)",
  //   description:
  //     "Developed robust time-series models with lag/holiday features. Automated retraining with Apache Airflow and tracked with MLflow.",
  //   tags: ["LightGBM", "Prophet", "Airflow", "MLflow", "Time Series"],
  //   image: "/projects/forecast.jpg",
  //   links: {
  //     github: "https://github.com/surya-selvakumar",
  //   },
  // },
];

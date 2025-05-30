import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import {
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  Download,
  Icon,
} from "lucide-react";
import LazyImage from "./LazyImage";
import { Links } from "@/data/links";

const AboutSection = () => {
  const resumeUrl = Links.resume;
  const { toast } = useToast();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handledownload = () => {
    toast({
      title: "Downloading Resume",
      description: "Your download will start shortly.",
    });
  };

  return (
    <section id="about" className="py-14 relative bg-background">
      <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-primary/5 to-background -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="section-heading text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          {/* Content Column */}
          <motion.div
            className="lg:col-span-8 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> Bio
              </h3>
              <p className="text-muted-foreground">
              Data science graduate passionate about AI, NLP, and large language models. 
              I've built real-world ML systems, published IEEE papers, and led technical teams. With hands-on experience in cloud deployment and model fine-tuning, 
              I enjoy turning complex data into impactful, innovative solutions that make a real difference.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* EDUCATION */}
              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card className="h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" /> Education
                    </h3>

                    {/* MSc */}
                    <div className="flex items-center justify-between space-y-2 mb-4">
                      <div>
                        <p className="font-medium">MSc in Data Science</p>
                        <p className="text-sm text-muted-foreground">
                          The University of Manchester, UK
                        </p>
                        <p className="text-sm text-muted-foreground">2024 - Present</p>
                      </div>
                      <img
                        src="/imgs/l6.png"
                        alt="Manchester Logo"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </div>

                    {/* BTech */}
                    <div className="flex items-center justify-between space-y-2">
                      <div>
                        <p className="font-medium">BTech in Information Technology</p>
                        <p className="text-sm text-muted-foreground">
                          Anna University, India
                        </p>
                        <p className="text-sm text-muted-foreground">2020 - 2024</p>
                      </div>
                      <img
                        src="/imgs/l2.png"
                        alt="Anna University Logo"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* EXPERIENCE */}
              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card className="h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" /> Experience
                    </h3>

                    <div className="space-y-4">
                      {/* RA */}
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Research Assistant</p>
                          <p className="text-sm text-muted-foreground">
                            The University of Manchester
                          </p>
                          <p className="text-sm text-muted-foreground">Apr 2025 - Present</p>
                        </div>
                        <img
                          src="/imgs/l6.png"
                          alt="Manchester"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      </div>

                      {/* Shimmy */}
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Project Intern</p>
                          <p className="text-sm text-muted-foreground">Shimmy PLC, Manchester</p>
                          <p className="text-sm text-muted-foreground">Feb 2025 - Apr 2025</p>
                        </div>
                        <img
                          src="/imgs/l3.png"
                          alt="Shimmy Logo"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      </div>

                      {/* NovaHealz */}
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Data & Technical Officer</p>
                          <p className="text-sm text-muted-foreground">NovaHealz, Glasgow</p>
                          <p className="text-sm text-muted-foreground">Mar 2025 - Present</p>
                        </div>
                        <img
                          src="/imgs/l4.png"
                          alt="NovaHealz"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      </div>

                      {/* Velozity */}
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">ML Engineer</p>
                          <p className="text-sm text-muted-foreground">Velozity Global Solutions, Banglore</p>
                          <p className="text-sm text-muted-foreground">Apr 2023 - Aug 2024</p>
                        </div>
                        <img
                          src="/imgs/l5.png"
                          alt="Velozity"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

          </motion.div>

          {/* Profile Column */}
          <motion.div
            className="lg:col-span-4 flex flex-col items-center lg:items-start gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Avatar className="w-40 h-40 border-4 border-primary/20">
                <AvatarImage
                  src="/imgs/me.png"
                  alt="Aathif Zahir"
                  loading="lazy"
                />
                <AvatarFallback>SSK</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                Hi
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left"
            >
              <h3 className="text-2xl font-bold">Surya Selvakumar</h3>
              <p className="text-muted-foreground">
                Data Science Student
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              <Badge variant="outline" className="bg-primary/10">
                AWS
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                LLMs
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                Docker
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                NLP
              </Badge>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="gap-2" asChild onClick={handledownload}>
                <a href={resumeUrl} download="Aathif_Zahir_CV.pdf">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

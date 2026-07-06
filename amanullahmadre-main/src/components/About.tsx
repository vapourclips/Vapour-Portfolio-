import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target, Lightbulb } from "lucide-react";
import { LiquidGlass } from "@/components/liquid-glass/LiquidGlass";
import { AmbientBackground } from "@/components/liquid-glass/AmbientBackground";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "MSc Information Technology",
      institution: "University of Mumbai",
      year: "2023 – 2025",
      grade: "CGPA 8.20 (A+)",
    },
    {
      degree: "BSc Information Technology",
      institution: "University of Mumbai",
      year: "2021 – 2023",
      grade: "CGPI 8.50",
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30 relative overflow-hidden">
      <AmbientBackground />
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about turning data into meaningful insights
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <LiquidGlass radius={16} strength={20} className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    My Focus
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm an MSc Information Technology graduate with a deep passion for 
                    data analytics and machine learning. My journey in tech has been 
                    driven by a curiosity to understand patterns in data and build 
                    solutions that solve real-world problems.
                  </p>
                </div>
              </div>
            </LiquidGlass>

            <LiquidGlass radius={16} strength={20} className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    What I Do
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I specialize in building data-driven applications using Python, 
                    SQL, and Power BI. From developing machine learning systems to 
                    creating interactive dashboards, I transform raw data into 
                    actionable insights that help businesses make informed decisions.
                  </p>
                </div>
              </div>
            </LiquidGlass>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <LiquidGlass radius={16} strength={20} className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-6 border-l-2 border-primary/30 last:border-l-0"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                    <div className="pb-6">
                      <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-muted-foreground text-sm mt-1">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                          {edu.year}
                        </span>
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </LiquidGlass>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { LiquidGlass } from "@/components/liquid-glass/LiquidGlass";
import { AmbientBackground } from "@/components/liquid-glass/AmbientBackground";

const skillCategories = [
  {
    title: "Backend Development",
    skills: ["Python", "Django", "PostgreSQL", "REST APIs", "Git"],
  },
  {
    title: "Programming & Analysis",
    skills: ["Python", "SQL", "Pandas", "NumPy"],
  },
  {
    title: "Machine Learning",
    skills: ["Scikit-learn", "EDA", "Feature Engineering", "Model Evaluation"],
  },
  {
    title: "Data Visualization",
    skills: ["Power BI", "Excel", "Dashboard Development", "Data Visualization"],
  },
  {
    title: "Web & Frameworks",
    skills: ["Django", "Flask", "Streamlit", "MySQL", "Git"],
  },
  {
    title: "Video Editing",
    skills: ["Adobe Premiere Pro", "After Effects", "Photoshop", "Content Creation"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Jupyter Notebook", "AWS (Basics)", "GitHub", "VS Code"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <AmbientBackground />
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build data-driven solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <LiquidGlass radius={16} strength={18} className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </LiquidGlass>
            </motion.div>
          ))}
        </motion.div>

        {/* All Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <LiquidGlass radius={20} strength={20} className="p-8">
            <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
              Complete Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Python",
                "Django",
                "PostgreSQL",
                "REST APIs",
                "SQL",
                "Pandas",
                "NumPy",
                "Scikit-learn",
                "Machine Learning",
                "EDA",
                "Feature Engineering",
                "Model Evaluation",
                "Power BI",
                "Excel",
                "Dashboard Development",
                "Data Visualization",
                "Flask",
                "Streamlit",
                "MySQL",
                "Git",
                "Jupyter Notebook",
                "AWS",
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.03 }}
                  className="skill-tag"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </LiquidGlass>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  Github,
  Shield,
  Gamepad2,
  TrendingUp,
  ClipboardCheck,
  FileText,
  Target,
} from "lucide-react";
import { LiquidGlass } from "@/components/liquid-glass/LiquidGlass";
import { AmbientBackground } from "@/components/liquid-glass/AmbientBackground";

const projects = [
  {
    icon: ClipboardCheck,
    title: "Approval Matrix",
    description:
      "Designed and built a highly scalable, multi-level approval workflow system in Django for routing requests through configurable approval chains across departments, with role-based access and status tracking.",
    techStack: ["Python", "Django", "PostgreSQL", "REST APIs", "Scalability"],
    github: "#",
    demo: "#",
    color: "from-indigo-500/10 to-blue-500/10",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-500",
  },
  {
    icon: FileText,
    title: "CSV to PDF Converter",
    description:
      "Built an automated pipeline that converts CSV data exports into formatted, print-ready PDF reports, streamlining document generation for internal business workflows.",
    techStack: ["Python", "Django", "PDF Generation", "Automation"],
    github: "#",
    demo: "#",
    color: "from-purple-500/10 to-pink-500/10",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500",
  },
  {
    icon: Target,
    title: "OKR Portal",
    description:
      "Contributed to an Objectives & Key Results (OKR) portal for tracking organizational and team goals, enabling structured goal-setting, progress tracking, and alignment across teams.",
    techStack: ["Python", "Django", "PostgreSQL", "REST APIs"],
    github: "#",
    demo: "#",
    color: "from-amber-500/10 to-yellow-500/10",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-500",
  },
  {
    icon: Shield,
    title: "Phishing URL Detection System",
    description:
      "Built a machine learning model to detect phishing URLs with high accuracy. Engineered 30+ security-related features from URL patterns and deployed the model using Flask for real-time predictions.",
    techStack: ["Python", "Scikit-learn", "Flask", "Feature Engineering", "ML"],
    github: "#",
    demo: "#",
    color: "from-red-500/10 to-orange-500/10",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-500",
  },
  {
    icon: Gamepad2,
    title: "Video Game Sales Analysis Dashboard",
    description:
      "Processed and analyzed 16,000+ video game records to uncover sales trends across platforms, genres, and regions. Built interactive dashboards with comprehensive EDA and visualizations.",
    techStack: ["Python", "Pandas", "Streamlit", "EDA", "Data Visualization"],
    github: "#",
    demo: "#",
    color: "from-blue-500/10 to-cyan-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: TrendingUp,
    title: "Sales Performance Dashboard & Forecasting",
    description:
      "Developed an end-to-end analytics pipeline combining SQL and Python for data processing. Created KPI reports and Power BI dashboards with basic sales forecasting capabilities.",
    techStack: ["SQL", "Python", "Power BI", "Analytics", "Forecasting"],
    github: "#",
    demo: "#",
    color: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-500",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-secondary/30 relative overflow-hidden">
      <AmbientBackground />
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of backend development, data analytics, and machine learning projects
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group"
            >
              <LiquidGlass radius={20} strength={20} className="relative overflow-hidden">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className={`p-4 rounded-xl ${project.iconBg} shrink-0`}>
                      <project.icon className={`w-8 h-8 ${project.iconColor}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </a>
                        <a
                          href={project.demo}
                          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </LiquidGlass>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

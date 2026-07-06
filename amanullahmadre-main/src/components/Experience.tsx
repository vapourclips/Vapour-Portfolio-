import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { LiquidGlass } from "@/components/liquid-glass/LiquidGlass";
import { AmbientBackground } from "@/components/liquid-glass/AmbientBackground";

const experiences = [
  {
    title: "Python Developer Trainee Intern",
    company: "Rentokil PCI (PCI Pest Control Pvt. Ltd.)",
    duration: "2025 – Present",
    location: "Mumbai, India",
    responsibilities: [
      "Built a highly scalable Approval Matrix system in Django to automate multi-level approval workflows across departments",
      "Developed a CSV-to-PDF generation pipeline for automated report and document creation",
      "Contributed to an OKR (Objectives & Key Results) portal for tracking organizational and team goals",
      "Designed and integrated REST APIs with PostgreSQL for core business modules",
      "Collaborated using Git for version control across multiple feature branches",
    ],
    tech: ["Python", "Django", "PostgreSQL", "REST APIs", "Git"],
  },
  {
    title: "Analytics & Dashboard Development Intern",
    company: "Quantum Learning",
    duration: "2024 – 2025",
    location: "Mumbai, India",
    responsibilities: [
      "Developed interactive analytics dashboards using Python and Streamlit",
      "Cleaned and analyzed 16,000+ records for data quality",
      "Created KPIs and visualizations for business insights",
      "Integrated APIs for real-time data fetching",
      "Delivered Power BI reports for actionable insights",
    ],
    tech: ["Python", "Streamlit", "Power BI", "SQL", "APIs", "Data Analysis"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-secondary/30 relative overflow-hidden">
      <AmbientBackground />
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional experience in backend development and data analytics
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, expIndex) => (
            <motion.div
              key={expIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + expIndex * 0.15 }}
            >
              <LiquidGlass radius={20} strength={20} className="p-8 relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-32 translate-x-32 pointer-events-none" />

                <div className="relative">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium mt-1">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Key Responsibilities
                    </h4>
                    {exp.responsibilities.map((responsibility, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-foreground">{responsibility}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border">
                    {exp.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Experience;

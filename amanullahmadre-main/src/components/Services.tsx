import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  BarChart3,
  LayoutDashboard,
  Brain,
  Code2,
  Database,
  LineChart,
  Globe,
} from "lucide-react";
import { LiquidGlass } from "@/components/liquid-glass/LiquidGlass";
import { AmbientBackground } from "@/components/liquid-glass/AmbientBackground";

const services = [
  {
    icon: BarChart3,
    title: "Data Analytics & Insights",
    description:
      "Transform raw data into meaningful insights through comprehensive analysis, helping businesses make data-driven decisions.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Development",
    description:
      "Build interactive dashboards using Power BI and Streamlit that visualize complex data in an intuitive and actionable format.",
  },
  {
    icon: Brain,
    title: "Machine Learning Solutions",
    description:
      "Develop and deploy ML models for prediction, classification, and pattern recognition to solve complex business problems.",
  },
  {
    icon: Code2,
    title: "Python Development",
    description:
      "Create automated scripts, data pipelines, and applications using Python to streamline workflows and processes.",
  },
  {
    icon: Database,
    title: "SQL & Database Analysis",
    description:
      "Design efficient database queries and perform in-depth data analysis using SQL and MySQL for actionable insights.",
  },
  {
    icon: LineChart,
    title: "Data Visualization",
    description:
      "Create compelling visual stories with charts, graphs, and reports that communicate complex data effectively.",
  },
  {
    icon: Globe,
    title: "Web Apps with Flask/Streamlit",
    description:
      "Build and deploy web applications for data science projects, making ML models accessible through user-friendly interfaces.",
  },
];

const Services = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <AmbientBackground />
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized services to help you leverage data for business growth
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <LiquidGlass radius={16} strength={18} className="p-6">
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </LiquidGlass>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { LiquidGlass } from "@/components/liquid-glass/LiquidGlass";
import { AmbientBackground } from "@/components/liquid-glass/AmbientBackground";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <AmbientBackground variant="hero" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)",
          }}
        />
        
        {/* Floating orbs */}
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-primary/30 blur-sm"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-primary/40 blur-sm"
        />
        <motion.div
          animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 left-1/3 w-5 h-5 rounded-full bg-primary/20 blur-sm"
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <LiquidGlass
                as="div"
                radius={999}
                strength={14}
                tilt={false}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-foreground">Open to opportunities</span>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </LiquidGlass>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight"
            >
              Amanullah Didaar{" "}
              <span className="gradient-text">Madre</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-primary font-medium mb-4"
            >
              Data Analytics • Machine Learning • Dashboard Development
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl"
            >
              MSc IT graduate with expertise in transforming raw data into actionable 
              insights. Skilled in Python, SQL, Power BI, and building ML systems 
              and interactive dashboards that drive data-driven decisions.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <LiquidGlass as="a" href="#projects" radius={16} strength={22} className="btn-glass-primary">
                <span className="flex items-center gap-2">
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </span>
              </LiquidGlass>
              <LiquidGlass as="a" href="#contact" radius={16} strength={22} className="btn-glass">
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Contact
                </span>
              </LiquidGlass>
              <LiquidGlass
                as="a"
                href="#"
                radius={16}
                strength={22}
                className="btn-glass"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Resume download functionality - Add your resume PDF link here");
                }}
              >
                <span className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Resume
                </span>
              </LiquidGlass>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-6 mt-12"
            >
              <LiquidGlass radius={20} strength={18} className="glass-card text-center min-w-[100px]">
                <div className="text-2xl font-bold text-foreground">8.20</div>
                <div className="text-xs text-muted-foreground mt-1">MSc CGPA</div>
              </LiquidGlass>
              <LiquidGlass radius={20} strength={18} className="glass-card text-center min-w-[100px]">
                <div className="text-2xl font-bold text-foreground">16K+</div>
                <div className="text-xs text-muted-foreground mt-1">Records</div>
              </LiquidGlass>
              <LiquidGlass radius={20} strength={18} className="glass-card text-center min-w-[100px]">
                <div className="text-2xl font-bold text-foreground">30+</div>
                <div className="text-xs text-muted-foreground mt-1">ML Features</div>
              </LiquidGlass>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Animated rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full border border-dashed border-primary/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-16 rounded-full border border-dashed border-primary/10"
              />

              {/* Glow effect */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 blur-3xl" />
              
              {/* Glass border */}
              <div 
                className="absolute -inset-1 rounded-full"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary) / 0.5), hsl(var(--primary) / 0.1), hsl(var(--primary) / 0.3))",
                  padding: "2px",
                }}
              />

              {/* Image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-large">
                <img
                  src={profilePhoto}
                  alt="Amanullah Didaar Madre"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating tech badges with liquid glass effect */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-8"
              >
                <LiquidGlass radius={16} strength={16} tilt={false} className="glass-card !p-3">
                  <span className="text-sm font-medium text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-500" />
                    Python
                  </span>
                </LiquidGlass>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-4 bottom-16"
              >
                <LiquidGlass radius={16} strength={16} tilt={false} className="glass-card !p-3">
                  <span className="text-sm font-medium text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    Power BI
                  </span>
                </LiquidGlass>
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute right-8 -bottom-2"
              >
                <LiquidGlass radius={16} strength={16} tilt={false} className="glass-card !p-3">
                  <span className="text-sm font-medium text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    ML
                  </span>
                </LiquidGlass>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

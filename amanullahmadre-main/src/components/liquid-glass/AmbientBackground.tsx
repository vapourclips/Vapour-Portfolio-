import { motion } from "framer-motion";

interface AmbientBackgroundProps {
  variant?: "hero" | "section";
}

/**
 * Drifting color fields placed behind glass panels. Liquid glass only reads
 * as "glass" when there's something with color/contrast behind it to bend —
 * a flat background makes any refraction filter invisible.
 */
export const AmbientBackground = ({ variant = "section" }: AmbientBackgroundProps) => {
  const scale = variant === "hero" ? 1 : 0.7;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[5%] rounded-full"
        style={{
          width: 520 * scale,
          height: 520 * scale,
          background:
            "radial-gradient(circle, hsl(217 91% 60% / 0.22) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[10%] rounded-full"
        style={{
          width: 460 * scale,
          height: 460 * scale,
          background:
            "radial-gradient(circle, hsl(199 89% 55% / 0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[30%] right-[30%] rounded-full"
        style={{
          width: 320 * scale,
          height: 320 * scale,
          background:
            "radial-gradient(circle, hsl(280 80% 65% / 0.14) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
};

export default AmbientBackground;

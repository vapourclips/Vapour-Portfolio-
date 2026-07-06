import {
  useRef,
  useState,
  useId,
  useCallback,
  ReactNode,
  CSSProperties,
} from "react";

interface LiquidGlassProps {
  children: ReactNode;
  className?: string;
  /** Border radius in px — needs to be explicit so the SVG filter region matches the visual shape */
  radius?: number;
  /** How strong the refraction displacement is. 0 disables the filter (cheap fallback). */
  strength?: number;
  /** Whether hovering tilts the panel slightly in 3D, following the pointer */
  tilt?: boolean;
  /** Extra inline styles merged onto the outer panel */
  style?: CSSProperties;
  as?: "div" | "a" | "button";
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}

/**
 * LiquidGlass renders a panel using a real SVG feImage + feDisplacementMap
 * filter (the same primitive behind Apple's "Liquid Glass" material) instead
 * of a flat backdrop-blur. The backdrop is sampled and bent through a
 * pseudo-lens map, and a specular highlight follows the pointer to fake a
 * curved, refractive surface rather than a tinted pane of frosted glass.
 *
 * Falls back to a cheap blurred-glass look (no filter, static highlight) when
 * the user prefers reduced motion or is on a touch device, since the filter
 * + per-frame pointer tracking is the most expensive part of the effect.
 */
const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const isTouchDevice = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(hover: none)").matches;

export const LiquidGlass = ({
  children,
  className = "",
  radius = 24,
  strength = 28,
  tilt = true,
  style,
  as = "div",
  href,
  onClick,
}: LiquidGlassProps) => {
  const rawId = useId().replace(/:/g, "");
  const filterId = `lg-filter-${rawId}`;
  const mapId = `lg-map-${rawId}`;

  const panelRef = useRef<HTMLDivElement | null>(null);
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.3 });
  const [active, setActive] = useState(false);
  const reduced = useRef(prefersReducedMotion() || isTouchDevice());

  const handleMove = useCallback(
    (e: React.MouseEvent) => {
      if (reduced.current) return;
      const el = panelRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setPointer({ x, y });
    },
    []
  );

  const tiltX = tilt && active ? (pointer.y - 0.5) * -6 : 0;
  const tiltY = tilt && active ? (pointer.x - 0.5) * 6 : 0;

  const Tag = as as "div";

  const sharedProps = {
    ref: panelRef as never,
    className: `liquid-glass-panel ${className}`,
    style: {
      ...style,
      borderRadius: radius,
      transform: active
        ? `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(0)`
        : undefined,
    } as CSSProperties,
    onMouseMove: handleMove,
    onMouseEnter: () => setActive(true),
    onMouseLeave: () => setActive(false),
    onClick,
    href,
  };

  const distortionStyle: CSSProperties = {
    borderRadius: radius,
    filter: strength > 0 ? `url(#${filterId})` : undefined,
  };

  return (
    <>
      {/* SVG refraction filter definition — invisible, just supplies the displacement map */}
      <svg className="liquid-glass-defs" aria-hidden="true" focusable="false">
        <defs>
          <filter
            id={filterId}
            x="-5%"
            y="-5%"
            width="110%"
            height="110%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008 0.012"
              numOctaves={2}
              seed={4}
              result="noise"
            />
            <feGaussianBlur in="noise" stdDeviation={2} result="softNoise" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="softNoise"
              scale={strength}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <radialGradient id={mapId} cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="white" stopOpacity="0.9" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {Tag === "a" ? (
        <a {...sharedProps}>
          <GlassChrome pointer={pointer} active={active} reduced={reduced.current} radius={radius} distortionStyle={distortionStyle}>
            {children}
          </GlassChrome>
        </a>
      ) : Tag === "button" ? (
        <button {...sharedProps} type="button">
          <GlassChrome pointer={pointer} active={active} reduced={reduced.current} radius={radius} distortionStyle={distortionStyle}>
            {children}
          </GlassChrome>
        </button>
      ) : (
        <div {...sharedProps}>
          <GlassChrome pointer={pointer} active={active} reduced={reduced.current} radius={radius} distortionStyle={distortionStyle}>
            {children}
          </GlassChrome>
        </div>
      )}
    </>
  );
};

/** Inner backdrop-distortion + specular highlight + rim light layer, shared across tag types */
const GlassChrome = ({
  children,
  pointer,
  active,
  reduced,
  radius,
  distortionStyle,
}: {
  children: ReactNode;
  pointer: { x: number; y: number };
  active: boolean;
  reduced: boolean;
  radius: number;
  distortionStyle: CSSProperties;
}) => (
  <>
    {/* Blur layer: samples the page behind the panel. No border/shadow here —
        anything drawn on an element that also carries the SVG filter gets
        warped along with the refraction, including its own border, which is
        what produced the torn-paper edge. */}
    <span
      className="liquid-glass-blur"
      style={{ borderRadius: radius }}
      aria-hidden="true"
    />
    {/* Distortion layer: only the SVG displacement filter lives here, applied
        to a plain tint fill, never to a border or box-shadow. */}
    <span
      className="liquid-glass-distort"
      style={distortionStyle}
      aria-hidden="true"
    />
    {/* Chrome layer: the crisp border + box-shadow, completely filter-free so
        its edge always stays a clean, straight rounded rectangle. */}
    <span
      className="liquid-glass-chrome"
      style={{ borderRadius: radius }}
      aria-hidden="true"
    />
    <span
      className="liquid-glass-specular"
      style={{
        borderRadius: radius,
        background: `radial-gradient(circle at ${pointer.x * 100}% ${
          pointer.y * 100
        }%, hsl(0 0% 100% / ${active && !reduced ? 0.5 : 0.22}) 0%, hsl(0 0% 100% / 0) 55%)`,
      }}
      aria-hidden="true"
    />
    <span
      className="liquid-glass-rim"
      style={{ borderRadius: radius }}
      aria-hidden="true"
    />
    <span className="liquid-glass-content">{children}</span>
  </>
);

export default LiquidGlass;

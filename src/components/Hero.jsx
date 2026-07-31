import { motion } from "framer-motion";

// Set to null to fall back to the patterned placeholder below.
const HERO_IMAGE = "/main-hero-page.png";

export default function Hero() {
  return (
    <motion.section
      className="hero-banner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        background: "#2d0509",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {HERO_IMAGE ? (
        <img
          src={HERO_IMAGE}
          alt="Royale Achaar"
          fetchPriority="high"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
        />
      ) : (
        <>
          {/* Hex pattern background */}
          <div style={{
            position: "absolute", inset: 0, opacity: 0.05,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='30' viewBox='0 0 52 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13 1L1 8L1 22L13 29L25 22L25 8L13 1ZM39 1L27 8L27 22L39 29L51 22L51 8L39 1Z' stroke='%23C9A84C' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: "52px 30px"
          }} />

          {/* Gold glow top right */}
          <div style={{
            position: "absolute", top: "-160px", right: "-100px",
            width: "600px", height: "600px", borderRadius: "50%",
            background: "#C9A84C", opacity: 0.05,
            filter: "blur(80px)", pointerEvents: "none"
          }} />

          {/* Deep red glow bottom left */}
          <div style={{
            position: "absolute", bottom: "-180px", left: "-100px",
            width: "500px", height: "500px", borderRadius: "50%",
            background: "#6B0F1A", opacity: 0.35,
            filter: "blur(80px)", pointerEvents: "none"
          }} />
        </>
      )}

      {/* Height tracks the Shop/About/Contact banners at every breakpoint.
          Those are content-sized, and the global h1 margin in style.css steps
          down at 1024px — these values mirror the measured result. */}
      <style>{`
        .hero-banner { height: 330px; }
        @media (max-width: 1024px) { .hero-banner { height: 303px; } }
        @media (max-width: 900px)  { .hero-banner { height: 295px; } }
        @media (max-width: 768px)  { .hero-banner { height: 285px; } }
        @media (max-width: 560px)  { .hero-banner { height: 268px; } }
        @media (max-width: 480px)  { .hero-banner { height: 263px; } }
      `}</style>
    </motion.section>
  );
}

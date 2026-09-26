import { motion } from "framer-motion";

// MAIN IMAGE SLOT — the ghee hero banner. Replace with a wider/landscape shot
// anytime by dropping it in public/ and updating this path.
const GHEE_IMAGE = "/desi ghee.jpeg";

export default function GheeBanner() {
  return (
    <motion.section
      className={GHEE_IMAGE ? "ghee-banner" : "ghee-banner is-placeholder"}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        background: "#3a2a08",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {GHEE_IMAGE ? (
        <img
          src={GHEE_IMAGE}
          alt="Royale Desi Ghee — Pure, Hand-Churned"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      ) : (
        <>
          {/* Soft ripple pattern background */}
          <div style={{
            position: "absolute", inset: 0, opacity: 0.08,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='24' stroke='%23F0CE7A' stroke-width='2' fill='none'/%3E%3Ccircle cx='30' cy='30' r='12' stroke='%23F0CE7A' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px"
          }} />

          {/* Warm buttery glow top left */}
          <div style={{
            position: "absolute", top: "-180px", left: "-100px",
            width: "600px", height: "600px", borderRadius: "50%",
            background: "#F0CE7A", opacity: 0.14,
            filter: "blur(90px)", pointerEvents: "none"
          }} />

          {/* Deep golden glow bottom right */}
          <div style={{
            position: "absolute", bottom: "-180px", right: "-100px",
            width: "520px", height: "520px", borderRadius: "50%",
            background: "#9a6a15", opacity: 0.4,
            filter: "blur(80px)", pointerEvents: "none"
          }} />

          {/* Placeholder label — disappears once GHEE_IMAGE is set */}
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: "14px"
          }}>
            <p style={{
              color: "#F0CE7A", fontSize: "11px", fontWeight: 900,
              textTransform: "uppercase", letterSpacing: "0.5em",
              margin: 0, opacity: 0.85, paddingLeft: "0.5em"
            }}>
              Pure & Hand-Churned
            </p>
            <h2 style={{
              fontFamily: "Playfair Display, serif",
              fontStyle: "italic", fontWeight: 500,
              color: "#f6e4b6", fontSize: "clamp(30px, 5vw, 52px)",
              lineHeight: 1.1, margin: 0, textAlign: "center"
            }}>
              Royale Desi Ghee
            </h2>
            <div style={{
              display: "flex", alignItems: "center", gap: "14px", marginTop: "2px"
            }} aria-hidden="true">
              <span style={{ width: "70px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(240,206,122,0.75))" }} />
              <span style={{ width: "7px", height: "7px", transform: "rotate(45deg)", background: "#F0CE7A" }} />
              <span style={{ width: "70px", height: "1px", background: "linear-gradient(90deg, rgba(240,206,122,0.75), transparent)" }} />
            </div>
          </div>
        </>
      )}

      {/* With a real banner the image sets the height; the placeholder has no
          intrinsic size, so it mirrors the honey hero heights instead. */}
      <style>{`
        .ghee-banner.is-placeholder { height: 330px; }
        @media (max-width: 1024px) { .ghee-banner.is-placeholder { height: 303px; } }
        @media (max-width: 900px)  { .ghee-banner.is-placeholder { height: 295px; } }
        @media (max-width: 768px)  { .ghee-banner.is-placeholder { height: 285px; } }
        @media (max-width: 560px)  { .ghee-banner.is-placeholder { height: 268px; } }
        @media (max-width: 480px)  { .ghee-banner.is-placeholder { height: 263px; } }
      `}</style>
    </motion.section>
  );
}

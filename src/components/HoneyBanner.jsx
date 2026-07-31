import { motion } from "framer-motion";

// Set to null to fall back to the honeycomb placeholder below.
const HONEY_IMAGE = "/honey-hero-section.png";

export default function HoneyBanner() {
  return (
    <motion.section
      className={HONEY_IMAGE ? "honey-banner" : "honey-banner is-placeholder"}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        background: "#3d2504",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {HONEY_IMAGE ? (
        <img
          src={HONEY_IMAGE}
          alt="Royale Honey — Pakistan's No.1 Honey Brand"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      ) : (
        <>
          {/* Honeycomb pattern background */}
          <div style={{
            position: "absolute", inset: 0, opacity: 0.07,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='30' viewBox='0 0 52 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13 1L1 8L1 22L13 29L25 22L25 8L13 1ZM39 1L27 8L27 22L39 29L51 22L51 8L39 1Z' stroke='%23E8C46A' stroke-width='2' fill='%23E8C46A' fill-opacity='0.25'/%3E%3C/svg%3E")`,
            backgroundSize: "52px 30px"
          }} />

          {/* Warm amber glow top left */}
          <div style={{
            position: "absolute", top: "-180px", left: "-100px",
            width: "600px", height: "600px", borderRadius: "50%",
            background: "#E8B923", opacity: 0.12,
            filter: "blur(90px)", pointerEvents: "none"
          }} />

          {/* Deep honey glow bottom right */}
          <div style={{
            position: "absolute", bottom: "-180px", right: "-100px",
            width: "520px", height: "520px", borderRadius: "50%",
            background: "#8a5a12", opacity: 0.4,
            filter: "blur(80px)", pointerEvents: "none"
          }} />

          {/* Placeholder label — disappears once HONEY_IMAGE is set */}
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: "14px"
          }}>
            <p style={{
              color: "#E8C46A", fontSize: "11px", fontWeight: 900,
              textTransform: "uppercase", letterSpacing: "0.5em",
              margin: 0, opacity: 0.85, paddingLeft: "0.5em"
            }}>
              Pure & Raw
            </p>
            <h2 style={{
              fontFamily: "Playfair Display, serif",
              fontStyle: "italic", fontWeight: 500,
              color: "#f3dda3", fontSize: "clamp(30px, 5vw, 52px)",
              lineHeight: 1.1, margin: 0, textAlign: "center"
            }}>
              Royale Honey
            </h2>
            <div style={{
              display: "flex", alignItems: "center", gap: "14px", marginTop: "2px"
            }} aria-hidden="true">
              <span style={{ width: "70px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(232,196,106,0.75))" }} />
              <span style={{ width: "7px", height: "7px", transform: "rotate(45deg)", background: "#E8C46A" }} />
              <span style={{ width: "70px", height: "1px", background: "linear-gradient(90deg, rgba(232,196,106,0.75), transparent)" }} />
            </div>
          </div>
        </>
      )}

      {/* With a real banner the image sets the height, so its baked-in text is
          never cropped. The placeholder has no intrinsic size, so it mirrors
          the achaar hero heights instead. */}
      <style>{`
        .honey-banner.is-placeholder { height: 330px; }
        @media (max-width: 1024px) { .honey-banner.is-placeholder { height: 303px; } }
        @media (max-width: 900px)  { .honey-banner.is-placeholder { height: 295px; } }
        @media (max-width: 768px)  { .honey-banner.is-placeholder { height: 285px; } }
        @media (max-width: 560px)  { .honey-banner.is-placeholder { height: 268px; } }
        @media (max-width: 480px)  { .honey-banner.is-placeholder { height: 263px; } }
      `}</style>
    </motion.section>
  );
}

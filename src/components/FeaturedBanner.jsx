import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FeaturedBanner() {
  return (
    <section style={{ background: "#4A0A12", overflow: "hidden", position: "relative" }}>

      {/* Diagonal gold accent */}
      <div style={{
        position: "absolute", top: "-80px", right: "-80px",
        width: "400px", height: "400px", borderRadius: "60px",
        background: "#C9A84C", opacity: 0.06, transform: "rotate(-20deg)"
      }} />
      <div style={{
        position: "absolute", bottom: "-60px", left: "-60px",
        width: "300px", height: "300px", borderRadius: "50%",
        background: "#C9A84C", opacity: 0.05
      }} />

      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        padding: "80px 24px",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "60px", alignItems: "center"
      }} className="grid-cols-banner">

        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ position: "relative" }}
        >
          <div style={{
            borderRadius: "32px", overflow: "hidden",
            border: "3px solid #C9A84C",
            boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
            aspectRatio: "4/3"
          }}>
            <img src="/promo.jpg" alt="Fresh Stock"
                 style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          {/* Floating tag */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute", top: "-20px", right: "-20px",
              background: "#C9A84C", borderRadius: "20px",
              padding: "14px 20px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
          >
            <p style={{ color: "#4A0A12", fontWeight: 900, fontSize: "12px",
                        textTransform: "uppercase", letterSpacing: "0.1em" }}>
              🚚 Free Delivery
            </p>
            <p style={{ color: "#4A0A12", fontSize: "11px", opacity: 0.8, fontWeight: 600 }}>
              Orders above Rs. 1000
            </p>
          </motion.div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p style={{
            color: "#C9A84C", fontSize: "11px", fontWeight: 900,
            textTransform: "uppercase", letterSpacing: "0.5em", marginBottom: "16px"
          }}>
            Fresh Stock Available
          </p>

          <h2 style={{
            fontFamily: "Playfair Display, serif",
            color: "white", fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: 900, lineHeight: 1.1, marginBottom: "24px"
          }}>
            From Our Kitchen <br />
            <span style={{ color: "#C9A84C", fontStyle: "italic" }}>
              To Your Table
            </span>
          </h2>

          <p style={{
            color: "rgba(255,255,255,0.65)", lineHeight: 1.9,
            fontSize: "15px", marginBottom: "32px", maxWidth: "420px"
          }}>
            Every jar is hand-packed with love using recipes passed down through generations.
            No artificial preservatives — just pure, bold flavor.
          </p>

          {/* Feature list */}
          {[
            "Available in convenient 1/2 kg packets",
            "High-volume stock ready for immediate dispatch",
            "Vacuum-sealed for maximum freshness",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <div style={{
                width: "8px", height: "8px", borderRadius: "50%",
                background: "#C9A84C", flexShrink: 0
              }} />
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", fontWeight: 600 }}>{item}</p>
            </div>
          ))}

          <div style={{ display: "flex", gap: "16px", marginTop: "40px", flexWrap: "wrap" }}>
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                style={{
                  background: "#C9A84C", color: "#4A0A12",
                  border: "none", borderRadius: "40px",
                  padding: "14px 32px", fontWeight: 900,
                  fontSize: "12px", textTransform: "uppercase",
                  letterSpacing: "0.2em", cursor: "pointer",
                  boxShadow: "0 10px 30px rgba(201,168,76,0.3)"
                }}
              >
                Order Now
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                style={{
                  background: "transparent", color: "#C9A84C",
                  border: "2px solid #C9A84C", borderRadius: "40px",
                  padding: "14px 32px", fontWeight: 900,
                  fontSize: "12px", textTransform: "uppercase",
                  letterSpacing: "0.2em", cursor: "pointer"
                }}
              >
                Bulk Orders →
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Mobile: stack columns */}
      <style>{`
        @media (max-width: 768px) {
          .grid-cols-banner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
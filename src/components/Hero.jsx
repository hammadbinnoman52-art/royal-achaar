import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section style={{
      background: "#2d0509",
      minHeight: "100vh",
      paddingTop: "72px",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "center"
    }}>

      {/* Hex pattern background */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.05,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='30' viewBox='0 0 52 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13 1L1 8L1 22L13 29L25 22L25 8L13 1ZM39 1L27 8L27 22L39 29L51 22L51 8L39 1Z' stroke='%23C9A84C' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
        backgroundSize: "52px 30px"
      }} />

      {/* Gold glow top right */}
      <div style={{
        position: "absolute", top: "-100px", right: "-100px",
        width: "600px", height: "600px", borderRadius: "50%",
        background: "#C9A84C", opacity: 0.04,
        filter: "blur(80px)", pointerEvents: "none"
      }} />

      {/* Gold glow bottom left */}
      <div style={{
        position: "absolute", bottom: "-100px", left: "-100px",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "#6B0F1A", opacity: 0.3,
        filter: "blur(80px)", pointerEvents: "none"
      }} />

      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        padding: "60px 24px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "80px",
        alignItems: "center",
        width: "100%",
        position: "relative", zIndex: 1
      }} className="hero-grid">

        {/* ── LEFT: Text ── */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}
          >
            <div style={{ width: "40px", height: "1px", background: "#C9A84C" }} />
            <span style={{
              color: "#C9A84C", fontSize: "10px", fontWeight: 900,
              textTransform: "uppercase", letterSpacing: "0.5em"
            }}>
              Est. 1990 · Lahore, Pakistan
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              fontFamily: "Playfair Display, serif",
              color: "white", fontSize: "clamp(52px, 8vw, 90px)",
              fontWeight: 900, lineHeight: 0.95,
              letterSpacing: "-0.02em", marginBottom: "28px"
            }}
          >
            Royal <br />
            <span style={{ color: "#C9A84C", fontStyle: "italic", fontWeight: 400 }}>
              Achar
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "16px", lineHeight: 1.9,
              maxWidth: "420px", marginBottom: "40px"
            }}
          >
            Handcrafted pickles using age-old family recipes.
            Pure ingredients, zero preservatives —
            delivered fresh from our kitchen to your table.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(201,168,76,0.35)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: "#C9A84C", color: "#2d0509",
                  border: "none", borderRadius: "40px",
                  padding: "16px 36px", fontWeight: 900,
                  fontSize: "12px", textTransform: "uppercase",
                  letterSpacing: "0.25em", cursor: "pointer",
                  boxShadow: "0 10px 30px rgba(201,168,76,0.25)"
                }}
              >
                Shop Now
              </motion.button>
            </Link>

            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                style={{
                  background: "transparent", color: "#C9A84C",
                  border: "2px solid rgba(201,168,76,0.5)",
                  borderRadius: "40px", padding: "16px 36px",
                  fontWeight: 900, fontSize: "12px",
                  textTransform: "uppercase", letterSpacing: "0.25em",
                  cursor: "pointer"
                }}
              >
                Our Story →
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{
              display: "flex", gap: "40px",
              marginTop: "56px", paddingTop: "40px",
              borderTop: "1px solid rgba(201,168,76,0.15)"
            }}
          >
            {[
              ["30+",  "Years"],
              ["50K+", "Customers"],
              ["15+",  "Varieties"],
            ].map(([num, label]) => (
              <div key={label}>
                <p style={{
                  fontFamily: "Playfair Display, serif",
                  color: "#C9A84C", fontSize: "36px",
                  fontWeight: 900, lineHeight: 1
                }}>{num}</p>
                <p style={{
                  color: "rgba(255,255,255,0.4)", fontSize: "10px",
                  textTransform: "uppercase", letterSpacing: "0.2em",
                  fontWeight: 700, marginTop: "6px"
                }}>{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Image ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ position: "relative" }}
          className="hero-image-col"
        >
          {/* Main image frame */}
          <div style={{
            borderRadius: "40px", overflow: "hidden",
            border: "3px solid rgba(201,168,76,0.35)",
            boxShadow: "0 60px 120px rgba(0,0,0,0.5)",
            aspectRatio: "4/5"
          }}>
            <img
              src="/achar1.jpg"
              alt="Royal Achar"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {/* Inner overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(45,5,9,0.4), transparent 60%)"
            }} />
          </div>

          {/* Floating badge — bottom left */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute", bottom: "40px", left: "-24px",
              background: "#C9A84C", borderRadius: "20px",
              padding: "16px 22px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
          >
            <p style={{ color: "#2d0509", fontWeight: 900, fontSize: "13px", margin: 0 }}>
              🏆 #1 in Lahore
            </p>
            <p style={{ color: "rgba(45,5,9,0.65)", fontSize: "11px", margin: 0, fontWeight: 600 }}>
              Authentic Taste
            </p>
          </motion.div>

          {/* Floating badge — top right */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{
              position: "absolute", top: "30px", right: "-20px",
              background: "#1a0305", borderRadius: "16px",
              padding: "12px 18px",
              border: "1px solid rgba(201,168,76,0.3)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
            }}
          >
            <p style={{ color: "#C9A84C", fontWeight: 900, fontSize: "11px", margin: 0 }}>
              🌿 No Preservatives
            </p>
          </motion.div>

          {/* Decorative ring */}
          <div style={{
            position: "absolute", inset: "-20px",
            border: "1px solid rgba(201,168,76,0.08)",
            borderRadius: "56px", pointerEvents: "none"
          }} />
        </motion.div>
      </div>

      {/* Responsive */}
      <style>{`
        .hero-grid { grid-template-columns: 1fr 1fr !important; }
        .hero-image-col { display: block !important; }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-image-col { display: none !important; }
        }
      `}</style>
    </section>
  );
}
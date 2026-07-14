import { motion } from "framer-motion";

export default function About() {
  return (
    <main style={{ paddingTop: "80px", background: "#FDF6E3" }}>

      {/* Hero Banner */}
      <div style={{
        background: "#4A0A12", padding: "80px 24px",
        textAlign: "center", position: "relative", overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.06,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='30' viewBox='0 0 52 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13 1L1 8L1 22L13 29L25 22L25 8L13 1ZM39 1L27 8L27 22L39 29L51 22L51 8L39 1Z' stroke='%23C9A84C' stroke-width='2' fill='none'/%3E%3C/svg%3E")`
        }} />
        <p style={{ color: "#C9A84C", fontSize: "11px", fontWeight: 900,
                    textTransform: "uppercase", letterSpacing: "0.5em", marginBottom: "16px" }}>
          Est. 1990 · Lahore, Pakistan
        </p>
        <h1 style={{ fontFamily: "Playfair Display, serif", color: "white",
                     fontSize: "clamp(40px, 8vw, 80px)", fontWeight: 900, lineHeight: 1 }}>
          Our <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Story</span>
        </h1>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px" }}>

        {/* Story Section */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "80px", alignItems: "center", marginBottom: "100px"
        }} className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div style={{
              borderRadius: "32px", overflow: "hidden",
              border: "3px solid rgba(201,168,76,0.3)",
              boxShadow: "0 40px 80px rgba(74,10,18,0.15)",
              aspectRatio: "4/5"
            }}>
              <img src="/founder.jpg" alt="Founder"
                   style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p style={{ color: "#C9A84C", fontSize: "11px", fontWeight: 900,
                        textTransform: "uppercase", letterSpacing: "0.5em", marginBottom: "16px" }}>
              Our Founder
            </p>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#4A0A12",
                         fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, marginBottom: "24px" }}>
              A Passion Born in the Kitchen
            </h2>
            <p style={{ color: "#555", lineHeight: 1.9, fontSize: "15px", marginBottom: "20px" }}>
              Royal Foods began in 1990 when our founder started making traditional Achar for
              family and neighbors in Judicial Colony, Lahore. What started as a kitchen hobby
              soon became a beloved local brand.
            </p>
            <p style={{ color: "#555", lineHeight: 1.9, fontSize: "15px", marginBottom: "20px" }}>
              Using only seasonal vegetables, cold-pressed mustard oil, and hand-ground spices,
              every jar carries the same authentic taste that made us famous — unchanged for over 30 years.
            </p>
            <p style={{ color: "#555", lineHeight: 1.9, fontSize: "15px" }}>
              Today we serve over 50,000 customers across Pakistan, but our values remain
              the same: pure ingredients, honest prices, and flavors that feel like home.
            </p>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: "#4A0A12", borderRadius: "32px",
            padding: "60px 40px", display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "40px", textAlign: "center",
            boxShadow: "0 40px 80px rgba(74,10,18,0.2)"
          }}
        >
          {[
            ["30+",   "Years of Experience"],
            ["50K+",  "Happy Customers"],
            ["15+",   "Product Varieties"],
            ["100%",  "Natural Ingredients"],
          ].map(([num, label]) => (
            <div key={label}>
              <p style={{ fontFamily: "Playfair Display, serif", color: "#C9A84C",
                          fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 900, lineHeight: 1 }}>
                {num}
              </p>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px",
                          fontWeight: 700, textTransform: "uppercase",
                          letterSpacing: "0.15em", marginTop: "8px" }}>
                {label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Values */}
        <div style={{ marginTop: "100px", textAlign: "center" }}>
          <p style={{ color: "#C9A84C", fontSize: "11px", fontWeight: 900,
                      textTransform: "uppercase", letterSpacing: "0.5em", marginBottom: "12px" }}>
            What We Stand For
          </p>
          <h2 style={{ fontFamily: "Playfair Display, serif", color: "#4A0A12",
                       fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, marginBottom: "60px" }}>
            Our Core Values
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
            {[
              { icon: "🌿", title: "Purity",       desc: "No chemicals. No shortcuts. Ever." },
              { icon: "❤️", title: "Tradition",    desc: "Recipes that have stood the test of time." },
              { icon: "🤝", title: "Honesty",      desc: "Fair prices, genuine quality, always." },
              { icon: "🇵🇰", title: "Made in Pakistan", desc: "Proudly local, globally loved." },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: "white", borderRadius: "24px",
                  padding: "36px 24px",
                  border: "1px solid rgba(201,168,76,0.2)",
                  boxShadow: "0 8px 24px rgba(74,10,18,0.05)"
                }}
              >
                <div style={{ fontSize: "36px", marginBottom: "16px" }}>{v.icon}</div>
                <h3 style={{ fontFamily: "Playfair Display, serif", color: "#4A0A12",
                             fontSize: "20px", fontWeight: 700, marginBottom: "10px" }}>{v.title}</h3>
                <p style={{ color: "#777", fontSize: "14px", lineHeight: 1.7 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </main>
  );
}
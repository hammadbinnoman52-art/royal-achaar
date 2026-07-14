import { motion } from "framer-motion";

const reasons = [
  { icon: "🌿", title: "100% Natural",       desc: "No artificial colors, flavors, or preservatives. Just pure ingredients." },
  { icon: "👩‍🍳", title: "Family Recipe",      desc: "Recipes perfected over 30 years, passed down through generations." },
  { icon: "📦", title: "Fresh Packaging",    desc: "Vacuum-sealed jars that lock in flavor for months." },
  { icon: "🚚", title: "Fast Delivery",      desc: "Dispatched within 24 hours across Pakistan via TCS & Leopards." },
  { icon: "💰", title: "Wholesale Prices",   desc: "Bulk pricing available for retailers and distributors." },
  { icon: "⭐", title: "50,000+ Customers",  desc: "Trusted by families across Lahore and all over Pakistan." },
];

export default function WhyUs() {
  return (
    <section style={{ background: "white", padding: "100px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "70px" }}
        >
          <p style={{
            color: "#C9A84C", fontSize: "11px", fontWeight: 900,
            textTransform: "uppercase", letterSpacing: "0.5em", marginBottom: "12px"
          }}>
            Why Choose Us
          </p>
          <h2 style={{
            fontFamily: "Playfair Display, serif",
            color: "#4A0A12", fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 900, lineHeight: 1.1
          }}>
            The Royal Difference
          </h2>
          <div style={{
            width: "80px", height: "4px", borderRadius: "4px",
            background: "#C9A84C", margin: "20px auto 0"
          }} />
        </motion.div>

        {/* Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "32px"
        }}>
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              style={{
                background: "#FDF6E3",
                borderRadius: "24px",
                padding: "36px 28px",
                border: "1px solid rgba(201,168,76,0.2)",
                boxShadow: "0 8px 30px rgba(107,15,26,0.06)",
                cursor: "default",
                transition: "box-shadow 0.3s"
              }}
            >
              <div style={{
                width: "64px", height: "64px", borderRadius: "20px",
                background: "#4A0A12", display: "flex",
                alignItems: "center", justifyContent: "center",
                fontSize: "28px", marginBottom: "20px",
                boxShadow: "0 10px 20px rgba(74,10,18,0.2)"
              }}>
                {r.icon}
              </div>
              <h3 style={{
                fontFamily: "Playfair Display, serif",
                color: "#4A0A12", fontSize: "20px",
                fontWeight: 700, marginBottom: "10px"
              }}>
                {r.title}
              </h3>
              <p style={{ color: "#666", lineHeight: 1.7, fontSize: "14px" }}>
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
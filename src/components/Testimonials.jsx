import { motion } from "framer-motion";
import { useState } from "react";

const reviews = [
  { name: "Ayesha Malik",    city: "Lahore",    rating: 5, text: "The Mango Achar is absolutely divine. Reminds me of my dadi's recipe. Will order again and again!" },
  { name: "Usman Tariq",     city: "Karachi",   rating: 5, text: "Ordered the Mix Achar for the whole family. Everyone loved it. Fast delivery and great packaging." },
  { name: "Sana Riaz",       city: "Islamabad", rating: 5, text: "The Lasora Achar is rare and so authentic. Haven't tasted something this good in years." },
  { name: "Ahmed Raza",      city: "Faisalabad",rating: 5, text: "Bought the Desi Ghee along with Achar. Both are top quality. Highly recommend Royal Foods!" },
  { name: "Fatima Nawaz",    city: "Multan",    rating: 5, text: "Finally found a brand that makes Achar the old-fashioned way. No chemicals, pure taste!" },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section style={{ background: "#FDF6E3", padding: "100px 24px", overflow: "hidden" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <p style={{
            color: "#C9A84C", fontSize: "11px", fontWeight: 900,
            textTransform: "uppercase", letterSpacing: "0.5em", marginBottom: "12px"
          }}>
            What Customers Say
          </p>
          <h2 style={{
            fontFamily: "Playfair Display, serif",
            color: "#4A0A12", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900
          }}>
            Royal Reviews
          </h2>
          <div style={{
            width: "80px", height: "4px", borderRadius: "4px",
            background: "#C9A84C", margin: "20px auto 0"
          }} />
        </motion.div>

        {/* Active Review Card */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            background: "#4A0A12", borderRadius: "32px",
            padding: "52px 48px", position: "relative",
            boxShadow: "0 40px 80px rgba(74,10,18,0.2)",
            marginBottom: "40px"
          }}
        >
          {/* Quote mark */}
          <div style={{
            position: "absolute", top: "24px", left: "40px",
            fontFamily: "Playfair Display, serif",
            fontSize: "120px", color: "#C9A84C", opacity: 0.12,
            lineHeight: 1, userSelect: "none"
          }}>
            "
          </div>

          {/* Stars */}
          <div style={{ marginBottom: "20px" }}>
            {"★".repeat(reviews[active].rating).split("").map((s, i) => (
              <span key={i} style={{ color: "#C9A84C", fontSize: "20px" }}>{s}</span>
            ))}
          </div>

          <p style={{
            color: "rgba(255,255,255,0.85)", fontSize: "18px",
            lineHeight: 1.8, fontStyle: "italic",
            fontFamily: "Playfair Display, serif",
            marginBottom: "32px", position: "relative", zIndex: 1
          }}>
            "{reviews[active].text}"
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{
              width: "48px", height: "48px", borderRadius: "50%",
              background: "#C9A84C", display: "flex",
              alignItems: "center", justifyContent: "center",
              fontFamily: "Playfair Display, serif",
              fontWeight: 900, fontSize: "18px", color: "#4A0A12"
            }}>
              {reviews[active].name[0]}
            </div>
            <div>
              <p style={{ color: "#C9A84C", fontWeight: 900, fontSize: "15px" }}>
                {reviews[active].name}
              </p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", fontWeight: 600 }}>
                {reviews[active].city}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Dots Navigation */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {reviews.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              style={{
                width: i === active ? "32px" : "10px",
                height: "10px", borderRadius: "10px",
                background: i === active ? "#C9A84C" : "rgba(74,10,18,0.2)",
                border: "none", cursor: "pointer",
                transition: "all 0.3s"
              }}
            />
          ))}
        </div>

        {/* All reviewer names */}
        <div style={{
          display: "flex", justifyContent: "center",
          gap: "12px", marginTop: "32px", flexWrap: "wrap"
        }}>
          {reviews.map((r, i) => (
            <button key={i} onClick={() => setActive(i)}
              style={{
                background: i === active ? "#4A0A12" : "white",
                color: i === active ? "#C9A84C" : "#4A0A12",
                border: "2px solid " + (i === active ? "#4A0A12" : "rgba(74,10,18,0.15)"),
                borderRadius: "40px", padding: "8px 18px",
                fontSize: "12px", fontWeight: 700,
                cursor: "pointer", transition: "all 0.3s"
              }}>
              {r.name.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
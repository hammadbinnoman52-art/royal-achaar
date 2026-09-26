import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProductGrid from "./ProductGrid";
import { products } from "../data/products";

export default function GheeProducts() {
  const ghee = products.filter(p => p.category === "Desi Ghee");

  return (
    <section style={{
      background: "linear-gradient(180deg, #FFFBF0 0%, #F7EDCF 100%)",
      padding: "84px 24px"
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "38px" }}
        >
          <p style={{
            color: "#B8860B", fontSize: "11px", fontWeight: 900,
            textTransform: "uppercase", letterSpacing: "0.42em", marginBottom: "10px"
          }}>
            Slow-Cooked The Old Way
          </p>
          <h2 style={{
            fontFamily: "Playfair Display, serif",
            color: "#4A3410", fontSize: "clamp(30px, 4.4vw, 46px)",
            fontWeight: 900, lineHeight: 1.05, margin: 0
          }}>
            Our Desi Ghee
          </h2>
          <div style={{
            width: "64px", height: "3px", borderRadius: "4px",
            background: "#E8B923", margin: "14px auto 0"
          }} />
          <Link to="/shop" style={{
            display: "inline-block", marginTop: "16px",
            color: "#8a5a2a", fontSize: "12px", fontWeight: 700,
            letterSpacing: "0.16em", textTransform: "uppercase",
            textDecoration: "underline", textUnderlineOffset: "5px"
          }}>
            View All
          </Link>
        </motion.div>

        {/* Two tins in the line — cap the width so the cards don't stretch
            to full-page size the way a 3- or 4-up row does. */}
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <ProductGrid products={ghee} columns={2} />
        </div>

        <div style={{ textAlign: "center", marginTop: "44px" }}>
          <Link to="/shop">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: "#4A3410", color: "#F0CE7A",
                border: "none", borderRadius: "40px",
                padding: "15px 38px", fontWeight: 900,
                fontSize: "12px", textTransform: "uppercase",
                letterSpacing: "0.22em", cursor: "pointer",
                boxShadow: "0 10px 30px rgba(74,52,16,0.22)"
              }}
            >
              Shop All Ghee →
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}

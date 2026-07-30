import { useState } from "react";
import { motion } from "framer-motion";
import ProductGrid from "../components/ProductGrid";
import { products } from "../data/products";

export default function Shop() {
  const categories = ["All", ...new Set(products.map(p => p.category))];
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? products
    : products.filter(p => p.category === active);

  return (
    <main style={{ paddingTop: "80px", background: "#FDF6E3", minHeight: "100vh" }}>

      {/* Hero Banner */}
      <div style={{
        background: "#4A0A12", padding: "80px 24px",
        textAlign: "center", position: "relative", overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.06,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='30' viewBox='0 0 52 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13 1L1 8L1 22L13 29L25 22L25 8L13 1ZM39 1L27 8L27 22L39 29L51 22L51 8L39 1Z' stroke='%23C9A84C' stroke-width='2' fill='none'/%3E%3C/svg%3E")`
        }} />
        <p style={{
          color: "#C9A84C", fontSize: "11px", fontWeight: 900,
          textTransform: "uppercase", letterSpacing: "0.5em", marginBottom: "16px"
        }}>
          Handcrafted With Love
        </p>
        <h1 style={{
          fontFamily: "Playfair Display, serif", color: "white",
          fontSize: "clamp(40px, 8vw, 80px)", fontWeight: 900, lineHeight: 1
        }}>
          Our <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Shop</span>
        </h1>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 24px 100px" }}>

        {/* Category Filters */}
        <div style={{
          display: "flex", gap: "12px", flexWrap: "wrap",
          justifyContent: "center", marginBottom: "56px"
        }}>
          {categories.map(cat => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActive(cat)}
              style={{
                background: active === cat ? "#4A0A12" : "white",
                color: active === cat ? "#C9A84C" : "#4A0A12",
                border: "2px solid " + (active === cat ? "#4A0A12" : "rgba(74,10,18,0.15)"),
                borderRadius: "40px", padding: "12px 26px",
                fontWeight: 800, fontSize: "12px",
                textTransform: "uppercase", letterSpacing: "0.15em",
                cursor: "pointer", transition: "all 0.3s"
              }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <ProductGrid products={filtered} />
      </div>
    </main>
  );
}

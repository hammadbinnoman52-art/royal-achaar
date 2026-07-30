import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      style={{
        background: "white", borderRadius: "24px", overflow: "hidden",
        border: "1px solid rgba(201,168,76,0.2)",
        boxShadow: "0 8px 30px rgba(107,15,26,0.06)",
        display: "flex", flexDirection: "column"
      }}
    >
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
        <div style={{ position: "relative", aspectRatio: "1/1" }}>
          <img src={product.image} alt={product.name}
               style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          {product.badge && (
            <div style={{
              position: "absolute", top: "16px", left: "16px",
              background: "#C9A84C", color: "#4A0A12",
              borderRadius: "20px", padding: "6px 14px",
              fontWeight: 900, fontSize: "10px",
              textTransform: "uppercase", letterSpacing: "0.1em"
            }}>
              {product.badge}
            </div>
          )}
        </div>
      </Link>

      <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
        <p style={{
          color: "#C9A84C", fontSize: "10px", fontWeight: 900,
          textTransform: "uppercase", letterSpacing: "0.3em", marginBottom: "8px"
        }}>
          {product.category} · {product.weight}
        </p>

        <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
          <h3 style={{
            fontFamily: "Playfair Display, serif",
            color: "#4A0A12", fontSize: "20px",
            fontWeight: 700, marginBottom: "12px"
          }}>
            {product.name}
          </h3>
        </Link>

        <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <p style={{
            fontFamily: "Playfair Display, serif",
            color: "#4A0A12", fontSize: "22px", fontWeight: 900
          }}>
            Rs. {product.price}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => addToCart(product)}
            style={{
              background: "#4A0A12", color: "#C9A84C",
              border: "none", borderRadius: "40px",
              padding: "10px 18px", display: "flex",
              alignItems: "center", gap: "8px",
              fontWeight: 900, fontSize: "11px",
              textTransform: "uppercase", letterSpacing: "0.1em",
              cursor: "pointer"
            }}
          >
            <ShoppingCart size={14} /> Add
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

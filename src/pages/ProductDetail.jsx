import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, ArrowLeft, Check } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { PlaceholderArt } from "../components/ProductCard";
import { useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) return (
    <div style={{ paddingTop: "120px", textAlign: "center", minHeight: "60vh" }}>
      <h2 style={{ color: "#4A0A12", fontFamily: "Playfair Display, serif", fontSize: "36px" }}>
        Product not found
      </h2>
      <Link to="/shop" style={{ color: "#C9A84C", fontWeight: 700, display: "block", marginTop: "20px" }}>
        ← Back to Shop
      </Link>
    </div>
  );

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main style={{ background: "#FDF6E3", minHeight: "100vh" }}>

      {/* Breadcrumb */}
      <div style={{ background: "#4A0A12", padding: "16px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", gap: "8px" }}>
          <Link to="/shop" style={{
            color: "#C9A84C", fontWeight: 700, fontSize: "12px",
            textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.1em",
            display: "flex", alignItems: "center", gap: "6px"
          }}>
            <ArrowLeft size={14} /> Shop
          </Link>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px" }}>/</span>
          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px", fontWeight: 600 }}>
            {product.name}
          </span>
        </div>
      </div>

      {/* Product Detail */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 24px" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "80px", alignItems: "start"
        }} className="detail-grid">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div style={{
              borderRadius: "32px", overflow: "hidden",
              border: "3px solid rgba(201,168,76,0.3)",
              boxShadow: "0 40px 80px rgba(74,10,18,0.15)",
              aspectRatio: "1/1", position: "relative"
            }}>
              {product.image ? (
                <img src={product.image} alt={product.name}
                     style={{
                       width: "100%", height: "100%", objectFit: "cover",
                       objectPosition: product.imagePosition || "center"
                     }} />
              ) : (
                <PlaceholderArt name={product.name} />
              )}
              {product.badge && (
                <div style={{
                  position: "absolute", top: "20px", left: "20px",
                  background: "#C9A84C", color: "#4A0A12",
                  borderRadius: "20px", padding: "6px 16px",
                  fontWeight: 900, fontSize: "11px",
                  textTransform: "uppercase", letterSpacing: "0.1em"
                }}>
                  {product.badge}
                </div>
              )}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p style={{
              color: "#C9A84C", fontSize: "11px", fontWeight: 900,
              textTransform: "uppercase", letterSpacing: "0.4em", marginBottom: "12px"
            }}>
              {product.category} · {product.weight}
            </p>

            <h1 style={{
              fontFamily: "Playfair Display, serif", color: "#4A0A12",
              fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 900,
              lineHeight: 1.1, marginBottom: "20px"
            }}>
              {product.name}
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
              {"★★★★★".split("").map((s, i) => (
                <span key={i} style={{ color: "#C9A84C", fontSize: "18px" }}>{s}</span>
              ))}
              <span style={{ color: "#666", fontSize: "13px", fontWeight: 600 }}>(48 reviews)</span>
            </div>

            <p style={{
              color: "#666", lineHeight: 1.9, fontSize: "15px", marginBottom: "32px"
            }}>
              {product.desc}
            </p>

            {/* Features */}
            {["Handmade in small batches", "No artificial preservatives", "Vacuum sealed for freshness", "Ships within 24 hours"].map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <div style={{
                  width: "20px", height: "20px", borderRadius: "50%",
                  background: "#4A0A12", display: "flex",
                  alignItems: "center", justifyContent: "center", flexShrink: 0
                }}>
                  <Check size={12} color="#C9A84C" />
                </div>
                <span style={{ color: "#444", fontSize: "14px", fontWeight: 600 }}>{f}</span>
              </div>
            ))}

            {/* Price + Add to Cart */}
            <div style={{
              marginTop: "40px", padding: "32px",
              background: "white", borderRadius: "24px",
              border: "2px solid rgba(201,168,76,0.2)",
              boxShadow: "0 10px 30px rgba(74,10,18,0.06)"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                <div>
                  <p style={{ color: "#999", fontSize: "12px", fontWeight: 700, textTransform: "uppercase" }}>Price</p>
                  <p style={{
                    fontFamily: "Playfair Display, serif",
                    color: "#4A0A12", fontSize: "42px", fontWeight: 900, lineHeight: 1
                  }}>
                    Rs. {product.price}
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ color: "#999", fontSize: "12px", fontWeight: 700 }}>Weight</p>
                  <p style={{ color: "#4A0A12", fontSize: "18px", fontWeight: 900 }}>{product.weight}</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                onClick={handleAdd}
                style={{
                  width: "100%", padding: "18px",
                  background: added ? "#2d6a4f" : "#4A0A12",
                  color: added ? "white" : "#C9A84C",
                  border: "none", borderRadius: "16px",
                  fontWeight: 900, fontSize: "13px",
                  textTransform: "uppercase", letterSpacing: "0.2em",
                  cursor: "pointer", transition: "background 0.3s",
                  display: "flex", alignItems: "center",
                  justifyContent: "center", gap: "10px"
                }}
              >
                {added ? <><Check size={16} /> Added to Cart!</> : <><ShoppingCart size={16} /> Add to Cart</>}
              </motion.button>

              <p style={{
                textAlign: "center", marginTop: "14px",
                color: "#999", fontSize: "12px", fontWeight: 600
              }}>
                📞 Order via WhatsApp: 0333-4624242
              </p>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div style={{ marginTop: "100px" }}>
            <h2 style={{
              fontFamily: "Playfair Display, serif", color: "#4A0A12",
              fontSize: "36px", fontWeight: 900, marginBottom: "40px"
            }}>
              You Might Also Like
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
              {related.map(p => (
                <Link key={p.id} to={`/product/${p.id}`} style={{ textDecoration: "none" }}>
                  <motion.div whileHover={{ y: -6 }}
                    style={{
                      background: "white", borderRadius: "20px", overflow: "hidden",
                      border: "1px solid rgba(201,168,76,0.2)",
                      boxShadow: "0 8px 24px rgba(74,10,18,0.06)"
                    }}>
                    <div style={{ height: "200px" }}>
                      {p.image ? (
                        <img src={p.image} alt={p.name} loading="lazy"
                             style={{
                               width: "100%", height: "100%", display: "block",
                               objectFit: "cover",
                               objectPosition: p.imagePosition || "center"
                             }} />
                      ) : (
                        <PlaceholderArt name={p.name} />
                      )}
                    </div>
                    <div style={{ padding: "20px" }}>
                      <p style={{ color: "#C9A84C", fontSize: "10px", fontWeight: 900,
                                  textTransform: "uppercase", letterSpacing: "0.3em" }}>{p.category}</p>
                      <p style={{ color: "#4A0A12", fontWeight: 800, fontSize: "16px", margin: "6px 0" }}>{p.name}</p>
                      <p style={{ color: "#4A0A12", fontWeight: 900, fontFamily: "Playfair Display, serif", fontSize: "20px" }}>
                        Rs. {p.price}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .detail-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </main>
  );
}
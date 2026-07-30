import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import FeaturedBanner from "../components/FeaturedBanner";
import Testimonials from "../components/Testimonials";
import ProductGrid from "../components/ProductGrid";
import { products } from "../data/products";

export default function Home() {
  const bestsellers = products.filter(p => p.badge).slice(0, 4);

  return (
    <main>
      <Hero />
      <WhyUs />

      <section style={{ background: "#FDF6E3", padding: "100px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
              Fan Favorites
            </p>
            <h2 style={{
              fontFamily: "Playfair Display, serif",
              color: "#4A0A12", fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 900, lineHeight: 1.1
            }}>
              Our Bestsellers
            </h2>
            <div style={{
              width: "80px", height: "4px", borderRadius: "4px",
              background: "#C9A84C", margin: "20px auto 0"
            }} />
          </motion.div>

          <ProductGrid products={bestsellers} />

          <div style={{ textAlign: "center", marginTop: "56px" }}>
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: "#4A0A12", color: "#C9A84C",
                  border: "none", borderRadius: "40px",
                  padding: "16px 40px", fontWeight: 900,
                  fontSize: "12px", textTransform: "uppercase",
                  letterSpacing: "0.25em", cursor: "pointer",
                  boxShadow: "0 10px 30px rgba(74,10,18,0.2)"
                }}
              >
                View Full Shop →
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      <FeaturedBanner />
      <Testimonials />
    </main>
  );
}

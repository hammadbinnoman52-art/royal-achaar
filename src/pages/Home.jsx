import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import FeaturedBanner from "../components/FeaturedBanner";
import Testimonials from "../components/Testimonials";
import ProductGrid from "../components/ProductGrid";
import HoneyBanner from "../components/HoneyBanner";
import HoneyProducts from "../components/HoneyProducts";
import HoneyWhyUs from "../components/HoneyWhyUs";
import { products } from "../data/products";

export default function Home() {
  const bestsellers = products.filter(p => p.badge).slice(0, 3);

  return (
    <main>
      <Hero />

      <section style={{ background: "#FDF6E3", padding: "84px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: "center", marginBottom: "38px" }}
          >
            <p style={{
              color: "#C9A84C", fontSize: "11px", fontWeight: 900,
              textTransform: "uppercase", letterSpacing: "0.42em", marginBottom: "10px"
            }}>
              Fan Favorites
            </p>
            <h2 style={{
              fontFamily: "Playfair Display, serif",
              color: "#4A0A12", fontSize: "clamp(30px, 4.4vw, 46px)",
              fontWeight: 900, lineHeight: 1.05, margin: 0
            }}>
              Our Bestsellers
            </h2>
            <div style={{
              width: "64px", height: "3px", borderRadius: "4px",
              background: "#C9A84C", margin: "14px auto 0"
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

          <ProductGrid products={bestsellers} />

          <div style={{ textAlign: "center", marginTop: "44px" }}>
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: "#4A0A12", color: "#C9A84C",
                  border: "none", borderRadius: "40px",
                  padding: "15px 38px", fontWeight: 900,
                  fontSize: "12px", textTransform: "uppercase",
                  letterSpacing: "0.22em", cursor: "pointer",
                  boxShadow: "0 10px 30px rgba(74,10,18,0.2)"
                }}
              >
                View Full Shop →
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      <WhyUs />

      {/* Honey line — mirrors the achaar flow above: banner → products → why-choose */}
      <HoneyBanner />
      <HoneyProducts />
      <HoneyWhyUs />

      <FeaturedBanner />
      <Testimonials />
    </main>
  );
}

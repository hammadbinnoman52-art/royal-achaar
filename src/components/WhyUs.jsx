import { motion } from "framer-motion";
import { Utensils, Soup, Layers, Award } from "lucide-react";

const reasons = [
  {
    Icon: Utensils,
    title: "Premium Ingredients, Pure Taste",
    desc: "We carefully select fresh fruits and vegetables and never use artificial flavors or chemicals — only pure, natural ingredients for authentic taste in every bite.",
  },
  {
    Icon: Soup,
    title: "Traditional Recipes with a Healthy Touch",
    desc: "Our pickles are crafted using time-honored recipes that follow natural fermentation methods — delivering a perfect balance of flavor and digestive benefits.",
  },
  {
    Icon: Layers,
    title: "Prepared in Clean, Small Batches",
    desc: "Each batch is made in a hygienic environment and in limited quantities to ensure consistent flavor, freshness, and quality you can trust.",
    featured: true,
  },
  {
    Icon: Award,
    title: "No Compromise on Quality",
    desc: "We never take shortcuts — every pickle is prepared with premium ingredients, attention to detail, and strict quality standards.",
  },
];

export default function WhyUs() {
  return (
    <section className="whyus-section">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "44px" }}
        >
          <h2 className="whyus-heading">Why Choose Royale Achaar Pickles?</h2>

          <div className="whyus-divider" aria-hidden="true">
            <span className="whyus-divider-line" />
            <span className="whyus-diamond" />
            <span className="whyus-divider-line" />
          </div>
        </motion.div>

        {/* 4 cards across */}
        <div className="whyus-grid">
          {reasons.map(({ Icon, title, desc, featured }, i) => (
            <motion.div
              key={title}
              className={featured ? "wcard is-featured" : "wcard"}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="wcard-num">{String(i + 1).padStart(2, "0")}</span>

              <div className="wcard-icon">
                <Icon size={30} strokeWidth={1.5} color={featured ? "#C9A84C" : "#B08F38"} />
              </div>

              <h3 className="wcard-title">{title}</h3>
              <p className="wcard-desc">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

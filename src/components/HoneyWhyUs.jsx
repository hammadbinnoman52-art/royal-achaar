import { motion } from "framer-motion";
import { Hexagon, Droplets, Thermometer, ShieldCheck } from "lucide-react";

const reasons = [
  {
    Icon: Hexagon,
    title: "Sourced Straight From The Hive",
    desc: "Every jar is collected from our own beekeepers in the northern valleys — no middlemen, no blending with syrup or sugar water.",
  },
  {
    Icon: Droplets,
    title: "Raw, Never Pasteurized",
    desc: "We only strain out the wax. The natural pollen, enzymes, and aroma stay exactly where nature put them — in the honey.",
  },
  {
    Icon: Thermometer,
    title: "Cold Extracted, Small Batch",
    desc: "Extracted without heat and bottled in limited quantities, so the taste and natural goodness of each harvest stays intact.",
    featured: true,
  },
  {
    Icon: ShieldCheck,
    title: "Purity You Can Test",
    desc: "Thick, slow-pouring, and naturally crystallizing over time — the honest signs of real honey, in every single jar.",
  },
];

export default function HoneyWhyUs() {
  return (
    <section className="whyus-section is-honey">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "44px" }}
        >
          <h2 className="whyus-heading">Why Choose Royale Honey?</h2>

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
                <Icon size={30} strokeWidth={1.5} color={featured ? "#E8C46A" : "#B8860B"} />
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

import { motion } from "framer-motion";
import { Flame, Milk, Leaf, ShieldCheck } from "lucide-react";

const reasons = [
  {
    Icon: Milk,
    title: "Churned From Pure Cream",
    desc: "Made the traditional bilona way — fresh cream churned into butter, then slow-cooked down to ghee. No vegetable oil, no shortcuts.",
  },
  {
    Icon: Flame,
    title: "Slow-Cooked In Small Batches",
    desc: "Simmered low and steady until it turns golden and grainy, so the nutty aroma and deep flavor develop the way they should.",
  },
  {
    Icon: Leaf,
    title: "Zero Additives, Zero Preservatives",
    desc: "Nothing added and nothing taken away — just clarified butter, exactly as it has been made in desi kitchens for generations.",
    featured: true,
  },
  {
    Icon: ShieldCheck,
    title: "Grainy, Golden & Aromatic",
    desc: "Sets into fine golden granules with a rich, unmistakable aroma — the honest signs of real desi ghee, in every tin.",
  },
];

export default function GheeWhyUs() {
  return (
    <section className="whyus-section is-ghee">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "44px" }}
        >
          <h2 className="whyus-heading">Why Choose Royale Desi Ghee?</h2>

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
                <Icon size={30} strokeWidth={1.5} color={featured ? "#F0CE7A" : "#B8860B"} />
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

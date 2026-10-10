import { useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle, Film } from "lucide-react";
import { reviewVideos } from "../data/reviews";

function VideoPlaceholder() {
  return (
    <div className="rev-placeholder">
      <div className="rev-placeholder-pattern" />
      <Film size={30} color="#C9A84C" style={{ opacity: 0.8 }} />
      <span className="rev-placeholder-text">Video coming soon</span>
    </div>
  );
}

function ReviewCard({ review, index }) {
  // If the file is missing or fails to load we fall back to the placeholder
  // so a broken entry never shows an empty black player.
  const [failed, setFailed] = useState(false);
  const showVideo = review.src && !failed;

  return (
    <motion.article
      className="rev-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="rev-media">
        {showVideo ? (
          <video
            controls
            playsInline
            preload="metadata"
            poster={review.poster || undefined}
            onError={() => setFailed(true)}
          >
            <source src={review.src} />
            Your browser does not support the video tag.
          </video>
        ) : (
          <VideoPlaceholder />
        )}
      </div>

      {review.quote && <p className="rev-quote">“{review.quote}”</p>}
      <div className="rev-meta">
        <span className="rev-name">{review.name}</span>
        {review.location && <span className="rev-loc">{review.location}</span>}
      </div>
    </motion.article>
  );
}

export default function Reviews() {
  return (
    <main style={{ background: "#FDF6E3", minHeight: "100vh" }}>

      {/* Hero Banner */}
      <div style={{
        background: "#4A0A12", padding: "80px 24px",
        textAlign: "center", position: "relative", overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.06,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='30' viewBox='0 0 52 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13 1L1 8L1 22L13 29L25 22L25 8L13 1ZM39 1L27 8L27 22L39 29L51 22L51 8L39 1Z' stroke='%23C9A84C' stroke-width='2' fill='none'/%3E%3C/svg%3E")`
        }} />
        <p style={{ color: "#C9A84C", fontSize: "11px", fontWeight: 900,
                    textTransform: "uppercase", letterSpacing: "0.5em", marginBottom: "16px" }}>
          Straight From Our Customers
        </p>
        <h1 style={{ fontFamily: "Playfair Display, serif", color: "white",
                     fontSize: "clamp(40px, 8vw, 80px)", fontWeight: 900, lineHeight: 1 }}>
          Video <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Reviews</span>
        </h1>
      </div>

      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "60px 24px 90px" }}>
        {reviewVideos.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#777" }}>
            <PlayCircle size={40} color="#C9A84C" style={{ marginBottom: "16px" }} />
            <p style={{ fontSize: "15px" }}>No video reviews yet — check back soon.</p>
          </div>
        ) : (
          <div className="rev-grid">
            {reviewVideos.map((r, i) => (
              <ReviewCard key={r.id} review={r} index={i} />
            ))}
          </div>
        )}
      </div>

      <style>{`
        .rev-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 900px)  { .rev-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px)  { .rev-grid { grid-template-columns: 1fr; } }

        .rev-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(201, 168, 76, 0.25);
          box-shadow: 0 10px 30px rgba(74, 10, 18, 0.07);
          display: flex;
          flex-direction: column;
        }
        .rev-media { background: #2d0509; height: 460px; }
        @media (max-width: 900px) { .rev-media { height: 440px; } }
        @media (max-width: 560px) { .rev-media { height: 420px; } }
        .rev-media video {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain;
          background: #2d0509;
        }

        .rev-placeholder {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: linear-gradient(135deg, #4A0A12 0%, #6B0F1A 55%, #2d0509 100%);
        }
        .rev-placeholder-pattern {
          position: absolute; inset: 0; opacity: 0.12;
          background-image: url("data:image/svg+xml,%3Csvg width='52' height='30' viewBox='0 0 52 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13 1L1 8L1 22L13 29L25 22L25 8L13 1ZM39 1L27 8L27 22L39 29L51 22L51 8L39 1Z' stroke='%23C9A84C' stroke-width='2' fill='none'/%3E%3C/svg%3E");
          background-size: 40px 24px;
        }
        .rev-placeholder-text {
          color: #C9A84C; font-family: 'Playfair Display', serif;
          font-size: 13px; font-weight: 700; letter-spacing: 0.04em; opacity: 0.85;
        }

        .rev-quote {
          color: #4A0A12; font-size: 14px; line-height: 1.7;
          font-style: italic; margin: 18px 20px 0;
        }
        .rev-meta {
          display: flex; align-items: baseline; gap: 10px;
          padding: 12px 20px 20px; margin-top: auto;
        }
        .rev-name {
          color: #4A0A12; font-weight: 800; font-size: 14px;
          font-family: 'Playfair Display', serif;
        }
        .rev-loc {
          color: #C9A84C; font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.12em;
        }
      `}</style>
    </main>
  );
}

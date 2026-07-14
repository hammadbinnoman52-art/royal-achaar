import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.phone) return;
    const text = `*New Order/Inquiry — Royal Foods*%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Message:* ${form.message}`;
    window.open(`https://wa.me/923334624242?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const inputStyle = {
    width: "100%", padding: "16px 20px",
    border: "2px solid rgba(201,168,76,0.25)",
    borderRadius: "14px", fontSize: "14px",
    fontFamily: "Montserrat, sans-serif",
    background: "white", color: "#1A1A1A",
    outline: "none", boxSizing: "border-box",
    transition: "border 0.3s"
  };

  return (
    <main style={{ paddingTop: "80px", background: "#FDF6E3", minHeight: "100vh" }}>

      {/* Banner */}
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
          Get In Touch
        </p>
        <h1 style={{ fontFamily: "Playfair Display, serif", color: "white",
                     fontSize: "clamp(40px, 8vw, 80px)", fontWeight: 900, lineHeight: 1 }}>
          Contact <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Us</span>
        </h1>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1.4fr",
          gap: "60px", alignItems: "start"
        }} className="contact-grid">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#4A0A12",
                         fontSize: "32px", fontWeight: 900, marginBottom: "32px" }}>
              We'd Love to Hear From You
            </h2>

            {[
              { icon: <Phone size={20} color="#C9A84C" />, label: "Call / WhatsApp",
                lines: ["0333-4624242", "0321-4466009"] },
              { icon: <MapPin size={20} color="#C9A84C" />, label: "Address",
                lines: ["Judicial Colony,", "Main Raiwind Road, Lahore"] },
              { icon: <Clock size={20} color="#C9A84C" />, label: "Hours",
                lines: ["Mon–Sat: 9am – 8pm", "Sunday: 10am – 5pm"] },
            ].map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  display: "flex", gap: "20px", alignItems: "flex-start",
                  padding: "24px", background: "white", borderRadius: "20px",
                  border: "1px solid rgba(201,168,76,0.2)",
                  boxShadow: "0 4px 20px rgba(74,10,18,0.05)",
                  marginBottom: "16px"
                }}
              >
                <div style={{
                  width: "48px", height: "48px", borderRadius: "14px",
                  background: "#4A0A12", display: "flex",
                  alignItems: "center", justifyContent: "center", flexShrink: 0
                }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ color: "#C9A84C", fontSize: "10px", fontWeight: 900,
                              textTransform: "uppercase", letterSpacing: "0.3em", marginBottom: "6px" }}>
                    {item.label}
                  </p>
                  {item.lines.map((l, j) => (
                    <p key={j} style={{ color: "#4A0A12", fontWeight: 700, fontSize: "15px", lineHeight: 1.6 }}>{l}</p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Payment */}
            <div style={{
              marginTop: "24px", padding: "20px 24px",
              background: "#4A0A12", borderRadius: "20px",
              display: "flex", alignItems: "center", gap: "16px"
            }}>
              <span style={{ fontSize: "32px" }}>💳</span>
              <div>
                <p style={{ color: "#C9A84C", fontWeight: 900, fontSize: "13px" }}>JazzCash / EasyPaisa</p>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px" }}>Cash on Delivery also available</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              background: "white", borderRadius: "32px",
              padding: "48px", border: "2px solid rgba(201,168,76,0.2)",
              boxShadow: "0 20px 60px rgba(74,10,18,0.08)"
            }}
          >
            <h3 style={{ fontFamily: "Playfair Display, serif", color: "#4A0A12",
                         fontSize: "28px", fontWeight: 900, marginBottom: "8px" }}>
              Send a Message
            </h3>
            <p style={{ color: "#999", fontSize: "13px", marginBottom: "32px" }}>
              We'll reply via WhatsApp within minutes.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ color: "#4A0A12", fontSize: "12px", fontWeight: 700,
                                textTransform: "uppercase", letterSpacing: "0.1em",
                                display: "block", marginBottom: "8px" }}>
                  Your Name *
                </label>
                <input
                  style={inputStyle}
                  placeholder="e.g. Ayesha Malik"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  onFocus={e => e.target.style.borderColor = "#C9A84C"}
                  onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.25)"}
                />
              </div>

              <div>
                <label style={{ color: "#4A0A12", fontSize: "12px", fontWeight: 700,
                                textTransform: "uppercase", letterSpacing: "0.1em",
                                display: "block", marginBottom: "8px" }}>
                  Phone / WhatsApp *
                </label>
                <input
                  style={inputStyle}
                  placeholder="03XX-XXXXXXX"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  onFocus={e => e.target.style.borderColor = "#C9A84C"}
                  onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.25)"}
                />
              </div>

              <div>
                <label style={{ color: "#4A0A12", fontSize: "12px", fontWeight: 700,
                                textTransform: "uppercase", letterSpacing: "0.1em",
                                display: "block", marginBottom: "8px" }}>
                  Order / Message
                </label>
                <textarea
                  style={{ ...inputStyle, height: "140px", resize: "vertical" }}
                  placeholder="e.g. I want 3 jars of Mix Achar and 1 jar of Mango Achar..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  onFocus={e => e.target.style.borderColor = "#C9A84C"}
                  onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.25)"}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                style={{
                  width: "100%", padding: "18px",
                  background: sent ? "#2d6a4f" : "#4A0A12",
                  color: sent ? "white" : "#C9A84C",
                  border: "none", borderRadius: "14px",
                  fontWeight: 900, fontSize: "13px",
                  textTransform: "uppercase", letterSpacing: "0.2em",
                  cursor: "pointer", transition: "background 0.3s",
                  display: "flex", alignItems: "center",
                  justifyContent: "center", gap: "10px"
                }}
              >
                <Send size={16} />
                {sent ? "Opening WhatsApp..." : "Send via WhatsApp"}
              </motion.button>

              <p style={{ textAlign: "center", color: "#bbb", fontSize: "12px" }}>
                This will open WhatsApp with your message pre-filled.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
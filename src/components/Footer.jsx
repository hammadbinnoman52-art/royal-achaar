import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ background: "#2d0509", borderTop: "2px solid rgba(201,168,76,0.2)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 24px 40px" }}>

        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
          gap: "40px", marginBottom: "60px"
        }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "50%",
                background: "#C9A84C", display: "flex",
                alignItems: "center", justifyContent: "center"
              }}>
                <span style={{ color: "#4A0A12", fontFamily: "Playfair Display, serif",
                               fontWeight: 900, fontSize: "20px" }}>R</span>
              </div>
              <div>
                <p style={{ color: "#C9A84C", fontFamily: "Playfair Display, serif",
                             fontWeight: 700, fontSize: "18px", lineHeight: 1 }}>Royal Foods</p>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "10px",
                             letterSpacing: "0.3em", textTransform: "uppercase" }}>Authentic Flavors</p>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.8, fontSize: "13px", maxWidth: "260px" }}>
              Handcrafted pickles made with love in Lahore since 1990. Pure ingredients, timeless taste.
            </p>
          </div>

          {/* Links */}
          <div>
            <p style={{ color: "#C9A84C", fontSize: "11px", fontWeight: 900,
                        textTransform: "uppercase", letterSpacing: "0.3em", marginBottom: "20px" }}>
              Pages
            </p>
            {["/", "/shop", "/about", "/contact"].map((path, i) => (
              <Link key={path} to={path} style={{
                display: "block", color: "rgba(255,255,255,0.55)",
                textDecoration: "none", fontSize: "13px", fontWeight: 600,
                marginBottom: "12px", transition: "color 0.3s"
              }}
              onMouseEnter={e => e.target.style.color = "#C9A84C"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.55)"}
              >
                {["Home", "Shop", "About", "Contact"][i]}
              </Link>
            ))}
          </div>

          {/* Products */}
          <div>
            <p style={{ color: "#C9A84C", fontSize: "11px", fontWeight: 900,
                        textTransform: "uppercase", letterSpacing: "0.3em", marginBottom: "20px" }}>
              Products
            </p>
            {["Achar", "Desi Ghee", "Infused Honey", "Bulk Orders"].map(item => (
              <p key={item} style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px",
                                     fontWeight: 600, marginBottom: "12px" }}>
                {item}
              </p>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ color: "#C9A84C", fontSize: "11px", fontWeight: 900,
                        textTransform: "uppercase", letterSpacing: "0.3em", marginBottom: "20px" }}>
              Contact
            </p>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px",
                        fontWeight: 600, marginBottom: "10px" }}>📞 0333-4624242</p>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px",
                        fontWeight: 600, marginBottom: "10px" }}>📞 0321-4466009</p>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px",
                        fontWeight: 600, marginBottom: "10px" }}>📍 Judicial Colony, Lahore</p>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px",
                        fontWeight: 600 }}>💳 JazzCash / COD</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(201,168,76,0.15)",
          paddingTop: "24px", display: "flex",
          justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: "12px"
        }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px" }}>
            © 2025 Royal Foods. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px" }}>
            Made with ❤️ in Lahore, Pakistan
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
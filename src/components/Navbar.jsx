import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, X, Search, Heart, User, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

const ANNOUNCEMENTS = [
  "Free delivery on orders over PKR 2,000/-",
  "100% hygienic preparation, no shortcuts.",
  "Honoring recipes and practices from Jhang.",
  "Cash on delivery available nationwide.",
];

const links = [
  { to: "/",        label: "Home"        },
  { to: "/shop",    label: "Shop"        },
  { to: "/shop",    label: "Top Selling" },
  { to: "/contact", label: "Contact"     },
];

function AnnouncementBar() {
  const items = [...ANNOUNCEMENTS, ...ANNOUNCEMENTS];
  return (
    <div style={{ background: "#2d0509", overflow: "hidden", height: "36px" }} className="announcement-bar">
      <div className="marquee-track" style={{ display: "flex", alignItems: "center", height: "100%", whiteSpace: "nowrap" }}>
        {items.map((text, i) => (
          <span key={i} style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            color: "rgba(255,255,255,0.85)", fontSize: "12px", fontWeight: 600,
            letterSpacing: "0.03em", padding: "0 28px"
          }}>
            <Zap size={13} color="#C9A84C" fill="#C9A84C" />
            {text}
          </span>
        ))}
      </div>
      <style>{`
        .marquee-track {
          width: max-content;
          animation: marquee-scroll 28s linear infinite;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default function Navbar() {
  const { cart, setIsOpen } = useCart();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const itemCount = cart.reduce((s, i) => s + i.qty, 0);

  const submitSearch = (e) => {
    e.preventDefault();
    navigate(search.trim() ? `/shop?search=${encodeURIComponent(search.trim())}` : "/shop");
    setSearch("");
  };

  return (
    <header>
      <AnnouncementBar />

      {/* Utility bar */}
      <div style={{ background: "white", borderBottom: "1px solid rgba(74,10,18,0.08)" }}>
        <div style={{
          maxWidth: "1280px", margin: "0 auto", padding: "18px 24px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "24px", flexWrap: "wrap"
        }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{
              width: "52px", height: "52px", borderRadius: "50%",
              border: "2px solid #4A0A12", display: "flex",
              alignItems: "center", justifyContent: "center", flexShrink: 0
            }}>
              <span style={{
                color: "#4A0A12", fontFamily: "Playfair Display, serif",
                fontWeight: 900, fontSize: "20px"
              }}>R</span>
            </div>
            <div>
              <p style={{
                color: "#4A0A12", fontFamily: "Playfair Display, serif",
                fontWeight: 700, fontSize: "20px", lineHeight: 1, margin: 0
              }}>Royal Achaar</p>
              <p style={{
                color: "#999", fontSize: "9px",
                letterSpacing: "0.35em", textTransform: "uppercase", margin: "4px 0 0"
              }}>Authentic Flavors</p>
            </div>
          </Link>

          {/* Right cluster */}
          <div className="utility-right" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap", justifyContent: "flex-end" }}>
              <p className="cs-line" style={{ margin: 0, fontSize: "13px", color: "#4A0A12" }}>
                Customer Service <strong>0311&nbsp;4649627</strong>
              </p>
              <form onSubmit={submitSearch} style={{ position: "relative" }}>
                <input
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search pure pickles..."
                  style={{
                    width: "220px", padding: "9px 40px 9px 14px",
                    borderRadius: "6px", border: "1px solid rgba(74,10,18,0.2)",
                    fontSize: "13px", outline: "none", background: "#FAFAF7"
                  }}
                  className="search-input"
                />
                <button type="submit" style={{
                  position: "absolute", right: 0, top: 0, height: "100%",
                  width: "36px", background: "#4A0A12", border: "none",
                  borderRadius: "0 6px 6px 0", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  <Search size={15} color="white" />
                </button>
              </form>
            </div>

            <p className="free-delivery-badge" style={{
              margin: 0, background: "#FDF3D8", color: "#4A0A12",
              border: "1px solid #C9A84C", borderRadius: "6px",
              padding: "6px 14px", fontSize: "11px", fontWeight: 800,
              letterSpacing: "0.03em"
            }}>
              FREE DELIVERY ON ORDERS OVER PKR 2,000/-
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
              <button onClick={() => setIsOpen(true)} style={{
                background: "none", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", gap: "8px", padding: 0
              }}>
                <span style={{ position: "relative" }}>
                  <ShoppingCart size={19} color="#4A0A12" />
                  {itemCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }} animate={{ scale: 1 }}
                      style={{
                        position: "absolute", top: "-8px", right: "-8px",
                        background: "#C9302C", color: "white",
                        width: "16px", height: "16px", borderRadius: "50%",
                        fontSize: "9px", fontWeight: 900,
                        display: "flex", alignItems: "center", justifyContent: "center"
                      }}
                    >
                      {itemCount}
                    </motion.span>
                  )}
                </span>
                <span className="icon-label" style={{ fontSize: "13px", color: "#4A0A12" }}>Shopping cart</span>
              </button>

              <button className="icon-label-btn" style={{
                background: "none", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", gap: "8px", padding: 0
              }}>
                <Heart size={19} color="#4A0A12" />
                <span className="icon-label" style={{ fontSize: "13px", color: "#4A0A12" }}>My wish list</span>
              </button>

              <Link to="/signin" className="icon-label-btn" style={{
                background: "none", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", gap: "8px", padding: 0,
                textDecoration: "none"
              }}>
                <User size={19} color="#4A0A12" />
                <span className="icon-label" style={{ fontSize: "13px", color: "#4A0A12" }}>Sign in</span>
              </Link>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="hamburger"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                {menuOpen ? <X color="#4A0A12" size={24} /> : <Menu color="#4A0A12" size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky nav links bar */}
      <nav style={{
        background: "#C9A84C", position: "sticky", top: 0, zIndex: 50,
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)"
      }}>
        <div className="desktop-nav" style={{
          maxWidth: "1280px", margin: "0 auto", padding: "0 24px",
          display: "flex", alignItems: "center", justifyContent: "center", gap: "48px",
          height: "52px"
        }}>
          {links.map((l, i) => (
            <NavLink key={l.label} to={l.to}
              style={({ isActive }) => ({
                color: "#4A0A12",
                borderBottom: isActive && l.label !== "Top Selling" ? "2px solid #4A0A12" : "2px solid transparent",
                paddingBottom: "3px", fontWeight: 800,
                fontSize: "12px", letterSpacing: "0.15em",
                textTransform: "uppercase", textDecoration: "none",
                transition: "all 0.2s"
              })}
              end={l.to === "/"}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: "hidden" }}
              className="mobile-menu"
            >
              {links.map((l, i) => (
                <NavLink
                  key={l.label + i}
                  to={l.to}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "block", padding: "16px 28px",
                    color: "#4A0A12", fontWeight: 800, fontSize: "13px",
                    letterSpacing: "0.15em", textTransform: "uppercase",
                    textDecoration: "none",
                    borderTop: "1px solid rgba(74,10,18,0.15)"
                  }}
                >
                  {l.label}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Responsive styles */}
      <style>{`
        .desktop-nav { display: flex !important; }
        .hamburger   { display: none !important; }
        .icon-label  { display: inline; }

        @media (max-width: 900px) {
          .cs-line, .free-delivery-badge, .icon-label { display: none !important; }
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: block !important; }
          .search-input { width: 140px !important; }
        }
      `}</style>
    </header>
  );
}

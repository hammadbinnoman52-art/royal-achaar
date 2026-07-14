import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart, setIsOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const itemCount = cart.reduce((s, i) => s + i.qty, 0);

  const links = [
    { to: "/",        label: "Home"    },
    { to: "/shop",    label: "Shop"    },
    { to: "/about",   label: "About"   },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav style={{
      background: "#2d0509",
      borderBottom: "2px solid #C9A84C",
      position: "fixed", top: 0, width: "100%", zIndex: 50,
      boxShadow: "0 4px 30px rgba(0,0,0,0.4)"
    }}>
      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        padding: "0 24px", height: "72px",
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>

        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            width: "44px", height: "44px", borderRadius: "50%",
            background: "#C9A84C", display: "flex",
            alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 12px rgba(201,168,76,0.4)"
          }}>
            <span style={{
              color: "#2d0509", fontFamily: "Playfair Display, serif",
              fontWeight: 900, fontSize: "20px"
            }}>R</span>
          </div>
          <div>
            <p style={{
              color: "#C9A84C", fontFamily: "Playfair Display, serif",
              fontWeight: 700, fontSize: "18px", lineHeight: 1, margin: 0
            }}>Royal Foods</p>
            <p style={{
              color: "rgba(255,255,255,0.4)", fontSize: "9px",
              letterSpacing: "0.35em", textTransform: "uppercase", margin: 0
            }}>Authentic Flavors</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "36px" }}
             className="desktop-nav">
          {links.map(l => (
            <NavLink key={l.to} to={l.to}
              style={({ isActive }) => ({
                color: isActive ? "#C9A84C" : "rgba(255,255,255,0.65)",
                borderBottom: isActive ? "2px solid #C9A84C" : "2px solid transparent",
                paddingBottom: "3px", fontWeight: 700,
                fontSize: "11px", letterSpacing: "0.2em",
                textTransform: "uppercase", textDecoration: "none",
                transition: "all 0.3s"
              })}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Right Side */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>

          {/* Cart Button */}
          <button onClick={() => setIsOpen(true)}
            style={{
              background: "none", border: "none",
              cursor: "pointer", position: "relative",
              padding: "8px"
            }}>
            <ShoppingCart color="#C9A84C" size={22} />
            {itemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                style={{
                  position: "absolute", top: 0, right: 0,
                  background: "#C9A84C", color: "#2d0509",
                  width: "18px", height: "18px", borderRadius: "50%",
                  fontSize: "10px", fontWeight: 900,
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}
              >
                {itemCount}
              </motion.span>
            )}
          </button>

          {/* Order Now Button — desktop only */}
          <Link to="/contact" className="order-btn" style={{
            background: "#C9A84C", color: "#2d0509",
            padding: "10px 22px", borderRadius: "40px",
            fontWeight: 900, fontSize: "11px",
            textTransform: "uppercase", letterSpacing: "0.2em",
            textDecoration: "none", whiteSpace: "nowrap"
          }}>
            Order Now
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            {menuOpen
              ? <X color="#C9A84C" size={24} />
              : <Menu color="#C9A84C" size={24} />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ background: "#1a0305", overflow: "hidden", borderTop: "1px solid rgba(201,168,76,0.2)" }}
          >
            {links.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.06 }}
              >
                <NavLink
                  to={l.to}
                  onClick={() => setMenuOpen(false)}
                  style={({ isActive }) => ({
                    display: "block", padding: "16px 28px",
                    color: isActive ? "#C9A84C" : "rgba(255,255,255,0.65)",
                    fontWeight: 700, fontSize: "13px",
                    letterSpacing: "0.2em", textTransform: "uppercase",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(201,168,76,0.1)",
                    background: isActive ? "rgba(201,168,76,0.05)" : "transparent"
                  })}
                >
                  {l.label}
                </NavLink>
              </motion.div>
            ))}

            <div style={{ padding: "16px 28px" }}>
              <Link to="/contact" onClick={() => setMenuOpen(false)}
                style={{
                  display: "block", textAlign: "center",
                  background: "#C9A84C", color: "#2d0509",
                  padding: "12px", borderRadius: "40px",
                  fontWeight: 900, fontSize: "12px",
                  textTransform: "uppercase", letterSpacing: "0.2em",
                  textDecoration: "none"
                }}>
                Order Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive styles */}
      <style>{`
        .desktop-nav { display: flex !important; }
        .order-btn   { display: block !important; }
        .hamburger   { display: none !important; }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .order-btn   { display: none !important; }
          .hamburger   { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
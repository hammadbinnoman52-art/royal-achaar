import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const { cart, removeFromCart, total, isOpen, setIsOpen } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            style={{
              position: "fixed", inset: 0,
              background: "rgba(0,0,0,0.6)", zIndex: 40
            }}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            style={{
              position: "fixed", right: 0, top: 0,
              height: "100%", width: "100%", maxWidth: "420px",
              background: "#FDF6E3", zIndex: 50,
              display: "flex", flexDirection: "column",
              borderLeft: "3px solid #C9A84C",
              boxShadow: "-20px 0 60px rgba(0,0,0,0.3)"
            }}
          >
            {/* Header */}
            <div style={{
              background: "#4A0A12", padding: "24px",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              borderBottom: "2px solid #C9A84C"
            }}>
              <h2 style={{
                fontFamily: "Playfair Display, serif",
                color: "#C9A84C", fontSize: "24px", fontWeight: 700
              }}>
                Your Cart
              </h2>
              <button onClick={() => setIsOpen(false)}
                style={{ background: "none", border: "none", cursor: "pointer" }}>
                <X color="#C9A84C" size={24} />
              </button>
            </div>

            {/* Items */}
            <div style={{ flex: 1, overflowY: "auto", padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
              {cart.length === 0 ? (
                <div style={{ flex: 1, display: "flex", flexDirection: "column",
                              alignItems: "center", justifyContent: "center", gap: "16px", paddingTop: "80px" }}>
                  <p style={{ fontSize: "48px" }}>🫙</p>
                  <p style={{ color: "#4A0A12", fontSize: "18px", fontWeight: 700,
                              fontFamily: "Playfair Display, serif" }}>
                    Your cart is empty
                  </p>
                  <button onClick={() => setIsOpen(false)}
                    style={{
                      background: "#4A0A12", color: "#C9A84C",
                      border: "none", borderRadius: "40px",
                      padding: "12px 28px", fontWeight: 900,
                      fontSize: "12px", textTransform: "uppercase",
                      letterSpacing: "0.2em", cursor: "pointer"
                    }}>
                    Browse Products
                  </button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} style={{
                    display: "flex", alignItems: "center", gap: "16px",
                    padding: "16px", background: "white", borderRadius: "16px",
                    border: "1px solid rgba(201,168,76,0.25)",
                    boxShadow: "0 4px 12px rgba(74,10,18,0.05)"
                  }}>
                    <img src={item.image} alt={item.name}
                         style={{ width: "64px", height: "64px", objectFit: "cover", borderRadius: "12px" }} />
                    <div style={{ flex: 1 }}>
                      <p style={{ color: "#4A0A12", fontWeight: 800, fontSize: "14px" }}>{item.name}</p>
                      <p style={{ color: "#C9A84C", fontWeight: 900, fontSize: "14px", marginTop: "4px" }}>
                        Rs. {item.price} × {item.qty}
                      </p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)}
                      style={{ background: "none", border: "none", cursor: "pointer" }}>
                      <Trash2 size={18} color="#6B0F1A" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div style={{
                padding: "24px", background: "white",
                borderTop: "2px solid rgba(201,168,76,0.3)"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between",
                              alignItems: "center", marginBottom: "20px" }}>
                  <span style={{ fontWeight: 800, fontSize: "16px", color: "#1A1A1A" }}>Total</span>
                  <span style={{
                    fontFamily: "Playfair Display, serif",
                    color: "#4A0A12", fontSize: "28px", fontWeight: 900
                  }}>
                    Rs. {total}
                  </span>
                </div>

                <button
                  onClick={() => {
                    const msg = cart.map(i => `${i.name} x${i.qty} = Rs.${i.price * i.qty}`).join("%0A");
                    window.open(`https://wa.me/923334624242?text=*New Order*%0A%0A${msg}%0A%0A*Total: Rs.${total}*`, "_blank");
                  }}
                  style={{
                    width: "100%", padding: "16px",
                    background: "#4A0A12", color: "#C9A84C",
                    border: "none", borderRadius: "14px",
                    fontWeight: 900, fontSize: "13px",
                    textTransform: "uppercase", letterSpacing: "0.2em",
                    cursor: "pointer"
                  }}
                >
                  📲 Order via WhatsApp
                </button>

                <p style={{ textAlign: "center", marginTop: "12px",
                            color: "#999", fontSize: "12px", fontWeight: 600 }}>
                  Cash on Delivery Available · Lahore & Pakistan
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
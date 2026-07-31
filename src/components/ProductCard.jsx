import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, UtensilsCrossed, Heart, Star } from "lucide-react";
import { useCart } from "../context/CartContext";

export function PlaceholderArt({ name }) {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: "linear-gradient(135deg, #4A0A12 0%, #6B0F1A 55%, #2d0509 100%)",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: "10px",
      position: "relative"
    }}>
      <div style={{
        position: "absolute", inset: 0, opacity: 0.12,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='30' viewBox='0 0 52 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13 1L1 8L1 22L13 29L25 22L25 8L13 1ZM39 1L27 8L27 22L39 29L51 22L51 8L39 1Z' stroke='%23C9A84C' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
        backgroundSize: "40px 24px"
      }} />
      <UtensilsCrossed size={26} color="#C9A84C" style={{ opacity: 0.75 }} />
      <span style={{
        color: "#C9A84C", fontFamily: "Playfair Display, serif",
        fontSize: "12px", fontWeight: 700, letterSpacing: "0.04em",
        opacity: 0.8, textAlign: "center", padding: "0 14px"
      }}>
        {name}
      </span>
    </div>
  );
}

export default function ProductCard({ product }) {
  const { addToCart, wishlist, toggleWishlist } = useCart();

  const onSale = product.originalPrice && product.originalPrice > product.price;
  const percentOff = onSale
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;
  const wished = wishlist.includes(product.id);

  return (
    <motion.article
      className="pcard"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="pcard-media">
        <Link to={`/product/${product.id}`} className="pcard-media-link">
          <div className="pcard-zoom">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                style={{
                  width: "100%", height: "100%", display: "block",
                  objectFit: "cover",
                  objectPosition: product.imagePosition || "center"
                }}
              />
            ) : (
              <PlaceholderArt name={product.name} />
            )}
          </div>
        </Link>

        <div className="pcard-flags">
          {onSale && <span className="pcard-sale">-{percentOff}%</span>}
          {product.tag && (
            <span className={`pcard-tag is-${product.tag.toLowerCase()}`}>
              {product.tag}
            </span>
          )}
        </div>

        <button
          className={wished ? "pcard-wish is-on" : "pcard-wish"}
          onClick={() => toggleWishlist(product.id)}
          aria-label={wished ? `Remove ${product.name} from wish list` : `Add ${product.name} to wish list`}
          aria-pressed={wished}
        >
          <Heart size={16} fill={wished ? "#C9302C" : "none"} color={wished ? "#C9302C" : "#4A0A12"} />
        </button>
      </div>

      <div className="pcard-body">
        <div className="pcard-head">
          <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
            <h3 className="pcard-title">{product.name}</h3>
          </Link>
          <span className="pcard-weight">{product.weight}</span>
        </div>

        {product.urduName && <p className="pcard-urdu">{product.urduName}</p>}

        <div className="pcard-rating">
          <span className="pcard-stars" aria-hidden="true">
            {[0, 1, 2, 3, 4].map(i => (
              <Star
                key={i}
                size={12}
                strokeWidth={1.5}
                color="#C9A84C"
                fill={i < Math.round(product.rating || 0) ? "#C9A84C" : "none"}
              />
            ))}
          </span>
          <span className="pcard-reviews">({product.reviews})</span>
        </div>

        <div className="pcard-price">
          <span className={onSale ? "pcard-now" : "pcard-now is-plain"}>
            Rs. {product.price.toLocaleString()}
          </span>
          {onSale && (
            <span className="pcard-was">Rs. {product.originalPrice.toLocaleString()}</span>
          )}
        </div>

        <button className="pcard-cart" onClick={() => addToCart(product)}>
          <ShoppingCart size={15} /> Add to Cart
        </button>
      </div>
    </motion.article>
  );
}

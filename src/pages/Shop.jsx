import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import { products } from "../data/products";

const SORTS = [
  { key: "featured",   label: "Featured"          },
  { key: "price-asc",  label: "Price: Low → High" },
  { key: "price-desc", label: "Price: High → Low" },
  { key: "rating",     label: "Top Rated"         },
];

const MAX_PRICE = Math.ceil(Math.max(...products.map(p => p.price)) / 100) * 100;

export default function Shop() {
  const [searchParams] = useSearchParams();
  const search = (searchParams.get("search") || "").trim().toLowerCase();

  const [active, setActive] = useState("All Products");
  const [sort, setSort] = useState("featured");
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);

  // category list with live counts
  const categories = useMemo(() => {
    const names = [...new Set(products.map(p => p.category))];
    return [
      { name: "All Products", count: products.length },
      ...names.map(name => ({
        name,
        count: products.filter(p => p.category === name).length,
      })),
    ];
  }, []);

  const visible = useMemo(() => {
    const list = products
      .filter(p => active === "All Products" || p.category === active)
      .filter(p => p.price <= maxPrice)
      .filter(p => !search || p.name.toLowerCase().includes(search));

    switch (sort) {
      case "price-asc":  return [...list].sort((a, b) => a.price - b.price);
      case "price-desc": return [...list].sort((a, b) => b.price - a.price);
      case "rating":     return [...list].sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
      default:           return list;
    }
  }, [active, sort, maxPrice, search]);

  return (
    <main style={{ background: "#FDF6E3", minHeight: "100vh" }}>

      {/* Banner */}
      <div style={{
        background: "#4A0A12", padding: "80px 24px",
        textAlign: "center", position: "relative", overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.06,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='30' viewBox='0 0 52 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13 1L1 8L1 22L13 29L25 22L25 8L13 1ZM39 1L27 8L27 22L39 29L51 22L51 8L39 1Z' stroke='%23C9A84C' stroke-width='2' fill='none'/%3E%3C/svg%3E")`
        }} />
        <p style={{
          color: "#C9A84C", fontSize: "11px", fontWeight: 900,
          textTransform: "uppercase", letterSpacing: "0.5em", marginBottom: "16px"
        }}>
          Handcrafted With Love
        </p>
        <h1 style={{
          fontFamily: "Playfair Display, serif", color: "white",
          fontSize: "clamp(40px, 8vw, 80px)", fontWeight: 900, lineHeight: 1
        }}>
          Our <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Shop</span>
        </h1>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "44px 24px 90px" }}>
        <div className="shop-layout">

          {/* ── Sidebar ── */}
          <aside>
            <div className="filter-group">
              <p className="filter-title">Categories</p>
              {categories.map(c => (
                <button
                  key={c.name}
                  className={active === c.name ? "cat-btn is-active" : "cat-btn"}
                  onClick={() => setActive(c.name)}
                >
                  <span>{c.name}</span>
                  <span className="cat-count">{c.count}</span>
                </button>
              ))}
            </div>

            <div className="filter-group">
              <p className="filter-title">Price Range</p>
              <div className="price-row">
                <span>Rs. 0</span>
                <strong>Rs. {maxPrice.toLocaleString()}</strong>
              </div>
              <input
                type="range"
                className="price-slider"
                min={0}
                max={MAX_PRICE}
                step={50}
                value={maxPrice}
                onChange={e => setMaxPrice(Number(e.target.value))}
                aria-label="Maximum price"
              />
              <p className="price-max">Max: Rs. {MAX_PRICE.toLocaleString()}</p>
            </div>

            <div className="filter-group">
              <p className="filter-title">Sort By</p>
              {SORTS.map(s => (
                <button
                  key={s.key}
                  className={sort === s.key ? "sort-btn is-active" : "sort-btn"}
                  onClick={() => setSort(s.key)}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </aside>

          {/* ── Results ── */}
          <section>
            <div className="shop-toolbar">
              <p className="shop-count">
                Showing <strong>{visible.length}</strong> of {products.length} products
              </p>
              <label className="shop-sort">
                Sort by:
                <select value={sort} onChange={e => setSort(e.target.value)}>
                  {SORTS.map(s => (
                    <option key={s.key} value={s.key}>{s.label}</option>
                  ))}
                </select>
              </label>
            </div>

            <ProductGrid products={visible} columns={4} />
          </section>
        </div>
      </div>
    </main>
  );
}

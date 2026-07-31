import ProductCard from "./ProductCard";

export default function ProductGrid({ products, columns = 3 }) {
  if (!products.length) {
    return (
      <p style={{ textAlign: "center", color: "#666", padding: "60px 0" }}>
        No products found.
      </p>
    );
  }

  return (
    <>
      <div className={`product-grid cols-${columns}`}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <style>{`
        .product-grid { display: grid; gap: 22px; }
        .product-grid.cols-2 { grid-template-columns: repeat(2, 1fr); }
        .product-grid.cols-3 { grid-template-columns: repeat(3, 1fr); }
        .product-grid.cols-4 { grid-template-columns: repeat(4, 1fr); }

        @media (max-width: 1150px) {
          .product-grid.cols-4 { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 900px) {
          .product-grid.cols-3,
          .product-grid.cols-4 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .product-grid.cols-2,
          .product-grid.cols-3,
          .product-grid.cols-4 { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

const products = ["https://m.media-amazon.com/images/I/81tV7cNeNUL._AC_UF1000,1000_QL80_.jpg",
  {
    id: 1,
    name: "Rose Glow Serum",
    price: "$29",
    img: "https://m.media-amazon.com/images/I/81tV7cNeNUL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 2,
    name: "Velvet Matte Lipstick",
  price: "$15",
  img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Hydrating Face Cream",
    price: "$25",
    img: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Refreshing Toner",
    price: "$18",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Products() {
  return (
    <section style={{ padding: 40 }}>
      <h2 style={{ textAlign: "center", marginBottom: 30, color: "#b12a54" }}>Our Products</h2>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 20 }}>
        {products.map(({ id, name, price, img }) => (
          <div
            key={id}
            style={{
              width: 200,
              border: "1px solid #eee",
              borderRadius: 10,
              padding: 10,
              textAlign: "center",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <img src={img} alt={name} style={{ width: "100%", borderRadius: 10 }} />
            <h3 style={{ margin: "10px 0" }}>{name}</h3>
            <p style={{ fontWeight: "bold", color: "#d6336c" }}>{price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

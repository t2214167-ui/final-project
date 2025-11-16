export default function HeroStats() {
  const stats = [
    { label: "Products", value: "50+" },
    { label: "Happy Customers", value: "10k+" },
    { label: "Support", value: "24/7" },
    { label: "Free Shipping", value: "Yes" },
  ];

  return (
    <section style={{ display: "flex", padding: 40, backgroundColor: "#ffe6f0" }}>
      <div style={{ flex: 1, paddingRight: 20 }}>
        <h2 style={{ color: "#b12a54" }}>Enhance Your Natural Glow</h2>
        <p>Discover premium beauty essentials made for you.</p>
        <button style={{ backgroundColor: "#d6336c", color: "white", padding: "10px 20px", borderRadius: 30, border: "none", cursor: "pointer" }}>Shop Now</button>
        <div style={{ display: "flex", marginTop: 40, justifyContent: "space-between" }}>
          {stats.map(({ label, value }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <h3>{value}</h3>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
          alt="Beauty products"
          style={{ width: "100%", borderRadius: 20 }}
          
        />
      </div>
    </section>
  );
}

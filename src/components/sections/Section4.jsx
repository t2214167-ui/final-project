export default function BeautyShowcase() {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 40,
        maxWidth: "900px",
        margin: "auto",
        fontFamily: "'Saira', sans-serif",
        gap: 40,
      }}
    >
      {/* Left Text Content */}
      <div style={{ flex: 1, textAlign: "left" }}>
        <h2
          style={{
            fontWeight: 600,
            fontSize: "32px",
            lineHeight: "1.3",
            color: "#23262F",
            marginBottom: 15,
            textTransform: "capitalize",
          }}
        >
          New In <br /> Beauty Now
        </h2>
        <p
          style={{
            color: "#555",
            fontSize: "1rem",
            marginBottom: 25,
            maxWidth: "480px",
            lineHeight: "1.6",
          }}
        >
          Discover the latest beauty essentials and trends to refresh your routine.
          From skincare to makeup, our curated selection will help you shine naturally every day.
        </p>
        <a
          href="#"
          style={{
            color: "#b12a54",
            textDecoration: "underline",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: "1rem",
            userSelect: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
          }}
        >
        
        </a>
      </div>

      {/* Right Image */}
      <img
        src="https://images.pexels.com/photos/3771830/pexels-photo-3771830.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=300"
        alt="Beauty Product"
        style={{
          width: "300px",
          height: "400px",
          objectFit: "cover",
          borderRadius: "20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          flexShrink: 0,
        }}
      />
    </section>
  );
}

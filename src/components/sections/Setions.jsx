export default function BeautyNewInStore() {
  const items = [
    {
      src: "https://images.pexels.com/photos/3771830/pexels-photo-3771830.jpeg", // example beauty image (replace)
      label: "Skincare",
    },
    {
      src: "https://images.pexels.com/photos/3993441/pexels-photo-3993441.jpeg",
      label: "Makeup",
    },
    {
      src: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      label: "Hair Care",
    },
    {
      src: "https://images.pexels.com/photos/3747451/pexels-photo-3747451.jpeg",
      label: "Fragrance",
    },
  ];

  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        gap: 40,
        padding: 40,
        maxWidth: "1000px",
        margin: "auto",
      }}
    >
      {/* Left text block */}
      <div style={{ flex: "0 0 200px", textAlign: "left" }}>
        <h2
          style={{
            fontFamily: "'Saira', sans-serif",
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
        <p style={{ color: "#555", fontSize: "0.9rem", marginBottom: 10 }}>
          Discover the latest beauty essentials and trends to refresh your routine.
        </p>
        <a
          href="#"
          style={{
            color: "#b12a54",
            textDecoration: "underline",
            fontWeight: 600,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: "0.9rem",
          }}
        >
          Check All <span style={{ fontSize: "1.2rem" }}>→</span>
        </a>
      </div>

      {/* Horizontal cards */}
      <div
        style={{
          display: "flex",
          gap: 20,
          overflowX: "auto",
          paddingBottom: 10,
          flexGrow: 1,
        }}
      >
        {items.map(({ src, label }) => (
          <div
            key={label}
            style={{
              position: "relative",
              minWidth: "180px",
              borderRadius: "12px",
              overflow: "hidden",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <img
              src={src}
              alt={label}
              style={{
                width: "100%",
                height: "260px",
                objectFit: "cover",
                display: "block",
                borderRadius: "12px",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 15,
                left: 15,
                color: "white",
                fontWeight: 700,
                fontSize: "1.1rem",
                textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
                userSelect: "none",
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

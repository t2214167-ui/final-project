import React from "react";

const photos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1542452255191-c85a98f2c5d1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // lipstick
    alt: "Red Lipstick",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1599948128020-9a44505b0d1b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // nail polish
    alt: "Nail Polish",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1600228390270-970186129936?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // makeup brushes
    alt: "Makeup Brushes",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1619168213439-8af6b0fd5956?q=80&w=707&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // mascara
    alt: "Mascara",
  },
  {
    id: 5,
    url:"https://images.unsplash.com/photo-1560879311-370fd4561a0d?q=80&w=789&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // foundation bottles
    alt: "Foundation Bottles",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // eyeshadow palette
    alt: "Eyeshadow Palette",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // perfume bottle
    alt: "Perfume Bottle",
  },
  {
    id: 8,
    url:"https://plus.unsplash.com/premium_photo-1716629172328-68984cde63b9?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // moisturizer 
    alt: "Moisturizer",
  },
];

const BeautyProductGrid = () => {
  const container = {
    textAlign: "center",
    padding: 40,
    fontFamily: "Poppins, sans-serif",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 30,
    justifyItems: "center",
  };

  const card = {
    background: "#fff",
    borderRadius: 15,
    padding: 20,
    boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
    position: "relative",
    width: 230,
  };

  const img = {
    width: "150px",
    height: "150px",
    objectFit: "cover",
    borderRadius: 10,
    marginBottom: 15,
  };

  const plusBtn = {
    background: "#000",
    color: "#fff",
    border: "none",
    width: 30,
    height: 30,
    borderRadius: "50%",
    cursor: "pointer",
    position: "absolute",
    bottom: 15,
    right: 15,
  };

  return (
    <div style={container}>
      <h2>Beauty Products</h2>
      <p style={{ color: "#777", marginBottom: 40 }}>
        Static makeup & beauty product photos from Unsplash.
      </p>

      <div style={grid}>
        {photos.map(({ id, url, alt }, i) => (
          <div key={id} style={card}>
            <img src={url} alt={alt} style={img} />
            <h4 style={{ margin: "10px 0" }}>{alt}</h4>
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              <span style={{ fontWeight: 600 }}>$29.00</span>
              <span style={{ color: "#aaa", textDecoration: "line-through" }}>
                $39.00
              </span>
            </div>
            <button style={plusBtn}>+</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeautyProductGrid;

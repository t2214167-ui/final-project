import React, { useState } from "react";

const testimonials = [
  {
    name: "Emily Rose",
    title: "Makeup Artist",
    text:
      "These lipsticks have the most vibrant colors and last all day! Highly recommend for any makeup lover.",
    image:"https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  },
  
  {
    name: "Lily Johnson",
    title: "Cosmetics Enthusiast",
    text:
      "I love how natural and fresh these products make me feel. The foundation blends perfectly!",
    image:"https://images.unsplash.com/photo-1627753611073-4c9b17c597c8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     
  },
];

const BeautyTestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const { name, title, text, image } = testimonials[index];

  const containerStyle = {
    display: "flex",
    gap: 40,
    alignItems: "center",
    width: 750,
    margin: "40px auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "black",
  };

  const textSection = {
    flex: 1,
  };

  const imageStyle = {
    width: 350,
    height: 220,
    objectFit: "cover",
    borderRadius: 15,
    boxShadow: "0 4px 12px rgba(255, 105, 180, 0.3)", // subtle pink glow
  };

  const navBtnStyle = {
    padding: "10px 15px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "#ff69b4", // hot pink
    color: "#fff",
    cursor: "pointer",
    marginRight: 10,
    fontWeight: "bold",
    fontSize: 18,
  };

  const titleStyle = {
    fontWeight: "700",
    fontSize: "22px",
    marginBottom: 10,
  };

  const nameStyle = {
    fontWeight: "600",
    fontSize: "18px",
    marginTop: 10,
  };

  const subtitleStyle = {
    fontSize: "14px",
    color: "black",
    marginTop: 2,
    fontStyle: "italic",
  };

  return (
    <div style={containerStyle}>
      <div style={textSection}>
        <h2 style={{ marginBottom: 20 }}>What Beauty Experts Are Saying</h2>
        <p style={{ fontStyle: "italic", fontSize: "16px" }}>"{text}"</p>
        <p style={nameStyle}>{name}</p>
        <p style={subtitleStyle}>{title}</p>
        <div style={{ marginTop: 20 }}>
          <button
            style={navBtnStyle}
            onClick={() =>
              setIndex((index - 1 + testimonials.length) % testimonials.length)
            }
            aria-label="Previous Testimonial"
          >
            &lt;
          </button>
          <button
            style={navBtnStyle}
            onClick={() => setIndex((index + 1) % testimonials.length)}
            aria-label="Next Testimonial"
          >
            &gt;
          </button>
        </div>
      </div>
      <img src={image} alt={`Photo of ${name}`} style={imageStyle} />
    </div>
  );
};

export default BeautyTestimonialSlider;

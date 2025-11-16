export default function BeautyFeatures() {
  return (
    <section style={{ padding: 40 }}>
      {/* Main Section Title */}
      <h2
        style={{
          textAlign: "center",
          marginBottom: 30,
          color: "#b12a54",
        }}
      >
        Key Beauty Features
      </h2>

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        {/* Image on the left */}
        <img
          src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg"
          alt="Beauty Feature"
          style={{
            width: "400px",
            height: "auto",
            borderRadius: "20px",
            objectFit: "cover",
          }}
        />

        {/* Text content on the right */}
        <div style={{ maxWidth: "400px", textAlign: "left" }}>
          {/* Main Title */}
          <h1
            style={{
              fontFamily: "'Saira', sans-serif",
              fontWeight: 600,
              fontSize: "36px",
              lineHeight: "1.3",
              color: "#23262F",
              marginBottom: "15px",
            }}
          >
            Celebrating Your Natural Beauty
          </h1>

          {/* Intro paragraph */}
          <p
            style={{
              color: "#070606ff",
              fontSize: "1rem",
              lineHeight: "1.6",
              marginBottom: "25px",
            }}
          >
            Embracing beauty goes beyond makeup or fashion—it’s about confidence, care, and self-expression. 
            Our approach highlights individuality, elegance, and grace, making every day feel radiant.
          </p>

          {/* Feature 1 */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "15px", alignItems: "flex-start" }}>
            <div
              style={{
                backgroundColor: "#090909ff",
                color: "white",
                borderRadius: "50%",
                width: "24px",
                height: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "14px",
                flexShrink: 0,
                marginTop: "4px",
              }}
            >
              ✔
            </div>
            <div>
              <h4 style={{ margin: "0 0 5px 0", fontWeight: 600, color: "#23262F", fontWeight: "bold" }}>
                Skincare Essentials
              </h4>
              <p style={{ margin: 0, color: "#0a0a0aff", fontSize: "0.95rem" }}>
                A healthy glow starts with proper skincare. Learn routines and tips tailored to every skin type.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "15px", alignItems: "flex-start" }}>
            <div
              style={{
                backgroundColor: "#151415ff",
                color: "white",
                borderRadius: "50%",
                width: "24px",
                height: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "14px",
                flexShrink: 0,
                marginTop: "4px",
              }}
            >
              ✔
            </div>
            <div>
              <h4 style={{ margin: "0 0 5px 0", fontWeight: 600, color: "#23262F", fontWeight: "bold" }}>
                Makeup Tips & Tricks
              </h4>
              <p style={{ margin: 0, color: "#0c0c0cff", fontSize: "0.95rem" }}>
                From natural looks to glamorous evenings, discover techniques to enhance your features.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "15px", alignItems: "flex-start" }}>
            <div
              style={{
                backgroundColor: "#080808ff",
                color: "white",
                borderRadius: "50%",
                width: "24px",
                height: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "14px",
                flexShrink: 0,
                marginTop: "4px",
              }}
            >
              ✔
            </div>
            <div>
              <h4 style={{ margin: "0 0 5px 0", fontWeight: 600, color: "#23262F", fontWeight: "bold" }}>
                Personal Style
              </h4>
              <p style={{ margin: 0, color: "#0c0b0bff", fontSize: "0.95rem" }}>
                Express yourself through clothing, accessories, and lifestyle choices that celebrate your uniqueness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

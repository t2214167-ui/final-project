// Newsletter.jsx
export default function Newsletter() {
  const styles = {
    section: {
      backgroundColor: "#FFF8FB",
      padding: "60px 20px",
      textAlign: "center",
      fontFamily: "Inter, sans-serif",
      color: "#1C1C1E",
    },
    title: {
      fontSize: "32px",
      fontWeight: "700",
      marginBottom: "16px",
    },
    desc: {
      fontSize: "16px",
      color: "#6B7280",
      marginBottom: "32px",
    },
    form: {
      display: "flex",
      justifyContent: "center",
      gap: "12px",
      maxWidth: "500px",
      margin: "0 auto",
      flexWrap: "wrap",
    },
    input: {
      flex: "1",
      padding: "12px 16px",
      borderRadius: "8px",
      border: "1px solid #D1D5DB",
      fontSize: "14px",
      outline: "none",
    },
    button: {
      backgroundColor: "#D9468D",
      color: "#fff",
      padding: "12px 20px",
      borderRadius: "8px",
      border: "none",
      fontWeight: "600",
      cursor: "pointer",
    },
    image: {
      width: "100%",
      maxWidth: "600px",
      borderRadius: "12px",
      margin: "40px auto 0",
      boxShadow: "0 8px 24px rgba(217, 70, 141, 0.2)",
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Get More Discount Off Your Order</h2>
      <p style={styles.desc}>Join our mailing list for exclusive offers and glow-up tips.</p>
      <form style={styles.form}>
        <input
          type="email"
          placeholder="Your email here"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Subscribe
        </button>
      </form>
      <img
        src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
        alt="Skincare flatlay"
        style={styles.image}
      />
    </section>
  );
        }

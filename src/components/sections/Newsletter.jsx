// Newsletter.jsx
export default function Newsletter() {
  const styles = {
      section: {
            backgroundColor: "pink",
                  padding: "60px 20px",
                        textAlign: "center",
                              fontFamily: "Inter, sans-serif",
                                    color: "#1C1C1E",
                                        },
                                            title: {
                                                  fontSize: "30px",
                                                        fontWeight: "700",
                                                              marginBottom: "16px",
                                                                    color: "#D9468D",
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
                                                                                                                                                                    borderRadius: "12px",
                                                                                                                                                                          border: "1px solid #E5E7EB",
                                                                                                                                                                                fontSize: "14px",
                                                                                                                                                                                      outline: "none",
                                                                                                                                                                                            backgroundColor: "#FFF",
                                                                                                                                                                                                  color: "#1C1C1E",
                                                                                                                                                                                                      },
                                                                                                                                                                                                          button: {
                                                                                                                                                                                                                backgroundColor: "#D9468D",
                                                                                                                                                                                                                      color: "#fff",
                                                                                                                                                                                                                            padding: "12px 20px",
                                                                                                                                                                                                                                  borderRadius: "12px",
                                                                                                                                                                                                                                        border: "none",
                                                                                                                                                                                                                                              fontWeight: "600",
                                                                                                                                                                                                                                                    cursor: "pointer",
                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                          };

                                                                                                                                                                                                                                                            return (
                                                                                                                                                                                                                                                                <section style={styles.section}>
                                                                                                                                                                                                                                                                      <h2 style={styles.title}>✨ Get More Discount Off Your Order ✨</h2>
                                                                                                                                                                                                                                                                            <p style={styles.desc}>
                                                                                                                                                                                                                                                                                    Join our mailing list for adorable glow-up tips and exclusive offers 💖
                                                                                                                                                                                                                                                                                          </p>
                                                                                                                                                                                                                                                                                                <form style={styles.form}>
                                                                                                                                                                                                                                                                                                        <input
                                                                                                                                                                                                                                                                                                                  type="email"
                                                                                                                                                                                                                                                                                                                            placeholder="Your email here"
                                                                                                                                                                                                                                                                                                                                      style={styles.input}
                                                                                                                                                                                                                                                                                                                                              />
                                                                                                                                                                                                                                                                                                                                                      <button type="button" style={styles.button}>
                                                                                                                                                                                                                                                                                                                                                                Shop Now 🛍️
                                                                                                                                                                                                                                                                                                                                                                        </button>
                                                                                                                                                                                                                                                                                                                                                                              </form>
                                                                                                                                                                                                                                                                                                                                                                                  </section>
                                                                                                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                                                                                                    }
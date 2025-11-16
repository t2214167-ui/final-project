export default function Header() {
  return (
    <header style={{ padding: 50, backgroundColor: "#fff0f5", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h1 style={{ color: "hsla(133, 67%, 52%, 1.00)" }}>Beauty Bliss <img src="" alt="" /></h1>
      <nav>
        <a href="#home" style={{ margin: 10, color: "#d6336c", textDecoration: "none" }}>Home</a>
        <a href="#products" style={{ margin: 10, color: "#d6336c", textDecoration: "none" }}>Products</a>
        <a href="#contact" style={{ margin: 10, color: "#d6336c", textDecoration: "none" }}>Contact</a>
        <a href="#features" style={{ margin: 10, color: "#d6336c", textDecoration: "none" }}>Features</a>
      </nav>
    </header>
  );
}

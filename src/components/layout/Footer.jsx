import React from "react";

export default function Footer() {
  return (
    <footer style={{ background: "#0f1724", color: "#cbd5e1", padding: "48px 16px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", borderTop: "1px solid rgba(255,255,255,0.03)", paddingTop: 32 }}>
        <div style={{ display: "flex", gap: 24, justifyContent: "space-between", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 200px" }}>
            <h4 style={{ color: "#fff", marginBottom: 12 }}>Beauty Bliss</h4>
            <p style={{ color: "#94a3b8", fontSize: 13 }}>Curated beauty essentials for every day.</p>
          </div>

          <div style={{ display: "flex", gap: 24, flex: "3 1 600px", flexWrap: "wrap" }}>
            {[
              { title: "Our Products", items: ["The Support Suite", "The Sales Suite", "Support", "Guide"] },
              { title: "Top Features", items: ["Ticketing System", "Knowledge Base", "Community Forums", "Help Desk Software"] },
              { title: "Resources", items: ["Product Support", "Request Demo", "Library", "Peoplepower Blog"] },
              { title: "Company", items: ["About Us", "Press", "Investors", "Events"] },
              { title: "Favourite Things", items: ["For Enterprise", "For Startups", "For Benchmark", "For Small Business"] },
            ].map((col) => (
              <div key={col.title} style={{ minWidth: 140 }}>
                <h5 style={{ color: "#e6eef8", marginBottom: 10 }}>{col.title}</h5>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {col.items.map((it) => (
                    <li key={it} style={{ marginBottom: 8, color: "#94a3b8", fontSize: 13 }}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ color: "#94a3b8", fontSize: 13 }}>© Beauty Bliss 2025 • All Rights Reserved</div>
          <div style={{ display: "flex", gap: 8 }}>
            {['B','f','t','i'].map((s) => (
              <div key={s} style={{ width: 34, height: 34, borderRadius: 17, background: "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12 }}>{s}</div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

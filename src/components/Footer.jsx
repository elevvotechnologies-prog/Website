import React from "react";

export default function Footer({ nav }) {
  const cols = [
    { t: "Company", items: ["Home", "Services", "About", "Careers", "Contact"] },
    { t: "Services", items: ["D365 CRM", "Power Platform", "Azure", "React & RN", "Node.js", "Custom CRM"] },
    { t: "Connect", items: ["LinkedIn", "GitHub", "Twitter / X", "hello@elevvotech.com"] },
  ];
  const pages = ["Home", "Services", "About", "Careers", "Contact"];

  return (
    <footer style={{ borderTop: "1px solid rgba(15,23,42,0.07)", padding: "48px 36px 28px", background: "#F1F5F9" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="fg" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 44 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 12 }}>
              <div style={{ width: 30, height: 30, borderRadius: 7, background: "linear-gradient(135deg,#5B5FEF,#00C4F0)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 14, color: "#fff", boxShadow: "0 3px 10px rgba(91,95,239,0.26)" }}>
                E
              </div>
              <span className="df" style={{ fontSize: 16, fontWeight: 700, color: "#0F172A", letterSpacing: "-0.3px" }}>
                Elevvo Technologies
              </span>
            </div>
            <p style={{ color: "#64748B", fontSize: 13, lineHeight: 1.75, maxWidth: 240 }}>
              Full-spectrum IT services from Microsoft Dynamics 365 to custom software — powering digital transformation worldwide.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.t}>
              <h4 className="df" style={{ fontSize: 10, fontWeight: 700, marginBottom: 16, textTransform: "uppercase", letterSpacing: "1.2px", color: "#0F172A" }}>{col.t}</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {col.items.map((item) => {
                  const isLink = pages.indexOf(item) >= 0;
                  return (
                    <span
                      key={item}
                      onClick={() => { if (isLink) nav(item); }}
                      style={{ color: "#64748B", fontSize: 13, cursor: isLink ? "pointer" : "default", userSelect: isLink ? "none" : "auto", transition: "color 0.2s" }}
                      onMouseEnter={(e) => { if (isLink) e.currentTarget.style.color = "#0F172A"; }}
                      onMouseLeave={(e) => { if (isLink) e.currentTarget.style.color = "#64748B"; }}
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(15,23,42,0.07)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ color: "#94A3B8", fontSize: 12 }}>© 2025 Elevvo Technologies. All rights reserved.</span>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((label) => (
              <span key={label} style={{ color: "#94A3B8", fontSize: 12, cursor: "default" }}>{label}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

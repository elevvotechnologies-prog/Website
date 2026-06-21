import React from "react";

export default function Hero({ nav }) {
  return (
    <section style={{ minHeight: "88vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", padding: "100px 36px 56px" }}>
      <div className="orb o1" style={{ width: 640, height: 640, background: "#5B5FEF", top: "-140px", right: "-160px" }} />
      <div className="orb o2" style={{ width: 400, height: 400, background: "#00C4F0", bottom: "-50px", left: "-70px" }} />
      <div className="orb o3" style={{ width: 260, height: 260, background: "#7B7FF5", top: "40%", left: "44%" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle,rgba(15,23,42,0.045) 1px,transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none", opacity: 0.55 }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 820 }}>
          <h1 className="df h1 hh" style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.03, letterSpacing: "-3px", marginBottom: 20 }}>
            We Build Systems<br />
            <span className="gt">That Scale With You</span>
          </h1>
          <p className="h2 sec-sub" style={{ fontSize: 18, marginBottom: 30, maxWidth: 620 }}>
            From Microsoft Dynamics 365 and Azure to custom React apps and Node.js backends — Elevvo delivers end-to-end digital transformation for businesses that demand more.
          </p>
          <div className="h3" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button className="btn-p" style={{ padding: "12px 26px", fontSize: 14 }} onClick={() => nav("Services")}>Explore Our Services</button>
            <button className="btn-o" style={{ padding: "12px 26px", fontSize: 14 }} onClick={() => nav("Contact")}>Talk to Us →</button>
          </div>
          <div className="h4" style={{ display: "flex", gap: 8, marginTop: 28, flexWrap: "wrap" }}>
            {[
              "D365 CRM",
              "Power Platform",
              "Azure",
              "React",
              "Node.js",
              "Custom CRM",
            ].map((label) => (
              <span key={label} style={{ padding: "6px 14px", background: "rgba(255,255,255,0.7)", backdropFilter: "blur(8px)", border: "1px solid rgba(15,23,42,0.09)", borderRadius: 50, fontSize: 13, color: "#475569", fontFamily: "'Inter',sans-serif", fontWeight: 500 }}>
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

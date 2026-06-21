import React from "react";
import useReveal from "../hooks/useReveal";

export default function CtaBanner({ nav }) {
  const ref = useReveal();

  return (
    <section style={{ padding: "48px 36px 64px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }} ref={ref} className="reveal">
        <div style={{ padding: "60px 52px", background: "linear-gradient(135deg,rgba(91,95,239,0.11),rgba(0,196,240,0.06))", border: "1px solid rgba(91,95,239,0.15)", borderRadius: 24, position: "relative", overflow: "hidden", textAlign: "center" }}>
          <div style={{ position: "absolute", width: 440, height: 440, borderRadius: "50%", background: "#5B5FEF", filter: "blur(130px)", opacity: 0.09, top: "-120px", right: "-100px", pointerEvents: "none" }} />
          <h2 className="df" style={{ fontSize: 44, fontWeight: 800, letterSpacing: "-2px", marginBottom: 12, color: "#0F172A", lineHeight: 1.08 }}>
            Let's Build Something <span className="gt">Remarkable</span>
          </h2>
          <p className="sec-sub" style={{ marginBottom: 36, maxWidth: 460, margin: "0 auto 36px", fontSize: 16 }}>
            Tell us about your project and let's explore how we can help you grow.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-p" style={{ fontSize: 14, padding: "12px 28px" }} onClick={() => nav("Contact")}>Start a Conversation</button>
            <button className="btn-o" style={{ fontSize: 14, padding: "12px 28px" }} onClick={() => nav("Services")}>View Services</button>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import useReveal from "../hooks/useReveal";

export default function WhyUs() {
  const leftRef = useReveal();
  const rightRef = useReveal();
  const items = [
    { icon: "🎯", t: "Business-First Thinking", d: "We start with your goals, not the technology. Every solution drives measurable outcomes." },
    { icon: "🤝", t: "Dedicated Partnership", d: "Not a vendor — an extension of your team. Long-term relationships built on trust." },
    { icon: "🚀", t: "Agile Delivery", d: "Rapid iterations, transparent communication, delivery cadences that keep projects on track." },
    { icon: "🔒", t: "Enterprise-Grade Security", d: "Security architected from day one — data handling to cloud infrastructure." },
  ];

  return (
    <section style={{ padding: "56px 36px", background: "rgba(15,23,42,0.015)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="r2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div ref={leftRef} className="reveal">
            <h2 className="df" style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-1.8px", marginBottom: 14, lineHeight: 1.1, color: "#0F172A" }}>
              The Partner Built<br />for Your Growth
            </h2>
            <p className="sec-sub" style={{ fontSize: 15, marginBottom: 28 }}>
              We've helped companies across industries streamline operations, increase revenue, and deliver better customer experiences through smart technology choices.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <div style={{ padding: "12px 20px", background: "rgba(91,95,239,0.09)", border: "1px solid rgba(91,95,239,0.22)", borderRadius: 12 }}>
                <div className="df" style={{ fontSize: 26, fontWeight: 800, color: "#5B5FEF", letterSpacing: "-1px" }}>150+</div>
                <div style={{ fontSize: 12, color: "#64748B", fontWeight: 500, marginTop: 2 }}>Happy Clients</div>
              </div>
              <div style={{ padding: "12px 20px", background: "rgba(0,196,240,0.08)", border: "1px solid rgba(0,196,240,0.2)", borderRadius: 12 }}>
                <div className="df" style={{ fontSize: 26, fontWeight: 800, color: "#00A8D0", letterSpacing: "-1px" }}>4.9★</div>
                <div style={{ fontSize: 12, color: "#64748B", fontWeight: 500, marginTop: 2 }}>Avg Rating</div>
              </div>
            </div>
          </div>
          <div ref={rightRef} className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {items.map((item, index) => (
              <div key={item.t} className={`glass reveal-d${index + 1}`} style={{ padding: 22 }}>
                <div style={{ fontSize: 26, marginBottom: 10 }}>{item.icon}</div>
                <h4 className="df" style={{ fontSize: 13, fontWeight: 700, marginBottom: 6, color: "#0F172A" }}>{item.t}</h4>
                <p style={{ color: "#64748B", fontSize: 13, lineHeight: 1.65 }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

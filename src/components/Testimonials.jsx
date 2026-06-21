import React from "react";
import useReveal from "../hooks/useReveal";

export default function Testimonials() {
  const ref = useReveal();
  const testimonials = [
    {
      q: "Elevvo transformed our sales process with a D365 implementation that actually fits how we work. Delivery was fast, the team was excellent.",
      name: "Sarah K.",
      role: "VP Sales, FinTech Co.",
      init: "SK",
    },
    {
      q: "Their React Native team built our client portal in 10 weeks. The quality and communication throughout were exceptional.",
      name: "David M.",
      role: "CTO, HealthCare Startup",
      init: "DM",
    },
    {
      q: "The custom CRM Elevvo built has replaced three separate tools. ROI was clear within 6 months.",
      name: "Amara T.",
      role: "COO, Logistics Group",
      init: "AT",
    },
  ];

  const cardRefs = testimonials.map(() => useReveal());

  return (
    <section style={{ padding: "56px 36px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={ref} className="reveal" style={{ textAlign: "center", marginBottom: 36 }}>
          <h2 className="df" style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-1.8px", color: "#0F172A" }}>
            Trusted by Teams <span className="gc">Worldwide</span>
          </h2>
        </div>
        <div className="r3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {testimonials.map((item, index) => {
            const cardRef = cardRefs[index];
            return (
              <div ref={cardRef} key={item.name} className={`reveal reveal-d${index + 1}`}>
                <div className="gs" style={{ padding: 26, height: "100%", borderRadius: 18, position: "relative" }}>
                  <div style={{ position: "absolute", top: 16, right: 20, fontSize: 56, color: "rgba(91,95,239,0.07)", fontFamily: "serif", lineHeight: 1, userSelect: "none" }}>
                    "
                  </div>
                  <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
                    {[...Array(5)].map((_, starIndex) => (
                      <span key={starIndex} style={{ color: "#F59E0B", fontSize: 13 }}>★</span>
                    ))}
                  </div>
                  <p style={{ color: "#334155", fontSize: 14, lineHeight: 1.78, marginBottom: 22, fontStyle: "italic" }}>
                    "{item.q}"
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                    <div style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg,#5B5FEF,#00C4F0)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 13, color: "#fff", flexShrink: 0 }}>
                      {item.init}
                    </div>
                    <div>
                      <div className="df" style={{ fontSize: 13, fontWeight: 600, color: "#0F172A" }}>{item.name}</div>
                      <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 1 }}>{item.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import useReveal from "../hooks/useReveal";
import { SERVICES } from "../data/content";

export default function ServicesPage() {
  const [active, setActive] = useState(null);
  const headRef = useReveal();
  const cardRefs = SERVICES.map(() => useReveal());

  return (
    <div style={{ padding: "100px 36px 56px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={headRef} className="reveal" style={{ textAlign: "center", marginBottom: 40 }}>
          <h1 className="df ph" style={{ fontSize: 56, fontWeight: 800, letterSpacing: "-2.5px", marginBottom: 14, color: "#0F172A", lineHeight: 1.06 }}>
            Full-Spectrum <span className="gt">Digital Services</span>
          </h1>
          <p className="sec-sub" style={{ maxWidth: 560, margin: "0 auto", fontSize: 16 }}>
            Deep expertise across Microsoft's ecosystem and modern web technologies to power your digital transformation.
          </p>
        </div>
        <div style={{ display: "grid", gap: 16 }}>
          {SERVICES.map((service, index) => {
            const isOpen = active === index;
            const cardRef = cardRefs[index];
            const IC = service.IconComp;

            return (
              <div ref={cardRef} key={service.title} className="reveal" style={{ animationDelay: `${index * 0.07}s` }}>
                <div
                  className="gs"
                  style={{
                    padding: "28px 36px",
                    cursor: "pointer",
                    borderRadius: 18,
                    border: isOpen ? "1px solid " + service.bd : "1px solid rgba(15,23,42,0.07)",
                    transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                    boxShadow: isOpen ? "0 6px 32px " + service.color + "15" : undefined,
                  }}
                  onClick={() => setActive(isOpen ? null : index)}
                >
                  <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 22, alignItems: "start" }}>
                    <div
                      className="icon-box"
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: 14,
                        background: service.bg,
                        border: "1px solid " + service.bd,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 14px " + service.color + "18",
                      }}
                    >
                      <IC />
                    </div>
                    <div>
                      <div className="df" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: service.color, marginBottom: 6 }}>
                        {service.sub}
                      </div>
                      <h2 className="df" style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "#0F172A", letterSpacing: "-0.4px" }}>
                        {service.title}
                      </h2>
                      <p style={{ color: "#64748B", fontSize: 14, lineHeight: 1.78 }}>{service.desc}</p>
                      {isOpen && (
                        <div style={{ marginTop: 18, display: "flex", flexWrap: "wrap", gap: 8 }}>
                          {service.features.map((feature) => (
                            <span key={feature} className="taga">✓ {feature}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div style={{ transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)", marginTop: 4, userSelect: "none" }}>
                      <span style={{ display: 'inline-block', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1)', color: '#94A3B8' }}>
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6 7L11 1" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

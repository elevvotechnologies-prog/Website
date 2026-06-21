import React from "react";
import useReveal from "../hooks/useReveal";
import SvcCard from "./SvcCard";
import { SERVICES } from "../data/content";

export default function ServicesSnippet({ nav }) {
  const headRef = useReveal();

  return (
    <section style={{ padding: "56px 36px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={headRef} className="reveal" style={{ textAlign: "center", marginBottom: 36 }}>
          <h2 className="df" style={{ fontSize: 44, fontWeight: 800, letterSpacing: "-2px", marginBottom: 12, color: "#0F172A", lineHeight: 1.08 }}>
            Services Built for <span className="gt">Modern Businesses</span>
          </h2>
          <p className="sec-sub" style={{ maxWidth: 500, margin: "0 auto", fontSize: 16 }}>
            Deep technical expertise combined with business insight to deliver solutions that make a measurable difference.
          </p>
        </div>
        <div className="r3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {SERVICES.slice(0, 3).map((service, index) => (
            <SvcCard key={service.title} s={service} delay={index + 1} />
          ))}
        </div>
        <div className="r3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginTop: 20 }}>
          {SERVICES.slice(3).map((service, index) => (
            <SvcCard key={service.title} s={service} delay={index + 1} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 36 }}>
          <button className="btn-o" style={{ fontSize: 14, padding: "11px 28px" }} onClick={() => nav("Services")}>View All Services →</button>
        </div>
      </div>
    </section>
  );
}

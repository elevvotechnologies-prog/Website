import React, { useState } from "react";
import ModernDropdown from "../components/ModernDropdown";
import useReveal from "../hooks/useReveal";
import { SERVICES } from "../data/content";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });
  const serviceOptions = SERVICES.map((service) => ({ name: service.title, value: service.title }));
  const [sent, setSent] = useState(false);
  const leftRef = useReveal();
  const rightRef = useReveal();
  const setField = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  const sendEmail = async () => {
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSent(true);
      } else {
        const error = await response.json();
        alert(`Error: ${error.error || 'Failed to send email'}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Make sure the server is running on http://localhost:5000');
    }
  };

  return (
    <div style={{ padding: "100px 36px 56px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="r2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div ref={leftRef} className="reveal">
            <h1 className="df ph" style={{ fontSize: 50, fontWeight: 800, letterSpacing: "-2.5px", marginBottom: 14, lineHeight: 1.06, color: "#0F172A" }}>
              Ready to Start<br />
              <span className="gt">Your Project?</span>
            </h1>
            <p className="sec-sub" style={{ fontSize: 15, lineHeight: 1.82, marginBottom: 32 }}>
              Whether you have a specific project in mind or just want to explore what's possible, we're here for the conversation.
            </p>
            <div style={{ display: "grid", gap: 18, marginBottom: 28 }}>
              {[
                { icon: "📧", label: "Email Us", detail: "contact@elevvotech.com" },
                { icon: "📞", label: "Call Us", detail: "+91 8174974837" },
                { icon: "📍", label: "Our Office", detail: "Unit No. 111, Aggarwal City Square, Plot No. 10, Sector-3, Rohini, New Delhi - 110085" },
                { icon: "💬", label: "Response Time", detail: "Within 1 business day" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: 14,
                    alignItems: "center",
                    padding: "22px 18px",
                    background: "#fff",
                    border: "1px solid rgba(15,23,42,0.08)",
                    borderRadius: 18,
                    boxShadow: "0 14px 30px rgba(15,23,42,0.05)",
                  }}
                >
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 16,
                      background: "rgba(91,95,239,0.1)",
                      border: "1px solid rgba(91,95,239,0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 22,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="df" style={{ fontSize: 11, color: "#5B5FEF", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 6 }}>
                      {item.label}
                    </div>
                    <div style={{ color: "#0F172A", fontSize: 15, fontWeight: 500, lineHeight: 1.6 }}>
                      {item.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: "18px 22px", background: "rgba(0,196,240,0.06)", border: "1px solid rgba(0,196,240,0.14)", borderRadius: 14 }}>
              <div style={{ fontSize: 10, color: "#00A8D0", fontFamily: "'Sora',sans-serif", fontWeight: 700, marginBottom: 5, letterSpacing: "1px", textTransform: "uppercase" }}>
                ✓ Free Initial Consultation
              </div>
              <p style={{ color: "#64748B", fontSize: 13, lineHeight: 1.68 }}>
                Every engagement starts with a free 30-minute discovery call to understand your needs.
              </p>
            </div>
          </div>
          <div ref={rightRef} className="reveal">
            <div className="gs" style={{ padding: 36, borderRadius: 20 }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "48px 0" }}>
                  <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
                  <h3 className="df" style={{ fontSize: 24, fontWeight: 700, marginBottom: 10, color: "#0F172A" }}>Message Sent!</h3>
                  <p style={{ color: "#64748B", fontSize: 14 }}>We'll be in touch within one business day.</p>
                  <button className="btn-o" style={{ marginTop: 22 }} onClick={() => setSent(false)}>Send Another</button>
                </div>
              ) : (
                <div>
                  <h3 className="df" style={{ fontSize: 21, fontWeight: 700, marginBottom: 22, color: "#0F172A", letterSpacing: "-0.5px" }}>Send a Message</h3>
                  <div style={{ display: "grid", gap: 14 }}>
                    <div className="r2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      <div>
                        <label style={{ display: "block", fontSize: 11, color: "#64748B", fontFamily: "'Sora',sans-serif", fontWeight: 600, letterSpacing: "0.5px", marginBottom: 6 }}>Your Name</label>
                        <input placeholder="Jane Smith" value={form.name} onChange={(event) => setField("name", event.target.value)} />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: 11, color: "#64748B", fontFamily: "'Sora',sans-serif", fontWeight: 600, letterSpacing: "0.5px", marginBottom: 6 }}>Work Email</label>
                        <input placeholder="jane@company.com" value={form.email} onChange={(event) => setField("email", event.target.value)} />
                      </div>
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11, color: "#64748B", fontFamily: "'Sora',sans-serif", fontWeight: 600, letterSpacing: "0.5px", marginBottom: 6 }}>Company</label>
                      <input placeholder="Your company name" value={form.company} onChange={(event) => setField("company", event.target.value)} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11, color: "#64748B", fontFamily: "'Sora',sans-serif", fontWeight: 600, letterSpacing: "0.5px", marginBottom: 6 }}>Service of Interest</label>
                      <ModernDropdown
                        value={form.service}
                        options={serviceOptions}
                        optionLabel="name"
                        onChange={(val) => setField("service", val)}
                        showClear
                        placeholder="Select a service..."
                        className="modern-dropdown"
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11, color: "#64748B", fontFamily: "'Sora',sans-serif", fontWeight: 600, letterSpacing: "0.5px", marginBottom: 6 }}>Tell us about your project</label>
                      <textarea placeholder="Describe your project, goals, and timeline..." rows={4} value={form.message} onChange={(event) => setField("message", event.target.value)} style={{ resize: "vertical" }} />
                    </div>
                    <button className="btn-p" style={{ width: "100%", padding: "14px", fontSize: 14 }} onClick={() => sendEmail()}>Send Message →</button>
                    <p style={{ textAlign: "center", fontSize: 12, color: "#94A3B8" }}>No spam, ever. We take privacy seriously.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

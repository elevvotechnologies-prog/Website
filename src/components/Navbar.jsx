import React, { useState, useEffect } from "react";

export default function Navbar({ page, nav }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["Home", "Services", "About", "Careers", "Contact"];
  const handleNav = (target) => {
    nav(target);
    setOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        padding: "0 36px",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(250,251,255,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(15,23,42,0.06)" : "none",
        boxShadow: scrolled ? "0 2px 16px rgba(15,23,42,0.05)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div onClick={() => handleNav("Home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 9 }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: "linear-gradient(135deg,#5B5FEF,#00C4F0)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Sora',sans-serif",
            fontWeight: 800,
            fontSize: 15,
            color: "#fff",
            boxShadow: "0 4px 10px rgba(91,95,239,0.3)",
          }}
        >
          E
        </div>
        <span className="df" style={{ fontSize: 17, fontWeight: 700, color: "#0F172A", letterSpacing: "-0.3px" }}>
          Elevvo Technologies
        </span>
      </div>

      <div className="mh" style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {navLinks.map((label) => (
          <span key={label} className={"nl" + (page === label ? " act" : "")} onClick={() => handleNav(label)}>
            {label}
          </span>
        ))}
      </div>

      <button className="btn-p mh" style={{ padding: "8px 20px", fontSize: 13 }} onClick={() => handleNav("Contact")}>Get in Touch</button>
      <button
        onClick={() => setOpen(!open)}
        className="ham"
        style={{
          background: "none",
          border: "1px solid rgba(15,23,42,0.13)",
          borderRadius: 7,
          color: "#0F172A",
          fontSize: 17,
          cursor: "pointer",
          padding: "5px 10px",
        }}
      >
        ☰
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: 64,
            left: 0,
            right: 0,
            background: "rgba(250,251,255,0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(15,23,42,0.07)",
            padding: "20px 36px",
            display: "flex",
            flexDirection: "column",
            gap: 18,
            zIndex: 300,
          }}
        >
          {navLinks.map((label) => (
            <span key={label} className={"nl" + (page === label ? " act" : "")} style={{ fontSize: 16 }} onClick={() => handleNav(label)}>
              {label}
            </span>
          ))}
        </div>
      )}
    </nav>
  );
}

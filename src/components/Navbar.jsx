// ─────────────────────────────────────────────
// COMPONENT: Navbar
// ─────────────────────────────────────────────
import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/data.js";
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      role="banner"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(6,6,18,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <nav
        aria-label="Main navigation"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#" aria-label="NexusAI home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
            }}
          >
            ✦
          </div>
          <span style={{ fontWeight: 700, fontSize: 18, color: "#fff", letterSpacing: "-0.03em" }}>
            Nexus<span style={{ color: "#6366f1" }}>AI</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul
          role="list"
          style={{
            display: "flex",
            gap: 8,
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="nav-desktop"
        >
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                style={{
                  color: "rgba(255,255,255,0.65)",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 500,
                  padding: "6px 14px",
                  borderRadius: 8,
                  transition: "color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#fff";
                  e.target.style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "rgba(255,255,255,0.65)";
                  e.target.style.background = "transparent";
                }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }} className="nav-cta-desktop">
          <a
            href="#"
            style={{
              color: "rgba(255,255,255,0.7)",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
              padding: "8px 16px",
            }}
          >
            Sign in
          </a>
          <a
            href="#pricing"
            style={{
              background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
              color: "#fff",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 600,
              padding: "8px 20px",
              borderRadius: 10,
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => { e.target.style.opacity = "0.9"; e.target.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.target.style.opacity = "1"; e.target.style.transform = "none"; }}
          >
            Get started free →
          </a>
        </div>

        {/* Hamburger */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            fontSize: 22,
            padding: 8,
          }}
          className="nav-hamburger"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(6,6,18,0.97)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "16px 24px 24px",
          }}
        >
          <ul role="list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 4 }}>
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.8)",
                    textDecoration: "none",
                    fontSize: 16,
                    fontWeight: 500,
                    padding: "12px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 20 }}>
            <a href="#" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", textAlign: "center", padding: "10px" }}>Sign in</a>
            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              style={{
                background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
                padding: "12px",
                borderRadius: 10,
                textAlign: "center",
              }}
            >
              Get started free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
export default Navbar;
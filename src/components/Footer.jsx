import { FOOTER_COLS, SOCIAL_ICONS } from "../data/data.js";
import { glass } from "../utils/utils.js";

export default function Footer() {
  return (
    <footer role="contentinfo" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "64px 24px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr repeat(4,1fr)", gap: 40, marginBottom: 64 }}>

          {/* Brand */}
          <div>
            <a
              href="#"
              style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 16 }}
            >
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
                NexusAI
              </span>
            </a>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", lineHeight: 1.7, maxWidth: 260 }}>
              The AI infrastructure platform for teams that move fast and ship with confidence.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              {SOCIAL_ICONS.map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={`Social link ${i + 1}`}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    ...glass,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#fff";
                    e.target.style.background = "rgba(255,255,255,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "rgba(255,255,255,0.5)";
                    e.target.style.background = "rgba(255,255,255,0.04)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h3
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  margin: "0 0 16px",
                }}
              >
                {col.title}
              </h3>
              <ul
                role="list"
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.45)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => { e.target.style.color = "#fff"; }}
                      onMouseLeave={(e) => { e.target.style.color = "rgba(255,255,255,0.45)"; }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", margin: 0 }}>
            © 2025 NexusAI Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#10b981",
                display: "inline-block",
                boxShadow: "0 0 6px #10b981",
              }}
            />
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
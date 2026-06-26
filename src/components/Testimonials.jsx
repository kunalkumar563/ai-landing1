import { TESTIMONIALS } from "../data/data.js";
import { glass } from "../utils/utils.js";

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" style={{ padding: "120px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <header style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              fontSize: 12,
              color: "#6366f1",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              fontWeight: 700,
            }}
          >
            Testimonials
          </span>
          <h2
            id="testimonials-heading"
            style={{
              fontSize: "clamp(30px,5vw,52px)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.04em",
              margin: "12px 0 0",
            }}
          >
            Loved by builders worldwide
          </h2>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              style={{
                ...glass,
                borderRadius: 20,
                padding: "32px",
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              <blockquote style={{ margin: 0, fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.75 }}>
                "{t.quote}"
              </blockquote>
              <figcaption style={{ display: "flex", alignItems: "center", gap: 12, marginTop: "auto" }}>
                <div
                  aria-hidden="true"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: `${t.color}30`,
                    border: `2px solid ${t.color}60`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    fontWeight: 700,
                    color: t.color,
                    flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

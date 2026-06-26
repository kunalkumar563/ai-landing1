import { useState, useEffect, useRef } from "react";
import { glass } from "../utils/utils.js";

export default function BentoCard({ feature, isMobile, isOpen, onToggle }) {
  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (cardRef.current) obs.observe(cardRef.current);
    return () => obs.disconnect();
  }, []);

  if (isMobile) {
    return (
      <div
        ref={cardRef}
        style={{
          ...glass,
          borderRadius: 16,
          overflow: "hidden",
          transition: "all 0.3s ease",
          border: isOpen ? `1px solid ${feature.accent}44` : "1px solid rgba(255,255,255,0.07)",
          transform: visible ? "none" : "translateY(20px)",
          opacity: visible ? 1 : 0,
        }}
      >
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          style={{
            width: "100%",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "18px 20px",
            display: "flex",
            alignItems: "center",
            gap: 14,
            textAlign: "left",
          }}
        >
          <span
            style={{
              fontSize: 22,
              width: 44,
              height: 44,
              borderRadius: 12,
              background: `${feature.accent}18`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {feature.icon}
          </span>
          <div style={{ flex: 1 }}>
            <span
              style={{
                fontSize: 10,
                color: feature.accent,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 700,
              }}
            >
              {feature.tag}
            </span>
            <h3
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#fff",
                margin: "2px 0 0",
                letterSpacing: "-0.02em",
              }}
            >
              {feature.title}
            </h3>
          </div>
          <span
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: 18,
              transform: isOpen ? "rotate(45deg)" : "none",
              transition: "transform 0.2s",
              flexShrink: 0,
            }}
          >
            +
          </span>
        </button>
        <div
          style={{
            maxHeight: isOpen ? 200 : 0,
            overflow: "hidden",
            transition: "max-height 0.35s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <p
            style={{
              padding: "0 20px 18px 20px",
              fontSize: 14,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {feature.desc}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      style={{
        ...glass,
        borderRadius: 20,
        padding: "28px",
        gridColumn: feature.size === "large" ? "span 2" : "span 1",
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
        transform: visible ? "none" : "translateY(30px)",
        opacity: visible ? 1 : 0,
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.borderColor = `${feature.accent}40`;
        e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px ${feature.accent}25`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -40,
          right: -40,
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: `radial-gradient(circle,${feature.accent}20 0%,transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          fontSize: 10,
          color: feature.accent,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          fontWeight: 700,
          marginBottom: 14,
        }}
      >
        {feature.tag}
      </div>
      <div
        style={{
          fontSize: 32,
          marginBottom: 16,
          width: 56,
          height: 56,
          borderRadius: 14,
          background: `${feature.accent}15`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {feature.icon}
      </div>
      <h3
        style={{
          fontSize: feature.size === "large" ? 22 : 18,
          fontWeight: 700,
          color: "#fff",
          marginBottom: 10,
          letterSpacing: "-0.03em",
        }}
      >
        {feature.title}
      </h3>
      <p
        style={{
          fontSize: 14,
          color: "rgba(255,255,255,0.5)",
          lineHeight: 1.75,
          margin: 0,
          maxWidth: 400,
        }}
      >
        {feature.desc}
      </p>
    </div>
  );
}
export const NAV_LINKS = ["Features", "Pricing", "Docs", "Blog", "About"];

export const PRICING_CONFIG = {
  currencies: {
    INR: { symbol: "₹", label: "INR", rate: 1 },
    USD: { symbol: "$", label: "USD", rate: 0.012 },
    EUR: { symbol: "€", label: "EUR", rate: 0.011 },
  },
  discountPercent: 20,
  plans: [
    {
      id: "starter",
      name: "Starter",
      desc: "Perfect for indie hackers & small teams exploring AI.",
      priceINR: { monthly: 999, annual: 799 },
      highlight: false,
      cta: "Start free trial",
      badge: null,
      features: [
        "50,000 AI tokens / month",
        "5 AI pipelines",
        "Community support",
        "REST API access",
        "2 team seats",
      ],
    },
    {
      id: "pro",
      name: "Pro",
      desc: "For growing teams that need power and reliability.",
      priceINR: { monthly: 3499, annual: 2799 },
      highlight: true,
      cta: "Get started",
      badge: "Most Popular",
      features: [
        "2M AI tokens / month",
        "Unlimited pipelines",
        "Priority support (SLA 4h)",
        "Advanced analytics",
        "15 team seats",
        "Custom model fine-tuning",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      desc: "Dedicated infrastructure & white-glove onboarding.",
      priceINR: { monthly: 12999, annual: 10399 },
      highlight: false,
      cta: "Contact sales",
      badge: null,
      features: [
        "Unlimited tokens",
        "Dedicated GPU cluster",
        "24/7 dedicated support",
        "SSO & SAML",
        "Unlimited seats",
        "On-premise deployment",
        "Custom SLA",
      ],
    },
  ],
};

export const FEATURES = [
  {
    id: "reasoning",
    icon: "🧠",
    title: "Context-Aware Reasoning",
    desc: "Multi-step chain-of-thought that retains context across 200k tokens, making complex workflows feel effortless.",
    size: "large",
    accent: "#6366f1",
    tag: "Core Engine",
  },
  {
    id: "speed",
    icon: "⚡",
    title: "Sub-100ms Latency",
    desc: "Edge-deployed inference nodes in 32 regions deliver real-time responses at scale.",
    size: "small",
    accent: "#f59e0b",
    tag: "Performance",
  },
  {
    id: "privacy",
    icon: "🔒",
    title: "Zero Data Retention",
    desc: "Your prompts and outputs are never stored, logged, or used for training. SOC 2 Type II certified.",
    size: "small",
    accent: "#10b981",
    tag: "Security",
  },
  {
    id: "pipelines",
    icon: "🔁",
    title: "Visual AI Pipelines",
    desc: "Drag-and-drop builder lets you compose multi-model workflows — no code required. Export as Python, Node, or REST.",
    size: "medium",
    accent: "#8b5cf6",
    tag: "Builder",
  },
  {
    id: "analytics",
    icon: "📊",
    title: "Real-Time Analytics",
    desc: "Token usage, cost attribution, error rates, and latency histograms — all in one live dashboard.",
    size: "medium",
    accent: "#ec4899",
    tag: "Observability",
  },
  {
    id: "integrations",
    icon: "🔗",
    title: "200+ Integrations",
    desc: "Native connectors for Slack, Notion, Salesforce, GitHub, Figma, and every major data warehouse.",
    size: "small",
    accent: "#06b6d4",
    tag: "Ecosystem",
  },
];

export const STATS = [
  { value: "10B+",   label: "Tokens processed daily" },
  { value: "99.99%", label: "Uptime SLA"              },
  { value: "32",     label: "Global edge regions"     },
  { value: "<80ms",  label: "P99 response time"       },
];

export const TESTIMONIALS = [
  {
    name: "Aarav Mehta",
    role: "CTO, Zephyr Labs",
    avatar: "AM",
    color: "#6366f1",
    quote:
      "NexusAI cut our inference costs by 60% and our team ships 3× faster. The pipeline builder alone is worth the subscription.",
  },
  {
    name: "Sara Lindström",
    role: "Head of AI, Klarna",
    avatar: "SL",
    color: "#10b981",
    quote:
      "The zero-data-retention guarantee was non-negotiable for us. NexusAI was the only platform that delivered it without sacrificing speed.",
  },
  {
    name: "Daniel Osei",
    role: "Founder, BuildFast",
    avatar: "DO",
    color: "#f59e0b",
    quote:
      "I built and shipped a production AI feature in 48 hours using NexusAI. The DX is unlike anything else in the market.",
  },
  {
    name: "Priya Kapoor",
    role: "ML Engineer, Razorpay",
    avatar: "PK",
    color: "#ec4899",
    quote:
      "Sub-100ms latency at our traffic peaks is something we couldn't achieve with any other provider. NexusAI just works.",
  },
];

export const FOOTER_COLS = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Changelog", "Roadmap", "Status"],
  },
  {
    title: "Developers",
    links: ["Documentation", "API Reference", "SDK", "CLI", "Playground"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Press", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "DPA", "Cookies"],
  },
];

export const DASHBOARD_METRICS = [
  { label: "Tokens Today", val: "842M",  change: "+12%", col: "#6366f1" },
  { label: "Avg Latency",  val: "74ms",  change: "-8ms",  col: "#10b981" },
  { label: "Active Pipes", val: "127",   change: "+3",    col: "#8b5cf6" },
  { label: "Cost / 1k",   val: "₹0.42", change: "-5%",   col: "#f59e0b" },
];

export const DASHBOARD_PIPELINES = [
  { name: "Customer Support Bot", status: "Running", tokens: "12.4M", color: "#10b981" },
  { name: "Doc Summarizer v2",    status: "Queued",  tokens: "3.1M",  color: "#f59e0b" },
  { name: "Code Review Agent",    status: "Running", tokens: "8.7M",  color: "#10b981" },
];

export const TRUSTED_COMPANIES = [
  "Razorpay", "Zomato", "Meesho", "CRED", "Zepto", "Groww",
];

export const SOCIAL_ICONS = ["𝕏", "⌥", "▷", "⬡"];
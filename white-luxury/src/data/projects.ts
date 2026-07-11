export type ArchitectureNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
  tone?: "primary" | "muted" | "accent";
};

export type ArchitectureLink = {
  from: string;
  to: string;
  dashed?: boolean;
};

export type CaseScreen = {
  id: string;
  title: string;
  caption: string;
  kind: "dashboard" | "panel" | "mobile" | "diagram" | "table" | "flow";
  image: string;
};

export type ProjectPhase = {
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  industry: string;
  year: string;
  role: string;
  duration: string;
  client: string;
  challenge: string;
  outcome: string;
  stack: string[];
  featured?: boolean;
  metrics: { label: string; value: string; detail?: string }[];
  overview: string;
  problem: string;
  problemDetail: string;
  constraints: string[];
  responsibilities: string[];
  approach: string;
  phases: ProjectPhase[];
  decisions: { title: string; description: string }[];
  architecture: {
    caption: string;
    nodes: ArchitectureNode[];
    links: ArchitectureLink[];
  };
  screens: CaseScreen[];
  learnings: string[];
  cover: string;
  visual: "ledger" | "vault" | "relay" | "atlas" | "pulse";
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "meridian-ledger",
    number: "01",
    title: "Meridian Ledger",
    industry: "Fintech",
    year: "2025",
    role: "Lead Architect & Engineer",
    duration: "7 months",
    client: "Meridian Payments",
    challenge:
      "Rebuild a fragmented payment reconciliation platform into a single source of truth for multi-currency settlements.",
    outcome:
      "Reduced reconciliation time from 14 hours to under 40 minutes while improving audit readiness across three regions.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "AWS", "EventBridge", "Redis"],
    featured: true,
    metrics: [
      {
        label: "Reconciliation time",
        value: "−95%",
        detail: "14 hours → 40 minutes",
      },
      {
        label: "Audit coverage",
        value: "100%",
        detail: "Immutable event trail",
      },
      {
        label: "Regions live",
        value: "03",
        detail: "EU · UK · MENA",
      },
    ],
    overview:
      "Meridian Ledger is a settlement and reconciliation platform for a European fintech expanding into multi-currency markets. The engagement covered system architecture, core services, migration strategy, and a calm operational interface for finance teams who needed certainty more than novelty.",
    problem:
      "Legacy batch jobs, inconsistent ledger entries, and manual spreadsheet corrections created operational risk and delayed month-end close.",
    problemDetail:
      "Settlement data arrived from card processors, bank files, and internal payment services in incompatible formats. Nightly batch jobs often failed silently. Operators reconstructed truth in spreadsheets, which meant audits were slow, disputes were expensive, and leadership could not trust same-day balances. As Meridian entered new markets, the existing stack could not absorb additional currencies or regulatory reporting without more manual work.",
    constraints: [
      "Zero downtime migration from existing settlement pipelines",
      "Strict audit, retention, and data residency requirements",
      "Finance operators needed clarity over novelty",
      "Existing reporting consumers had to keep working during cutover",
    ],
    responsibilities: [
      "End-to-end system design and service boundaries",
      "Event-driven reconciliation pipeline and projection model",
      "Operator-facing product architecture and exception workflows",
      "AWS infrastructure, observability, and regional failover",
      "Migration sequencing and dual-run validation",
    ],
    approach:
      "We modeled money movement as immutable events, introduced a double-entry projection layer, and built a restrained operations console focused on exception handling rather than decorative dashboards.",
    phases: [
      {
        title: "Discover & map",
        description:
          "Traced every settlement source, failure mode, and spreadsheet workaround with finance and engineering. Defined a shared vocabulary for events, balances, and exceptions.",
      },
      {
        title: "Design the core",
        description:
          "Established an append-only event store, projection services, and regional isolation boundaries. Wrote ADRs for auditability and cutover strategy.",
      },
      {
        title: "Ship the console",
        description:
          "Built an exception-first operator interface with clear states, searchable trails, and actions that finance teams could trust under pressure.",
      },
      {
        title: "Migrate & harden",
        description:
          "Ran dual-write validation, region-by-region cutover, and observability gates before retiring legacy batch jobs.",
      },
    ],
    decisions: [
      {
        title: "Immutable event core",
        description:
          "All settlement activity is append-only. Derived views power reporting without mutating historical truth, which made audits and dispute reconstruction straightforward.",
      },
      {
        title: "Exception-first UI",
        description:
          "The product surfaces anomalies first. Operators spend time resolving risk instead of scanning healthy rows across oversized dashboards.",
      },
      {
        title: "Regional isolation",
        description:
          "Data residency and failover were designed per region while keeping a unified control plane for engineering and shared schema evolution.",
      },
      {
        title: "Dual-run cutover",
        description:
          "Legacy and new pipelines ran in parallel with balance diffs until confidence thresholds were met — avoiding a single high-risk switchover night.",
      },
    ],
    architecture: {
      caption:
        "Settlement events flow into an immutable ledger core. Projections feed the operator console and regional reporting without rewriting history.",
      nodes: [
        { id: "ingest", label: "Ingest", x: 40, y: 36, w: 120, h: 56, tone: "accent" },
        { id: "events", label: "Event Store", x: 210, y: 36, w: 130, h: 56, tone: "primary" },
        { id: "project", label: "Projections", x: 390, y: 36, w: 130, h: 56, tone: "accent" },
        { id: "regions", label: "Regions", x: 40, y: 140, w: 120, h: 56, tone: "muted" },
        { id: "console", label: "Operator UI", x: 210, y: 140, w: 130, h: 56, tone: "muted" },
        { id: "audit", label: "Audit Trail", x: 390, y: 140, w: 130, h: 56, tone: "muted" },
      ],
      links: [
        { from: "ingest", to: "events" },
        { from: "events", to: "project" },
        { from: "events", to: "console", dashed: true },
        { from: "project", to: "audit" },
        { from: "regions", to: "events", dashed: true },
      ],
    },
    screens: [
      {
        id: "exceptions",
        title: "Exception queue",
        caption: "Priority anomalies with settlement context and suggested next actions.",
        kind: "table",
      image: "/projects/meridian-ledger/screen-01.png",
      },
      {
        id: "trail",
        title: "Event trail",
        caption: "Immutable timeline for a single settlement across processors and regions.",
        kind: "panel",
      image: "/projects/meridian-ledger/screen-02.png",
      },
      {
        id: "balance",
        title: "Balance projection",
        caption: "Same-day multi-currency balances derived from the event core.",
        kind: "dashboard",
      image: "/projects/meridian-ledger/screen-03.png",
      },
    ],
    learnings: [
      "Finance teams adopt systems faster when the interface mirrors their mental model of exceptions, not engineering abstractions.",
      "Immutable history is not only an audit feature — it is a migration safety net.",
      "Regional isolation is easier to retrofit early than after product surface area expands.",
    ],
    cover: "/projects/meridian-ledger/cover.png",
    visual: "ledger",
    accent: "#b8a88a",
  },
  {
    slug: "northline-vault",
    number: "02",
    title: "Northline Vault",
    industry: "Security / SaaS",
    year: "2024",
    role: "Technical Consultant",
    duration: "4 months",
    client: "Northline Systems",
    challenge:
      "Design a secrets and configuration platform that product teams could adopt without sacrificing governance.",
    outcome:
      "Cut secret sprawl across 60+ services and established a reusable access model for engineering and compliance.",
    stack: ["Go", "React", "Kubernetes", "Terraform", "OIDC", "PostgreSQL"],
    metrics: [
      { label: "Services onboarded", value: "60+", detail: "Across 4 product lines" },
      { label: "Secret sprawl", value: "−70%", detail: "Static credentials retired" },
      { label: "Access reviews", value: "Auto", detail: "Policy-driven cadence" },
    ],
    overview:
      "Northline Vault provides governed secret distribution and environment configuration for a multi-product SaaS company moving toward platform engineering maturity. The work balanced security requirements with developer experience so adoption would stick.",
    problem:
      "Credentials lived in CI variables, local files, and ad-hoc cloud stores. Rotation was inconsistent and ownership unclear.",
    problemDetail:
      "As Northline grew, every team invented its own way to store secrets. Production incidents often traced back to leaked or stale credentials. Compliance reviews were manual and incomplete. Platform leadership needed a system that security could trust and product engineers would actually use — without turning every deploy into a ticket queue.",
    constraints: [
      "Must integrate with existing Kubernetes workloads",
      "Security team required policy-as-code and audit trails",
      "Developer experience could not become a bottleneck",
      "Migration had to avoid freezing product delivery",
    ],
    responsibilities: [
      "Architecture advisory and reference implementation",
      "Access control model, ownership, and audit trails",
      "Developer onboarding flows and CLI/SDK patterns",
      "Migration playbooks and service rollout sequencing",
    ],
    approach:
      "We treated secrets as first-class platform resources with explicit ownership, short-lived credentials where possible, and a thin control UI for policy exceptions.",
    phases: [
      {
        title: "Audit the sprawl",
        description:
          "Inventoried secret locations, owners, and rotation gaps. Ranked services by blast radius and migration readiness.",
      },
      {
        title: "Define the model",
        description:
          "Designed ownership, namespaces, policy defaults, and workload identity patterns with security and platform teams.",
      },
      {
        title: "Reference path",
        description:
          "Shipped a golden path for Kubernetes services, CI injection, and break-glass flows with full audit logging.",
      },
      {
        title: "Roll out",
        description:
          "Migrated services in risk-ordered waves with self-serve docs and office hours to keep delivery moving.",
      },
    ],
    decisions: [
      {
        title: "Policy before convenience",
        description:
          "Default paths enforce least privilege. Escape hatches are logged, time-bound, and reviewable instead of quietly permanent.",
      },
      {
        title: "Workload identity first",
        description:
          "Services authenticate via OIDC rather than long-lived static keys whenever possible, reducing rotation toil.",
      },
      {
        title: "Ownership as a first-class field",
        description:
          "Every secret has a team owner and review cadence. Orphaned credentials become visible instead of invisible risk.",
      },
    ],
    architecture: {
      caption:
        "Workloads request short-lived credentials through identity-aware gateways. Policy and audit sit in the control plane, not in each service.",
      nodes: [
        { id: "dev", label: "Developers", x: 40, y: 40, w: 120, h: 52, tone: "muted" },
        { id: "control", label: "Control Plane", x: 210, y: 40, w: 140, h: 52, tone: "primary" },
        { id: "policy", label: "Policy Engine", x: 400, y: 40, w: 120, h: 52, tone: "accent" },
        { id: "k8s", label: "Workloads", x: 40, y: 150, w: 120, h: 52, tone: "muted" },
        { id: "vault", label: "Secret Store", x: 210, y: 150, w: 140, h: 52, tone: "accent" },
        { id: "audit", label: "Audit Log", x: 400, y: 150, w: 120, h: 52, tone: "muted" },
      ],
      links: [
        { from: "dev", to: "control" },
        { from: "control", to: "policy" },
        { from: "k8s", to: "vault" },
        { from: "control", to: "vault" },
        { from: "vault", to: "audit", dashed: true },
        { from: "policy", to: "audit", dashed: true },
      ],
    },
    screens: [
      {
        id: "inventory",
        title: "Secret inventory",
        caption: "Ownership, age, and policy status across environments.",
        kind: "table",
      image: "/projects/northline-vault/screen-01.png",
      },
      {
        id: "policy",
        title: "Policy view",
        caption: "Least-privilege defaults with explicit, time-bound exceptions.",
        kind: "panel",
      image: "/projects/northline-vault/screen-02.png",
      },
{
        id: "access",
        title: "Governed access",
        caption: "Identity-aware control plane atmosphere — short-lived credentials over static keys.",
        kind: "flow",
        image: "/projects/northline-vault/screen-03.png",
      },
    ],
    learnings: [
      "Security platforms fail when they optimize for policy purity and ignore the deploy path.",
      "Making ownership visible changes behavior faster than another reminder email.",
      "Short-lived credentials reduce ceremony when the golden path is genuinely easy.",
    ],
    cover: "/projects/northline-vault/cover.png",
    visual: "vault",
    accent: "#8a8478",
  },
  {
    slug: "cascade-relay",
    number: "03",
    title: "Cascade Relay",
    industry: "Logistics",
    year: "2024",
    role: "Senior Product Engineer",
    duration: "6 months",
    client: "Cascade Logistics",
    challenge:
      "Replace brittle webhook integrations with a resilient event relay for partner and carrier systems.",
    outcome:
      "Improved delivery reliability to 99.97% and gave partners a self-serve integration surface.",
    stack: ["Node.js", "Kafka", "Redis", "AWS Lambda", "GraphQL", "PostgreSQL"],
    metrics: [
      { label: "Delivery reliability", value: "99.97%", detail: "Per-partner SLAs" },
      { label: "Partner onboarding", value: "−60%", detail: "Time to first event" },
      { label: "Incident volume", value: "−45%", detail: "Integration-related pages" },
    ],
    overview:
      "Cascade Relay is an event distribution layer connecting a logistics platform to carriers, warehouses, and customer notification systems. It turned fragile point-to-point webhooks into versioned, observable delivery contracts.",
    problem:
      "Point-to-point webhooks failed silently, retries were inconsistent, and partner integrations required engineering for every change.",
    problemDetail:
      "Cascade’s partner network grew faster than its integration model. Each carrier and warehouse connection was a custom webhook with different retry assumptions. Failures were discovered by customers, not by operators. Onboarding a new partner meant weeks of engineering time, and schema changes risked breaking existing consumers without warning.",
    constraints: [
      "Partners had heterogeneous API maturity",
      "Events needed ordered delivery per shipment",
      "Existing consumers could not all migrate at once",
      "Support teams needed actionable delivery diagnostics",
    ],
    responsibilities: [
      "Event schema design and versioning strategy",
      "Relay, retry, and dead-letter infrastructure",
      "Partner developer portal and payload examples",
      "Gradual migration strategy from legacy webhooks",
    ],
    approach:
      "We introduced a durable outbox, per-partner delivery contracts, and a calm developer portal with clear payload examples and delivery diagnostics.",
    phases: [
      {
        title: "Contract the events",
        description:
          "Defined shipment lifecycle events as versioned contracts with explicit compatibility rules.",
      },
      {
        title: "Build the relay",
        description:
          "Implemented durable outbox publishing, ordered delivery per shipment, and observable retry policies.",
      },
      {
        title: "Open the portal",
        description:
          "Shipped partner docs, sample payloads, webhook signing, and delivery inspection tools.",
      },
      {
        title: "Migrate partners",
        description:
          "Moved consumers in waves with dual delivery and clear deprecation windows.",
      },
    ],
    decisions: [
      {
        title: "Contract-first integrations",
        description:
          "Partners subscribe to versioned event contracts rather than raw internal payloads, isolating them from internal refactors.",
      },
      {
        title: "Observable retries",
        description:
          "Failed deliveries surface with actionable context — last error, payload version, and next retry — instead of opaque queue depth alone.",
      },
      {
        title: "Ordered per aggregate",
        description:
          "Delivery guarantees are scoped per shipment ID, preserving sequence without forcing a global bottleneck.",
      },
    ],
    architecture: {
      caption:
        "Domain services publish through an outbox into the relay. Partners receive versioned contracts with retries and dead-letter visibility.",
      nodes: [
        { id: "services", label: "Domain Services", x: 36, y: 40, w: 140, h: 52, tone: "muted" },
        { id: "outbox", label: "Outbox", x: 210, y: 40, w: 110, h: 52, tone: "accent" },
        { id: "relay", label: "Relay", x: 360, y: 40, w: 110, h: 52, tone: "primary" },
        { id: "partners", label: "Partners", x: 36, y: 150, w: 140, h: 52, tone: "muted" },
        { id: "dlq", label: "Dead Letter", x: 210, y: 150, w: 110, h: 52, tone: "muted" },
        { id: "portal", label: "Dev Portal", x: 360, y: 150, w: 110, h: 52, tone: "accent" },
      ],
      links: [
        { from: "services", to: "outbox" },
        { from: "outbox", to: "relay" },
        { from: "relay", to: "partners" },
        { from: "relay", to: "dlq", dashed: true },
        { from: "portal", to: "relay", dashed: true },
      ],
    },
    screens: [
      {
        id: "delivery",
        title: "Delivery inspector",
        caption: "Per-partner delivery status with retry history and payload versions.",
        kind: "dashboard",
      image: "/projects/cascade-relay/screen-01.png",
      },
      {
        id: "contract",
        title: "Event contract",
        caption: "Versioned shipment events with example payloads and signing rules.",
        kind: "panel",
      image: "/projects/cascade-relay/screen-02.png",
      },
{
        id: "flow",
        title: "Relay topology",
        caption: "Networked delivery paths from outbox to partners — resilient by design.",
        kind: "diagram",
        image: "/projects/cascade-relay/screen-03.png",
      },
    ],
    learnings: [
      "Partners integrate faster when contracts and examples are the product, not an afterthought.",
      "Retries without diagnostics just move the incident later.",
      "Gradual migration beats a forced cutover when partner maturity varies widely.",
    ],
    cover: "/projects/cascade-relay/cover.png",
    visual: "relay",
    accent: "#9a8f7a",
  },
  {
    slug: "atelier-atlas",
    number: "04",
    title: "Atelier Atlas",
    industry: "Design Systems",
    year: "2023",
    role: "Frontend Architect",
    duration: "5 months",
    client: "Atelier Digital",
    challenge:
      "Unify fragmented product UIs into a shared design system without freezing product velocity.",
    outcome:
      "Shipped a token-driven system adopted by five product teams with measurable consistency gains.",
    stack: ["React", "TypeScript", "Storybook", "Figma Tokens", "Vite", "Chromatic"],
    metrics: [
      { label: "Product teams", value: "05", detail: "Active adopters" },
      { label: "UI variance", value: "−55%", detail: "Measured spacing/type drift" },
      { label: "Component reuse", value: "+3.2×", detail: "Shared primitive usage" },
    ],
    overview:
      "Atelier Atlas is a design system and component architecture for a multi-brand product suite that needed coherence without becoming a bottleneck. The system connected Figma and code through tokens and a clear contribution model.",
    problem:
      "Each product reinvented patterns. Accessibility, spacing, and interaction quality varied widely.",
    problemDetail:
      "Atelier’s products shared customers but not interface foundations. Teams copied components, then diverged. Accessibility debt accumulated. Designers and engineers argued over values that should have been shared contracts. Leadership wanted visual coherence across brands without creating a central team that blocked every release.",
    constraints: [
      "Multiple brand expressions from one system",
      "Incremental adoption required — no big-bang rewrite",
      "Design and engineering needed a shared source of truth",
      "Contribution model had to scale beyond a single owner",
    ],
    responsibilities: [
      "Component architecture and package boundaries",
      "Token pipeline from Figma to code",
      "Documentation, Storybook, and contribution model",
      "Migration tooling and adoption metrics",
    ],
    approach:
      "We built a layered system — foundations, primitives, patterns — with clear ownership and a contribution path that kept product teams moving.",
    phases: [
      {
        title: "Foundations",
        description:
          "Extracted color, type, space, and motion tokens. Aligned Figma libraries with code packages.",
      },
      {
        title: "Primitives",
        description:
          "Shipped high-leverage primitives first: buttons, inputs, dialogs, navigation shells.",
      },
      {
        title: "Patterns & docs",
        description:
          "Documented composition patterns and accessibility expectations with living Storybook examples.",
      },
      {
        title: "Adoption",
        description:
          "Supported team migrations with codemods, office hours, and visible reuse metrics.",
      },
    ],
    decisions: [
      {
        title: "Tokens as contracts",
        description:
          "Design tokens became the shared language between Figma and code, reducing translation drift and brand-specific forks.",
      },
      {
        title: "Adoption over completeness",
        description:
          "We prioritized high-leverage primitives first and expanded only where products demonstrated repeated need.",
      },
      {
        title: "Layered ownership",
        description:
          "Foundations stayed centralized; product patterns could be proposed upward through a lightweight RFC process.",
      },
    ],
    architecture: {
      caption:
        "Tokens flow from design into foundations. Primitives and patterns compose upward into product surfaces without duplicating decisions.",
      nodes: [
        { id: "figma", label: "Figma Tokens", x: 40, y: 40, w: 130, h: 52, tone: "muted" },
        { id: "found", label: "Foundations", x: 210, y: 40, w: 130, h: 52, tone: "primary" },
        { id: "prim", label: "Primitives", x: 380, y: 40, w: 130, h: 52, tone: "accent" },
        { id: "patterns", label: "Patterns", x: 210, y: 150, w: 130, h: 52, tone: "accent" },
        { id: "apps", label: "Products", x: 380, y: 150, w: 130, h: 52, tone: "muted" },
        { id: "docs", label: "Storybook", x: 40, y: 150, w: 130, h: 52, tone: "muted" },
      ],
      links: [
        { from: "figma", to: "found" },
        { from: "found", to: "prim" },
        { from: "prim", to: "patterns" },
        { from: "patterns", to: "apps" },
        { from: "prim", to: "docs", dashed: true },
      ],
    },
    screens: [
      {
        id: "tokens",
        title: "Token layers",
        caption: "Brand, semantic, and component tokens with clear override rules.",
        kind: "panel",
      image: "/projects/atelier-atlas/screen-01.png",
      },
      {
        id: "library",
        title: "Primitive library",
        caption: "Shared components with accessibility states documented in place.",
        kind: "dashboard",
      image: "/projects/atelier-atlas/screen-02.png",
      },
{
        id: "contrib",
        title: "System language",
        caption: "Shared foundations that keep product teams coherent without freezing velocity.",
        kind: "flow",
        image: "/projects/atelier-atlas/screen-03.png",
      },
    ],
    learnings: [
      "A design system earns trust through adoption metrics, not through the size of its backlog.",
      "Tokens only work when design and engineering treat them as contracts, not suggestions.",
      "Leaving a contribution path open prevents shadow systems from forming.",
    ],
    cover: "/projects/atelier-atlas/cover.png",
    visual: "atlas",
    accent: "#a89880",
  },
  {
    slug: "pulse-field",
    number: "05",
    title: "Pulse Field",
    industry: "Mobile / Health",
    year: "2023",
    role: "Mobile & Backend Engineer",
    duration: "8 months",
    client: "Pulse Health",
    challenge:
      "Deliver a reliable mobile companion app with offline-first sync for field clinicians.",
    outcome:
      "Enabled uninterrupted field workflows with conflict-safe sync and a 4.8★ clinician satisfaction score.",
    stack: ["React Native", "SQLite", "Node.js", "AWS", "GraphQL", "TypeScript"],
    metrics: [
      { label: "Offline reliability", value: "99.9%", detail: "Session completion" },
      { label: "Clinician rating", value: "4.8★", detail: "In-app feedback" },
      { label: "Sync conflicts", value: "Auto", detail: "Intent-preserving merge" },
    ],
    overview:
      "Pulse Field supports clinicians working in low-connectivity environments with structured forms, visit notes, and synchronized care records. The product had to feel calm and trustworthy when the network disappeared.",
    problem:
      "Previous tools failed offline, causing data loss and forcing clinicians back to paper processes.",
    problemDetail:
      "Field clinicians often worked in clinics, homes, and rural sites with unreliable connectivity. The previous app blocked progress when sync failed, and recovered poorly when multiple edits collided. Data loss destroyed trust. Paper returned. Leadership needed a mobile system that treated offline as the default condition, not an edge case.",
    constraints: [
      "Unreliable field connectivity as the normal case",
      "Sensitive health data requirements and audit needs",
      "Non-technical users under real time pressure",
      "Conflict resolution had to preserve clinician intent",
    ],
    responsibilities: [
      "Offline sync architecture and local data model",
      "Mobile application structure and interaction design collaboration",
      "API design and conflict resolution strategy",
      "Performance, reliability, and field testing hardening",
    ],
    approach:
      "We designed local-first storage with explicit sync states, calm empty and error states, and conflict resolution that preferred clinician intent.",
    phases: [
      {
        title: "Field research",
        description:
          "Observed clinicians in low-connectivity settings. Mapped where previous tools broke trust.",
      },
      {
        title: "Local-first core",
        description:
          "Built SQLite-backed records, sync queues, and visible pending/synced/error states.",
      },
      {
        title: "Conflict model",
        description:
          "Defined merge rules that preserved clinician intent and made rare manual resolutions clear.",
      },
      {
        title: "Harden & ship",
        description:
          "Field pilots, performance budgets, and gradual rollout with support playbooks.",
      },
    ],
    decisions: [
      {
        title: "Local-first by default",
        description:
          "The app remains fully usable offline. Connectivity is an enhancement, not a requirement for completing a visit.",
      },
      {
        title: "Visible sync truth",
        description:
          "Users always know what is pending, synced, or needs attention — no silent background mystery.",
      },
      {
        title: "Intent-preserving merges",
        description:
          "Conflict rules favor the clinician’s latest intentional edit, with transparent history when automation is unsure.",
      },
    ],
    architecture: {
      caption:
        "The device is the source of truth during a visit. Sync queues reconcile with the cloud when connectivity returns.",
      nodes: [
        { id: "ui", label: "Mobile UI", x: 40, y: 40, w: 120, h: 52, tone: "muted" },
        { id: "local", label: "Local Store", x: 210, y: 40, w: 130, h: 52, tone: "primary" },
        { id: "queue", label: "Sync Queue", x: 390, y: 40, w: 120, h: 52, tone: "accent" },
        { id: "api", label: "API", x: 210, y: 150, w: 130, h: 52, tone: "accent" },
        { id: "cloud", label: "Cloud Records", x: 390, y: 150, w: 120, h: 52, tone: "muted" },
        { id: "audit", label: "Audit", x: 40, y: 150, w: 120, h: 52, tone: "muted" },
      ],
      links: [
        { from: "ui", to: "local" },
        { from: "local", to: "queue" },
        { from: "queue", to: "api" },
        { from: "api", to: "cloud" },
        { from: "local", to: "audit", dashed: true },
      ],
    },
    screens: [
      {
        id: "visit",
        title: "Visit workspace",
        caption: "Structured clinical forms that remain fully usable offline.",
        kind: "mobile",
      image: "/projects/pulse-field/screen-01.png",
      },
      {
        id: "sync",
        title: "Sync status",
        caption: "Pending, synced, and attention-needed states made explicit.",
        kind: "panel",
      image: "/projects/pulse-field/screen-02.png",
      },
{
        id: "conflict",
        title: "Field context",
        caption: "The product lives where connectivity fails — calm interfaces for real clinical pressure.",
        kind: "table",
        image: "/projects/pulse-field/screen-03.png",
      },
    ],
    learnings: [
      "Offline products succeed when sync state is part of the interface language.",
      "Clinicians forgive slow networks; they do not forgive silent data loss.",
      "Field pilots catch trust issues that staging environments never will.",
    ],
    cover: "/projects/pulse-field/cover.png",
    visual: "pulse",
    accent: "#8f8778",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug: string, limit = 2) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return projects.slice(0, limit);

  const related: Project[] = [];
  for (let offset = 1; offset < projects.length && related.length < limit; offset += 1) {
    related.push(projects[(index + offset) % projects.length]);
  }
  return related;
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: null, next: null };

  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}

export const featuredProject = projects[0];

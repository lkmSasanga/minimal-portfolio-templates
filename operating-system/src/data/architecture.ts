export type NodeKind =
  | "gateway"
  | "service"
  | "lambda"
  | "database"
  | "cache"
  | "queue"
  | "bus"
  | "cloud"
  | "websocket"
  | "container";

export type ArchNode = {
  id: string;
  label: string;
  kind: NodeKind;
  x: number;
  y: number;
  tech: string;
  dependsOn: string[];
};

export type ArchEdge = {
  id: string;
  from: string;
  to: string;
  label?: string;
};

/** Simulated commerce platform topology — intentional, not random */
export const archNodes: ArchNode[] = [
  {
    id: "edge",
    label: "CloudFront",
    kind: "cloud",
    x: 50,
    y: 8,
    tech: "AWS CloudFront + WAF",
    dependsOn: ["gateway"],
  },
  {
    id: "gateway",
    label: "API Gateway",
    kind: "gateway",
    x: 50,
    y: 22,
    tech: "Kong / Envoy",
    dependsOn: ["auth", "orders", "catalog", "ws"],
  },
  {
    id: "auth",
    label: "Auth Service",
    kind: "service",
    x: 18,
    y: 40,
    tech: "Node.js · JWT · OAuth",
    dependsOn: ["users-db", "session"],
  },
  {
    id: "orders",
    label: "Orders",
    kind: "service",
    x: 50,
    y: 42,
    tech: "TypeScript · NestJS",
    dependsOn: ["orders-db", "payment", "queue", "bus"],
  },
  {
    id: "catalog",
    label: "Catalog",
    kind: "service",
    x: 82,
    y: 40,
    tech: "Go · gRPC",
    dependsOn: ["catalog-db", "cache"],
  },
  {
    id: "ws",
    label: "WebSocket GW",
    kind: "websocket",
    x: 82,
    y: 22,
    tech: "Socket.IO · Redis Pub/Sub",
    dependsOn: ["bus"],
  },
  {
    id: "payment",
    label: "Payment λ",
    kind: "lambda",
    x: 32,
    y: 62,
    tech: "AWS Lambda · Stripe",
    dependsOn: ["queue"],
  },
  {
    id: "inventory",
    label: "Inventory",
    kind: "container",
    x: 68,
    y: 62,
    tech: "Docker · ECS Fargate",
    dependsOn: ["catalog-db", "bus"],
  },
  {
    id: "bus",
    label: "Event Bus",
    kind: "bus",
    x: 50,
    y: 58,
    tech: "Amazon EventBridge",
    dependsOn: [],
  },
  {
    id: "queue",
    label: "SQS Queue",
    kind: "queue",
    x: 18,
    y: 72,
    tech: "Amazon SQS",
    dependsOn: [],
  },
  {
    id: "session",
    label: "Session Cache",
    kind: "cache",
    x: 8,
    y: 58,
    tech: "Redis 7",
    dependsOn: [],
  },
  {
    id: "cache",
    label: "Catalog Cache",
    kind: "cache",
    x: 92,
    y: 58,
    tech: "Redis Cluster",
    dependsOn: [],
  },
  {
    id: "users-db",
    label: "Users DB",
    kind: "database",
    x: 18,
    y: 88,
    tech: "PostgreSQL 16",
    dependsOn: [],
  },
  {
    id: "orders-db",
    label: "Orders DB",
    kind: "database",
    x: 50,
    y: 88,
    tech: "PostgreSQL · RDS",
    dependsOn: [],
  },
  {
    id: "catalog-db",
    label: "Catalog DB",
    kind: "database",
    x: 82,
    y: 88,
    tech: "PostgreSQL · Read replicas",
    dependsOn: [],
  },
];

export const archEdges: ArchEdge[] = [
  { id: "e1", from: "edge", to: "gateway" },
  { id: "e2", from: "gateway", to: "auth" },
  { id: "e3", from: "gateway", to: "orders" },
  { id: "e4", from: "gateway", to: "catalog" },
  { id: "e5", from: "gateway", to: "ws" },
  { id: "e6", from: "auth", to: "session" },
  { id: "e7", from: "auth", to: "users-db" },
  { id: "e8", from: "orders", to: "orders-db" },
  { id: "e9", from: "orders", to: "payment" },
  { id: "e10", from: "orders", to: "queue" },
  { id: "e11", from: "orders", to: "bus" },
  { id: "e12", from: "catalog", to: "cache" },
  { id: "e13", from: "catalog", to: "catalog-db" },
  { id: "e14", from: "payment", to: "queue" },
  { id: "e15", from: "bus", to: "inventory" },
  { id: "e16", from: "bus", to: "ws" },
  { id: "e17", from: "inventory", to: "catalog-db" },
  { id: "e18", from: "ws", to: "bus" },
];

/** Canonical request routes — paths through the graph */
export const requestRoutes: string[][] = [
  ["edge", "gateway", "auth", "session"],
  ["edge", "gateway", "orders", "orders-db"],
  ["edge", "gateway", "orders", "payment", "queue"],
  ["edge", "gateway", "catalog", "cache"],
  ["edge", "gateway", "catalog", "catalog-db"],
  ["edge", "gateway", "orders", "bus", "inventory"],
  ["edge", "gateway", "ws", "bus"],
  ["edge", "gateway", "auth", "users-db"],
];

export const kindMeta: Record<
  NodeKind,
  { color: string; glow: string; short: string }
> = {
  gateway: { color: "#67e8f9", glow: "rgba(103,232,249,0.35)", short: "GW" },
  service: { color: "#93c5fd", glow: "rgba(147,197,253,0.3)", short: "SVC" },
  lambda: { color: "#fcd34d", glow: "rgba(252,211,77,0.3)", short: "λ" },
  database: { color: "#6ee7b7", glow: "rgba(110,231,183,0.3)", short: "DB" },
  cache: { color: "#f9a8d4", glow: "rgba(249,168,212,0.25)", short: "KV" },
  queue: { color: "#fdba74", glow: "rgba(253,186,116,0.3)", short: "Q" },
  bus: { color: "#c4b5fd", glow: "rgba(196,181,253,0.28)", short: "BUS" },
  cloud: { color: "#a5f3fc", glow: "rgba(165,243,252,0.28)", short: "CDN" },
  websocket: { color: "#86efac", glow: "rgba(134,239,172,0.28)", short: "WS" },
  container: { color: "#7dd3fc", glow: "rgba(125,211,252,0.3)", short: "CTR" },
};

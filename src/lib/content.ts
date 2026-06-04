import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  Bell,
  Calendar,
  Car,
  FileText,
  MessageSquare,
  Package,
  Phone,
  Sheet,
  Shield,
  Store,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";

export type TrustPillarTheme = {
  card: string;
  iconBox: string;
  icon: string;
  watermark: string;
  glow: string;
  hoverBorder: string;
  hoverShadow: string;
  topLine: string;
};

export const trustPillars = [
  {
    icon: Shield,
    label: "Gate-ready",
    description: "Visitor approvals and entry logs",
    theme: {
      card: "border-orange-200/75 bg-gradient-to-b from-white to-orange-50/50",
      iconBox: "bg-orange-500/12 ring-orange-500/25",
      icon: "text-orange-600",
      watermark: "text-orange-600/[0.09]",
      glow: "bg-orange-400/20",
      hoverBorder: "hover:border-orange-300/90",
      hoverShadow: "hover:shadow-orange-500/12",
      topLine: "via-orange-500/55",
    },
  },
  {
    icon: Wallet,
    label: "Transparent dues",
    description: "Maintenance billing with UPI-friendly flows",
    theme: {
      card: "border-slate-200/75 bg-gradient-to-b from-white to-slate-50/50",
      iconBox: "bg-slate-800/12 ring-slate-800/25",
      icon: "text-slate-800",
      watermark: "text-slate-800/[0.09]",
      glow: "bg-slate-400/20",
      hoverBorder: "hover:border-slate-300/90",
      hoverShadow: "hover:shadow-slate-500/12",
      topLine: "via-slate-600/55",
    },
  },
  {
    icon: Users,
    label: "Everyone included",
    description: "Owners, tenants, and committee roles",
    theme: {
      card: "border-amber-200/75 bg-gradient-to-b from-white to-amber-50/50",
      iconBox: "bg-amber-500/12 ring-amber-500/25",
      icon: "text-amber-600",
      watermark: "text-amber-600/[0.09]",
      glow: "bg-amber-400/20",
      hoverBorder: "hover:border-amber-300/90",
      hoverShadow: "hover:shadow-amber-500/12",
      topLine: "via-amber-500/55",
    },
  },
] as const satisfies ReadonlyArray<{
  icon: LucideIcon;
  label: string;
  description: string;
  theme: TrustPillarTheme;
}>;

export const painPoints = [
  {
    icon: Phone,
    title: "Calls at the gate",
    description:
      "Residents miss delivery and guest approvals when everything runs on phone calls and WhatsApp.",
  },
  {
    icon: MessageSquare,
    title: "Maintenance chasing",
    description:
      "Treasurers spend hours following up on dues instead of seeing who paid in one dashboard.",
  },
  {
    icon: Sheet,
    title: "Scattered records",
    description:
      "Notices, complaints, and expenses live in chats and spreadsheets — nothing is audit-ready.",
  },
] as const;

export type ModuleItem = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const modules: ModuleItem[] = [
  {
    slug: "visitors",
    title: "Visitors & packages",
    description: "Pre-approve guests, log deliveries, and keep gate history in one place.",
    icon: Package,
  },
  {
    slug: "billing",
    title: "Maintenance & billing",
    description: "Generate bills, track collections, and give treasurers a clear picture.",
    icon: Wallet,
  },
  {
    slug: "complaints",
    title: "Complaints",
    description: "Residents raise issues; committee tracks status and resolution.",
    icon: Wrench,
  },
  {
    slug: "notices",
    title: "Notices",
    description: "Official circulars instead of forwarded PDFs in every group.",
    icon: Bell,
  },
  {
    slug: "amenities",
    title: "Amenities",
    description: "Book clubhouse slots and common facilities without phone calls.",
    icon: Calendar,
  },
  {
    slug: "community",
    title: "Polls & events",
    description: "Engage residents with polls, meetings, and society events.",
    icon: MessageSquare,
  },
  {
    slug: "staff",
    title: "Staff & vendors",
    description: "Track domestic staff, vendors, and operational assignments.",
    icon: Users,
  },
  {
    slug: "documents",
    title: "Documents",
    description: "Store society documents and share what residents need safely.",
    icon: FileText,
  },
  {
    slug: "parking",
    title: "Parking",
    description: "Manage slots, vehicles, and parking-related requests.",
    icon: Car,
  },
  {
    slug: "marketplace",
    title: "Marketplace",
    description: "Community listings and local services inside the society app.",
    icon: Store,
  },
];

export type ShowcaseFeature = {
  slug: string;
  title: string;
  extendedDescription: string;
  icon: LucideIcon;
  accent: string;
  iconBg: string;
};

export const appShowcaseFeatures: ShowcaseFeature[] = [
  {
    slug: "community",
    title: "Resident social feed",
    extendedDescription:
      "Official updates and discussions live in one moderated feed — not another noisy WhatsApp group. Residents post, react, and stay informed without chat overload.",
    icon: MessageSquare,
    accent: "from-violet-500 to-fuchsia-500",
    iconBg: "bg-violet-500/18 ring-violet-500/35",
  },
  {
    slug: "notices",
    title: "Notices & guidelines",
    extendedDescription:
      "Circulars, AGM notes, and society bye-laws stay searchable and dated. Everyone sees the same source of truth — no more digging through forwarded PDFs.",
    icon: Bell,
    accent: "from-orange-500 to-cyan-500",
    iconBg: "bg-orange-500/18 ring-orange-500/35",
  },
  {
    slug: "visitors",
    title: "Visitors & helpers",
    extendedDescription:
      "Pre-approve guests, deliveries, cabs, and domestic staff before they reach the gate. Guards see live approvals; residents get instant entry alerts.",
    icon: Package,
    accent: "from-emerald-500 to-teal-500",
    iconBg: "bg-emerald-500/18 ring-emerald-500/35",
  },
  {
    slug: "complaints",
    title: "Community helpdesk",
    extendedDescription:
      "Raise complaints with photos, track SLA status, and close the loop with the committee. Transparent ticketing replaces scattered calls to the office.",
    icon: Wrench,
    accent: "from-orange-500 to-amber-500",
    iconBg: "bg-orange-500/18 ring-orange-500/35",
  },
  {
    slug: "billing",
    title: "Bill payments",
    extendedDescription:
      "Maintenance dues, ledgers, and payment status in one view. Residents pay via UPI-friendly flows; admins reconcile collections without spreadsheets.",
    icon: Wallet,
    accent: "from-orange-500 to-orange-600",
    iconBg: "bg-orange-500/18 ring-orange-500/35",
  },
  {
    slug: "marketplace",
    title: "Discover marketplace",
    extendedDescription:
      "Buy, sell, and hire trusted neighbours for tutoring, repairs, and more — inside your society boundary. No public classifieds noise, only verified residents.",
    icon: Store,
    accent: "from-pink-500 to-rose-500",
    iconBg: "bg-pink-500/18 ring-pink-500/35",
  },
  {
    slug: "emergency",
    title: "Emergency help",
    extendedDescription:
      "One-tap SOS reaches security and the committee when seconds matter. Escalation paths are predefined so help is never a guessing game.",
    icon: AlertTriangle,
    accent: "from-red-500 to-orange-500",
    iconBg: "bg-red-500/18 ring-red-500/35",
  },
  {
    slug: "amenities",
    title: "Facilities & activities",
    extendedDescription:
      "Book clubhouse slots, courts, and society events without chasing the office on call. Availability and confirmations happen in-app, in real time.",
    icon: Calendar,
    accent: "from-orange-500 to-orange-600",
    iconBg: "bg-orange-500/18 ring-orange-500/35",
  },
];

/** @deprecated Use appShowcaseFeatures */
export const appShowcaseLeft = appShowcaseFeatures.slice(0, 4);
/** @deprecated Use appShowcaseFeatures */
export const appShowcaseRight = appShowcaseFeatures.slice(4, 8);

export const appQuickActions = [
  {
    id: "complaints",
    label: "Helpdesk",
    title: "Community helpdesk",
    description:
      "Raise complaints, track SLAs, and close loops with the committee from your phone.",
    icon: Wrench,
    accent: "from-orange-500 to-amber-500",
  },
  {
    id: "amenities",
    label: "Amenities",
    title: "Facilities & activities",
    description:
      "Book clubhouse, courts, and society events without chasing the office on call.",
    icon: Calendar,
    accent: "from-orange-500 to-orange-600",
  },
  {
    id: "notices",
    label: "Notices",
    title: "Notices & guidelines",
    description:
      "Circulars, AGM notes, and society rules in one searchable place for every resident.",
    icon: Bell,
    accent: "from-orange-500 to-cyan-500",
  },
  {
    id: "marketplace",
    label: "Marketplace",
    title: "Discover marketplace",
    description:
      "Buy, sell, and hire local services inside your society — trusted neighbours only.",
    icon: Store,
    accent: "from-emerald-500 to-teal-500",
  },
  {
    id: "documents",
    label: "Documents",
    title: "Society documents",
    description:
      "Bye-laws, NOC templates, and AGM minutes — always available, never buried in email.",
    icon: FileText,
    accent: "from-slate-500 to-slate-600",
  },
  {
    id: "sos",
    label: "SOS",
    title: "Emergency help",
    description:
      "One-tap SOS alerts security and the committee when every second counts.",
    icon: Shield,
    accent: "from-red-500 to-rose-600",
  },
] as const;

export type QuickActionId = (typeof appQuickActions)[number]["id"];

export const howItWorks = [
  {
    step: "01",
    title: "Register your society",
    description:
      "Admin sets up the society profile, wings, and join codes for residents and guards.",
  },
  {
    step: "02",
    title: "Onboard everyone",
    description:
      "Owners, tenants, committee members, and security join with the right permissions.",
  },
  {
    step: "03",
    title: "Go live",
    description:
      "Start gate approvals, billing runs, and notices from day one — mobile and web.",
  },
] as const;

export const pilotCommunities = [
  "Green Meadows",
  "Royal Residency",
  "Prestige Enclave",
  "Skyline Villas",
  "Lakeview Towers",
  "Palm Grove",
  "Harmony Heights",
  "Urban Nest",
] as const;

export const roleTabs = {
  residents: {
    id: "residents",
    title: "Residents & owners",
    tagline: "Your society in the palm of your hand",
    description:
      "Approve visitors, pay maintenance, read notices, and book amenities without chasing the office or WhatsApp groups.",
    features: [
      "One-tap gate visitor approvals",
      "Maintenance dues and payment status",
      "Official notices and announcements",
      "Complaints with tracking",
      "Amenity and clubhouse bookings",
    ],
    color: "from-orange-600 to-orange-600",
  },
  committee: {
    id: "committee",
    title: "Committee & RWA",
    tagline: "Run the society with clarity",
    description:
      "Treasurers and secretaries get billing visibility, notice delivery, and operational control without spreadsheet chaos.",
    features: [
      "Maintenance billing and collection view",
      "Expenses, funds, and reports",
      "Notices with read visibility",
      "Complaint oversight and escalation",
      "Polls, meetings, and documents",
    ],
    color: "from-orange-600 to-violet-600",
  },
} as const;

export type RoleTabKey = keyof typeof roleTabs;

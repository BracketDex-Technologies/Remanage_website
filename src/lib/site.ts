const appBase = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "");

/** Marketing site fallbacks when dashboard URL is not configured */
const fallbackAppPath = "/contact";

export const siteConfig = {
  name: "ReManage Society",
  legalName: "ReManage Society",
  tagline: "ReManage Society management for residents and committees",
  description:
    "Approve visitors, pay maintenance, and keep notices, complaints, and records in one secure place — without gate calls or scattered group chats.",
  contact: {
    email: "bracketdevs.teams@gmail.com",
    phone: "+91 8605589062",
    whatsapp: "https://wa.me/918605589062",
    whatsappDisplay: "+91 8605589062",
    call: "tel:+918605589062",
  },
  links: {
    app: appBase ?? fallbackAppPath,
    apk: process.env.NEXT_PUBLIC_APK_URL ?? "/images/ReManage-Society-release.apk",
    login: appBase ? `${appBase}/login` : fallbackAppPath,
    register: appBase ? `${appBase}/register` : fallbackAppPath,
    gate: appBase ? `${appBase}/gate` : fallbackAppPath,
  },
} as const;

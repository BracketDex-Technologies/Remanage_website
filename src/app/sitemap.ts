import type { MetadataRoute } from "next";

const routes = ["", "/solutions", "/security", "/implementation", "/resources", "/features", "/pricing", "/about", "/contact", "/privacy", "/terms", "/refund"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://remanagesociety.com";
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/features" || route === "/pricing" ? 0.8 : 0.5,
  }));
}

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ReManage Society",
    short_name: "ReManage",
    description: "Society operations for committees, residents, and guards.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6fbfe",
    theme_color: "#f97316",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}

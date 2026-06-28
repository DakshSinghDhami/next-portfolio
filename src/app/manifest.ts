import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Daksh Singh Dhami — Full-Stack Engineer",
    short_name: "Daksh Dhami",
    description:
      "16-year-old full-stack engineer building interactive 3D experiences, creative tools, and open-source libraries.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [{ src: "/favicon.ico", sizes: "256x256", type: "image/x-icon" }],
  };
}

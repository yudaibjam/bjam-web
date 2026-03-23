import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/lp/", "/api/"],
      },
    ],
    sitemap: "https://b-jam.co.jp/sitemap.xml",
  };
}

import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    // Allow everything, including AI answer-engine crawlers (OAI-SearchBot,
    // PerplexityBot, ClaudeBot, Google-Extended) — being crawlable is what makes
    // the site citable in AI answers.
    //
    // To block AI *training* bots while keeping AI *answer/search* bots, replace
    // the single rule below with per-agent rules, e.g.:
    //   { userAgent: ["GPTBot", "CCBot", "Google-Extended"], disallow: "/" },
    //   { userAgent: ["OAI-SearchBot", "PerplexityBot", "ClaudeBot"], allow: "/" },
    //   { userAgent: "*", allow: "/" },
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}

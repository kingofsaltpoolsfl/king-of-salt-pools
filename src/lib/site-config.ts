export const siteConfig = {
  name: "King of Salt Pools",
  tagline: "The Royal Way to Sanitize Your Pool",
  // Canonical origin — single source of truth for metadataBase, canonical URLs,
  // robots, sitemap and JSON-LD. No trailing slash. Update here if the domain changes.
  url: "https://kingofsaltpools.com",
  serviceArea: "Tampa Bay Area",
  // Display uses the POOL vanity spelling (7665 on a phone keypad);
  // phoneHref keeps the real digits since tel: links need numbers, not letters.
  phone: "(855) 520-POOL",
  phoneHref: "tel:+18555207665",
  email: "kingofsaltpoolsfl@gmail.com",
  hours: "Mon–Fri 8:00 AM – 5:00 PM",
  license: "Lic. #CPC1459279",
  // Installed price for a salt system conversion, confirmed by the client.
  // Shown on the home page and used in the Jandy TruClear Offer schema — the two
  // must stay in sync (Google requires a visible price for Product offer markup).
  saltSystemPrice: 2599,
} as const;

export const navLinks = [
  { href: "/why-salt", label: "Why Salt?" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/warranty", label: "Warranty" },
] as const;

export const quoteHref = "/contact";
export const quoteButtonLabel = "GET A FREE QUOTE";

// TODO: confirm the exact service area / city list with the client.
export const serviceAreaCities = [
  "Tampa",
  "St. Petersburg",
  "Clearwater",
  "Wesley Chapel",
  "Brandon",
  "Riverview",
  "Land O' Lakes",
  "New Tampa",
  "Lutz",
  "Largo",
  "Palm Harbor",
  "Valrico",
] as const;

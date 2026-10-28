import { serviceAreaCities, siteConfig } from "@/lib/site-config";
import type { Faq } from "@/lib/faqs";
import {
  jandyReviewSummary,
  jandyTruclearReviews,
} from "@/lib/jandy-truclear-reviews";

// JSON-LD structured data for Answer Engine Optimization (AEO) and rich results.
// Rendered as <script type="application/ld+json"> in the root layout so every
// page carries the business entity. Keep the @id values stable — other nodes
// reference the business by @id.

const BUSINESS_ID = `${siteConfig.url}/#business`;
const telephone = siteConfig.phoneHref.replace("tel:", "");

export const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": BUSINESS_ID,
  name: siteConfig.name,
  description:
    "Professional salt water pool conversion and salt chlorination system installation in the Tampa Bay Area, Florida.",
  url: siteConfig.url,
  image: `${siteConfig.url}/assets/images/shared/logo.png`,
  logo: `${siteConfig.url}/assets/images/shared/logo.png`,
  telephone,
  email: siteConfig.email,
  slogan: siteConfig.tagline,
  priceRange: "$$",
  // Service-area business: region/country are known; street address is omitted
  // until a physical location is confirmed. TODO: add streetAddress/postalCode
  // (and addressLocality if there's a storefront) once confirmed with the client.
  address: {
    "@type": "PostalAddress",
    addressRegion: "FL",
    addressCountry: "US",
  },
  areaServed: serviceAreaCities.map((city) => ({
    "@type": "City",
    name: city,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  founder: [
    { "@type": "Person", name: "Nick" },
    { "@type": "Person", name: "Fernanda" },
  ],
  // Social profiles for entity disambiguation (strongest local-AEO signal).
  // TODO: add the Google Business Profile URL here once it exists.
  sameAs: [
    "https://www.facebook.com/share/1BTiYmQgJi/",
    "https://www.instagram.com/kingofsaltpoolsfl",
  ],
};

export const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Salt Water Pool Conversion",
  serviceType: "Salt water pool conversion and salt chlorination system installation",
  provider: { "@id": BUSINESS_ID },
  areaServed: serviceAreaCities.map((city) => ({ "@type": "City", name: city })),
  description:
    "Converting residential chlorine pools to salt water and installing Jandy TruClear salt chlorination systems, with a 3-year manufacturer warranty.",
  url: `${siteConfig.url}/why-salt`,
};

// Build a FAQPage node from a list of Q&A. Render only on the page where the
// same questions and answers are visible to users.
export function faqPageLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

// HowTo for the salt water conversion process. Steps mirror the visible
// "How the conversion works" section on /why-salt.
// TODO: confirm the exact steps/wording with the client; no durations are
// claimed here to avoid stating anything unverified.
export const conversionHowToLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How a salt water pool conversion works",
  description:
    "The steps to convert a residential chlorine pool to a salt water pool with King of Salt Pools.",
  step: [
    {
      "@type": "HowToStep",
      name: "Get a personalized quote",
      text: "Tell us about your pool and current equipment and get your conversion price right away.",
      url: `${siteConfig.url}/contact`,
    },
    {
      "@type": "HowToStep",
      name: "Install the salt system",
      text: "We install the Jandy TruClear salt chlorinator (controller and cell) on your existing pool equipment.",
    },
    {
      "@type": "HowToStep",
      name: "Add pool-grade salt",
      text: "We add pool-grade salt to the water so the system can generate chlorine automatically.",
    },
    {
      "@type": "HowToStep",
      name: "Dial in and balance",
      text: "We set the chlorine output and confirm your water chemistry is balanced for consistent, automatic sanitation.",
    },
  ],
};

// Reviews shown on the site are third-party reviews of the Jandy TruClear
// PRODUCT (from Jandy's own site), NOT reviews of King of Salt Pools. They are
// therefore marked up on a Product node with itemReviewed = the product — never
// on the LocalBusiness — to stay within Google's review-snippet guidelines.
export const jandyTruclearProductLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Jandy TruClear Salt Chlorinator",
  brand: { "@type": "Brand", name: "Jandy" },
  category: "Salt chlorine generator",
  description:
    "Salt water chlorination system for residential pools up to 35,000 gallons, with a 3-year manufacturer warranty. Installed by King of Salt Pools.",
  // Installed price offered by King of Salt Pools. Mirrors the price shown
  // visibly on the home page (siteConfig.saltSystemPrice) per Google's rule that
  // Product offer markup must match an on-page price.
  offers: {
    "@type": "Offer",
    price: String(siteConfig.saltSystemPrice),
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    url: `${siteConfig.url}/contact`,
    seller: { "@id": BUSINESS_ID },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: jandyReviewSummary.averageRating,
    reviewCount: jandyReviewSummary.totalReviews,
    bestRating: 5,
    worstRating: 1,
  },
  review: jandyTruclearReviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    datePublished: r.date,
    reviewBody: r.comment,
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: 5,
      worstRating: 1,
    },
  })),
};

// VideoObject for the TruClear explainer embedded on the home page.
// TODO: add `uploadDate` (recommended by Google for video rich results) once the
// video's publish date is known.
export const truclearVideoLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Jandy TruClear Salt Chlorinator",
  description:
    "A quick look at how a Jandy TruClear salt system works and what it takes to convert a pool to salt water.",
  thumbnailUrl: ["https://i.ytimg.com/vi/iekZRgx63hM/hqdefault.jpg"],
  embedUrl: "https://www.youtube.com/embed/iekZRgx63hM",
};

// Build a BreadcrumbList. Pass the trail from Home to the current page.
export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

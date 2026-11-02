import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";
import { localBusinessLd, serviceLd } from "@/lib/structured-data";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-accent",
  subsets: ["latin"],
  style: ["italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  // Renders <meta name="google-site-verification"> only once a token is set in
  // site-config, so the site can be verified in Google Search Console.
  ...(siteConfig.googleSiteVerification
    ? { verification: { google: siteConfig.googleSiteVerification } }
    : {}),
  title: {
    default: `${siteConfig.name} | Salt Water Pool Conversions in ${siteConfig.serviceArea}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Professional salt system installation and pool conversion in the Tampa Bay Area. Softer water, automatic chlorine generation, and simpler pool care.",
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} | Salt Water Pool Conversions in ${siteConfig.serviceArea}`,
    description:
      "Professional salt system installation and pool conversion in the Tampa Bay Area. Softer water, automatic chlorine generation, and simpler pool care.",
    images: [
      {
        url: "/assets/images/home/girls-in-pool.jpg",
        width: 1600,
        height: 1067,
        alt: `${siteConfig.name} — salt water pool conversions`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Salt Water Pool Conversions in ${siteConfig.serviceArea}`,
    description:
      "Professional salt system installation and pool conversion in the Tampa Bay Area.",
    images: ["/assets/images/home/girls-in-pool.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

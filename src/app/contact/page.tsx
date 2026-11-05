import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import { breadcrumbLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Get a Salt Water Pool Conversion Quote",
  description:
    "Tell us about your pool and see your personalized salt water pool conversion price instantly — serving the Tampa Bay Area.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
            ]),
          ),
        }}
      />
      <section className="bg-sand py-20">
        <Container>
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy">
            It&rsquo;s Time to Enjoy Your Pool
          </h1>
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            Tell us a little about yourself and your pool, and we&rsquo;ll
            show you your price right away — no waiting on a callback to find
            out what it costs.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-sm">
            <Image
              src="/assets/images/contact/kids_in_pool.jpg"
              alt="Kids enjoying a swim in the pool"
              width={1600}
              height={1200}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          <ContactForm />
        </div>
      </Container>
      </section>
    </>
  );
}

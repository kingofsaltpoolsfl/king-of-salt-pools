import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Link from "next/link";
import { quoteButtonLabel, quoteHref, siteConfig } from "@/lib/site-config";
import { breadcrumbLd, conversionHowToLd } from "@/lib/structured-data";
import {
  ArrowRight,
  Check,
  Zap,
  Download,
  Droplet,
  Eye,
  Leaf,
  ShieldCheck,
  Smile,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Salt Water Pool Benefits & Chlorine Comparison",
  description:
    "See the benefits of a salt water pool in the Tampa Bay Area — softer water, fewer chemicals, how the conversion works, and salt water vs. chlorine compared.",
  alternates: { canonical: "/why-salt" },
};

const coreBenefits = [
  {
    icon: Droplet,
    title: "Softer-Feeling Water",
    description:
      "Salt systems produce gentle, silky water without the harsh, drying effect of traditionally-dosed chlorine — your skin and hair will notice the difference.",
  },
  {
    icon: Sparkles,
    title: "Less Chemical Handling",
    description:
      "The system generates its own chlorine from dissolved salt, so there's far less buying, measuring, and pouring of harsh chemicals into your pool.",
  },
  {
    icon: Leaf,
    title: "Simpler Pool Care",
    description:
      "Consistent, automatic sanitation means fewer surprises, less guesswork, and a more predictable routine for keeping your water balanced.",
  },
  {
    icon: Smile,
    title: "Red Eyes, No More",
    description:
      "Lower, steadier chlorine levels are far gentler on eyes, skin, and swimwear than the spikes that come with manually dosed pools.",
  },
];

const productFeatures = [
  {
    icon: Eye,
    title: "Easy to Check",
    description:
      "A simple viewing window lets you check for buildup in seconds — no tools, no guesswork, no need to take anything apart.",
  },
  {
    icon: Wrench,
    title: "Low Maintenance",
    description:
      "Cleaning and servicing takes minutes, and the system helps prevent buildup on its own between visits.",
  },
  {
    icon: ShieldCheck,
    title: "Built to Last",
    description:
      "Durable construction backed by a 3-year manufacturer warranty, so you're covered for years to come.",
  },
  {
    icon: Zap,
    title: "Works With Your Pump",
    description:
      "Runs efficiently even at low flow, so it plays nicely with modern energy-saving pool pumps.",
  },
];

const specs = [
  { value: "35,000 gal", label: "Max pool size" },
  { value: "3 Years", label: "Standard warranty" },
];

// Visible steps must mirror conversionHowToLd in structured-data.ts.
// TODO: confirm the exact process/wording with the client.
const conversionSteps = [
  {
    title: "Get a personalized quote",
    description:
      "Tell us about your pool and current equipment and see your conversion price right away — no waiting on a callback.",
  },
  {
    title: "Install the salt system",
    description:
      "We install the Jandy TruClear salt chlorinator (controller and cell) on your existing pool equipment.",
  },
  {
    title: "Add pool-grade salt",
    description:
      "We add pool-grade salt to the water so the system can generate chlorine automatically from then on.",
  },
  {
    title: "Dial in and balance",
    description:
      "We set the chlorine output and confirm your water chemistry is balanced for consistent, automatic sanitation.",
  },
];

// Factual, balanced comparison (salt pools cost more up front — stated honestly).
const saltVsChlorine = [
  { aspect: "Chlorine source", salt: "Generated automatically from salt", chlorine: "Added by hand (tabs or liquid)" },
  { aspect: "Water feel", salt: "Softer, silkier", chlorine: "Can feel harsh or drying" },
  { aspect: "Chemical handling", salt: "Minimal — far less buying and pouring", chlorine: "Frequent buying, storing, dosing" },
  { aspect: "Eye & skin irritation", salt: "Lower, steadier chlorine — gentler", chlorine: "Dosing spikes can irritate" },
  { aspect: "Routine maintenance", salt: "Consistent and more hands-off", chlorine: "More testing and guesswork" },
  { aspect: "Up-front cost", salt: "Higher — you're adding equipment", chlorine: "Lower — no system to install", saltIsPlus: false },
  { aspect: "Ongoing chemical cost", salt: "Lower over time", chlorine: "Ongoing chlorine purchases" },
];

export default function WhySaltPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(conversionHowToLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Why Salt?", path: "/why-salt" },
            ]),
          ),
        }}
      />
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy">
        <Image
          src="/assets/images/why-salt/truclear-hero-pool.jpg"
          alt="Salt water pool with a Jandy TruClear salt chlorinator installed poolside"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40" />
        <Container className="relative py-20 sm:py-28">
          <h1 className="max-w-2xl text-4xl sm:text-5xl font-extrabold leading-tight text-white">
            The Benefits of a Salt Water Pool
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-white/75 leading-relaxed">
            Softer water, fewer chemicals, and a pool that&rsquo;s simply easier
            to own — right here in the {siteConfig.serviceArea}. Here&rsquo;s
            what changes when you make the switch, and the equipment that makes
            it possible.
          </p>
          <Button href={quoteHref} className="mt-8 px-7 py-3.5">
            {quoteButtonLabel}
            <ArrowRight className="size-4" />
          </Button>
        </Container>
      </section>

      {/* CORE BENEFITS */}
      <section className="bg-white py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
              A better way to enjoy your pool
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreBenefits.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-navy/10 bg-sand p-6"
              >
                <div className="flex size-11 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PRODUCT INTRO */}
      <section className="bg-sand py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="rounded-2xl border border-navy/10 bg-white p-8 flex items-center justify-center">
            <Image
              src="/assets/images/why-salt/truclear-system.png"
              alt="Jandy TruClear salt chlorinator control panel and cell"
              width={1042}
              height={1445}
              className="h-auto w-full max-w-xs"
            />
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
              Professional-Grade Equipment, Installed by Us
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-navy/70">
              We only install trusted, professional-grade salt systems (Jandy
              TruClear®) — built to be reliable and easy to live with, backed by
              a{" "}
              <Link
                href="/warranty"
                className="font-semibold text-gold-dark underline decoration-gold/50 underline-offset-2 hover:text-navy transition-colors"
              >
                3-year manufacturer warranty
              </Link>{" "}
              and our own workmanship.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-lg border border-navy/10 bg-white px-3 py-4 text-center"
                >
                  <p className="text-lg font-extrabold text-navy">
                    {spec.value}
                  </p>
                  <p className="mt-1 text-xs text-navy/60">{spec.label}</p>
                </div>
              ))}
            </div>

            <a
              href="/brochures/jandy-truclear-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-gold-dark hover:text-navy transition-colors"
            >
              <Download className="size-4" />
              Download the Full Brochure (PDF)
            </a>
          </div>
        </Container>
      </section>

      {/* FEATURE GRID */}
      <section className="bg-white py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
              Simple, reliable, and easy to maintain
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productFeatures.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-navy/10 bg-mist p-6"
              >
                <div className="flex size-11 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <figure className="overflow-hidden rounded-2xl border border-navy/10 bg-sand">
              <Image
                src="/assets/images/why-salt/truclear-lid.png"
                alt="Close-up of the TruClear transparent inspection lid"
                width={596}
                height={834}
                className="mx-auto h-64 w-auto object-contain py-6"
              />
              <figcaption className="border-t border-navy/10 bg-white px-6 py-3 text-sm font-semibold text-navy">
                Inspect for calcium buildup at a glance
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-navy/10 bg-sand">
              <Image
                src="/assets/images/why-salt/truclear-cell.png"
                alt="Close-up of the TruClear salt cell and valve body"
                width={806}
                height={1103}
                className="mx-auto h-64 w-auto object-contain py-6"
              />
              <figcaption className="border-t border-navy/10 bg-white px-6 py-3 text-sm font-semibold text-navy">
                A durable cell built for years of service
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-navy/10 bg-sand">
              <Image
                src="/assets/images/why-salt/truclear-cell-front.png"
                alt="Front view of the TruClear salt cell showing the flow-direction ports"
                width={1348}
                height={1500}
                className="mx-auto h-64 w-auto object-contain py-6"
              />
              <figcaption className="border-t border-navy/10 bg-white px-6 py-3 text-sm font-semibold text-navy">
                Balanced flow ports for consistent output
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-sand py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
              How the conversion works
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-navy/70">
              Switching to salt is simpler than most people expect. Here&rsquo;s
              what it looks like from quote to first swim.
            </p>
          </div>

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {conversionSteps.map((step, i) => (
              <li
                key={step.title}
                className="rounded-xl border border-navy/10 bg-white p-6"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-gold/15 text-base font-extrabold text-gold-dark">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* SALT VS CHLORINE */}
      <section className="bg-white py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
              Salt water vs. a traditional chlorine pool
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-navy/70">
              Both keep your pool sanitized with chlorine — the difference is how
              that chlorine gets there, and what owning the pool feels like.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-navy/10">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="bg-sand text-navy">
                  <th className="px-5 py-4 font-bold"></th>
                  <th className="px-5 py-4 font-bold">Salt water pool</th>
                  <th className="px-5 py-4 font-bold">Traditional chlorine pool</th>
                </tr>
              </thead>
              <tbody>
                {saltVsChlorine.map((row, i) => (
                  <tr
                    key={row.aspect}
                    className={
                      i !== saltVsChlorine.length - 1
                        ? "border-b border-navy/10"
                        : ""
                    }
                  >
                    <th
                      scope="row"
                      className="px-5 py-4 font-semibold text-navy"
                    >
                      {row.aspect}
                    </th>
                    <td className="px-5 py-4 text-navy/80">
                      <span className="flex items-start gap-2">
                        {row.saltIsPlus === false ? (
                          <X className="size-4 shrink-0 mt-0.5 text-navy/40" />
                        ) : (
                          <Check className="size-4 shrink-0 mt-0.5 text-gold-dark" />
                        )}
                        {row.salt}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-navy/60">{row.chlorine}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="bg-navy">
        <Container className="py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to make the switch?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-white/70">
            You already own the pool. Now upgrade the way you enjoy it!
          </p>
          <Button href={quoteHref} className="mt-8 px-8 py-3.5">
            {quoteButtonLabel}
            <ArrowRight className="size-4" />
          </Button>
        </Container>
      </section>
    </>
  );
}

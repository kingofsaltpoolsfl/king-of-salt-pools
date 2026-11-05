import { siteConfig } from "@/lib/site-config";

// Q&A content for the visible FAQ sections AND the FAQPage JSON-LD. Keep answers
// factual and extractable (1–3 sentences) — this is the content most likely to be
// quoted by AI answer engines. Only state facts already true for the business;
// anything needing client confirmation is marked with a TODO.

export type Faq = { question: string; answer: string };

export const generalFaqs: Faq[] = [
  {
    question: "Is a salt water pool better than a chlorine pool?",
    answer:
      "A salt water pool is still sanitized by chlorine, but the chlorine is generated automatically from dissolved salt instead of added by hand. Owners get softer-feeling water, steadier sanitation, and far less buying, storing, and pouring of harsh chemicals.",
  },
  {
    question: "How does a salt water pool work?",
    answer:
      "A salt chlorine generator (like the Jandy TruClear we install) passes the pool water through a cell that converts dissolved salt into chlorine, then back into salt — a continuous cycle that keeps the pool sanitized without manual dosing.",
  },
  {
    question: "Can I convert my existing chlorine pool to salt water?",
    answer:
      "Yes. Converting a traditional chlorine pool to salt water is our core service — we install the salt system on your existing equipment and add pool-grade salt, so you keep your pool and simply upgrade how it's sanitized.",
  },
  {
    question: "Do I need to drain my pool to convert to salt water?",
    answer:
      "No. In most cases we convert your pool using the water it already has — we install the salt chlorinator on your existing equipment and dissolve pool-grade salt into the water, so there's no need to drain and refill.",
  },
  {
    question: "How long does a salt water conversion take?",
    answer:
      "Converting is a straightforward upgrade to your existing equipment: we install the salt chlorinator, add pool-grade salt, and dial in the chlorine output. For a timeline on your specific pool and setup, reach out and we'll walk you through it.",
  },
  {
    question: "Does salt water damage a pool or its equipment?",
    answer:
      "Salt pools run at low, lake-like salt levels and lower, steadier chlorine than hand-dosed pools, which is gentler on skin, eyes, and swimwear. Keeping the water chemistry balanced protects your surfaces and equipment, and we install professional-grade systems built for the job.",
  },
  {
    question: "How salty is a salt water pool?",
    answer:
      "Very lightly salted — roughly a tenth of the salinity of seawater. Most people can barely taste it, and it won't sting your eyes the way a traditional chlorine pool can; it feels closer to soft, natural water than the ocean.",
  },
  {
    question: "Do I still need to add other pool chemicals?",
    answer:
      "The salt system generates chlorine for you automatically, so there's far less chemical handling. You'll still keep an eye on the basics — pH, alkalinity, and stabilizer — to keep the water balanced, just with a lot less buying, measuring, and pouring than a hand-dosed pool.",
  },
  {
    question: "How often do I need to add salt?",
    answer:
      "Not often. The salt is recycled continuously as it generates chlorine rather than being used up, so you typically only top it up when water is lost to splash-out, backwashing, or heavy rain overflow — not through normal swimming or evaporation.",
  },
  {
    question: "How much does a salt water pool conversion cost?",
    answer:
      "Pricing depends on your pool and current equipment. Our contact page gives you a personalized price right away — no waiting on a callback to find out what it costs.",
    // TODO: if the client wants a stated starting price or range, add it here.
  },
  {
    question: "What size pool can the salt system handle?",
    answer:
      "The Jandy TruClear system we install is rated for pools up to 35,000 gallons.",
  },
  {
    question: "Is the salt system covered by a warranty?",
    answer:
      "Yes. Every new salt system we install includes a 3-year manufacturer warranty on the complete chlorination system (controller and cell installed together), and we're an authorized Jandy installer.",
  },
  {
    question: "What areas do you serve?",
    answer: `${siteConfig.name} serves the ${siteConfig.serviceArea}, including Tampa, St. Petersburg, Clearwater, Wesley Chapel, Brandon, Riverview, Land O' Lakes, New Tampa, Lutz, Largo, Palm Harbor, and Valrico. Not sure if you're in range? Reach out and we'll check.`,
  },
];

export const warrantyFaqs: Faq[] = [
  {
    question: "How long is the salt water system warranty?",
    answer:
      "The complete electronic salt water chlorine system — controller and cell purchased and installed together — is covered for 3 years. Most other Jandy-branded products carry a standard 1-year warranty.",
  },
  {
    question: "What does the Jandy limited warranty cover?",
    answer:
      "It covers manufacturing defects in materials and workmanship for the coverage period of each product. Fluidra's liability is limited to replacement of the defective product or parts and does not include transportation, labor, or materials to make the repair.",
  },
  {
    question: "What is not covered by the warranty?",
    answer:
      "Common exclusions include improper installation, operation, or maintenance; improper chemical balance; corrosion or scaling from water chemistry; damage from weather, freezing, or power surges; and use of non-authorized parts. See the full PDF for the complete list.",
  },
  {
    question: "How do I file a warranty claim?",
    answer: `As your installer, ${siteConfig.name} can help start the claim — call ${siteConfig.phone}. Have your proof of purchase, model number, serial number, date of purchase, and date of installation ready. You can also contact Fluidra Technical Support at 800-822-7933.`,
  },
];

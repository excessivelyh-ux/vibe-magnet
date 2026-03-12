import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    q: "Are the followers real?",
    a: "Yes! We provide high-quality followers from real accounts. Our service uses safe, organic growth methods to deliver genuine followers to your profile.",
  },
  {
    q: "How long does delivery take?",
    a: "Most orders are delivered within 1-24 hours depending on the package size. Smaller packages arrive faster, while larger orders are delivered gradually for natural growth.",
  },
  {
    q: "Is my account safe?",
    a: "Absolutely. We never ask for your password. We only need your username. Our methods are compliant and we've never had an account banned.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept various payment methods including bank transfer, mobile money, and cryptocurrency. Contact us on WhatsApp for available options.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes, we offer a full refund if we're unable to deliver your order. Customer satisfaction is our priority.",
  },
  {
    q: "Will followers drop after purchase?",
    a: "We offer a 30-day refill guarantee. If you notice any drop within 30 days, contact us and we'll refill at no extra cost.",
  },
];

const FAQSection = () => (
  <section className="py-20">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground text-lg">Got questions? We've got answers.</p>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="border border-border rounded-xl px-6 bg-card"
          >
            <AccordionTrigger className="text-left font-heading font-semibold hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;

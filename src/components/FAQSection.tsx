import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { useI18n, TranslationKey } from "@/lib/i18n";

const faqKeys: { q: TranslationKey; a: TranslationKey }[] = [
  { q: "faq1q", a: "faq1a" },
  { q: "faq2q", a: "faq2a" },
  { q: "faq3q", a: "faq3a" },
  { q: "faq4q", a: "faq4a" },
  { q: "faq5q", a: "faq5a" },
  { q: "faq6q", a: "faq6a" },
];

const FAQSection = () => {
  const { t } = useI18n();
  return (
    <section className="py-20">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">{t("faqTitle")}</h2>
          <p className="text-muted-foreground text-lg">{t("faqDesc")}</p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqKeys.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-xl px-6 bg-card"
            >
              <AccordionTrigger className="text-left font-heading font-semibold hover:no-underline">
                {t(faq.q)}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {t(faq.a)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

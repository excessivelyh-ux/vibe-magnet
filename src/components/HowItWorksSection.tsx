import { motion } from "framer-motion";
import { Package, MessageCircle, TrendingUp } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const HowItWorksSection = () => {
  const { t } = useI18n();

  const steps = [
    { icon: Package, title: t("step1"), description: t("step1Desc") },
    { icon: MessageCircle, title: t("step2"), description: t("step2Desc") },
    { icon: TrendingUp, title: t("step3"), description: t("step3Desc") },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">{t("howTitle")}</h2>
          <p className="text-muted-foreground text-lg">{t("howDesc")}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center"
            >
              <div className="relative mx-auto mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto shadow-[0_0_40px_hsl(var(--primary)/0.3)]">
                  <step.icon className="w-9 h-9 text-white" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

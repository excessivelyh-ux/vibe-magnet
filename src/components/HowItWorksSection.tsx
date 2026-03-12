import { motion } from "framer-motion";
import { Package, MessageCircle, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Package,
    title: "Choose Package",
    description: "Pick the follower package that fits your goals and budget.",
  },
  {
    icon: MessageCircle,
    title: "Contact Us",
    description: "Reach out via WhatsApp with your order details.",
  },
  {
    icon: TrendingUp,
    title: "Get Followers",
    description: "Watch your follower count grow within hours!",
  },
];

const HowItWorksSection = () => (
  <section className="py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-muted-foreground text-lg">Three simple steps to grow your audience</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
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

export default HowItWorksSection;

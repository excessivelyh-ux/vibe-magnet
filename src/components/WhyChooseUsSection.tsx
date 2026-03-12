import { motion } from "framer-motion";
import { Zap, Shield, Clock, Users } from "lucide-react";

const features = [
  { icon: Zap, title: "Fast Delivery", description: "Orders delivered within hours, not days." },
  { icon: Shield, title: "Secure & Safe", description: "Your account safety is our top priority." },
  { icon: Clock, title: "24/7 Support", description: "We're always available on WhatsApp." },
  { icon: Users, title: "Real Followers", description: "High-quality followers that stick around." },
];

const WhyChooseUsSection = () => (
  <section className="py-20 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-muted-foreground text-lg">Trusted by thousands of creators worldwide</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <f.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;

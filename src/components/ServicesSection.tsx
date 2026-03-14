import { motion } from "framer-motion";
import { Music2, Instagram } from "lucide-react";

const services = [
  {
    icon: Music2,
    title: "TikTok Followers",
    description: "Grow your TikTok audience with real, active followers. Boost your visibility and reach millions.",
    color: "tiktok",
    gradient: "from-[hsl(174,100%,50%)] to-[hsl(280,80%,60%)]",
  },
  {
    icon: Instagram,
    title: "Instagram Followers",
    description: "Increase your Instagram following organically. Build credibility and attract brand deals.",
    color: "instagram",
    gradient: "from-[hsl(330,85%,60%)] to-[hsl(40,100%,60%)]",
  },
];

const ServicesSection = () => (
  <section className="py-20 relative">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">In two hours</p>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">Choose your platform and start growing today</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group relative rounded-2xl border border-border bg-card p-8 hover:border-primary/40 transition-all duration-300"
          >
            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-5`}>
              <service.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-3">{service.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

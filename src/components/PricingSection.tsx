import { motion } from "framer-motion";
import { MessageCircle, Star, Music2, Instagram } from "lucide-react";
import { Button } from "./ui/button";

const WHATSAPP_BASE = "https://wa.me/1234567890?text=";

interface Package {
  followers: string;
  price: string;
  delivery: string;
  popular?: boolean;
}

const tiktokPackages: Package[] = [
  { followers: "100", price: "$2.99", delivery: "1-2 hours" },
  { followers: "500", price: "$9.99", delivery: "2-6 hours" },
  { followers: "1,000", price: "$16.99", delivery: "6-12 hours", popular: true },
  { followers: "5,000", price: "$59.99", delivery: "12-24 hours" },
];

const instagramPackages: Package[] = [
  { followers: "100", price: "$3.99", delivery: "1-2 hours" },
  { followers: "500", price: "$12.99", delivery: "2-6 hours" },
  { followers: "1,000", price: "$21.99", delivery: "6-12 hours", popular: true },
  { followers: "5,000", price: "$79.99", delivery: "12-24 hours" },
];

const PlatformPricing = ({
  title,
  icon: Icon,
  packages,
  gradient,
  platform,
}: {
  title: string;
  icon: typeof Music2;
  packages: Package[];
  gradient: string;
  platform: string;
}) => (
  <div>
    <div className="flex items-center gap-3 mb-6">
      <div className={`p-2 rounded-lg bg-gradient-to-br ${gradient}`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h3 className="font-heading text-2xl font-bold">{title}</h3>
    </div>
    <div className="grid sm:grid-cols-2 gap-4">
      {packages.map((pkg, i) => (
        <motion.div
          key={pkg.followers}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className={`relative rounded-xl border p-6 transition-all duration-300 hover:scale-[1.02] ${
            pkg.popular
              ? "border-primary bg-primary/5 shadow-[0_0_30px_hsl(var(--primary)/0.15)]"
              : "border-border bg-card hover:border-primary/30"
          }`}
        >
          {pkg.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
              <Star className="w-3 h-3" /> Most Popular
            </div>
          )}
          <div className="text-3xl font-heading font-bold mb-1">{pkg.followers}</div>
          <div className="text-muted-foreground text-sm mb-4">followers</div>
          <div className="text-2xl font-bold text-primary mb-1">{pkg.price}</div>
          <div className="text-muted-foreground text-sm mb-5">⚡ {pkg.delivery}</div>
          <Button
            asChild
            className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white rounded-lg"
          >
            <a
              href={`${WHATSAPP_BASE}Hi! I want to order ${pkg.followers} ${platform} followers (${pkg.price})`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4" />
              Order Now
            </a>
          </Button>
        </motion.div>
      ))}
    </div>
  </div>
);

const PricingSection = () => (
  <section id="pricing" className="py-20 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">Pricing Packages</h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">Simple, transparent pricing. No hidden fees.</p>
      </motion.div>

      <div className="space-y-16 max-w-3xl mx-auto">
        <PlatformPricing
          title="TikTok Followers"
          icon={Music2}
          packages={tiktokPackages}
          gradient="from-[hsl(174,100%,50%)] to-[hsl(280,80%,60%)]"
          platform="TikTok"
        />
        <PlatformPricing
          title="Instagram Followers"
          icon={Instagram}
          packages={instagramPackages}
          gradient="from-[hsl(330,85%,60%)] to-[hsl(40,100%,60%)]"
          platform="Instagram"
        />
      </div>
    </div>
  </section>
);

export default PricingSection;

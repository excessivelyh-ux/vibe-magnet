import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useI18n } from "@/lib/i18n";

const WHATSAPP_LINK = "https://wa.me/905510010289?text=Hi!%20I%20want%20to%20order%20followers";

const HeroSection = () => {
  const { t } = useI18n();
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(280,80%,15%)] via-[hsl(300,60%,12%)] to-[hsl(200,80%,10%)]" />
      <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-primary/20 blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-[10%] w-96 h-96 rounded-full bg-accent/20 blur-[120px] animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-secondary/10 blur-[80px] animate-float" style={{ animationDelay: "0.8s" }} />

      <div className="container relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            {t("heroTag")}
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
            {t("heroTitle1")}
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {t("heroTitle2")}
            </span>
            {t("heroTitle3")}
          </h1>

          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            {t("heroDesc")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp/90 text-white text-lg px-8 py-6 rounded-full shadow-[0_0_30px_hsl(var(--whatsapp)/0.4)]"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                {t("orderWhatsApp")}
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 rounded-full border-primary/40 hover:bg-primary/10"
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t("viewPackages")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

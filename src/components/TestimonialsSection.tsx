import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    avatar: "SM",
    platform: "TikTok",
    package: "5K Followers",
    rating: 5,
    quote: "My TikTok went from 200 to 5K followers in just 2 days! Engagement is up 300%. Game changer! 🔥",
  },
  {
    id: 2,
    name: "Alex T.",
    avatar: "AT",
    platform: "Instagram",
    package: "2.5K Followers",
    rating: 5,
    quote: "Got exactly what I paid for. Real looking accounts, smooth delivery. Will order again for sure!",
  },
  {
    id: 3,
    name: "Jessica K.",
    avatar: "JK",
    platform: "TikTok",
    package: "1K Followers",
    rating: 5,
    quote: "Amazing service! Super fast delivery and the followers actually interact with my content. 10/10!",
  },
  {
    id: 4,
    name: "Mike R.",
    avatar: "MR",
    platform: "Instagram",
    package: "10K Followers",
    rating: 5,
    quote: "My brand's social proof went through the roof. Landed 3 new clients since boosting my IG! 💼",
  },
];

export default function TestimonialsSection() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            {t("testimonialsTitle")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            {t("testimonialsDesc")}
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <Quote className="h-8 w-8 text-primary/30" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
                      ))}
                    </div>
                  </div>
                  <p className="mb-6 text-lg font-medium text-foreground">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarImage alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-br from-primary/20 to-purple-500/20 text-sm font-bold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                            testimonial.platform === "TikTok"
                              ? "bg-[hsl(174,100%,50%,0.1)] text-[hsl(174,100%,50%)]"
                              : "bg-[hsl(330,85%,60%,0.1)] text-[hsl(330,85%,60%)]"
                          }`}
                        >
                          {testimonial.platform}
                        </span>
                        <span>•</span>
                        <span>{testimonial.package}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 rounded-full border border-border bg-card/50 px-6 py-3">
            <div className="flex -space-x-2">
              {["S", "A", "J", "M", "K"].map((letter, i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-primary/30 to-purple-500/30 text-xs font-bold"
                >
                  {letter}
                </div>
              ))}
            </div>
            <div className="text-sm">
              <span className="font-semibold text-foreground">{t("trustBadge")}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

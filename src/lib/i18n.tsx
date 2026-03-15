import React, { createContext, useContext, useState, useCallback } from "react";

export type Lang = "en" | "tr" | "de";

const translations = {
  en: {
    heroTag: "#1 SMM Growth Service",
    heroTitle1: "Boost Your",
    heroTitle2: "Social Media",
    heroTitle3: "Presence",
    heroDesc: "Get real TikTok & Instagram followers delivered fast. Grow your audience and dominate the algorithm.",
    orderWhatsApp: "Order via WhatsApp",
    viewPackages: "View Packages",
    servicesTitle: "Our Services",
    servicesDesc: "Premium growth services for top platforms",
    tiktokTitle: "TikTok Followers",
    tiktokDesc: "Boost your TikTok presence with real, active followers.",
    instagramTitle: "Instagram Followers",
    instagramDesc: "Grow your Instagram audience with quality followers.",
    followers: "followers",
    pricingTitle: "Pricing Packages",
    pricingDesc: "Simple, transparent pricing. No hidden fees.",
    mostPopular: "Most Popular",
    orderNow: "Order Now",
    testimonialsTitle: "What Our Clients Say",
    testimonialsDesc: "Real feedback from real customers",
    trustBadge: "2,000+ satisfied customers",
    howTitle: "How It Works",
    howDesc: "Three simple steps to grow your audience",
    step1: "Choose Package",
    step1Desc: "Pick the follower package that fits your goals and budget.",
    step2: "Contact Us",
    step2Desc: "Reach out via WhatsApp with your order details.",
    step3: "Get Followers",
    step3Desc: "Watch your follower count grow within hours!",
    whyTitle: "Why Choose Us",
    whyDesc: "Trusted by thousands of creators worldwide",
    fast: "Fast Delivery",
    fastDesc: "Orders delivered within hours, not days.",
    secure: "Secure & Safe",
    secureDesc: "Your account safety is our top priority.",
    support: "24/7 Support",
    supportDesc: "We're always available on WhatsApp.",
    real: "Real Followers",
    realDesc: "High-quality followers that stick around.",
    faqTitle: "Frequently Asked Questions",
    faqDesc: "Got questions? We've got answers.",
    faq1q: "Are the followers real?",
    faq1a: "Yes! We provide high-quality followers from real accounts. Our service uses safe, organic growth methods to deliver genuine followers to your profile.",
    faq2q: "How long does delivery take?",
    faq2a: "Most orders are delivered within 1-24 hours depending on the package size. Smaller packages arrive faster, while larger orders are delivered gradually for natural growth.",
    faq3q: "Is my account safe?",
    faq3a: "Absolutely. We never ask for your password. We only need your username. Our methods are compliant and we've never had an account banned.",
    faq4q: "What payment methods do you accept?",
    faq4a: "We accept various payment methods including bank transfer, mobile money, and cryptocurrency. Contact us on WhatsApp for available options.",
    faq5q: "Do you offer refunds?",
    faq5a: "Yes, we offer a full refund if we're unable to deliver your order. Customer satisfaction is our priority.",
    faq6q: "Will followers drop after purchase?",
    faq6a: "We offer a 30-day refill guarantee. If you notice any drop within 30 days, contact us and we'll refill at no extra cost.",
    footerTag: "#1 SMM Growth Service",
    footerRights: "All rights reserved.",
    availableOn: "Available on",
  },
  tr: {
    heroTag: "#1 SMM Büyüme Hizmeti",
    heroTitle1: "Sosyal Medyanı",
    heroTitle2: "Güçlendir",
    heroTitle3: "",
    heroDesc: "Gerçek TikTok ve Instagram takipçileri hızla teslim edilir. Kitlenizi büyütün ve algoritmayı domine edin.",
    orderWhatsApp: "WhatsApp ile Sipariş Ver",
    viewPackages: "Paketleri Gör",
    servicesTitle: "Hizmetlerimiz",
    servicesDesc: "En iyi platformlar için premium büyüme hizmetleri",
    tiktokTitle: "TikTok Takipçi",
    tiktokDesc: "Gerçek, aktif takipçilerle TikTok varlığınızı artırın.",
    instagramTitle: "Instagram Takipçi",
    instagramDesc: "Kaliteli takipçilerle Instagram kitlenizi büyütün.",
    followers: "takipçi",
    pricingTitle: "Fiyat Paketleri",
    pricingDesc: "Basit, şeffaf fiyatlandırma. Gizli ücret yok.",
    mostPopular: "En Popüler",
    orderNow: "Şimdi Sipariş Ver",
    testimonialsTitle: "Müşterilerimiz Ne Diyor",
    testimonialsDesc: "Gerçek müşterilerden gerçek geri bildirimler",
    trustBadge: "2.000+ memnun müşteri",
    howTitle: "Nasıl Çalışır",
    howDesc: "Kitlenizi büyütmek için üç basit adım",
    step1: "Paket Seç",
    step1Desc: "Hedeflerinize ve bütçenize uygun takipçi paketini seçin.",
    step2: "Bize Ulaşın",
    step2Desc: "Sipariş detaylarınızla WhatsApp'tan ulaşın.",
    step3: "Takipçi Kazan",
    step3Desc: "Takipçi sayınızın saatler içinde artışını izleyin!",
    whyTitle: "Neden Biz",
    whyDesc: "Dünya genelinde binlerce içerik üreticisi tarafından güveniliyor",
    fast: "Hızlı Teslimat",
    fastDesc: "Siparişler günler değil, saatler içinde teslim edilir.",
    secure: "Güvenli & Emniyetli",
    secureDesc: "Hesap güvenliğiniz önceliğimizdir.",
    support: "7/24 Destek",
    supportDesc: "WhatsApp'ta her zaman ulaşılabilir durumdayız.",
    real: "Gerçek Takipçiler",
    realDesc: "Kalıcı, yüksek kaliteli takipçiler.",
    faqTitle: "Sıkça Sorulan Sorular",
    faqDesc: "Sorularınız mı var? Cevaplarımız hazır.",
    faq1q: "Takipçiler gerçek mi?",
    faq1a: "Evet! Gerçek hesaplardan yüksek kaliteli takipçiler sağlıyoruz. Hizmetimiz profilinize gerçek takipçiler sağlamak için güvenli, organik büyüme yöntemleri kullanır.",
    faq2q: "Teslimat ne kadar sürer?",
    faq2a: "Çoğu sipariş paket boyutuna bağlı olarak 1-24 saat içinde teslim edilir. Küçük paketler daha hızlı gelir, büyük siparişler doğal büyüme için kademeli olarak teslim edilir.",
    faq3q: "Hesabım güvende mi?",
    faq3a: "Kesinlikle. Şifrenizi asla istemeyiz. Sadece kullanıcı adınıza ihtiyacımız var. Yöntemlerimiz uyumludur ve hiçbir hesap yasaklanmamıştır.",
    faq4q: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
    faq4a: "Banka havalesi, mobil ödeme ve kripto para dahil çeşitli ödeme yöntemlerini kabul ediyoruz. Mevcut seçenekler için WhatsApp'tan bize ulaşın.",
    faq5q: "İade yapıyor musunuz?",
    faq5a: "Evet, siparişinizi teslim edemememiz durumunda tam iade sunuyoruz. Müşteri memnuniyeti önceliğimizdir.",
    faq6q: "Satın alma sonrası takipçi düşer mi?",
    faq6a: "30 günlük yeniden doldurma garantisi sunuyoruz. 30 gün içinde herhangi bir düşüş fark ederseniz bize ulaşın, ücretsiz olarak yeniden dolduracağız.",
    footerTag: "#1 SMM Büyüme Hizmeti",
    footerRights: "Tüm hakları saklıdır.",
    availableOn: "Platformda mevcut",
  },
  de: {
    heroTag: "#1 SMM-Wachstumsservice",
    heroTitle1: "Steigere Deine",
    heroTitle2: "Social Media",
    heroTitle3: "Präsenz",
    heroDesc: "Erhalte echte TikTok- und Instagram-Follower schnell geliefert. Baue dein Publikum auf und dominiere den Algorithmus.",
    orderWhatsApp: "Per WhatsApp bestellen",
    viewPackages: "Pakete ansehen",
    servicesTitle: "Unsere Dienste",
    servicesDesc: "Premium-Wachstumsdienste für Top-Plattformen",
    tiktokTitle: "TikTok-Follower",
    tiktokDesc: "Steigere deine TikTok-Präsenz mit echten, aktiven Followern.",
    instagramTitle: "Instagram-Follower",
    instagramDesc: "Vergrößere dein Instagram-Publikum mit qualitativ hochwertigen Followern.",
    followers: "Follower",
    pricingTitle: "Preispakete",
    pricingDesc: "Einfache, transparente Preise. Keine versteckten Gebühren.",
    mostPopular: "Am beliebtesten",
    orderNow: "Jetzt bestellen",
    testimonialsTitle: "Was unsere Kunden sagen",
    testimonialsDesc: "Echtes Feedback von echten Kunden",
    trustBadge: "2.000+ zufriedene Kunden",
    howTitle: "So funktioniert's",
    howDesc: "Drei einfache Schritte zum Publikumswachstum",
    step1: "Paket wählen",
    step1Desc: "Wähle das Follower-Paket, das zu deinen Zielen und deinem Budget passt.",
    step2: "Kontaktiere uns",
    step2Desc: "Kontaktiere uns per WhatsApp mit deinen Bestelldetails.",
    step3: "Follower erhalten",
    step3Desc: "Sieh zu, wie deine Followerzahl innerhalb von Stunden wächst!",
    whyTitle: "Warum wir",
    whyDesc: "Vertrauenswürdig bei Tausenden von Creatorn weltweit",
    fast: "Schnelle Lieferung",
    fastDesc: "Bestellungen innerhalb von Stunden, nicht Tagen.",
    secure: "Sicher & geschützt",
    secureDesc: "Die Sicherheit deines Kontos hat höchste Priorität.",
    support: "24/7 Support",
    supportDesc: "Wir sind immer auf WhatsApp erreichbar.",
    real: "Echte Follower",
    realDesc: "Hochwertige Follower, die bleiben.",
    faqTitle: "Häufig gestellte Fragen",
    faqDesc: "Fragen? Wir haben Antworten.",
    faq1q: "Sind die Follower echt?",
    faq1a: "Ja! Wir bieten hochwertige Follower von echten Konten. Unser Service nutzt sichere, organische Wachstumsmethoden.",
    faq2q: "Wie lange dauert die Lieferung?",
    faq2a: "Die meisten Bestellungen werden je nach Paketgröße innerhalb von 1-24 Stunden geliefert.",
    faq3q: "Ist mein Konto sicher?",
    faq3a: "Absolut. Wir fragen niemals nach deinem Passwort. Wir brauchen nur deinen Benutzernamen.",
    faq4q: "Welche Zahlungsmethoden akzeptiert ihr?",
    faq4a: "Wir akzeptieren verschiedene Zahlungsmethoden einschließlich Banküberweisung, Mobile Payment und Kryptowährung.",
    faq5q: "Bietet ihr Rückerstattungen an?",
    faq5a: "Ja, wir bieten eine vollständige Rückerstattung, wenn wir Ihre Bestellung nicht liefern können.",
    faq6q: "Werden Follower nach dem Kauf weniger?",
    faq6a: "Wir bieten eine 30-Tage-Nachfüllgarantie. Bei einem Rückgang innerhalb von 30 Tagen füllen wir kostenlos nach.",
    footerTag: "#1 SMM-Wachstumsservice",
    footerRights: "Alle Rechte vorbehalten.",
    availableOn: "Verfügbar auf",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextType>({
  lang: "en",
  setLang: () => {},
  t: (key) => key,
});

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang") as Lang;
    return saved && translations[saved] ? saved : "tr";
  });

  const changeLang = useCallback((l: Lang) => {
    setLang(l);
    localStorage.setItem("lang", l);
  }, []);

  const t = useCallback((key: TranslationKey) => {
    return translations[lang][key] || translations.en[key] || key;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang: changeLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);

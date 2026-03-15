import { useI18n, Lang } from "@/lib/i18n";

const languages: { code: Lang; flag: string; label: string }[] = [
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "tr", flag: "🇹🇷", label: "TR" },
  { code: "de", flag: "🇩🇪", label: "DE" },
];

const LanguageSelector = () => {
  const { lang, setLang } = useI18n();

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-1 rounded-full border border-border bg-card/80 backdrop-blur-md p-1">
      {languages.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
            lang === l.code
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
        >
          <span className="text-base">{l.flag}</span>
          <span className="hidden sm:inline">{l.label}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;

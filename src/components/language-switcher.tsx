import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, locales, asPath } = router;

  return (
    <div>
      {locales?.map((lng) => (
        <button
          key={lng}
          onClick={() => router.push(asPath, asPath, { locale: lng })}
          disabled={locale === lng}
          className={locale === lng ? "font-bold" : ""}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

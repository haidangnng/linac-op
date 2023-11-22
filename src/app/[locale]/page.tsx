import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <main className="flex flex-col justify-between items-center p-24 min-h-screen">
      <h1>{t("title")}</h1>
    </main>
  );
}

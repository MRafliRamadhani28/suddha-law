"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/language-context";

/** Keeps <html lang="…"> in sync with the selected language. */
export default function HtmlLangSync() {
  const { lang } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}

"use client";

import { useIntlContext } from "@/app/providers/IntlProviderWrapper";
import ReactCountryFlag from "react-country-flag";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useIntlContext();

  return (
    <div className="relative inline-flex flex-row items-center bg-gray-100 rounded-md p-1 gap-1 text-xs">
      {/* Türkçe */}
      <button
        onClick={() => setLocale("tr")}
        className={`flex items-center gap-1 px-2 py-0.5 rounded-md transition ${locale === "tr" ? "bg-dark-red text-white" : "bg-gray-200 text-gray-700"
          }`}
      >
        <ReactCountryFlag countryCode="TR" svg style={{ width: "0.9em", height: "0.9em" }} />
        TR
      </button>

      {/* İngilizce */}
      <button
        onClick={() => setLocale("en")}
        className={`flex items-center gap-1 px-2 py-0.5 rounded-md transition ${locale === "en" ? "bg-dark-red text-white" : "bg-gray-200 text-gray-700"
          }`}
      >
        <ReactCountryFlag countryCode="GB" svg style={{ width: "0.9em", height: "0.9em" }} />
        EN
      </button>
    </div>

  );

}

"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { IntlProvider as ReactIntlProvider } from "react-intl";
import trMessages from "@/locales/tr.json";
import enMessages from "@/locales/en.json";

interface Props {
  children: ReactNode;
}

type Locale = "tr" | "en";

interface IntlContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const IntlContext = createContext<IntlContextType | undefined>(undefined);

export function useIntlContext() {
  const context = useContext(IntlContext);
  if (!context) throw new Error("useIntlContext must be used within IntlProvider");
  return context;
}

export default function IntlProvider({ children }: Props) {
  const [locale, setLocale] = useState<Locale>("tr"); // default TR
  const messages = locale === "tr" ? trMessages : enMessages;

  return (
    <IntlContext.Provider value={{ locale, setLocale }}>
      <ReactIntlProvider locale={locale} messages={messages}>
        {children}
      </ReactIntlProvider>
    </IntlContext.Provider>
  );
}

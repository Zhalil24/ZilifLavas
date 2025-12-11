import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

import IntlProviderWrapper from "./providers/IntlProviderWrapper";

export const metadata: Metadata = {
  title: "Zilif Lavaş Fırını",
  description: "Asırlık deneyimiyle taze ve lezzetli lavaş ekmeği üretimi.",
    icons: {
    icon: "ziliflogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 return (
    <html lang="tr">
      <body>
        <IntlProviderWrapper>
          {children}
          <Footer />
        </IntlProviderWrapper>
      </body>
    </html>
  );
}

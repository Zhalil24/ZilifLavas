"use client";

import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { useIntl } from "react-intl";

export default function Footer() {
  const intl = useIntl();
  return (
    <footer className="bg-dark-red text-white mt-16">
      {/* Üst Kısım */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-red-300/30">
        {/* Hakkında */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Zilif Lavaş Fırını</h3>
          <p className="text-sm text-gray-200 leading-relaxed">
            {intl.formatMessage({ id: "ils" })}
          </p>
        </div>

        {/* İletişim Bilgileri */}
        <div>
          <h3 className="text-lg font-semibold mb-3">{intl.formatMessage({ id: "rt5" })}</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li className="flex items-center gap-2">
              <Mail size={16} /> ziliflavas@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +90 (537) 965 29 80
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Erzincan Merkez, Türkiye
            </li>
          </ul>
        </div>

      </div>

      {/* Alt Kısım */}
      <div className="py-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Zilif Lavaş Fırını — {intl.formatMessage({ id: "4rt" })}
      </div>
    </footer>
  );
}

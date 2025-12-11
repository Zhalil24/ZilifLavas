"use client";

import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { useIntl } from "react-intl";

export default function ContactSection() {
    const intl = useIntl();
    return (
        <section className="relative bg-white py-8 px-6">

            <div className="max-w-5xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                    {intl.formatMessage({ id: "a3e" })}
                </h2>
                <p className="text-gray-600">
                    {intl.formatMessage({ id: "xxr" })}
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
                {/* Kart 1: E-posta */}
                <div className="group bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                    <div className="p-8 text-center flex flex-col items-center">
                        <div className="bg-dark-red text-white rounded-full p-4 mb-4 group-hover:scale-110 transition">
                            <Mail size={28} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {intl.formatMessage({ id: "eme" })}
                        </h3>
                        <p className="text-gray-600">
                            <a
                                href="mailto:ziliflavas@gmail.com"
                                className="text-dark-red font-medium hover:underline"
                            >
                                ziliflavas@gmail.com
                            </a>
                        </p>
                    </div>
                </div>

                {/* Kart 2: Telefon */}
                <div className="group bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                    <div className="p-8 text-center flex flex-col items-center">
                        <div className="bg-dark-red text-white rounded-full p-4 mb-4 group-hover:scale-110 transition">
                            <Phone size={28} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {intl.formatMessage({ id: "mne" })}
                        </h3>
                        <p className="text-gray-600">
                            <a
                                href="tel:+905551112233"
                                className="text-dark-red font-medium hover:underline"
                            >
                                +90 (537) 965 29 80
                            </a>
                        </p>
                    </div>
                </div>

                {/* Kart 3: Adres */}
                <div className="group bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                    <div className="p-8 text-center flex flex-col items-center">
                        <div className="bg-dark-red text-white rounded-full p-4 mb-4 group-hover:scale-110 transition">
                            <MapPin size={28} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1"> {intl.formatMessage({ id: "asi" })}</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Merkez Çarşısı 13. Sok. <br />
                            Erzincan Merkez, Türkiye
                        </p>
                    </div>
                </div>
            </div>

            {/* Çalışma Saatleri */}
            <div className="max-w-4xl mx-auto mt-12 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md p-8">
                {/* Başlık */}
                <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-3">
                    <Clock className="text-dark-red w-6 h-6" />
                    <h3 className="text-xl font-semibold text-gray-900">
                        {intl.formatMessage({ id: "a3t" })}
                    </h3>
                </div>

                {/* Günler */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-gray-800">
                    {[
                        { id: "pzt", hours: "06:00 - 17:00" },
                        { id: "sal", hours: "06:00 - 17:00" },
                        { id: "car", hours: "06:00 - 17:00" },
                        { id: "per", hours: "06:00 - 17:00" },
                        { id: "cum", hours: "06:00 - 17:00" },
                        { id: "cmt", hours: "06:00 - 17:00" },
                        { id: "paz", hours: "06:00 - 17:00" },
                    ].map((day, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg px-4 py-2 transition"
                        >
                            <span className="font-medium">{intl.formatMessage({ id: day.id })}</span>
                            <span className="text-sm text-gray-600">{day.hours}</span>
                        </li>
                    ))}
                </ul>
            </div>

        </section>
    );
}

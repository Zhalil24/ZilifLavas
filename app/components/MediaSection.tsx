"use client";

import { useIntl } from "react-intl";
import { mediaItems } from "..//utils/constanst";

interface MediaItem {
  source: string;
  title: string;
  url: string;
}

interface MediaSectionProps {
  mediaItems: MediaItem[];
}

export default function MediaSection() {
    const intl = useIntl();

 return (
    <section className="py-16 px-6 bg-white">
      {/* Başlık */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          {intl.formatMessage({ id: "ase" })}
        </h2>
        <p className="mt-4 text-gray-600 text-base max-w-3xl mx-auto">
          {intl.formatMessage({ id: "23x" })}
        </p>
      </div>

      {/* Medya Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {mediaItems.map((item) => (
          <a
            key={item.key}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {item.source}
            </h3>
            <p className="text-gray-700">
              {intl.formatMessage({ id: `media.${item.key}.title` })}
            </p>
            <span className="mt-4 inline-block text-sm text-[#8B0000] font-medium">
              {intl.formatMessage({ id: "sze" })}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

"use client";

import Image, { StaticImageData } from "next/image";
import { useIntl } from "react-intl";

interface AboutSectionProps {
  title?: string;
  image: StaticImageData;
  paragraphs: string[];
  waveColor?: string;
}

export default function AboutSection({

  image,
  paragraphs,
  waveColor = "#8b0000",
}: AboutSectionProps) {
     const intl = useIntl();
  return (
    <section className="relative py-36 px-6 bg-white overflow-hidden">
      {/* Üst dalga efekti */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0 C600,100 600,100 1200,0 L1200,120 L0,120 Z"
            fill={waveColor}
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Görsel */}
        <div className="w-full md:w-1/2 relative h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={image}
            alt=  {intl.formatMessage({ id: "a3c" })}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Metin */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="text-4xl font-extrabold text-gray-900">  {intl.formatMessage({ id: "a3c" })}</h2>

          {paragraphs.map((para, idx) => (
            <p key={idx} className="text-base leading-normal text-gray-700">
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Alt dalga efekti */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0 C600,100 600,100 1200,0 L1200,120 L0,120 Z"
            fill={waveColor}
          ></path>
        </svg>
      </div>
    </section>
  );
}

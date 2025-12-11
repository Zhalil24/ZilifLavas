"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import happyTeam from "../public/assets/happyTeam.jpeg";
import foto1 from "../public/assets/foto1.jpg";
import foto2 from "../public/assets/foto2.jpg";
import foto3 from "../public/assets/foto3.jpg";
import foto4 from "../public/assets/foto4.jpg";
import { Header } from "./components/Header";
import logoImage from '../public/assets/zilif.png';
import Canvas from "./components/Canvas";
import ContactSection from "./components/ContactSection";
import MediaSection from "./components/MediaSection";
import AboutSection from "./components/AboutSection";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { useIntl } from "react-intl";
import FAQ from "./components/Faq";

// Harita bileşenini kullandığınız dosyanın başında
import dynamic from 'next/dynamic';

// Dinamik içe aktarma ile sadece tarayıcıda yüklenmesini sağlıyoruz
const DynamicMapComponent = dynamic(
  () => import('./components/Map'), // MapComponent'in dosya yolu
  { 
    ssr: false, // 🛑 Bu, sihirli anahtar kelimedir. Sunucu Tarafı Renderlamayı devre dışı bırakır.
    loading: () => <p>Harita Yükleniyor...</p> // Yüklenirken gösterilecek içerik
  }
);
const carouselImages = [foto1, foto2, foto3, foto4];
export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mapKey, setMapKey] = useState(0);
  const intl = useIntl();

  const paragraphs = [
    intl.formatMessage({ id: "about.paragraph1" }),
    intl.formatMessage({ id: "about.paragraph2" }),
    intl.formatMessage({ id: "about.paragraph3" }),
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % carouselImages.length
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % carouselImages.length
    );
  };

  const SlantedDivider = () => (
    <svg
      className="absolute top-0 left-1/2 h-full w-48 z-10"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <polygon
        points="0,0 100,0 0,100 0,100"
        fill="#FFFFFFFF"
      />
    </svg>
  );
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <section className="flex flex-col md:flex-row w-full relative min-h-screen">

        <div className="w-full md:w-1/2 flex flex-col items-center order-1 md:order-1">

          <div className="w-full max-w-xl  pt-6">
            <header className="flex justify-between items-center w-full">
              <Header />
            </header>
            <div className="fixed top-3 left-4 z-50">
              <LanguageSwitcher />
            </div>
          </div>

          <div className="flex flex-col items-start px-6 py-6 md:py-3 gap-4 w-full max-w-xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8">
              {intl.formatMessage({ id: "236" })} <span className="text-[#8b0000]">Zilif Lavaş Fırını</span>
            </h1>
            <p className="text-gray-600 mb-8">
              {intl.formatMessage({ id: "445" })}
            </p>
          </div>

          <div className="w-full md:hidden h-80">
            <div className="relative w-full h-full overflow-hidden">

              <Image
                src={carouselImages[currentImageIndex]}
                alt="Dönen Galeri Görseli"
                fill
                className="object-cover transition-opacity duration-1000 ease-in-out"
                priority
                key={currentImageIndex}
              />

              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-6 z-20">
                <button
                  onClick={goToPrevious}
                  className="bg-black bg-opacity-30 p-3 rounded-full text-white hover:bg-opacity-50 transition"
                  aria-label="Önceki Görsel"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={goToNext}
                  className="bg-black bg-opacity-30 p-3 rounded-full text-white hover:bg-opacity-50 transition"
                  aria-label="Sonraki Görsel"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-3 w-3 rounded-full transition ${index === currentImageIndex ? 'bg-dark-red' : 'bg-white bg-opacity-50 hover:bg-opacity-70'
                      }`}
                    aria-label={`Görsel ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className="hidden md:flex w-1/2 h-screen order-2">
          <SlantedDivider />
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={carouselImages[currentImageIndex]}
              alt="Dönen Galeri Görseli"
              fill
              className="object-cover transition-opacity duration-1000 ease-in-out"
              priority
              key={currentImageIndex}
            />

            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-6 z-20">
              <button
                onClick={goToPrevious}
                className="bg-black bg-opacity-30 p-3 rounded-full text-white hover:bg-opacity-50 transition"
                aria-label="Önceki Görsel"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={goToNext}
                className="bg-black bg-opacity-30 p-3 rounded-full text-white hover:bg-opacity-50 transition"
                aria-label="Sonraki Görsel"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-3 w-3 rounded-full transition ${index === currentImageIndex ? 'bg-dark-red' : 'bg-white bg-opacity-50 hover:bg-opacity-70'
                    }`}
                  aria-label={`Görsel ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </section>
      <section id="about" >
        <AboutSection image={logoImage} paragraphs={paragraphs} waveColor="#8b0000" />
      </section>
      <section id="location" className="w-ful bg-white text-center">
        <DynamicMapComponent />
      </section>
      <Canvas />
      <section id="newsletter" className="bg-white py-5 px-6 md:px-12">
        <MediaSection />
      </section>
      <Canvas />
      <section id="contact" className="w-full  bg-white text-center">
        <ContactSection />
      </section>
      <Canvas />
      <section id="faq" className="w-full  bg-white text-center">
        <FAQ />
      </section>
    </main>
  );
}

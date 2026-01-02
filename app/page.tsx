'use client';

import Image from "next/image";
import { products } from "@/data/products";
import ProductCard from "./components/ProductCard";
import Carousel from "./components/Carousel";
import { useLanguage } from "./contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  return (
    <>
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen w-full bg-black overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full opacity-60">
            <Carousel
              images={[
                '/images/carousel/carousel-1.jpg',
                '/images/carousel/carousel-2.jpg',
                '/images/carousel/carousel-3.jpg',
              ]}
              autoPlayInterval={5000}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Hero Content - Bottom */}
        <div className="absolute bottom-0 left-0 right-0 section-padding pb-8 md:pb-16 lg:pb-20">
          <div className="max-w-5xl mx-auto text-center text-white">
            <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-10 tracking-wide uppercase font-light max-w-2xl mx-auto px-4">
              {t('heroSubtitle')}
            </p>
            <a
              href="#collection"
              className="inline-block bg-white text-black px-8 md:px-12 py-3 md:py-5 text-xs md:text-sm uppercase tracking-widest font-medium hover:bg-gray-100 transition-all duration-300 active:scale-95 md:hover:scale-105"
            >
              {t('exploreCollection')}
            </a>
          </div>
        </div>
      </section>

      {/* Featured Statement */}
      <section className="section-padding container-max py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-tight">
            {t('elevatedTitle')} <span className="font-serif italic">{t('essentials')}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {t('featuredDescription')}
          </p>
        </div>
      </section>

      {/* Collection Grid */}
      <section id="collection" className="section-padding container-max pb-24 md:pb-32">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">{t('theCollection')}</h2>
          <div className="w-20 h-0.5 bg-black"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section id="about" className="bg-black text-white section-padding py-24 md:py-32 lg:py-40">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-4 italic">
                {t('brandStoryTitle')}
              </h2>
              <p className="text-2xl md:text-3xl font-light mb-8 text-gray-400 uppercase tracking-wider">
                {t('brandStorySubtitle')}
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                {t('brandStoryP1')}
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                {t('brandStoryP2')}
              </p>
            </div>

            <div className="aspect-square bg-gray-800 overflow-hidden">
              <img
                src="/images/products/AboutUs3.jpeg"
                alt={t('craftsmanshipDetail')}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding container-max py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">{t('stayConnected')}</h2>
          <p className="text-gray-600 mb-8">
            {t('newsletterDescription')}
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t('enterEmail')}
              className="flex-1 px-6 py-4 border border-gray-300 focus:border-black focus:outline-none text-sm"
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              {t('subscribe')}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

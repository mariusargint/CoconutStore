'use client';

import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./contexts/CartContext";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import Header from "./components/Header";
import { useEffect } from "react";
import { siteMetadata } from "./metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { t, language } = useLanguage();

  // Update document metadata when language changes
  useEffect(() => {
    const meta = siteMetadata[language];
    document.title = meta.title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', meta.description);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', meta.keywords);

    // Update lang attribute
    document.documentElement.lang = language;

    // Update Open Graph tags
    const ogTags = [
      { property: 'og:title', content: meta.title },
      { property: 'og:description', content: meta.description },
      { property: 'og:locale', content: language === 'en' ? 'en_US' : language === 'es' ? 'es_ES' : 'it_IT' },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });
  }, [language]);

  return (
    <>
      <Header />

      <main className="pt-[72px] md:pt-[88px]">
        {children}
      </main>

      <footer className="bg-black text-white mt-32">
        <div className="section-padding container-max py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div>
              <img
                src="/images/logos/logo-white.png"
                alt="Coconut Logo"
                className="h-10 w-auto mb-6"
              />
              <p className="font-serif text-xl md:text-2xl italic">{t('heroTitle')}</p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider mb-4">{t('quickLinks')}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#collection" className="hover:text-white transition-colors">{t('collection')}</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">{t('about')}</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">{t('contact')}</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider mb-4">{t('follow')}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{t('instagram')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('twitter')}</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} {t('allRightsReserved')}</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Minimalist luxury streetwear Made in Italy. Premium heavyweight fabrics meet contemporary silhouettes." />
        <meta name="keywords" content="Italian streetwear, luxury fashion, minimalist clothing, Made in Italy, premium streetwear" />

        {/* Favicons */}
        <link rel="icon" href="/images/logos/logo-black.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/images/logos/logo-black.png" type="image/png" sizes="96x96" />
        <link rel="apple-touch-icon" href="/images/logos/logo-black.png" sizes="180x180" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Coconut" />
        <meta property="og:image" content="/images/carousel/carousel-1.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/carousel/carousel-1.jpg" />

        <title>Coconut - Live Yours | Premium Italian Streetwear</title>
      </head>
      <body className="antialiased">
        <LanguageProvider>
          <CartProvider>
            <LayoutContent>{children}</LayoutContent>
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

'use client';

import { useState } from 'react';
import { useCart } from '@/app/contexts/CartContext';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { Language } from '@/app/i18n/translations';
import CartSidebar from './CartSidebar';

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'it', label: 'IT' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200" style={{ backgroundColor: 'rgba(245, 245, 245, 0.95)' }}>
        <nav className="section-padding container-max py-3 md:py-4 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img
              src="/images/logos/coconut-logo-main.png"
              alt="Coconut Logo"
              className="h-10 md:h-12 lg:h-14 w-auto"
            />
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
            <a href="#collection" className="hover:opacity-60 transition-opacity">{t('collection')}</a>
            <a href="#about" className="hover:opacity-60 transition-opacity">{t('about')}</a>
          </div>

          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="hover:opacity-60 transition-opacity text-sm font-medium uppercase tracking-wider"
                aria-label="Select language"
              >
                {language.toUpperCase()}
              </button>
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-sm overflow-hidden z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`block w-full px-6 py-2 text-left text-sm hover:bg-gray-100 transition-colors ${
                        language === lang.code ? 'bg-gray-100 font-medium' : ''
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => setIsCartOpen(true)}
              className="hover:opacity-60 transition-opacity relative"
              aria-label="Cart"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

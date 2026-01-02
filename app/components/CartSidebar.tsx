'use client';

import { useCart } from '@/app/contexts/CartContext';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();
  const { t } = useLanguage();
  const router = useRouter();

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[480px] bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-medium uppercase tracking-wider">
              {t('cart')} ({cartCount})
            </h2>
            <button
              onClick={onClose}
              className="hover:opacity-60 transition-opacity"
              aria-label="Close cart"
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
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <svg
                  className="w-16 h-16 text-gray-300 mb-4"
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
                <p className="text-gray-500 text-lg mb-2">{t('yourCartIsEmpty')}</p>
                <p className="text-gray-400 text-sm">{t('addSomeItems')}</p>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={`${item.product.id}-${item.size}`}
                    className="flex gap-4"
                  >
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-gray-100 flex-shrink-0 overflow-hidden">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm mb-1">
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-gray-500 mb-2">
                        {item.product.color} • {t('size')} {item.size}
                      </p>
                      <p className="text-sm font-medium">€{item.product.price.toFixed(2)}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.size,
                              item.quantity - 1
                            )
                          }
                          className="w-6 h-6 border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          −
                        </button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.size,
                              item.quantity + 1
                            )
                          }
                          className="w-6 h-6 border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.product.id, item.size)}
                      className="text-gray-400 hover:text-black transition-colors"
                      aria-label="Remove item"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-medium uppercase tracking-wider">
                  {t('total')}
                </span>
                <span className="text-2xl font-light">€{cartTotal.toFixed(2)}</span>
              </div>
              <button
                onClick={() => {
                  router.push('/checkout');
                  onClose();
                }}
                className="w-full btn-primary mb-3"
              >
                {t('checkout')}
              </button>
              <button
                onClick={onClose}
                className="w-full text-center text-sm text-gray-600 hover:text-black transition-colors"
              >
                {t('continueShopping')}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

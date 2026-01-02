'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams();
  const { clearCart } = useCart();
  const { t } = useLanguage();
  const [paymentStatus, setPaymentStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const paymentIntent = searchParams.get('payment_intent');

  useEffect(() => {
    // Verify payment status
    if (paymentIntent) {
      // Clear cart on successful payment
      clearCart();
      setPaymentStatus('success');
    } else {
      setPaymentStatus('error');
    }
  }, [paymentIntent, clearCart]);

  if (paymentStatus === 'loading') {
    return (
      <div className="min-h-screen pt-32 section-padding container-max">
        <div className="max-w-2xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-8"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (paymentStatus === 'error') {
    return (
      <div className="min-h-screen pt-32 section-padding container-max">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-12">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-red-600"
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
            </div>
            <h1 className="text-3xl font-light mb-4 text-red-600">
              Payment Error
            </h1>
            <p className="text-gray-600 mb-8">
              We couldn't process your payment. Please try again or contact support.
            </p>
            <Link href="/" className="btn-primary inline-block">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 section-padding container-max">
      <div className="max-w-3xl mx-auto text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-light mb-4">
          Order Confirmed!
        </h1>

        <p className="text-xl text-gray-600 mb-2">
          Thank you for your purchase
        </p>

        <p className="text-sm text-gray-500 mb-12">
          Order #{paymentIntent?.slice(-8).toUpperCase()}
        </p>

        {/* Order Details Box */}
        <div className="bg-gray-50 border border-gray-200 p-8 mb-12 text-left">
          <h2 className="text-xl font-light mb-6 text-center">
            What happens next?
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                1
              </div>
              <div>
                <h3 className="font-medium mb-1">Order Confirmation Email</h3>
                <p className="text-sm text-gray-600">
                  You'll receive an email confirmation with your order details shortly.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                2
              </div>
              <div>
                <h3 className="font-medium mb-1">Order Processing</h3>
                <p className="text-sm text-gray-600">
                  We'll carefully prepare your items with love and attention to detail.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                3
              </div>
              <div>
                <h3 className="font-medium mb-1">Shipping Notification</h3>
                <p className="text-sm text-gray-600">
                  You'll receive tracking information when your order ships (2-3 business days).
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                4
              </div>
              <div>
                <h3 className="font-medium mb-1">Delivery</h3>
                <p className="text-sm text-gray-600">
                  Your order will arrive in 3-7 business days. Enjoy!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Continue Shopping
          </Link>
          <a
            href={`mailto:support@coconut-store.com?subject=Order ${paymentIntent?.slice(-8).toUpperCase()}`}
            className="btn-secondary"
          >
            Contact Support
          </a>
        </div>

        {/* Additional Info */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4">
            Need help? Contact us at{' '}
            <a
              href="mailto:support@coconut-store.com"
              className="underline hover:text-black"
            >
              support@coconut-store.com
            </a>
          </p>
          <p className="text-xs text-gray-500">
            Premium Italian streetwear • Made in Italy with passion
          </p>
        </div>
      </div>
    </div>
  );
}

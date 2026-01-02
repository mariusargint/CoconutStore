'use client';

import { useState, FormEvent } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useLanguage } from '../contexts/LanguageContext';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const { t } = useLanguage();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setErrorMessage('');

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/order-confirmation`,
        },
      });

      if (error) {
        setErrorMessage(error.message || 'An error occurred during payment');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'An unexpected error occurred');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />

      {errorMessage && (
        <div className="p-4 bg-red-50 border border-red-200 rounded text-red-600 text-sm">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className={`w-full btn-primary ${
          isProcessing || !stripe
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:bg-gray-900'
        }`}
      >
        {isProcessing ? 'Processing...' : `Pay Now`}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Secure payment powered by Stripe. Your payment information is encrypted and secure.
      </p>
    </form>
  );
}

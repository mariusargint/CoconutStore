'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function TermsPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen pt-32 pb-24 section-padding container-max">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light mb-4">Terms & Conditions</h1>
        <div className="w-20 h-0.5 bg-black mb-8"></div>
        <p className="text-sm text-gray-500 mb-12">Last updated: January 2, 2026</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing and using Coconut's website and services, you accept and agree to be bound by these
              Terms and Conditions. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">2. Use of Website</h2>

            <h3 className="text-xl font-light mb-3">2.1 Eligibility</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You must be at least 18 years old to make purchases on our website. By placing an order, you
              represent that you are of legal age.
            </p>

            <h3 className="text-xl font-light mb-3">2.2 Account Responsibility</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you create an account, you are responsible for maintaining the confidentiality of your account
              information and for all activities that occur under your account.
            </p>

            <h3 className="text-xl font-light mb-3">2.3 Prohibited Uses</h3>
            <p className="text-gray-700 leading-relaxed mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Use automated systems to access the website without permission</li>
              <li>Resell our products without authorization</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">3. Products and Orders</h2>

            <h3 className="text-xl font-light mb-3">3.1 Product Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We strive to provide accurate product descriptions and images. However, we do not guarantee that
              colors, materials, or other details will be completely accurate on all screens and devices.
            </p>

            <h3 className="text-xl font-light mb-3">3.2 Pricing</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              All prices are listed in Euros (€) and include VAT where applicable. We reserve the right to change
              prices at any time. Prices are confirmed at checkout.
            </p>

            <h3 className="text-xl font-light mb-3">3.3 Order Acceptance</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your order constitutes an offer to purchase. We reserve the right to refuse or cancel any order for
              any reason, including product availability, errors in pricing, or suspicion of fraud.
            </p>

            <h3 className="text-xl font-light mb-3">3.4 Order Confirmation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You will receive an email confirmation once your order is successfully placed. This confirmation
              does not constitute acceptance of your order.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">4. Payment</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We accept payment through Stripe, which supports major credit cards and other payment methods.
              Payment is processed securely, and we do not store your complete payment information.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to provide current, complete, and accurate payment information and to update it as needed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">5. Shipping and Delivery</h2>

            <h3 className="text-xl font-light mb-3">5.1 Shipping Times</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Italy:</strong> 2-3 business days</li>
              <li><strong>EU:</strong> 3-7 business days</li>
              <li><strong>International:</strong> 7-14 business days</li>
            </ul>

            <h3 className="text-xl font-light mb-3">5.2 Shipping Costs</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Italy:</strong> €4.99 (free over €100)</li>
              <li><strong>EU:</strong> €9.99 (free over €150)</li>
              <li><strong>International:</strong> €19.99 (free over €200)</li>
            </ul>

            <h3 className="text-xl font-light mb-3">5.3 Risk of Loss</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Risk of loss and title for items pass to you upon delivery to the shipping carrier.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">6. Returns and Refunds</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Please refer to our <a href="/returns" className="underline hover:text-black">Return Policy</a> for
              detailed information about returns, exchanges, and refunds.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              In accordance with EU Consumer Rights Directive, you have the right to cancel your order within 14
              days of receipt for any reason.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">7. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content on this website, including text, graphics, logos, images, and software, is the property
              of Coconut or its licensors and is protected by copyright, trademark, and other intellectual property
              laws.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may not reproduce, distribute, modify, or create derivative works without our express written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the fullest extent permitted by law, Coconut shall not be liable for any indirect, incidental,
              special, or consequential damages arising from your use of our website or products.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our total liability shall not exceed the amount you paid for the products in question.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">9. Warranty Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our products are provided "as is" without any warranties, express or implied. We make no guarantees
              about the suitability, reliability, or accuracy of our products for any particular purpose.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">10. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to indemnify and hold Coconut harmless from any claims, damages, or expenses arising from
              your use of our website or violation of these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">11. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms and Conditions are governed by the laws of Italy. Any disputes shall be resolved in the
              courts of [Your Italian Jurisdiction].
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">12. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon
              posting. Your continued use of the website constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">13. Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-sm border border-gray-200">
              <p className="text-gray-700 mb-2"><strong>Coconut</strong></p>
              <p className="text-gray-700 mb-2">Email: support@coconut-store.com</p>
              <p className="text-gray-700 mb-2">Legal: legal@coconut-store.com</p>
              <p className="text-gray-700">Address: [Your Business Address in Italy]</p>
              <p className="text-gray-700 mt-2">VAT ID: [Your Italian VAT Number]</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function ReturnsPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen pt-32 pb-24 section-padding container-max">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light mb-4">Returns & Refunds Policy</h1>
        <div className="w-20 h-0.5 bg-black mb-8"></div>
        <p className="text-sm text-gray-500 mb-12">Last updated: January 2, 2026</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">Our Commitment</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Coconut, we stand behind the quality of our premium Italian streetwear. If you're not completely
              satisfied with your purchase, we're here to help.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">1. Return Policy</h2>

            <h3 className="text-xl font-light mb-3">1.1 Return Window</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have <strong>30 days</strong> from the date of delivery to initiate a return. Items must be
              returned within 14 days after initiating the return process.
            </p>

            <h3 className="text-xl font-light mb-3">1.2 Eligibility</h3>
            <p className="text-gray-700 leading-relaxed mb-4">To be eligible for a return, items must:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Be unworn, unwashed, and in original condition</li>
              <li>Have all original tags attached</li>
              <li>Be returned in original packaging when possible</li>
              <li>Not show signs of wear, alterations, or damage</li>
              <li>Not be part of a final sale or promotional item (unless defective)</li>
            </ul>

            <h3 className="text-xl font-light mb-3">1.3 Non-Returnable Items</h3>
            <p className="text-gray-700 leading-relaxed mb-4">The following items cannot be returned:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Items marked as "Final Sale"</li>
              <li>Gift cards</li>
              <li>Items damaged due to misuse or improper care</li>
              <li>Items without original tags or packaging</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">2. How to Return</h2>

            <div className="bg-gray-50 p-6 rounded-sm border border-gray-200 mb-6">
              <h3 className="text-lg font-medium mb-4">Step-by-Step Return Process</h3>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Contact Us</h4>
                    <p className="text-sm text-gray-600">
                      Email returns@coconut-store.com with your order number and reason for return.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Receive Authorization</h4>
                    <p className="text-sm text-gray-600">
                      We'll send you a Return Authorization (RA) number and shipping instructions within 24 hours.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Package Your Items</h4>
                    <p className="text-sm text-gray-600">
                      Securely pack the items with the RA number clearly visible on the package.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Ship Your Return</h4>
                    <p className="text-sm text-gray-600">
                      Send the package to the address provided. We recommend using a tracked shipping method.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                    5
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Receive Your Refund</h4>
                    <p className="text-sm text-gray-600">
                      Once we receive and inspect your return, we'll process your refund within 5-7 business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">3. Return Shipping</h2>

            <h3 className="text-xl font-light mb-3">3.1 Shipping Costs</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Italy:</strong> Free return shipping (we provide a prepaid label)</li>
              <li><strong>EU:</strong> Customer responsible for return shipping costs</li>
              <li><strong>International:</strong> Customer responsible for return shipping costs</li>
            </ul>

            <h3 className="text-xl font-light mb-3">3.2 Defective or Wrong Items</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you received a defective or incorrect item, we'll cover all return shipping costs. Please contact
              us immediately with photos of the issue.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">4. Refunds</h2>

            <h3 className="text-xl font-light mb-3">4.1 Refund Method</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Refunds will be issued to your original payment method. The refund amount includes the purchase
              price and original shipping costs (if applicable).
            </p>

            <h3 className="text-xl font-light mb-3">4.2 Processing Time</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Inspection: 2-3 business days after we receive your return</li>
              <li>Refund processing: 5-7 business days</li>
              <li>Bank/card processing: Additional 3-5 business days</li>
            </ul>

            <h3 className="text-xl font-light mb-3">4.3 Partial Refunds</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Partial refunds may be granted if:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Item shows obvious signs of use</li>
              <li>Item is missing tags or accessories</li>
              <li>Item is returned after 30 days</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">5. Exchanges</h2>

            <h3 className="text-xl font-light mb-3">5.1 Size Exchanges</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We're happy to exchange items for a different size, subject to availability. Please contact us to
              arrange an exchange.
            </p>

            <h3 className="text-xl font-light mb-3">5.2 Color/Style Exchanges</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              For color or style changes, please process a return and place a new order to ensure you get the
              item you want as quickly as possible.
            </p>

            <h3 className="text-xl font-light mb-3">5.3 Defective Item Exchanges</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Defective items will be replaced immediately at no cost. We'll cover all shipping charges for
              defective exchanges.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">6. EU Right of Withdrawal</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In accordance with EU Consumer Rights Directive 2011/83/EU, consumers in the European Union have
              the right to withdraw from a purchase within 14 days of receipt without giving any reason.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              To exercise this right, contact us at returns@coconut-store.com. We'll refund all payments,
              including standard delivery charges, within 14 days of receiving your returned items.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">7. Damaged or Lost Returns</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We're not responsible for items lost or damaged during return shipping. We strongly recommend using
              a tracked shipping method and purchasing insurance for high-value returns.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">8. Customer Care</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Have questions about returns? We're here to help:
            </p>
            <div className="bg-gray-50 p-6 rounded-sm border border-gray-200">
              <p className="text-gray-700 mb-2"><strong>Returns Department</strong></p>
              <p className="text-gray-700 mb-2">Email: returns@coconut-store.com</p>
              <p className="text-gray-700 mb-2">General Support: support@coconut-store.com</p>
              <p className="text-gray-700 mb-4">Response Time: Within 24 hours</p>
              <p className="text-gray-700 text-sm italic">
                Our team is dedicated to ensuring your complete satisfaction with every Coconut purchase.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="border-t-2 border-black pt-8">
              <p className="text-gray-600 text-sm leading-relaxed">
                This Returns & Refunds Policy is part of our Terms & Conditions. For questions about other
                policies, visit our <a href="/terms" className="underline hover:text-black">Terms & Conditions</a> or{' '}
                <a href="/privacy" className="underline hover:text-black">Privacy Policy</a> pages.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

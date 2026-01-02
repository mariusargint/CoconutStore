'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen pt-32 pb-24 section-padding container-max">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light mb-4">Privacy Policy</h1>
        <div className="w-20 h-0.5 bg-black mb-8"></div>
        <p className="text-sm text-gray-500 mb-12">Last updated: January 2, 2026</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Coconut ("we," "our," or "us") respects your privacy and is committed to protecting your personal data.
              This privacy policy explains how we collect, use, and share information about you when you use our website
              and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-light mb-3">2.1 Information You Provide</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Name, email address, and shipping address</li>
              <li>Payment information (processed securely through Stripe)</li>
              <li>Order history and preferences</li>
              <li>Communication preferences and newsletter subscriptions</li>
            </ul>

            <h3 className="text-xl font-light mb-3">2.2 Automatically Collected Information</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>IP address, browser type, and device information</li>
              <li>Pages visited and links clicked</li>
              <li>Shopping cart activity and purchase behavior</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Process and fulfill your orders</li>
              <li>Send order confirmations and shipping updates</li>
              <li>Provide customer support</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Prevent fraud and ensure security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">4. Information Sharing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Service Providers:</strong> Payment processors (Stripe), shipping partners, email service providers</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">5. Cookies and Tracking</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Remember your preferences and shopping cart</li>
              <li>Analyze website traffic and user behavior</li>
              <li>Deliver personalized content and advertisements</li>
              <li>Improve website performance and security</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can control cookies through your browser settings, but some features may not function properly if cookies are disabled.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">6. Your Rights (GDPR)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are a resident of the European Economic Area (EEA), you have the following rights:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Restriction:</strong> Limit how we use your data</li>
              <li><strong>Portability:</strong> Receive your data in a structured format</li>
              <li><strong>Objection:</strong> Object to processing of your data</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              To exercise these rights, contact us at privacy@coconut-store.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">7. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal data against
              unauthorized access, loss, or alteration. Payment information is encrypted and processed through
              Stripe's secure infrastructure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">8. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this
              policy, unless a longer retention period is required by law. Order information is typically retained
              for 7 years for tax and accounting purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">9. International Transfers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your information may be transferred to and processed in countries outside of the EEA. We ensure
              appropriate safeguards are in place to protect your data in accordance with GDPR requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">10. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website is not intended for children under 16 years of age. We do not knowingly collect personal
              information from children. If you believe we have collected information from a child, please contact us
              immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">11. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this privacy policy from time to time. We will notify you of significant changes by
              posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">12. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about this privacy policy or our data practices, contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-sm border border-gray-200">
              <p className="text-gray-700 mb-2"><strong>Coconut</strong></p>
              <p className="text-gray-700 mb-2">Email: privacy@coconut-store.com</p>
              <p className="text-gray-700 mb-2">Support: support@coconut-store.com</p>
              <p className="text-gray-700">Address: [Your Business Address in Italy]</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

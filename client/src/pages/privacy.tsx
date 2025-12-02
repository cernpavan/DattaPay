import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 font-bold text-xl tracking-tight text-primary">
              <div className="h-6 w-6 rounded-md bg-primary flex items-center justify-center text-white">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-foreground">DattaPay</span>
            </a>
          </Link>

          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ChevronLeft className="h-4 w-4" /> Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold tracking-tight mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 21, 2025</p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              DattaPay Technologies Inc. ("DattaPay", "we", "us", or "our") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our B2B cross-border payment platform and services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By using our services, you consent to the data practices described in this policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Business Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Company name, registration number, and tax identification numbers (EIN/PAN)</li>
              <li>Business address and contact information</li>
              <li>Nature of business and industry classification</li>
              <li>Annual revenue and transaction volumes</li>
              <li>Corporate bank account details</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.2 Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Name, email address, and phone number of authorized representatives</li>
              <li>Government-issued identification documents</li>
              <li>Proof of address and authorization documents</li>
              <li>Beneficial ownership information (for owners with 25% or more stake)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.3 Transaction Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Payment details, amounts, and currencies</li>
              <li>Beneficiary information and purpose codes</li>
              <li>Transaction history and patterns</li>
              <li>Source of funds documentation</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.4 Technical Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>IP address, browser type, and device information</li>
              <li>Login data and access times</li>
              <li>Platform usage data and preferences</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Service Delivery:</strong> To process your transactions, verify your identity, and provide our payment services</li>
              <li><strong className="text-foreground">Compliance:</strong> To comply with anti-money laundering (AML), know your customer (KYC), and other regulatory requirements</li>
              <li><strong className="text-foreground">Risk Management:</strong> To assess and mitigate fraud, money laundering, and other financial crimes</li>
              <li><strong className="text-foreground">Communication:</strong> To send transaction confirmations, account updates, and important notices</li>
              <li><strong className="text-foreground">Improvement:</strong> To enhance our services, develop new features, and improve user experience</li>
              <li><strong className="text-foreground">Legal Obligations:</strong> To comply with court orders, legal processes, and regulatory requests</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-muted-foreground mb-4">We may share your information with:</p>

            <h3 className="text-xl font-semibold mb-3 mt-6">4.1 Service Providers</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Banking partners and financial institutions</li>
              <li>Identity verification and compliance service providers</li>
              <li>Cloud storage and hosting providers</li>
              <li>Professional service providers (auditors, legal advisors)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">4.2 Regulatory Authorities</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Financial Crimes Enforcement Network (FinCEN)</li>
              <li>Office of Foreign Assets Control (OFAC)</li>
              <li>Reserve Bank of India (RBI)</li>
              <li>Other relevant regulatory bodies</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">4.3 Business Transfers</h3>
            <p className="text-muted-foreground">
              In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
            <p className="text-muted-foreground mb-4">We implement industry-standard security measures including:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>256-bit SSL encryption for data transmission</li>
              <li>Multi-factor authentication for account access</li>
              <li>Regular security audits and penetration testing</li>
              <li>Restricted access controls and employee training</li>
              <li>Secure data centers with 24/7 monitoring</li>
              <li>Compliance with PCI DSS standards</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
            <p className="text-muted-foreground mb-4">We retain your information for as long as necessary to provide our services and comply with legal obligations. Specifically:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Transaction records: Minimum 5 years as required by law</li>
              <li>KYC documentation: Duration of business relationship plus 5 years</li>
              <li>Communication records: 3 years</li>
              <li>Technical logs: 1 year</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. Your Rights and Choices</h2>
            <p className="text-muted-foreground mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Access your personal information</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request deletion of your data (subject to legal requirements)</li>
              <li>Opt-out of marketing communications</li>
              <li>Lodge a complaint with supervisory authorities</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">8. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a cross-border payment platform, we transfer data between the United States, India, and other countries where we operate. We ensure appropriate safeguards are in place including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Standard contractual clauses approved by regulatory authorities</li>
              <li>Adequacy decisions where applicable</li>
              <li>Your explicit consent for specific transfers</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">9. Cookie Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar technologies to enhance your experience, analyze usage patterns, and improve our services. You can manage cookie preferences through your browser settings.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">10. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">11. Updates to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy periodically. We will notify you of material changes via email or through our platform. Your continued use of our services after such modifications constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
            <p className="text-muted-foreground mb-4">For questions about this Privacy Policy or our data practices, please contact us at:</p>
            
            <div className="bg-secondary/30 p-6 rounded-lg border">
              <p className="font-bold text-foreground mb-2">DattaPay Technologies Inc.</p>
              <p className="text-muted-foreground">Email: support@dattapay.com</p>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-12 border-t bg-gray-50 dark:bg-black/20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground">
            © 2025 DattaPay Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

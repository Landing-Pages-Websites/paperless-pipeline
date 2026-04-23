import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Paperless Pipeline",
  description:
    "Learn how Paperless Pipeline collects, uses, and protects your personal information.",
};

const LAST_UPDATED = "April 1, 2026";

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0063EB] mb-4">
            Legal
          </span>
          <h1 className="text-4xl font-semibold text-[#030712] mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#6C757D]">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="space-y-10 text-[#4F4F4F]">
          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              1. Introduction
            </h2>
            <p className="text-base leading-relaxed">
              Paperless Pipeline, Inc. (&ldquo;Paperless Pipeline,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
              respects your privacy and is committed to protecting your personal
              information. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our
              cloud-based real estate transaction management platform and
              related services (collectively, the &ldquo;Service&rdquo;). Please
              read this policy carefully. If you do not agree with its terms,
              please discontinue use of the Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              2. Information We Collect
            </h2>
            <p className="text-base leading-relaxed mb-4">
              We collect information you provide directly to us, information
              generated automatically when you use the Service, and information
              we receive from third parties.
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 text-base leading-relaxed">
              <li>
                <strong className="text-[#030712]">Account information:</strong>{" "}
                Name, email address, phone number, company name, and password
                when you create an account.
              </li>
              <li>
                <strong className="text-[#030712]">
                  Transaction data:
                </strong>{" "}
                Property addresses, contract details, document uploads, task
                records, and commission information that you enter into the
                Service.
              </li>
              <li>
                <strong className="text-[#030712]">Payment information:</strong>{" "}
                Billing address and payment method details, processed securely
                by our third-party payment processor.
              </li>
              <li>
                <strong className="text-[#030712]">Usage data:</strong> Log
                files, IP addresses, browser type, device identifiers, pages
                visited, and actions taken within the Service.
              </li>
              <li>
                <strong className="text-[#030712]">
                  Communications:
                </strong>{" "}
                Records of any messages you send to our support team or through
                the Service.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              3. How We Use Your Information
            </h2>
            <p className="text-base leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 text-base leading-relaxed">
              <li>Provide, operate, and improve the Service</li>
              <li>Process transactions and send related confirmations</li>
              <li>
                Send technical notices, updates, security alerts, and support
                messages
              </li>
              <li>Respond to your comments, questions, and requests</li>
              <li>
                Monitor and analyze usage patterns to improve user experience
              </li>
              <li>
                Detect, investigate, and prevent fraudulent transactions and
                other illegal activities
              </li>
              <li>
                Comply with legal obligations and enforce our Terms of Service
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              4. How We Share Your Information
            </h2>
            <p className="text-base leading-relaxed">
              We do not sell your personal information. We may share your
              information with third-party service providers who perform
              services on our behalf (such as payment processing, cloud hosting,
              email delivery, and analytics), subject to confidentiality
              obligations. We may also disclose your information (a) if required
              by law or legal process; (b) to protect the rights, property, or
              safety of Paperless Pipeline, our users, or others; or (c) in
              connection with a merger, acquisition, or sale of all or a portion
              of our assets.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              5. Data Security
            </h2>
            <p className="text-base leading-relaxed">
              We use industry-standard security measures including encryption in
              transit (TLS) and at rest, access controls, and regular security
              assessments to protect your information. However, no method of
              transmission over the internet or electronic storage is 100%
              secure. We cannot guarantee absolute security but will notify you
              promptly in the event of a breach affecting your personal
              information as required by applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              6. Data Retention
            </h2>
            <p className="text-base leading-relaxed">
              We retain your personal information for as long as your account is
              active or as needed to provide the Service. We may retain certain
              information for longer periods as required by law or for legitimate
              business purposes such as dispute resolution and enforcement of
              agreements. Upon account closure, you may request deletion of your
              data subject to our legal retention obligations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              7. Your Choices and Rights
            </h2>
            <p className="text-base leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding
              your personal information, including:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 text-base leading-relaxed">
              <li>
                The right to access, correct, or delete your personal
                information
              </li>
              <li>
                The right to object to or restrict certain processing activities
              </li>
              <li>The right to data portability</li>
              <li>
                The right to withdraw consent where processing is based on
                consent
              </li>
            </ul>
            <p className="text-base leading-relaxed mt-4">
              To exercise these rights, please contact us at
              privacy@paperlesspipeline.com. We will respond to requests within
              the timeframe required by applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              8. Cookies and Tracking Technologies
            </h2>
            <p className="text-base leading-relaxed">
              We use cookies and similar tracking technologies to enhance your
              experience on the Service. For detailed information about the
              cookies we use and your choices, please see our{" "}
              <a
                href="/cookie-policy"
                className="text-[#0063EB] hover:underline"
              >
                Cookie Policy
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              9. Children&apos;s Privacy
            </h2>
            <p className="text-base leading-relaxed">
              The Service is not directed to children under the age of 13. We do
              not knowingly collect personal information from children. If you
              believe we have inadvertently collected information from a child,
              please contact us and we will take steps to delete it.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              10. Changes to This Policy
            </h2>
            <p className="text-base leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of material changes by posting the new policy on this
              page and updating the &ldquo;Last updated&rdquo; date. Your
              continued use of the Service after any changes constitutes your
              acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              11. Contact Us
            </h2>
            <p className="text-base leading-relaxed">
              If you have any questions about this Privacy Policy or our privacy
              practices, please contact us at:
            </p>
            <address className="not-italic mt-3 text-base leading-relaxed">
              Paperless Pipeline, Inc.
              <br />
              Attn: Privacy Team
              <br />
              privacy@paperlesspipeline.com
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Paperless Pipeline",
  description:
    "Read the terms and conditions governing your use of Paperless Pipeline's real estate transaction management platform.",
};

const LAST_UPDATED = "April 1, 2026";

export default function TermsOfServicePage() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0063EB] mb-4">
            Legal
          </span>
          <h1 className="text-4xl font-semibold text-[#030712] mb-3">
            Terms of Service
          </h1>
          <p className="text-sm text-[#6C757D]">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="space-y-10 text-[#4F4F4F]">
          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-base leading-relaxed">
              By accessing or using the Paperless Pipeline platform and related
              services (collectively, the &ldquo;Service&rdquo;), you agree to be bound
              by these Terms of Service (&ldquo;Terms&rdquo;) and our Privacy Policy. If
              you are using the Service on behalf of an organization, you
              represent and warrant that you have the authority to bind that
              organization to these Terms. If you do not agree to these Terms,
              do not use the Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              2. Eligibility
            </h2>
            <p className="text-base leading-relaxed">
              The Service is intended for use by real estate professionals and
              businesses. You must be at least 18 years of age to create an
              account. By using the Service, you represent that you meet this
              requirement and that any information you provide is accurate and
              complete.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              3. Account Registration and Security
            </h2>
            <p className="text-base leading-relaxed">
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities that occur under your
              account. You agree to notify us immediately at
              support@paperlesspipeline.com if you suspect unauthorized access
              to your account. Paperless Pipeline will not be liable for any
              loss or damage arising from unauthorized use of your account
              resulting from your failure to safeguard your credentials.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              4. Subscription and Payment
            </h2>
            <p className="text-base leading-relaxed mb-4">
              Access to paid features of the Service requires a subscription.
              By subscribing, you authorize us to charge your payment method on
              a recurring basis at the selected plan rate. The following terms
              apply to your subscription:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 text-base leading-relaxed">
              <li>
                Subscription fees are billed in advance on a monthly or annual
                basis, as selected at signup.
              </li>
              <li>
                You may cancel your subscription at any time; cancellation takes
                effect at the end of the current billing period, with no
                prorated refunds for unused time.
              </li>
              <li>
                We reserve the right to change pricing with 30 days&apos; advance
                notice. Continued use of the Service after the effective date
                constitutes acceptance of the new pricing.
              </li>
              <li>
                Failure to pay may result in suspension or termination of your
                account.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              5. Acceptable Use
            </h2>
            <p className="text-base leading-relaxed mb-4">
              You agree to use the Service only for lawful purposes and in
              accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 text-base leading-relaxed">
              <li>
                Use the Service in any way that violates applicable federal,
                state, or local laws or regulations
              </li>
              <li>
                Upload or transmit any content that is fraudulent, defamatory,
                obscene, or that infringes the intellectual property rights of
                any third party
              </li>
              <li>
                Attempt to gain unauthorized access to any portion of the
                Service or any other system or network connected to the Service
              </li>
              <li>
                Reverse engineer, decompile, or disassemble any portion of the
                Service
              </li>
              <li>
                Use automated means (bots, scrapers, or similar tools) to access
                the Service without our prior written consent
              </li>
              <li>
                Resell or sublicense the Service to third parties without our
                prior written authorization
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              6. Intellectual Property
            </h2>
            <p className="text-base leading-relaxed">
              The Service and all content, features, and functionality thereof —
              including software, text, graphics, logos, and interface designs —
              are owned by Paperless Pipeline, Inc. and are protected by
              applicable intellectual property laws. You are granted a limited,
              non-exclusive, non-transferable license to access and use the
              Service for your internal business purposes during the term of
              your subscription. You retain ownership of all data you upload to
              the Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              7. Data and Privacy
            </h2>
            <p className="text-base leading-relaxed">
              Our collection and use of personal information is governed by our{" "}
              <a href="/privacy-policy" className="text-[#0063EB] hover:underline">
                Privacy Policy
              </a>
              , which is incorporated into these Terms by reference. You are
              responsible for ensuring that any personal data you submit to the
              Service is done in compliance with applicable privacy laws,
              including obtaining any required consents from the individuals
              whose data you submit.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              8. Disclaimers
            </h2>
            <p className="text-base leading-relaxed">
              THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT
              WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT
              NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR
              A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. PAPERLESS PIPELINE
              DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE,
              OR ERROR-FREE. YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              9. Limitation of Liability
            </h2>
            <p className="text-base leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, PAPERLESS
              PIPELINE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF
              PROFITS, DATA, OR BUSINESS, ARISING OUT OF OR RELATED TO YOUR USE
              OF THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
              DAMAGES. OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM
              OR RELATED TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE
              GREATER OF (A) THE AMOUNTS PAID BY YOU FOR THE SERVICE IN THE
              THREE MONTHS PRECEDING THE CLAIM OR (B) ONE HUNDRED DOLLARS
              ($100).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              10. Indemnification
            </h2>
            <p className="text-base leading-relaxed">
              You agree to indemnify, defend, and hold harmless Paperless
              Pipeline, Inc. and its officers, directors, employees, and agents
              from and against any claims, liabilities, damages, judgments,
              awards, losses, costs, and expenses (including reasonable
              attorneys&apos; fees) arising out of or relating to your violation of
              these Terms or your use of the Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              11. Termination
            </h2>
            <p className="text-base leading-relaxed">
              We reserve the right to suspend or terminate your access to the
              Service at any time, with or without notice, for conduct that we
              believe violates these Terms or is harmful to other users, us, or
              third parties, or for any other reason in our sole discretion.
              Upon termination, your right to use the Service ceases immediately.
              You may request export of your data within 30 days of termination;
              after that period, we may delete your data in accordance with our
              data retention policies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              12. Governing Law and Dispute Resolution
            </h2>
            <p className="text-base leading-relaxed">
              These Terms are governed by the laws of the State of Delaware,
              without regard to its conflict of laws provisions. Any disputes
              arising from or related to these Terms or the Service shall be
              resolved through binding arbitration in accordance with the rules
              of the American Arbitration Association, except that either party
              may seek injunctive or other equitable relief in any court of
              competent jurisdiction to prevent the infringement of intellectual
              property rights.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              13. Changes to These Terms
            </h2>
            <p className="text-base leading-relaxed">
              We may update these Terms from time to time. We will provide
              notice of material changes via email or a prominent notice within
              the Service at least 30 days before the changes take effect. Your
              continued use of the Service after the effective date constitutes
              your acceptance of the updated Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              14. Contact Us
            </h2>
            <p className="text-base leading-relaxed">
              Questions about these Terms should be directed to:
            </p>
            <address className="not-italic mt-3 text-base leading-relaxed">
              Paperless Pipeline, Inc.
              <br />
              Attn: Legal Team
              <br />
              legal@paperlesspipeline.com
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}

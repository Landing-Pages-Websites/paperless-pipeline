import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Paperless Pipeline",
  description:
    "Learn how Paperless Pipeline uses cookies and similar tracking technologies.",
};

const LAST_UPDATED = "April 1, 2026";

export default function CookiePolicyPage() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0063EB] mb-4">
            Legal
          </span>
          <h1 className="text-4xl font-semibold text-[#030712] mb-3">
            Cookie Policy
          </h1>
          <p className="text-sm text-[#6C757D]">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="space-y-10 text-[#4F4F4F]">
          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              1. What Are Cookies?
            </h2>
            <p className="text-base leading-relaxed">
              Cookies are small text files that are placed on your device by
              websites you visit. They are widely used to make websites work
              efficiently, to provide reporting information, and to personalize
              your experience. Cookies can be &ldquo;persistent&rdquo; (remaining
              on your device until they expire or are deleted) or
              &ldquo;session&rdquo; cookies (deleted when you close your browser).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              2. How We Use Cookies
            </h2>
            <p className="text-base leading-relaxed">
              Paperless Pipeline uses cookies and similar tracking technologies
              (such as web beacons and pixels) to operate and improve our
              Service, remember your preferences, understand how visitors use our
              platform, and deliver relevant content. We do not use cookies to
              deliver third-party advertising.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              3. Types of Cookies We Use
            </h2>

            <div className="space-y-6">
              <div className="bg-[#ECEEF2] rounded-xl p-5">
                <h3 className="text-base font-semibold text-[#030712] mb-2">
                  Strictly Necessary Cookies
                </h3>
                <p className="text-sm leading-relaxed">
                  These cookies are essential for the Service to function
                  correctly. They enable core features such as secure login,
                  session management, and account authentication. You cannot
                  opt out of these cookies as they are required for the
                  Service to operate.
                </p>
              </div>

              <div className="bg-[#ECEEF2] rounded-xl p-5">
                <h3 className="text-base font-semibold text-[#030712] mb-2">
                  Functional Cookies
                </h3>
                <p className="text-sm leading-relaxed">
                  These cookies allow us to remember your preferences and
                  settings (such as your language preference, dashboard
                  layout, and notification choices) so you don&apos;t have to
                  re-enter them each time you visit.
                </p>
              </div>

              <div className="bg-[#ECEEF2] rounded-xl p-5">
                <h3 className="text-base font-semibold text-[#030712] mb-2">
                  Analytics Cookies
                </h3>
                <p className="text-sm leading-relaxed">
                  We use analytics cookies (including those provided by
                  third-party analytics services) to collect aggregated
                  information about how users interact with the Service. This
                  helps us understand which features are used most, where
                  users encounter problems, and how to improve the overall
                  experience. Analytics data is anonymized where possible.
                </p>
              </div>

              <div className="bg-[#ECEEF2] rounded-xl p-5">
                <h3 className="text-base font-semibold text-[#030712] mb-2">
                  Marketing Cookies
                </h3>
                <p className="text-sm leading-relaxed">
                  On our marketing website (not within the logged-in Service),
                  we may use marketing cookies to track visitors across
                  websites, measure the effectiveness of our advertising
                  campaigns, and understand how users arrive at our site. You
                  may opt out of marketing cookies using the controls described
                  in Section 5.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              4. Third-Party Cookies
            </h2>
            <p className="text-base leading-relaxed">
              Some cookies on our platform are placed by third-party services
              we use, such as analytics providers, customer support tools, and
              payment processors. These third parties have their own privacy
              policies governing the use of cookies. We recommend reviewing
              those policies for information about how they handle data
              collected through their cookies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              5. Your Cookie Choices
            </h2>
            <p className="text-base leading-relaxed mb-4">
              You have several options to control cookies:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 text-base leading-relaxed">
              <li>
                <strong className="text-[#030712]">Browser settings:</strong>{" "}
                Most browsers allow you to view, manage, and delete cookies
                through their settings menus. Disabling cookies may affect the
                functionality of the Service.
              </li>
              <li>
                <strong className="text-[#030712]">
                  Cookie consent banner:
                </strong>{" "}
                Where required by law, we will present a cookie consent banner
                on your first visit, allowing you to accept or decline
                non-essential cookies.
              </li>
              <li>
                <strong className="text-[#030712]">
                  Opt-out tools:
                </strong>{" "}
                For analytics cookies, you may use browser-based opt-out
                mechanisms provided by analytics vendors. For marketing
                cookies, you may opt out through industry opt-out portals such
                as the NAI Opt-Out Tool.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              6. Do Not Track
            </h2>
            <p className="text-base leading-relaxed">
              Some browsers offer a &ldquo;Do Not Track&rdquo; (DNT) feature that signals
              to websites that you do not want to be tracked. Currently, there
              is no industry standard for how websites should respond to DNT
              signals. We will update this policy if and when a standard is
              established.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              7. Changes to This Policy
            </h2>
            <p className="text-base leading-relaxed">
              We may update this Cookie Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We will post the updated policy on this page
              with a revised &ldquo;Last updated&rdquo; date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-3">
              8. Contact Us
            </h2>
            <p className="text-base leading-relaxed">
              If you have questions about our use of cookies or this Cookie
              Policy, please contact us at privacy@paperlesspipeline.com.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

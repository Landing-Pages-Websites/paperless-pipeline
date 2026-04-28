import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Log In — Paperless Pipeline",
  description:
    "Log in to your Paperless Pipeline account to manage transactions, documents, and commissions.",
};

export default function LoginPage() {
  return (
    <section className="bg-[#FDF9EE] min-h-[80vh] flex items-center justify-center px-5 py-20">
      <div className="max-w-[480px] w-full bg-white rounded-2xl p-8 md:p-10 shadow-lg">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-2 text-center">
            <h1
              className="font-semibold text-black"
              style={{ fontSize: "32px", lineHeight: "40px" }}
            >
              Log in to your account
            </h1>
            <p
              className="text-[#4F4F4F]"
              style={{ fontSize: "16px", lineHeight: "24px" }}
            >
              Access your Paperless Pipeline dashboard
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-[#1E1E1E] font-medium"
                style={{ fontSize: "14px", lineHeight: "20px" }}
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-[#D5D9E2] px-4 py-3 text-[16px] leading-[24px] text-[#1E1E1E] placeholder:text-[#6C757D] focus:outline-none focus:ring-2 focus:ring-[#0063EB] focus:border-transparent"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-[#1E1E1E] font-medium"
                  style={{ fontSize: "14px", lineHeight: "20px" }}
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-[#0063EB] font-medium hover:underline"
                  style={{ fontSize: "14px", lineHeight: "20px" }}
                >
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-[#D5D9E2] px-4 py-3 text-[16px] leading-[24px] text-[#1E1E1E] placeholder:text-[#6C757D] focus:outline-none focus:ring-2 focus:ring-[#0063EB] focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center text-white font-medium bg-[#0063EB] hover:bg-[#046EFF] rounded-lg transition-colors"
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                padding: "12px 24px",
                boxShadow:
                  "0px 0px 0px 1px rgba(4,110,255,1), 0px 1px 2px 0px rgba(4,110,255,0.64)",
              }}
            >
              Log In
            </button>
          </form>

          {/* Footer */}
          <p
            className="text-center text-[#4F4F4F]"
            style={{ fontSize: "14px", lineHeight: "20px" }}
          >
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-[#0063EB] font-medium hover:underline"
            >
              Start your free trial
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

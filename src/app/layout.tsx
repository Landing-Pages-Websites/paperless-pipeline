import type { Metadata } from "next";
import { Poppins, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const bricolage = Bricolage_Grotesque({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paperless-pipeline-three.vercel.app"),
  title: "Paperless Pipeline — Real Estate Transaction Management",
  description:
    "Paperless Pipeline is the real estate transaction management SaaS built for brokers, teams, and transaction coordinators who need clarity, control, and predictable costs as they grow.",
  openGraph: {
    type: "website",
    siteName: "Paperless Pipeline",
    title: "Paperless Pipeline — Real Estate Transaction Management",
    description:
      "Paperless Pipeline is the real estate transaction management SaaS built for brokers, teams, and transaction coordinators who need clarity, control, and predictable costs as they grow.",
    url: "https://paperless-pipeline-three.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paperless Pipeline — Real Estate Transaction Management",
    description:
      "Paperless Pipeline is the real estate transaction management SaaS built for brokers, teams, and transaction coordinators who need clarity, control, and predictable costs as they grow.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${bricolage.variable} antialiased`}
    >
      <body className="flex flex-col min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#0063EB] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

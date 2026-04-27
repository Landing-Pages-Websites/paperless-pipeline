export type FAQCategory =
  | "General"
  | "Getting Started"
  | "Pricing"
  | "Features"
  | "Support";

export type FAQ = {
  question: string;
  answer: string;
  category: FAQCategory;
};

export const faqs: FAQ[] = [
  // General
  {
    category: "General",
    question: "What is Paperless Pipeline?",
    answer:
      "Paperless Pipeline is a cloud-based real estate transaction management platform built for brokers, teams, and transaction coordinators. It gives your whole team one place to manage deals from contract to close — with documents, tasks, deadlines, eSign, and commissions all in a single dashboard.",
  },
  {
    category: "General",
    question: "Who is Paperless Pipeline built for?",
    answer:
      "Paperless Pipeline is designed for real estate professionals at every level — solo agents who want to stay organized, growing teams that need consistent workflows, and large brokerages that need visibility across dozens of agents and hundreds of transactions at once.",
  },
  {
    category: "General",
    question: "Is my data secure with Paperless Pipeline?",
    answer:
      "Security is our top priority. We use bank-level encryption, secure data centers, and industry-standard security practices to keep your sensitive transaction data safe at all times.",
  },
  // Getting Started
  {
    category: "Getting Started",
    question: "How long does it take to get up and running?",
    answer:
      "Most teams are fully operational within 1–3 days. There's no complex migration, no IT setup required, and no lengthy implementation project to manage. You create your account, set up your checklist templates, and start opening transactions.\n\nIf you're moving from another platform and have existing transaction data, our support team can help you with the transition. We also provide live onboarding calls for teams that want a guided walkthrough.",
  },
  {
    category: "Getting Started",
    question: "Do I need to train my agents to use it?",
    answer:
      "Paperless Pipeline is built to be intuitive — most agents pick it up within minutes. The interface is clean and focused, so agents only see what's relevant to their active transactions. We also provide a help center, video walkthroughs, and live onboarding sessions to get your team comfortable quickly.",
  },
  {
    category: "Getting Started",
    question: "Can I import data from my current system?",
    answer:
      "Yes. We provide migration assistance to help you bring your existing transaction data into Paperless Pipeline. Our onboarding team will work with you to ensure a smooth transition from wherever you're coming from.",
  },
  // Pricing
  {
    category: "Pricing",
    question: "Is there a free trial?",
    answer:
      "Yes — you can start a free trial with no credit card required. Explore all features and see how Paperless Pipeline can transform your transaction process before committing to a plan.",
  },
  {
    category: "Pricing",
    question: "How is Paperless Pipeline priced?",
    answer:
      "Paperless Pipeline charges a flat monthly fee based on your transaction volume — not per user or per seat. Your whole team can use it without watching the bill climb as you grow. Plans start at a predictable monthly rate with no surprise overages.",
  },
  {
    category: "Pricing",
    question: "Are there any setup fees or contracts?",
    answer:
      "No setup fees and no long-term contracts. You pay month-to-month and can cancel at any time. We believe the product should earn your business every month — not a signed agreement.",
  },
  {
    category: "Pricing",
    question: "Does pricing change as my team grows?",
    answer:
      "Pricing is based on transaction volume, not the number of users — so adding agents to your team doesn't change your bill. As your transaction volume grows you can upgrade your plan at any time from your account dashboard.",
  },
  // Features
  {
    category: "Features",
    question: "Is eSign included, or do I need a separate subscription?",
    answer:
      "Pipeline eSign is our built-in electronic signature tool. You can send documents for signature directly from within a transaction, track signing status in real time, and automatically file completed documents back to the transaction record — no third-party eSign subscription required.",
  },
  {
    category: "Features",
    question: "Can I customize the checklists for different transaction types?",
    answer:
      "Yes. You can build custom task checklists and workflow templates tailored to different transaction types (buyer, seller, lease, etc.). Templates auto-assign tasks by role and set deadline rules relative to key dates like contract date and closing date.",
  },
  {
    category: "Features",
    question: "Does it work for teams managing multiple markets or states?",
    answer:
      "Yes. Paperless Pipeline is built to scale across multiple markets, states, and office locations. You can configure separate workflows, compliance checklists, and commission structures for each market — all managed from a single account.",
  },
  {
    category: "Features",
    question: "How does the commission management feature work?",
    answer:
      "Paperless Pipeline automatically calculates agent and broker splits, fees, and net payouts for each transaction based on your brokerage's commission schedule. You can review, approve, and export commission statements at close — no spreadsheets needed.",
  },
  // Support
  {
    category: "Support",
    question: "What kind of support is available?",
    answer:
      "All plans include email and chat support with fast response times. Our Professional and Enterprise plans include priority support with dedicated account managers and phone access. We also maintain an extensive help center with guides, videos, and webinars.",
  },
  {
    category: "Support",
    question: "Do you offer onboarding help?",
    answer:
      "Yes. Every new account gets access to our onboarding resources including guided walkthroughs, video tutorials, and a dedicated help center. Teams on higher-tier plans also get live onboarding calls with our customer success team to get everything configured exactly right.",
  },
  {
    category: "Support",
    question: "How quickly do you respond to support requests?",
    answer:
      "Our typical response time is under two hours on business days. Live chat is available during business hours and email support is monitored throughout the day. Priority support plans include access to a dedicated account manager and phone support.",
  },
];

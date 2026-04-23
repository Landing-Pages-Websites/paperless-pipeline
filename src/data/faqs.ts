export type FAQCategory = "General" | "Pricing" | "Features" | "Getting Started";

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
    question: "What kind of support is available?",
    answer:
      "All plans include email and chat support with fast response times. Our Professional and Enterprise plans include priority support with dedicated account managers and phone access. We also maintain an extensive help center with guides, videos, and webinars.",
  },
  {
    category: "General",
    question: "Is my data secure with Paperless Pipeline?",
    answer:
      "Security is our top priority. We use bank-level encryption, secure data centers, and industry-standard security practices to keep your sensitive transaction data safe at all times.",
  },
  // Pricing
  {
    category: "Pricing",
    question: "How does Paperless Pipeline pricing work?",
    answer:
      "Paperless Pipeline charges a flat monthly fee based on your transaction volume — not per user or per seat. Your whole team can use it without watching the bill climb as you grow. Plans start at a predictable monthly rate with no surprise overages.",
  },
  {
    category: "Pricing",
    question: "Is there a limit to the number of users I can add?",
    answer:
      "No. All Paperless Pipeline plans include unlimited users. You pay for transactions, not headcount — so you can invite your entire brokerage, all your agents, and every transaction coordinator without any additional per-seat fees.",
  },
  {
    category: "Pricing",
    question: "Is there a free trial available?",
    answer:
      "Yes — you can start a free trial with no credit card required. Explore all features and see how Paperless Pipeline can transform your transaction process before committing to a plan.",
  },
  {
    category: "Pricing",
    question: "Can I change my plan as my business grows?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time from your account dashboard. Upgrades take effect immediately, and downgrades apply at the start of your next billing cycle. There are no penalties for changing plans.",
  },
  // Features
  {
    category: "Features",
    question: "Does Paperless Pipeline integrate with my other tools?",
    answer:
      "Yes. Paperless Pipeline integrates with popular real estate CRMs, MLS platforms, e-signature tools, and accounting software. Our open API also allows custom integrations. Check our integrations page for the full list of supported platforms.",
  },
  {
    category: "Features",
    question: "What is Pipeline eSign?",
    answer:
      "Pipeline eSign is our built-in electronic signature tool. You can send documents for signature directly from within a transaction, track signing status in real time, and automatically file completed documents back to the transaction record — no third-party eSign subscription required.",
  },
  {
    category: "Features",
    question: "How does commission tracking work?",
    answer:
      "Paperless Pipeline automatically calculates agent and broker splits, fees, and net payouts for each transaction based on your brokerage's commission schedule. You can review, approve, and export commission statements at close — no spreadsheets needed.",
  },
  {
    category: "Features",
    question: "Can I customize my transaction workflows?",
    answer:
      "Yes. You can build custom task checklists and workflow templates tailored to different transaction types (buyer, seller, lease, etc.). Templates auto-assign tasks by role and set deadline rules relative to key dates like contract date and closing date.",
  },
  // Getting Started
  {
    category: "Getting Started",
    question: "How long does it take to get set up?",
    answer:
      "Most teams are fully operational within a day. Our onboarding wizard walks you through importing your existing transactions, inviting your team, and customizing your workflow templates. We also offer free concierge setup for teams on higher-tier plans.",
  },
  {
    category: "Getting Started",
    question: "Can I migrate my existing data to Paperless Pipeline?",
    answer:
      "Yes. We provide migration assistance to help you bring your existing transaction data into Paperless Pipeline. Our onboarding team will work with you to ensure a smooth transition from wherever you're coming from.",
  },
  {
    category: "Getting Started",
    question: "Do I need to install any software?",
    answer:
      "No installation needed. Paperless Pipeline is fully cloud-based and runs in any modern web browser. There's also a mobile-optimized view so agents can check transaction status and complete tasks from any device, anywhere.",
  },
  {
    category: "Getting Started",
    question: "How do I invite my team members?",
    answer:
      "From your account dashboard, go to Team Settings and enter your team members' email addresses. They'll receive an invitation to join your workspace, set up their profile, and get access to the transactions you assign them — all in under two minutes.",
  },
];

export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const navItems: NavItem[] = [
  {
    label: "How It Works",
    href: "/how-it-works",
    children: [
      { label: "For Brokers", href: "/how-it-works/brokers" },
      { label: "For Teams", href: "/how-it-works/teams" },
      {
        label: "For Transaction Coordinators",
        href: "/how-it-works/transaction-coordinators",
      },
    ],
  },
  {
    label: "Features",
    href: "/features",
    children: [
      { label: "Pipeline eSign", href: "/features/pipeline-esign" },
      {
        label: "Transaction Management",
        href: "/features/transaction-management",
      },
      {
        label: "Commissions Management",
        href: "/features/commissions-management",
      },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "FAQs", href: "/faqs" },
      { label: "Savings Calculator", href: "/savings-calculator" },
      { label: "Commission Calculator", href: "/commission-calculator" },
    ],
  },
];

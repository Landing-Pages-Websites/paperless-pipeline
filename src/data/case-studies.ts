export type CaseStudy = {
  title: string;
  slug: string;
  excerpt: string;
  company: string;
  industry: string;
  metric: string;
  challenge: string;
  solution: string;
  result: string;
  quote: string;
  quoteAuthor: string;
  quoteRole: string;
  metrics: { label: string; value: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "How Summit Realty Group Cut Their Average Days-to-Close by 40%",
    slug: "summit-realty-group-faster-closings",
    excerpt:
      "Summit Realty Group was managing 60+ transactions per month across three offices with a patchwork of spreadsheets and email threads. After switching to Paperless Pipeline, they cut their average days-to-close from 42 to 25.",
    company: "Summit Realty Group",
    industry: "Residential Brokerage",
    metric: "40% faster closings",
    challenge:
      "Summit Realty Group had grown quickly — from 12 to 38 agents in just two years — and their transaction management hadn't kept pace. Each agent tracked their own deals in personal spreadsheets. Transaction coordinators relied on email threads that stretched into the hundreds of messages per deal. When a deadline slipped, no one knew until it was already late. The broker, Janet Simmons, described their situation plainly: 'We were closing deals in spite of our systems, not because of them.'",
    solution:
      "Summit implemented Paperless Pipeline in January 2025, starting with a single TC to build and test their standard workflow templates before rolling out to the full team. They created separate checklists for buyer transactions, seller listings, and lease deals — each with automated task assignments and deadline rules tied to contract date. Within 30 days, every active transaction was in the platform and every team member had been trained.",
    result:
      "In the six months following implementation, Summit's average days-to-close dropped from 42 to 25 days. Their transaction coordinators, who had previously maxed out at 12 concurrent deals each, were now comfortably managing 20. Agent satisfaction scores — measured in a quarterly internal survey — increased by 31 points. And the broker spent two fewer hours per day on status check-ins because the dashboard answered those questions automatically.",
    quote:
      "We used to have a saying on the team: 'If it's not in email, it didn't happen.' Now the saying is: 'If it's not in Pipeline, it doesn't exist.' That shift in mindset — and the system that made it possible — changed everything about how we operate.",
    quoteAuthor: "Janet Simmons",
    quoteRole: "Broker-Owner, Summit Realty Group",
    metrics: [
      { label: "Days-to-close reduction", value: "40%" },
      { label: "Concurrent deals per TC", value: "12 → 20" },
      { label: "Agent satisfaction increase", value: "+31 pts" },
      { label: "Broker time saved daily", value: "2 hrs" },
    ],
  },
  {
    title: "Keystone Property Team Scales to 100 Transactions Per Month Without Adding Staff",
    slug: "keystone-property-team-scale-without-headcount",
    excerpt:
      "Keystone Property Team used Paperless Pipeline to double their monthly transaction volume in 12 months — without hiring a single additional transaction coordinator.",
    company: "Keystone Property Team",
    industry: "Real Estate Team",
    metric: "2× volume, same team size",
    challenge:
      "Ryan Deluca built Keystone Property Team into one of the top-producing teams in the Denver metro — but at 50 transactions per month, he hit a wall. Every time volume increased, so did the chaos. His two transaction coordinators were working nights and weekends just to keep up. He had already lost one agent to a competitor brokerage that offered 'better back-office support.' Ryan knew that scaling further without adding staff required a fundamental change in how the team operated, not just who it hired.",
    solution:
      "After evaluating three transaction management platforms, Keystone chose Paperless Pipeline for its unlimited-user pricing model (critical for a team that planned to grow), its built-in eSign capability, and its commission tracking feature that would let Ryan eliminate a separate spreadsheet-based system his office manager maintained manually. Onboarding took one weekend. By Monday, all active transactions were imported and both TCs were trained.",
    result:
      "Twelve months after implementation, Keystone's monthly transaction volume had grown from 52 to 104 without adding any TC headcount. The two existing coordinators reported that their workload felt 'the same or slightly lighter' despite managing twice as many files, because automation handled the routine follow-ups that previously consumed their mornings. Ryan attributed a significant portion of his team's 2025 growth directly to the operational capacity that Paperless Pipeline created.",
    quote:
      "My TCs used to spend the first two hours of every day doing manual status check-ins with lenders and title. That time is now spent on actual problem-solving. We didn't get faster by hiring more people — we got faster by stopping the things that were slowing us down.",
    quoteAuthor: "Ryan Deluca",
    quoteRole: "Team Lead, Keystone Property Team",
    metrics: [
      { label: "Transaction volume growth", value: "52 → 104/mo" },
      { label: "Headcount change", value: "0 new hires" },
      { label: "TC morning admin time saved", value: "2 hrs/day" },
      { label: "Time to onboard new agents", value: "< 1 day" },
    ],
  },
  {
    title: "Arbor Bay Realty Eliminates Commission Disputes and Closes Books 3 Days Faster",
    slug: "arbor-bay-realty-commission-accuracy",
    excerpt:
      "Arbor Bay Realty was losing agents over commission discrepancies and spending 15+ hours per month reconciling payouts. With Paperless Pipeline's commission tracking, disputes dropped to zero.",
    company: "Arbor Bay Realty",
    industry: "Independent Brokerage",
    metric: "Zero commission disputes",
    challenge:
      "Commission disputes were Arbor Bay Realty's most persistent and damaging operational problem. With 24 agents across two offices and four different commission split structures, manually calculating payouts for each deal was error-prone by design. Operations manager Priya Nair estimated that at least one commission statement per month was incorrect — and correcting it after the fact meant uncomfortable conversations with agents, reissued checks, and eroded trust. Two senior agents had left the brokerage in the prior year citing 'payment reliability' as a factor in their decision.",
    solution:
      "Arbor Bay implemented Paperless Pipeline's commission tracking module, configuring all four split structures, desk fees, and transaction fee schedules into the system. Going forward, every transaction automatically generated a commission breakdown the moment it was created — giving both the broker and the agent visibility into the expected payout before the deal even closed. Agents could see their projected commission from their own login, eliminating the 'what am I getting on this one?' call to the office.",
    result:
      "In the 10 months following implementation, Arbor Bay recorded zero commission disputes — down from an average of 1.2 per month previously. Month-end book close time dropped from an average of 6 days to 3, because reconciliation was now a matter of reviewing automated reports rather than manually cross-checking spreadsheets. Agent retention improved, and two agents who had previously expressed concerns about staying cited the improved transparency as a specific reason for renewing their association agreements.",
    quote:
      "Commission disputes aren't just a financial problem — they're a relationship problem. Every time we had to tell an agent their check was wrong, we lost a little trust. That hasn't happened once since we moved to Paperless Pipeline, and I genuinely think it's why we've kept the team we have.",
    quoteAuthor: "Priya Nair",
    quoteRole: "Operations Manager, Arbor Bay Realty",
    metrics: [
      { label: "Monthly commission disputes", value: "1.2 → 0" },
      { label: "Month-end close time", value: "6 days → 3 days" },
      { label: "Agent retention improvement", value: "Measurable uplift" },
      { label: "Reconciliation hours saved/mo", value: "15+ hrs" },
    ],
  },
];

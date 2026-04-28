export type Guide = {
  slug: string;
  title: string;
  description: string;
  sections: { heading: string; content: string[] }[];
};

export const guides: Guide[] = [
  {
    slug: "recruiting-real-estate-agents",
    title: "Recruiting Real Estate Agents",
    description:
      "A comprehensive guide to attracting, recruiting, and retaining top-performing real estate agents for your brokerage.",
    sections: [
      {
        heading: "Why Recruiting Is the Growth Engine",
        content: [
          "For real estate brokerages, agent recruitment is the single most impactful lever for growth. More productive agents means more transactions, more revenue, and a stronger market presence. Yet most brokerages treat recruitment as a reactive, ad-hoc process rather than a disciplined, repeatable system.",
          "The brokerages that consistently attract top talent share a common trait: they have a clear value proposition that goes beyond commission splits. They offer technology, support systems, training, and a culture that makes agents measurably more productive.",
        ],
      },
      {
        heading: "Building Your Recruitment Value Proposition",
        content: [
          "Before you start reaching out to agents, you need to define what makes your brokerage different. Start with these questions: What do your current top performers say they love about working with you? What tools and systems do you provide that save agents time? What training or mentorship programs set you apart?",
          "Your value proposition should be specific and measurable. Instead of saying 'we have great technology,' say 'our agents save an average of 5 hours per week on transaction management because we provide Paperless Pipeline with pre-built checklists and automated deadline tracking.'",
          "Document your value proposition in a one-page recruiting pitch that any team leader can use. This consistency in messaging is critical — when every manager tells a different story, candidates get confused and move on.",
        ],
      },
      {
        heading: "Where to Find Top Agents",
        content: [
          "The best agents are rarely actively looking for a new brokerage. They are busy closing deals. Your outreach strategy should include both active and passive channels: industry events and conferences, local association meetings, LinkedIn outreach with personalized messages, referrals from your current agents, and market data that identifies high-performing agents in your area.",
          "Referral programs are particularly powerful. Offer your current agents a meaningful incentive for introductions that lead to hires. The agents they refer tend to be higher quality because your team is putting their reputation on the line.",
        ],
      },
      {
        heading: "Retention Is Recruitment",
        content: [
          "The best recruitment strategy is retention. Every agent who stays and thrives at your brokerage is a walking testimonial. Invest in systems that make your agents' lives easier — transaction management tools that eliminate paperwork, commission tracking that gives them real-time visibility into their earnings, and support staff who handle the administrative burden so agents can focus on selling.",
          "Exit interviews are goldmines. When an agent leaves, understand why. If the answer is 'I couldn't get visibility into my transactions' or 'the admin work was overwhelming,' those are system problems you can fix. Tools like Paperless Pipeline directly address these pain points by centralizing transactions, automating checklists, and providing agents with self-service access to their deal status and commission data.",
        ],
      },
    ],
  },
  {
    slug: "real-estate-transaction-process",
    title: "Real Estate Transaction Process",
    description:
      "An end-to-end guide to the real estate transaction process, from contract to closing, with best practices for every stage.",
    sections: [
      {
        heading: "Understanding the Transaction Lifecycle",
        content: [
          "A real estate transaction involves hundreds of discrete tasks, dozens of documents, multiple stakeholders, and strict regulatory deadlines. From the moment an offer is accepted to the day of closing, the average deal requires coordination between the buyer's agent, seller's agent, broker, transaction coordinator, title company, lender, inspector, and appraiser.",
          "The complexity of this process is why so many deals run into problems. Missed deadlines, lost documents, and miscommunication between parties are the leading causes of delayed closings — and every day of delay costs money and erodes trust.",
        ],
      },
      {
        heading: "Phase 1: Contract to Inspection",
        content: [
          "Once the offer is accepted and the contract is executed, the clock starts running on the inspection period. This is typically 7–14 days and is one of the most time-sensitive phases of the transaction. During this window, the buyer must arrange and complete inspections, review the results, and negotiate any repairs or concessions.",
          "For the transaction coordinator, this phase involves opening the deal in the management system, creating the transaction checklist, distributing contact information to all parties, and ensuring the earnest money deposit is delivered on time. Using a platform like Paperless Pipeline, these steps can be automated — a new transaction triggers the appropriate checklist template, assigns tasks to the right people, and sets deadline dates relative to the contract date.",
        ],
      },
      {
        heading: "Phase 2: Under Contract to Closing",
        content: [
          "After inspections are resolved, the deal enters the under-contract phase. This is the longest stretch — typically 30–45 days — and involves loan processing, appraisal, title search, survey, and the preparation of closing documents. The TC's role during this phase is to track progress against every deadline, follow up on outstanding items, and ensure documents are collected and properly filed.",
          "The most common failure point in this phase is the appraisal. If the property appraises below the contract price, the deal may need to be renegotiated. Having a centralized system that tracks the status of every milestone — with automated notifications when items are overdue — prevents these issues from becoming surprises.",
        ],
      },
      {
        heading: "Phase 3: Closing and Post-Closing",
        content: [
          "The closing itself is a carefully choreographed event. All documents must be signed, funds must be wired, and the title must transfer cleanly. After closing, there are still tasks to complete: commission disbursement, file archiving, client follow-up, and compliance review.",
          "Brokerages that use transaction management software can automate much of the post-closing workflow. Commission calculations happen instantly based on the deal structure. Files are automatically archived for compliance. Follow-up tasks are assigned to the appropriate team member. This systematic approach ensures nothing falls through the cracks and your team can move on to the next deal with confidence.",
        ],
      },
    ],
  },
  {
    slug: "real-estate-checklist-template",
    title: "Real Estate Checklist Template",
    description:
      "A comprehensive transaction checklist template for real estate teams, covering every step from contract to close.",
    sections: [
      {
        heading: "Why Every Brokerage Needs a Standard Checklist",
        content: [
          "Inconsistency is the enemy of scale. When every agent and TC uses a different process to manage transactions, errors multiply, training takes longer, and quality control becomes impossible. A standardized transaction checklist is the foundation of a scalable brokerage operation.",
          "The best checklists are not just to-do lists — they are workflows. Each item should specify who is responsible, what the deadline is (often relative to a key date like the contract date or closing date), what documents are required, and what triggers the next step. This level of detail transforms a checklist from a reminder tool into a process engine.",
        ],
      },
      {
        heading: "Buyer Transaction Checklist",
        content: [
          "A typical buyer transaction checklist includes 40–60 items organized by phase. Pre-contract items include buyer consultation, pre-approval verification, and property showing notes. Contract phase includes offer preparation, contract execution, earnest money tracking, and opening escrow.",
          "The inspection phase covers scheduling, attending, and reviewing inspection reports, plus negotiating repair requests. The financing phase includes appraisal ordering, loan application tracking, and conditional approval monitoring. The closing phase covers final walkthrough coordination, closing disclosure review, wire transfer verification, and key exchange.",
          "In Paperless Pipeline, you can build this entire checklist as a template that automatically applies to every new buyer transaction. Tasks are assigned to the right person and deadlines are calculated based on the contract and closing dates. This eliminates the 15–20 minutes of manual setup that TCs typically spend on every new deal.",
        ],
      },
      {
        heading: "Seller Transaction Checklist",
        content: [
          "Seller transactions have their own unique requirements. Pre-listing items include listing agreement execution, property disclosure preparation, and MLS data entry. Active listing tasks include showing feedback tracking, offer review and presentation, and multiple offer management.",
          "Under contract, the seller side involves coordinating access for inspections, reviewing repair requests, tracking the buyer's financing progress, and preparing for closing. Post-closing tasks include commission disbursement, sign removal, lockbox retrieval, and MLS status update.",
        ],
      },
      {
        heading: "Customizing Your Checklist",
        content: [
          "No two brokerages operate exactly the same way, and your checklist should reflect your specific processes, market requirements, and compliance obligations. Start with a standard template, then customize based on your state's requirements, your brokerage's policies, and feedback from your TCs and agents.",
          "The key is to review and update your checklists regularly. Markets change, regulations evolve, and your team discovers better ways to do things. A tool like Paperless Pipeline makes it easy to update a checklist template once and have the changes apply to all future transactions automatically.",
        ],
      },
    ],
  },
  {
    slug: "how-to-start-a-real-estate-brokerage",
    title: "How to Start a Real Estate Brokerage",
    description:
      "A practical guide to starting and running a successful real estate brokerage, from licensing to operations to growth.",
    sections: [
      {
        heading: "From Agent to Broker: Making the Leap",
        content: [
          "Starting your own brokerage is a significant step. You are moving from selling real estate to running a business — and those require very different skill sets. The most successful new brokers plan their transition carefully, building the operational foundation before they open their doors.",
          "The first decision is your business model. Will you run a traditional brokerage with office space, or a cloud-based brokerage with virtual operations? Will you focus on a specific market segment (luxury, first-time buyers, commercial) or serve a broad market? Your model determines your cost structure, your recruiting pitch, and your technology needs.",
        ],
      },
      {
        heading: "Licensing and Legal Requirements",
        content: [
          "Every state has different requirements for obtaining a broker's license and opening a brokerage. At minimum, you will need: a broker's license (which typically requires additional education and experience beyond your agent license), a business entity (LLC or corporation), errors and omissions insurance, a trust/escrow account for holding client funds, and compliance with your state's real estate commission regulations.",
          "Consult with a real estate attorney and an accountant who specializes in real estate businesses before you file any paperwork. The legal and financial structure you set up on day one will affect everything from your tax obligations to your personal liability protection.",
        ],
      },
      {
        heading: "Technology and Operations",
        content: [
          "Your technology stack is a competitive advantage — or a liability. At minimum, you need: a CRM for lead management, a transaction management system, an accounting/commission tracking solution, and a communication platform. Many brokerages try to solve all of these with a single 'all-in-one' platform and quickly discover that the jack-of-all-trades approach means nothing works particularly well.",
          "A better strategy is to choose best-in-class tools for your core operations and integrate them. For transaction management specifically, Paperless Pipeline is purpose-built for the workflows that brokerages actually run: checklists, document management, deadline tracking, and commission calculations. Its per-transaction pricing model is particularly attractive for new brokerages because you only pay for what you use — no per-user fees that penalize you for adding agents.",
        ],
      },
      {
        heading: "Scaling From Launch to Growth",
        content: [
          "The first year is about survival: recruit your initial agents, close your first deals, and establish your processes. The second year is about systematization: document your workflows, build training programs, and invest in the tools that let you handle more volume without proportionally more effort.",
          "The brokerages that scale successfully are the ones that invest early in systems. A new brokerage with 5 agents and a solid transaction management system will grow faster and more profitably than a brokerage with 20 agents and a mess of spreadsheets. The system is what allows you to onboard new agents quickly, maintain quality control, and keep your broker's license safe by ensuring compliance across every transaction.",
        ],
      },
    ],
  },
];

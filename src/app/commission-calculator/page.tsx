import type { Metadata } from "next";
import Link from "next/link";
import CommissionCalculatorContent from "./CommissionCalculatorContent";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Real Estate Commission Calculator — Paperless Pipeline",
  description:
    "Calculate your real estate commission in seconds. Enter the sale price, commission rate, and broker split to see your net payout.",
};

export default function CommissionCalculatorPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#FDF9EE] py-24 md:py-32">
        {/* Decorative blurs */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -right-40 top-[10%] h-[500px] w-[500px] rounded-full bg-[rgba(4,110,255,0.22)] blur-[200px]" />
          <div className="absolute right-0 top-[20%] h-[260px] w-[260px] rounded-full bg-[rgba(255,233,91,0.35)] blur-[130px]" />
          <div className="absolute right-20 top-[5%] h-[160px] w-[160px] rounded-full bg-[rgba(255,73,44,0.22)] blur-[80px]" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 shadow-sm">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0063EB]/10 text-[10px] font-semibold text-[#0063EB]">
              ✓
            </span>
            <span className="text-xs font-medium text-black">
              No credit card required. No setup fees.
            </span>
          </div>

          <h1
            className="max-w-2xl text-5xl font-semibold text-black md:text-[64px] md:leading-[72px]"
            style={{ letterSpacing: "-0.0375em" }}
          >
            Calculate Commissions with Ease
          </h1>

          <p className="max-w-xl text-lg font-medium leading-8 text-black">
            Simplify agent payments with quick, accurate commission calculations
          </p>

          <Link
            href="/signup"
            className="inline-flex items-center gap-2 rounded-lg bg-[#0063EB] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#046EFF]"
            style={{
              boxShadow:
                "0 0 0 1px #0063EB, 0 1px 2px rgba(4,110,255,0.64)",
            }}
          >
            Start Free Trial →
          </Link>
        </div>
      </section>

      {/* ── Calculator ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CommissionCalculatorContent />
        </div>
      </section>

      {/* ── Educational Content ── */}
      <section className="bg-white py-[120px]">
        <div className="mx-auto max-w-[768px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">

            {/* What is a free real estate commission calculator? */}
            <div>
              <div className="border-b border-gray-100 pb-6 mb-4">
                <h2 className="text-3xl font-semibold text-black md:text-[40px] md:leading-[120%]">
                  What is a free real estate commission calculator?
                </h2>
              </div>
              <div className="pb-4 flex flex-col gap-4">
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  Real estate commissions can be tough to calculate. Complex structures, agent fees, and varying rates make figuring them out a time-consuming process. It&apos;s easy to put these calculations on the back burner and focus on other parts of running your brokerage.
                </p>
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  But it&apos;s essential to keep on top of how much you owe. Knowing the amount you need to pay agents well in advance helps you make better financial projections, ensuring payday has no surprises.
                </p>
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  You could calculate commission manually. But if you want an easy-to-use shortcut, try our free real estate commission calculators. They will tell you exactly how much to pay your agents for each sale they get over the line.
                </p>
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  We have created two real estate agent commission calculators. They help with both split and tiered commission structures—these are the payment plans used by the majority of real estate brokerages and agents.
                </p>
              </div>
            </div>

            {/* Calculate a Standard Commission Split */}
            <div>
              <div className="border-b border-gray-100 pb-6 mb-4">
                <h2 className="text-3xl font-semibold text-black md:text-[40px] md:leading-[120%]">
                  Calculate a Standard Commission Split
                </h2>
              </div>
              <div className="pb-4 flex flex-col gap-4">
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  A common agent/broker commission split is 70/30. In this case, 70% of the commission on a sale goes to the brokerage and 30% to the agent.
                </p>
              </div>
              <div className="my-12 h-72 w-full rounded-xl bg-[#ECEEF2] md:h-[400px]" aria-hidden="true" />
              <div className="pb-4 flex flex-col gap-4">
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  Imagine an agent makes a sale worth $420,000. Of this selling price, 3% (or $12,600) goes to the selling side.
                </p>
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  In a 70/30 split, the agent would receive $3,780 and the brokerage would get $8,820.
                </p>
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  Then the agent&apos;s fees would come off their commission. Let&apos;s say they are $300. The agent&apos;s final commission is now $3,480, while the brokerage gets $9,120.
                </p>
              </div>
            </div>

            {/* How to Use the Standard Split Commission Calculator */}
            <div>
              <div className="border-b border-gray-100 pb-6 mb-4">
                <h2 className="text-3xl font-semibold text-black md:text-[40px] md:leading-[120%]">
                  How to Use the Standard Split Commission Calculator
                </h2>
              </div>
              <div className="pb-4 flex flex-col gap-4">
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  Split commission plans are when the real estate agent receives a set percentage of the total commission received by the brokerage.
                </p>
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  This is a widely used commission structure. Both the real estate agent and the broker can easily calculate how much they will receive on a sale.
                </p>
                <p className="text-base font-medium leading-[150%] text-[#4F4F4F]">
                  Here is how to use the split commission calculator.
                </p>
                <ol className="list-decimal pl-6 text-base text-[#4F4F4F]">
                  <li className="leading-[220%]">Enter the property selling price and the total amount your brokerage receives in commission. The latter is known as gross commission.</li>
                  <li className="leading-[220%]">Enter the percentage of the commission the real estate agent receives from the sale.</li>
                  <li className="leading-[220%]">Add any fees you charge to the agent.</li>
                  <li className="leading-[220%]">Hit the &ldquo;calculate&rdquo; button.</li>
                </ol>
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  You&apos;ll now see the exact amount your brokerage collects, as well as how much to pay your agent.
                </p>
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  Hit the &ldquo;copy net payables&rdquo; button to record these figures and paste them into relevant locations quickly.
                </p>
              </div>
            </div>

            {/* Figures You Need to Know */}
            <div>
              <div className="border-b border-gray-100 pb-6 mb-4">
                <h2 className="text-3xl font-semibold text-black md:text-[40px] md:leading-[120%]">
                  Figures You Need to Know
                </h2>
              </div>
              <div className="pb-4 flex flex-col gap-4">
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  There are four main figures you must know when calculating a standard split commission.
                </p>
                <p className="text-base font-medium leading-[150%] text-[#4F4F4F]">These are:</p>
                <ol className="list-decimal pl-6 text-base text-[#4F4F4F]">
                  <li className="leading-[220%]">
                    <span className="font-medium">Selling price:</span> The amount the property sells for. All other calculations are based on this figure.
                  </li>
                  <li className="leading-[220%]">
                    <span className="font-medium">Commission percentage:</span> The percentage of the selling price that each side of the transaction receives. Typically 3% goes to the side representing the buyer and 3% to the seller. The exact amount varies depending on your agreement with the client. If your brokerage represents both sides, you&apos;ll receive both cuts.
                  </li>
                  <li className="leading-[220%]">
                    <span className="font-medium">Agent commission rate:</span> The percentage of the total commission that goes to the agent. Agents often receive different commission rates depending on experience or market conditions.
                  </li>
                  <li className="leading-[220%]">
                    <span className="font-medium">Agent fees:</span> Some brokerages require real estate agents to pay fees to cover costs like E&amp;O insurance and marketing. How much you charge will depend on your agreement with the agent.
                  </li>
                </ol>
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  Once you know all the above figures, you can calculate how much you need to pay the real estate agent for each sale.
                </p>
              </div>
            </div>

            {/* Calculate a Tiered Real Estate Commission */}
            <div>
              <div className="border-b border-gray-100 pb-6 mb-4">
                <h2 className="text-3xl font-semibold text-black md:text-[40px] md:leading-[120%]">
                  Calculate a Tiered Real Estate Commission
                </h2>
              </div>
              <div className="pb-4 flex flex-col gap-4">
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  Tiered commission structures are when the agent receives a different percentage of the total commission depending on how much they earn in a specific period.
                </p>
              </div>
              <div className="my-12 h-72 w-full rounded-xl bg-[#ECEEF2] md:h-[400px]" aria-hidden="true" />
              <div className="pb-4 flex flex-col gap-4">
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  This type of structure incentivizes real estate agents to make more sales by giving them a larger piece of the pie when they do so.
                </p>
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  But they are more complicated than split commission structures. This is because the amount of commission the brokerage pays the agent changes once the agent hits a predefined threshold.
                </p>
              </div>
            </div>

            {/* Here's an Example of a Tiered Commission Split */}
            <div>
              <div className="border-b border-gray-100 pb-6 mb-4">
                <h2 className="text-3xl font-semibold text-black md:text-[40px] md:leading-[120%]">
                  Here&apos;s an Example of a Tiered Commission Split
                </h2>
              </div>
              <div className="pb-4 flex flex-col gap-4">
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  The agent and the brokerage could have a deal whereby the agent earns 80% of the total commission for the first $20,000 in commission they earn in a quarter. They may then earn 90% of commission for anything above this in the same period.
                </p>
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  Say the agent had a productive quarter and bought in real estate commissions worth $29,000. Their take-home amount would be $24,100. That works out at $16,000 (80% of $20,000) plus $8,100 (90% of $9,000).
                </p>
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  It&apos;s easy to see how this type of commission structure motivates real estate agents. If the agent was on a flat fee commission structure of 80%, they would only have earned $23,200. That&apos;s almost $1,000 less for the same amount of work.
                </p>
              </div>
            </div>

            {/* How to Use the Tiered Real Estate Commission Calculator */}
            <div>
              <div className="border-b border-gray-100 pb-6 mb-4">
                <h2 className="text-3xl font-semibold text-black md:text-[40px] md:leading-[120%]">
                  How to Use the Tiered Real Estate Commission Calculator
                </h2>
              </div>
              <div className="pb-4 flex flex-col gap-4">
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  The tiered commission calculator has several extra fields you need to complete compared to the standard commission calculator.
                </p>
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  Use this calculator when a real estate agent makes a sale that takes them from one commission rate to the next.
                </p>
                <ol className="list-decimal pl-6 text-base text-[#4F4F4F]">
                  <li className="leading-[220%]">Enter the sale price and the commission percentage you receive.</li>
                  <li className="leading-[220%]">Enter the percentage of the commission the agent receives in the current tier and the next tier.</li>
                  <li className="leading-[220%]">Enter the total amount the agent needs to earn to reach the next tier.</li>
                  <li className="leading-[220%]">Enter the amount the agent has already earned in commissions before the current sale.</li>
                  <li className="leading-[220%]">Add any fees the agent needs to pay.</li>
                  <li className="leading-[220%]">Hit &ldquo;calculate.&rdquo;</li>
                </ol>
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  You&apos;ll then see two different results boxes.
                </p>
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  The first shows you the commission the agent and the brokerage receives broken down into the amount contributed in each tier.
                </p>
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  The net payables box simplifies this, showing you exactly how much your brokerage receives and how much the real estate agent earns.
                </p>
              </div>
            </div>

            {/* Challenges When Calculating Tiered Commission Splits */}
            <div>
              <div className="border-b border-gray-100 pb-6 mb-4">
                <h2 className="text-3xl font-semibold text-black md:text-[40px] md:leading-[120%]">
                  Challenges When Calculating Tiered Commission Splits
                </h2>
              </div>
              <div className="pb-4 flex flex-col gap-4">
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  The biggest challenge in calculating tiered commission is when a property takes the agent over the edge into the next commission level.
                </p>
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  In this situation, calculate how much of the commission qualifies for the pre-threshold rate, and how much qualifies for the post-threshold rate.
                </p>
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  You&apos;ll also need to consider the agreement you have with each agent, as this will often vary depending on their experience and needs.
                </p>
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  Another complicating factor is that these calculations are typically only used a few times a year when agents hit their targets. This means brokerages may not have much experience calculating them.
                </p>
              </div>
            </div>

            {/* Metrics You Need to Know */}
            <div>
              <div className="border-b border-gray-100 pb-6 mb-4">
                <h2 className="text-3xl font-semibold text-black md:text-[40px] md:leading-[120%]">
                  Metrics You Need to Know
                </h2>
              </div>
              <div className="pb-4 flex flex-col gap-4">
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  As well as the metrics listed in the flat fee commission structure section of this article, you also need to know:
                </p>
                <ul className="list-disc pl-6 text-base text-[#4F4F4F]">
                  <li className="leading-[220%]">The percentage of total commission the real estate agent receives on each tier.</li>
                  <li className="leading-[220%]">The total amount they need to earn to reach the next tier.</li>
                  <li className="leading-[220%]">The total amount they have already received from prior sales.</li>
                </ul>
                <p className="text-base leading-[150%] text-[#4F4F4F]">
                  You can use transaction management software alongside the real estate commission calculator to track the number and value of sales each agent makes.
                </p>
              </div>
            </div>

            {/* Consider Other Factors When Calculating Real Estate Commissions */}
            <div className="flex flex-col gap-8">
              <div>
                <div className="border-b border-gray-100 pb-6 mb-4">
                  <h2 className="text-3xl font-semibold text-black md:text-[40px] md:leading-[120%]">
                    Consider Other Factors When Calculating Real Estate Commissions
                  </h2>
                </div>
                <div className="pb-4 flex flex-col gap-4">
                  <p className="text-base leading-[150%] text-[#4F4F4F]">
                    You may need to consider other fees paid to third parties when using the real estate commission calculator.
                  </p>
                  <p className="text-base leading-[150%] text-[#4F4F4F]">
                    Here are some of these fees. We&apos;ll also explain how to take them into account when using the commission calculator.
                  </p>
                </div>
              </div>

              {/* Referral Fees */}
              <div>
                <div className="border-b border-gray-100 pb-6 mb-4">
                  <h3 className="text-2xl font-semibold text-black md:text-[28px] md:leading-[120%]">
                    Referral Fees
                  </h3>
                </div>
                <div className="pb-4 flex flex-col gap-4">
                  <p className="text-base leading-[150%] text-[#4F4F4F]">
                    Brokerages may set up partnerships with other brokerages to refer clients in exchange for a percentage of the sales commission.
                  </p>
                  <p className="text-base leading-[150%] text-[#4F4F4F]">
                    This will often happen when a seller moves to a new area and is looking to buy a home. If the selling brokerage doesn&apos;t have a presence in that area&apos;s real estate market, they can recommend one that does.
                  </p>
                  <p className="text-base leading-[150%] text-[#4F4F4F]">
                    Brokerage referral fees are typically taken out before the commission is split between the brokerage and the agent. However, this will depend on the exact deal you have set up with the referring brokerage.
                  </p>
                </div>
                <div className="my-12 h-72 w-full rounded-xl bg-[#ECEEF2] md:h-[400px]" aria-hidden="true" />
                <div>
                  <div className="border-b border-gray-100 pb-6 mb-4">
                    <h4 className="text-xl font-semibold text-black leading-[120%]">
                      Here&apos;s an Example
                    </h4>
                  </div>
                  <div className="pb-4 flex flex-col gap-4">
                    <p className="text-base leading-[150%] text-[#4F4F4F]">
                      Brokerage A sold a property that was referred to them by brokerage B. The agreement stated that brokerage A has to give 20% of the total commissions to brokerage B.
                    </p>
                    <p className="text-base leading-[150%] text-[#4F4F4F]">
                      As brokerage A received $20,000 in commission, it had to give $4,000 to brokerage B. The remaining $16,000 was split between the brokerage and the agent at the agreed-upon rate.
                    </p>
                    <p className="text-base leading-[150%] text-[#4F4F4F]">
                      You can use the real estate commission calculator in this article to calculate how this remaining amount should be split.
                    </p>
                  </div>
                </div>
              </div>

              {/* Franchise Fees */}
              <div>
                <div className="border-b border-gray-100 pb-6 mb-4">
                  <h3 className="text-2xl font-semibold text-black md:text-[28px] md:leading-[120%]">
                    Franchise Fees
                  </h3>
                </div>
                <div className="pb-4 flex flex-col gap-4">
                  <p className="text-base leading-[150%] text-[#4F4F4F]">
                    Major brokerages often charge a &ldquo;franchise fee&rdquo; on sales made by franchise brokerages. Like referral fees, this is typically taken out before the commission is split between the broker and the agent.
                  </p>
                </div>
                <div className="my-12 h-72 w-full rounded-xl bg-[#ECEEF2] md:h-[400px]" aria-hidden="true" />
                <div>
                  <div className="border-b border-gray-100 pb-6 mb-4">
                    <h4 className="text-xl font-semibold text-black leading-[120%]">
                      Here&apos;s an Example
                    </h4>
                  </div>
                  <div className="pb-4 flex flex-col gap-4">
                    <p className="text-base leading-[150%] text-[#4F4F4F]">
                      Brokerage A is a franchise of a major brand. It pays a fee of 4% of commission on every sale.
                    </p>
                    <p className="text-base leading-[150%] text-[#4F4F4F]">
                      If the total commission earned from a sale was $9,000, $360 would go to the franchise. The remaining $8,640 would be split between the agent and brokerage as agreed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Consider Various Real Estate Commission Models */}
              <div>
                <div className="border-b border-gray-100 pb-6 mb-4">
                  <h2 className="text-3xl font-semibold text-black md:text-[40px] md:leading-[120%]">
                    Consider Various Real Estate Commission Models
                  </h2>
                </div>
                <div className="pb-4 flex flex-col gap-4">
                  <p className="text-base leading-[150%] text-[#4F4F4F]">
                    Our real estate calculators are designed to work with split and tiered commission structures.
                  </p>
                  <p className="text-base leading-[150%] text-[#4F4F4F]">
                    But these aren&apos;t the only payment structures that brokerages use. Our tools can also help with commission structures like team splits and flat-fee models.
                  </p>
                </div>
              </div>

              {/* Using the Calculators with a Flat Fee Model */}
              <div>
                <div className="border-b border-gray-100 pb-6 mb-4">
                  <h3 className="text-2xl font-semibold text-black md:text-[28px] md:leading-[120%]">
                    Using the Calculators with a Flat Fee Model
                  </h3>
                </div>
                <div className="pb-4 flex flex-col gap-4">
                  <p className="text-base leading-[150%] text-[#4F4F4F]">
                    In a flat-fee model, real estate agents keep the entire commission. Instead of paying commission, they pay a flat monthly desk fee to the brokerage. This doesn&apos;t change, whether they sell zero properties or ten.
                  </p>
                  <p className="text-base leading-[150%] text-[#4F4F4F]">
                    This type of structure is beneficial for experienced real estate agents who don&apos;t need much help generating leads or making sales. The lack of commission provides far more earning potential.
                  </p>
                  <p className="text-base leading-[150%] text-[#4F4F4F]">
                    This structure can also benefit brokerages. They get a guaranteed and consistent income no matter how their agents perform. It may also attract more experienced agents.
                  </p>
                  <p className="text-base font-medium leading-[150%] text-[#4F4F4F]">
                    Here&apos;s how to calculate flat fee percentages using our commission calculator:
                  </p>
                  <ol className="list-decimal pl-6 text-base text-[#4F4F4F]">
                    <li className="leading-[220%]">Set the agent commission rate at 100%</li>
                    <li className="leading-[220%]">Enter the total amount of sales the agent put through in that period</li>
                    <li className="leading-[220%]">Add the flat fee to the &ldquo;Agent Fees Owed&rdquo; field</li>
                  </ol>
                  <p className="text-base leading-[150%] text-[#4F4F4F]">
                    Following these steps will show you exactly how much you need to pay the agent. If the agent pays the desk fee in advance, you won&apos;t need to make this calculation.
                  </p>
                </div>
              </div>

              {/* Using the Calculators with a Team Split Commission Model */}
              <div>
                <div className="border-b border-gray-100 pb-6 mb-4">
                  <h3 className="text-2xl font-semibold text-black md:text-[28px] md:leading-[120%]">
                    Using the Calculators with a Team Split Commission Model
                  </h3>
                </div>
                <div className="pb-4 flex flex-col gap-4">
                  <p className="text-base leading-[150%] text-[#4F4F4F]">
                    Brokerages that use a team split model share out the commission between everyone who works on the deal, not just the agent.
                  </p>
                  <p className="text-base leading-[150%] text-[#4F4F4F]">
                    While this can see the agent take home considerably less per deal, the benefit is that the team can push more deals over the line. Many real estate agents make more money due to the higher volume of sales than they would if they worked independently.
                  </p>
                  <p className="text-base leading-[150%] text-[#4F4F4F]">
                    Team splits add an extra layer of complication to the way real estate commissions are calculated. Typically the brokerage takes a cut first, and the rest is split between the agent and the team.
                  </p>
                  <p className="text-base leading-[150%] text-[#4F4F4F]">
                    To use our tools to calculate a team split, we&apos;d recommend that you use the standard split calculator to see how much the brokerage takes home and then manually calculate how the remaining income is split between the team.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <CTABanner
        variant="cta"
        eyebrow="COMMISSIONS MADE EASY"
        heading="Automate Every Commission Calculation"
        subtext="Let Paperless Pipeline handle the math — accurate splits, automatic tracking, zero spreadsheets."
        buttonText="Start My 14-Day Free Trial →"
        buttonHref="/signup"
      />
    </>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Start a new transaction in seconds",
    body: "Create and launch deals instantly with pre-built workflows that eliminate setup time.",
  },
  {
    number: "2",
    title: "Documents, tasks, deadlines, and compliance all stay connected",
    body: "Everything lives in one organized system, so nothing slips through the cracks.",
  },
  {
    number: "3",
    title: "Track progress at a glance — no guessing, no chasing",
    body: "Get real-time visibility into every deal without constant follow-ups or manual checks.",
  },
  {
    number: "4",
    title: "Close with confidence knowing nothing was missed",
    body: "Stay fully in control with automated checks that ensure every step is completed.",
  },
];

export default function WorkflowSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white py-[120px] px-[80px] max-md:py-16 max-md:px-4">
      <div className="flex flex-col lg:flex-row lg:gap-12 lg:items-start">
        {/* LEFT COLUMN: header + stepper (~572px) */}
        <div className="lg:w-[572px] lg:flex-shrink-0 flex flex-col gap-10 max-lg:mb-10">
          {/* Section header */}
          <div className="flex flex-col gap-3">
            <span className="font-sans font-medium text-[14px] leading-[24px] tracking-[0.0893em] uppercase text-[#0063EB]">
              All-in-One Workflow
            </span>
            <div className="flex flex-col gap-2">
              <h2 className="font-sans font-semibold text-[48px] leading-tight text-black max-md:text-[32px]">
                How Paperless Pipeline works
              </h2>
              <p className="font-sans font-normal text-[16px] leading-[150%] text-[#4F4F4F]">
                Streamline your entire transaction process with a connected
                system designed to reduce manual work, eliminate errors, and
                help you close faster with confidence.
              </p>
            </div>
          </div>

          {/* Stepper */}
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <div key={step.number} className="flex gap-4">
                {/* Circle + connecting line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <button
                    onClick={() => setActiveIndex(i)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-sans font-bold text-[24px] leading-[32px] flex-shrink-0 transition-colors ${
                      i === activeIndex
                        ? "bg-[#0063EB] text-[#FFE95B]"
                        : "bg-[#E9ECEF] text-[#6C757D] cursor-pointer"
                    }`}
                  >
                    {step.number}
                  </button>
                  {i < steps.length - 1 && (
                    <div className="flex-1 w-px bg-[#DEE2E6] my-1 min-h-[24px]" />
                  )}
                </div>

                {/* Step content */}
                <div
                  className={`flex-1 cursor-pointer ${i < steps.length - 1 ? "pb-8" : ""}`}
                  onClick={() => setActiveIndex(i)}
                >
                  {i === activeIndex ? (
                    <div className="pt-2 flex flex-col gap-2">
                      <h3 className="font-sans font-medium text-[24px] leading-[32px] tracking-[-0.02em] text-black">
                        {step.title}
                      </h3>
                      <p className="font-sans font-normal text-[16px] leading-[24px] tracking-[-0.02em] text-[#6C757D]">
                        {step.body}
                      </p>
                      {/* Mobile: screenshot inline below expanded step */}
                      <div className="lg:hidden mt-4 rounded-2xl overflow-hidden border border-[#DEE2E6] shadow-lg">
                        <Image
                          src="/images/figma/workflow-screenshot.png"
                          alt="Paperless Pipeline transaction management dashboard"
                          width={700}
                          height={500}
                          className="w-full h-auto"
                          quality={85}
                        />
                      </div>
                    </div>
                  ) : (
                    <h3 className="pt-2 font-sans font-medium text-[18px] leading-[28px] tracking-[-0.02em] text-[#6C757D]">
                      {step.title}
                    </h3>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: screenshot card (desktop only) */}
        <div className="hidden lg:flex flex-1 items-start justify-center sticky top-8">
          <div className="w-full bg-white border border-[#DEE2E6] shadow-lg rounded-2xl overflow-hidden">
            <Image
              src="/images/figma/workflow-screenshot.png"
              alt="Paperless Pipeline transaction management dashboard"
              width={700}
              height={500}
              className="w-full h-auto"
              quality={85}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

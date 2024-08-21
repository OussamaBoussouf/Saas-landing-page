"use client"
import CheckIcon from "@/assets/icons/tick.svg";
import CheckIconWhite from "@/assets/icons/tick-white.svg";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-[530px] mx-auto">
          <div className="flex justify-center">
            <p className="tag">Boost your productivity</p>
          </div>
          <h2 className="mt-6 text-center font-bold text-3xl md:text-5xl md:leading-[60px] text-gradient-black tracking-tighter">
            A more effective way to track progress
          </h2>
          <p className="mt-6 text-center leading-[30px] text-xl tracking-tight text-[#010D3E]">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={twMerge(
                "shadow-[0_7px_14px_#EAEAEA] border border-[#F1F1F] rounded-2xl p-9 max-w-xs",
                tier.inverse && "bg-black border-black text-white"
              )}
            >
              <div className="flex itmes-center justify-between">
                <h3 className="font-bold text-[#6F6C90] text-lg">
                  {tier.title}
                </h3>
                {tier.popular && (
                  <div className="to inline-flex items-center border-[1px] border-white/20 rounded-lg py-1 px-3">
                    <motion.span
                    animate={{backgroundPositionX: "-100%"}}
                      transition={{duration: 2, ease:"linear", repeat: Infinity, repeatType:"loop" }}
                      className="text-sm tracking-tight bg-clip-text text-transparent [background-size:200%]  bg-[linear-gradient(to_right,#dd7dff,#e1cd86,#8bcb92,#71c2ef,#3bffff,#dd7dff,#e1cd86,#8bcb92,#71c2ef,#3bffff)] font-medium"
                    >
                      Most Popular
                    </motion.span>
                  </div>
                )}
              </div>
              <div className="my-10">
                <span className="font-bold text-5xl tracking-tight leading-none">
                  ${tier.monthlyPrice}
                </span>
                <span className="text-base font-bold text-[#6F6C90] tracking-tight">
                  /monthly
                </span>
              </div>
              <button
                className={twMerge(
                  "btn btn-primary w-full justify-center",
                  tier.inverse && "text-black bg-white"
                )}
                type="button"
              >
                {tier.buttonText}
              </button>
              <ul className="flex flex-col gap-6 mt-10">
                {tier.features.map((feature, index) => (
                  <li key={index} className="text-sm flex items-center gap-4">
                    {tier.inverse ? <CheckIconWhite /> : <CheckIcon />}
                    <span className="tracking-tight">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

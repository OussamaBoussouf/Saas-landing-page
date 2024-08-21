"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import React from "react";

export default function TestimonialColumn({ testimonials, className, duration }) {
  return (
    <div
      className={twMerge("max-h-[738px] overflow-hidden", className)}
    >
      <motion.div
        animate={{ y: "-50%" }}
        transition={{
          duration: duration || 10,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pt-6"
      >
        {[...new Array(2).fill(0)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="border rounded-2xl p-9 max-w-xs shadow-[0_7px_14px_#EAEAEA]"
              >
                <p className="mb-5 tracking-tight">{testimonial.text}</p>
                <div className="flex items-center gap-2">
                  <Image src={testimonial.image} alt="avatar" width={42} />
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="tracking-tight">{testimonial.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

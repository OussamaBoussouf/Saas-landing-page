"use client";
import TextButton from "../components/TextButton.jsx";

import cogImage from "@/assets/images/visual.png";
import cylinderImage from "@/assets/images/cylinder.png";
import noodleImage from "@/assets/images/nodle.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";




export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end","end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 px-6 xl:px-0  md:mt-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container mx-auto">
        <div className="md:flex items-center justify-between">
          <div className="md:w-[478px]">
            <p className="tag">Version 2.0 is here</p>
            <h1 className="mt-6 font-bold text-5xl md:text-7xl text-gradient-black tracking-tighter">
              Pathway to productivity
            </h1>
            <p className="mt-6 text-xl tracking-tight text-[#010D3E]">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button type="button" className="btn btn-primary">
                Get for free
              </button>
              <TextButton/>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:w-[50%] lg:flex-0 md:relative">
            <motion.img
              initial={{ y: -30 }}
              animate={{ y: 30 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeatType: "mirror",
                repeat: Infinity,
              }}
              src={cogImage.src}
              alt="cog image"
              className="md:absolute md:h-full md:max-w-none md:w-auto -left-8 lg:left-0 "
            />
            <motion.img
              style={{ y }}
              src={cylinderImage.src}
              alt="cylinder image"
              className="hidden md:block md:absolute -left-16 -top-8"
            />

            <motion.img
              style={{ y }}
              src={noodleImage.src}
              alt="nodle image"
              width={220}
              className="hidden lg:block md:absolute top-[500px] left-[448px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

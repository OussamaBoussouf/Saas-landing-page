"use client"

import Image from "next/image";
import productImage from "@/assets/images/product-image.png";
import pyramidImage from "@/assets/images/pyramid.png";
import torusImage from "@/assets/images/torus.png";
import ecosystemImage from "@/assets/icons/ecosystem.svg";
import targetImage from "@/assets/icons/target.svg";
import lockImage from "@/assets/icons/lock.svg";
import notificationsImage from "@/assets/icons/notifications.svg";
import TextButton from "../components/TextButton.jsx";
import { useRef } from "react";
import { useScroll, useTransform , motion} from "framer-motion";

const moreInfo = [
  {
    icon: ecosystemImage,
    heading: "Integration ecosystem",
    text: "Track your progress and motivate your efforts everyday.",
  },
  {
    icon: targetImage,
    heading: "Goal setting and tracking",
    text: "Set and track goals with manageable task breakdowns..",
  },
  {
    icon: lockImage,
    heading: "Secure data encryption",
    text: "Ensure your data's safety with top-tier encryption.",
  },
  {
    icon: notificationsImage,
    heading: "Customizable notifications",
    text: "Get alerts on tasks and deadlines that matter most..",
  },
];

export default function ProductShowcase() {
  const productRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: productRef,
    offset: ["start end","end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
 
  return (
    <section ref={productRef} className="py-24 overflow-x-clip bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex justify-center">
          <p className="tag">Bost your productivity</p>
        </div>
        <div className="max-w-[500px] mx-auto">
          <h2 className="mt-6 text-center font-bold text-3xl md:text-5xl md:leading-[60px] text-gradient-black tracking-tighter">
            A more effective way to track progress
          </h2>
          <p className="mt-6 text-center leading-[30px] text-xl tracking-tight text-[#010D3E]">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>
        <div className="relative">
          <Image
            className="mt-4 mx-auto"
            src={productImage}
            alt="Product image"
          />
          <motion.img
            className="hidden md:block md:absolute -top-28 -right-28"
            height={262}
            w={146}
            src={pyramidImage.src}
            alt="Product image"
            style={{y}}
          />
          <motion.img
            className="hidden md:block md:absolute top-36 -left-24"
            height={248}
            w={15}
            src={torusImage.src}
            alt="Product image"
            style={{y}}
          />
        </div>
        <div className="px-10 md:px-0 md:flex flex-wrap justify-center gap-x-5">
          {moreInfo.map((info, index) => (
            <div key={index} className="mt-16 max-w-[260px]">
              <info.icon className="mb-2" />
              <h3 className="font-bold mb-2">{info.heading}</h3>
              <p>{info.text}</p>
              <TextButton className="ps-0"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

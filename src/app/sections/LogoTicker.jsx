"use client";
import acmeImage from "@/assets/images/acme.png";
import apexImage from "@/assets/images/apex.png";
import celestiaImage from "@/assets/images/celestia.png";
import pulseImage from "@/assets/images/pulse.png";
import quantumImage from "@/assets/images/quantum.png";
import echoImage from "@/assets/images/echo.png";
import Image from "next/image";
import { motion } from "framer-motion";

const companies = [
  acmeImage,
  apexImage,
  echoImage,
  celestiaImage,
  pulseImage,
  quantumImage,
  acmeImage,
  apexImage,
  echoImage,
  celestiaImage,
  pulseImage,
  quantumImage,
];

export default function LogoTicker() {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="mask-content flex overflow-hidden">
          <motion.div
            animate={{ x: "-50%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear", repeatType: "loop" }}
            className="flex flex-none justify-center gap-14 pr-14"
          >
            {companies.map((company, index) => (
              <Image
                className="h-8 w-auto mx-1"
                key={index}
                src={company}
                alt={company}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

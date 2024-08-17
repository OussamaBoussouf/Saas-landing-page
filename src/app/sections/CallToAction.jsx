import springImage from "@/assets/images/helix.png";
import starImage from "@/assets/images/emojistar.png";
import Image from "next/image";
import ArrowRight from "@/assets/icons/arrow-b.svg";

export default function CallToAction() {
  return (
    <section className="py-24 overflow-x-clip bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
      <div className="container mx-auto px-4 md:px-0">
        <div className="relative max-w-[500px] mx-auto">
          <h2 className="mt-6 text-center font-bold text-3xl md:text-5xl md:leading-[60px] text-gradient-black tracking-tighter">
            Sign up for free today
          </h2>
          <p className="mt-6 text-center leading-[30px] text-xl tracking-tight text-[#010D3E]">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <Image
            src={springImage}
            alt="spring image"
            width={363}
            className="hidden md:block absolute -right-[331px] w-[363px] -top-[19px]"
          />
          <Image
            src={starImage}
            alt="emoji star image"
            width={363}
            className="hidden md:block absolute -left-[350px] -top-[137px] w-[363px]"
          />
        </div>
        <div className="flex justify-center gap-2 mt-10">
          <button type="button" className="btn btn-primary ">
            Get for free
          </button>
          <button type="button" className="btn btn-text gap-1">
            {" "}
            <span>Learn more</span> <ArrowRight />{" "}
          </button>
        </div>
      </div>
    </section>
  );
}

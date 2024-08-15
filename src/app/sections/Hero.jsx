import ArrowRight from "@/assets/icons/arrow-b.svg";
import cogImage from "@/assets/images/visual.png";
import cylinderImage from "@/assets/images/cylinder.png";
import noodleImage from "@/assets/images/nodle.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 px-6 lg:px-0  md:mt-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container mx-auto">
        <div className="md:flex items-center justify-between">
          <div className="md:w-[478px]">
            <p className="tag">
              Version 2.0 is here
            </p>
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
              <button type="button" className="btn btn-text gap-1">
                <span>Learn more </span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:w-[50%] lg:flex-0 md:relative">
            <Image
              src={cylinderImage}
              alt="cylinder image"
              className="hidden md:block md:absolute -left-16 -top-8"
            />
            <Image
              src={cogImage}
              alt="cog image"
              className="md:absolute md:h-full md:max-w-none md:w-auto -left-8 lg:left-0 "
            />
            <Image
              src={noodleImage}
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

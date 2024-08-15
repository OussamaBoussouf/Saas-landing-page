import Image from "next/image";
import cubeHelix from "@/assets/images/cube-helix.png";
import cubeImage from "@/assets/images/cube.png";

export default function Management() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-[92px]">
        <div className="max-w-[530px] mx-auto">
          <div className="flex justify-center">
            <p className="tag">Everything you need</p>
          </div>
          <h2 className="mt-6 text-center font-bold text-3xl md:text-5xl md:leading-[60px] text-gradient-black tracking-tighter">
            Streamlined for easy management
          </h2>
          <p className="mt-6 text-center leading-[30px] text-xl tracking-tight text-[#010D3E]">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
        <div className="flex flex-col gap-6 mt-16 max-w-[972px] items-center lg:flex-row lg:mx-auto">
          <div className="text-center bg-white shadow-xl rounded-2xl py-8 px-7 max-w-[486px]">
            <Image className="mx-auto" src={cubeHelix} width={329} />
            <h2 className="text-gradient-black font-bold text-xl mb-2 tracking-tight">
              Integration ecosystem
            </h2>
            <p className="text-sm tracking-tight">
              Enhance your productivity by connecting with your favorite tools,
              keeping all your essentials in one place.
            </p>
          </div>
          <div className="text-center bg-white shadow-xl rounded-2xl py-8 px-7 max-w-[486px]">
            <Image className="mx-auto" src={cubeImage} width={329} />
            <h2 className="text-gradient-black font-bold text-xl mb-2 tracking-tight">
              Goal setting and tracking
            </h2>
            <p className="text-sm tracking-tight">
              Define and track your goals, breaking down objectives into
              achievable tasks to keep your targets in sight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

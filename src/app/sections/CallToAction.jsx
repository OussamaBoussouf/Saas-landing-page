export default function CallToAction() {
  return (
    <section className="py-24 overflow-x-clip bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
      <div className="container mx-auto px-4 md:px-0">
        <div className="max-w-[550px] mx-auto">
          <h2 className="mt-6 text-center font-bold text-3xl md:text-5xl md:leading-[60px] text-gradient-black tracking-tighter">
            Sign up for free today
          </h2>
          <p className="mt-6 text-center leading-[30px] text-xl tracking-tight text-[#010D3E]">
          Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
          </p>
          <div className="flex justify-center mt-10">
                <button type="button" className="btn btn-primary ">Get for free</button>
                <button type="button" className="btn btn-text ">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
}

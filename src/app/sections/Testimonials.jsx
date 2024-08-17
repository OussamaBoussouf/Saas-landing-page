import avatarImage from "@/assets/images/avatar.png";
import TestimonialColumn from "@/app/components/TestimonialColumn.jsx";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    image: avatarImage,
    name: "Alex Rivera",
    email: "@jamietechguru00",
  },
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    image: avatarImage,
    name: "Alex Rivera",
    email: "@jamietechguru00",
  },
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    image: avatarImage,
    name: "Alex Rivera",
    email: "@jamietechguru00",
  },
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    image: avatarImage,
    name: "Alex Rivera",
    email: "@jamietechguru00",
  },
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    image: avatarImage,
    name: "Alex Rivera",
    email: "@jamietechguru00",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    image: avatarImage,
    name: "Alex Rivera",
    email: "@jamietechguru00",
  },
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    image: avatarImage,
    name: "Alex Rivera",
    email: "@jamietechguru00",
  },
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    image: avatarImage,
    name: "Alex Rivera",
    email: "@jamietechguru00",
  },
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    image: avatarImage,
    name: "Alex Rivera",
    email: "@jamietechguru00",
  },
];

const firstColumn = testimonials.slice(0,3);
const secondColumn = testimonials.slice(3,6);
const thirdColumn = testimonials.slice(6,9);

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex justify-center">
          <p className="tag">Testimonials</p>
        </div>
        <div className="max-w-[500px] mx-auto">
          <h2 className="mt-6 text-center font-bold text-3xl md:text-5xl md:leading-[60px] text-gradient-black tracking-tighter">
            What our users say
          </h2>
          <p className="mt-6 text-center leading-[30px] text-xl tracking-tight text-[#010D3E]">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>
      </div>
      <div className="mt-16">
      <div className="flex justify-center gap-6">
        <div className="flex gap-6 mask-testimonial">
          <TestimonialColumn  testimonials={firstColumn}/>
          <TestimonialColumn className="hidden md:flex" testimonials={secondColumn}/>
          <TestimonialColumn className="hidden lg:flex" testimonials={thirdColumn}/>
        </div>
      </div>
      </div>
    </section>
  );
}

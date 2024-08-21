
import avatarOne from "@/assets/images/avatar1.png";
import avatarTwo from "@/assets/images/avatar2.png";
import avatarThree from "@/assets/images/avatar3.png";
import avatarFour from "@/assets/images/avatar4.png";
import avatarFive from "@/assets/images/avatar5.png";
import avatarSix from "@/assets/images/avatar6.png";
import avatarSeven from "@/assets/images/avatar7.png";
import avatarEight from "@/assets/images/avatar8.png";
import avatarNine from "@/assets/images/avatar9.png";
import TestimonialColumn from "@/app/components/TestimonialColumn.jsx";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    image: avatarOne,
    name: "Alex Rivera",
    email: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool.",
    image: avatarTwo,
    name: "Josh Smith",
    email: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    image: avatarThree,
    name: "Morgan Lee",
    email: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    image: avatarFour,
    name: "Casey Jordan",
    email: "@caseyj",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board. ",
    image: avatarFive,
    name: "Jordan Patels",
    email: "@jpatelsdesign",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    image: avatarSix,
    name: "Taylor Kim",
    email: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    image: avatarSeven,
    name: "Riley Smith",
    email: "@rileysmith1",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    image: avatarEight,
    name: "Sam Dawson",
    email: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    image: avatarNine,
    name: "Casey Harper",
    email: "@casey09",
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
        <div className="flex gap-6 pb-6 mask-testimonial">
          <TestimonialColumn  testimonials={firstColumn}/>
          <TestimonialColumn duration={19} className="hidden md:block" testimonials={secondColumn}/>
          <TestimonialColumn duration={17} className="hidden lg:block" testimonials={thirdColumn}/>
        </div>
      </div>
      </div>
    </section>
  );
}

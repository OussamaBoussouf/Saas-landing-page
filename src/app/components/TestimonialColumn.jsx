import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function TestimonialColumn({ testimonials, className }) {
  return (
    <div className={twMerge("flex flex-col gap-6 mask-testimonial", className)}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="border rounded-2xl p-9 max-w-xs shadow-[0_7px_14px_#EAEAEA]">
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
    </div>
  );
}

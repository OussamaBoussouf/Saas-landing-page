import ArrowRight from "@/assets/icons/arrow-b.svg";
import { twMerge } from "tailwind-merge";

export default function TextButton({className}) {
  return (
    <button type="button" className={twMerge("btn btn-text gap-1 group/btn", className)}>
      <span>Learn more </span>
      <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-2 transition-transform duration-500" />
    </button>
  );
}

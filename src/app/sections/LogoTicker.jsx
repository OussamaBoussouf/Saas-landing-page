import acmeImage from "@/assets/images/acme.png";
import apexImage from "@/assets/images/apex.png";
import celestiaImage from "@/assets/images/celestia.png";
import pulseImage from "@/assets/images/pulse.png";
import quantumImage from "@/assets/images/quantum.png";
import echoImage from "@/assets/images/echo.png";
import Image from "next/image";

const companies = [
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
      <div className="mask-content overflow-hidden">
        <div className="flex flex-none justify-center gap-8 lg:gap-16">
          {companies.map((company) => (
            <Image className="h-8 w-auto" key={company} src={company} alt={company} />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

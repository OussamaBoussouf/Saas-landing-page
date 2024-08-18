import glowingLogo from "@/assets/images/glowing-logo.png";
import InstagramIcon from "@/assets/icons/instagram.svg";
import PinterestIcon from "@/assets/icons/pinterest.svg";
import XIcon from "@/assets/icons/x.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";
import LinkedinIcon from "@/assets/icons/linkedIn.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container mx-auto py-10">
        <div className="flex flex-col items-center">
          <Image src={glowingLogo} className="w-12"  alt="glowing logo" />
          <nav className="text-[#7B7B7B] my-5 text-center flex flex-col md:flex-row gap-7">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Customers</a>
            <a href="#">Pricing</a>
            <a href="#">Help</a>
            <a href="#">Careers</a>
          </nav>
          <nav className="flex gap-6">
            <li>
              <XIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <LinkedinIcon />
            </li>
            <li>
              <PinterestIcon />
            </li>
            <li>
              <YoutubeIcon />
            </li>
          </nav>
          <p className="text-center tracking-tight text-sm text-[#7B7B7B] mt-5">&copy; 2024 You Company.Inc All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

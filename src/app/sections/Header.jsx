import ArrowRight from "@/assets/icons/arrow-w.svg";
import Menu from "@/assets/icons/menu.svg";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";

const Links = ["About", "Features", "Customers", "Updates", "Help"];

export default function Header() {
  return (
    <header className="z-20 sticky top-0">
      <div className="bg-black text-white text-sm py-3 flex items-center justify-center">
        <p className="text-white/60 hidden md:block me-2">
          Streamline your workflow and bost your productivity.
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight />
        </div>
      </div>
      <div className="py-5 px-6 lg:px-0 backdrop-blur-sm">
        <div className="container flex items-center justify-between mx-auto">
          <Image src={Logo} alt="Sass logo" width={40} height={40} />
          <Menu className="md:hidden" />
          <nav className="hidden md:block">
            <ul className="flex items-center gap-5 text-black/60">
              {Links.map((link) => (
                <li className="hover:text-black cursor-pointer" key={link}>
                  {link}
                </li>
              ))}
              <li>
                <button
                  className="bg-black text-white tracking-tight font-medium rounded-md px-[15px] py-[10px]"
                  type="button"
                >
                  Get for free
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

import CallToAction from "./sections/CallToAction";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import LogoTicker from "./sections/LogoTicker";
import Management from "./sections/Management";
import Pricing from "./sections/Pricing";
import ProductShowcase from "./sections/ProductShowcase";
import Testimonials from "./sections/Testimonials";


export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <LogoTicker/>
      <ProductShowcase/>
      <Management/>
      <Pricing/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </>
  );
}

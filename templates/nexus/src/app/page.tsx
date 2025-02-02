import "./index.page.css";

import Config from "@/components/Config";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";

import { getProps } from "@/actions/saveProps";
import ServiceSection from "@/components/home/ServiceSection";
import TestimonialSection from "@/components/home/TestimonialSection";

export default async function HomePage() {
  const props = await getProps();

  return (
    <>
      <div className="page flex-1 flex flex-col space-y-16">
        <HeroSection {...props.HomePage.HeroSection} />
        <ServiceSection {...props.HomePage.ServiceSection} />
        <TestimonialSection {...props.HomePage.TestimonialSection} />
        <Footer {...props.HomePage.Footer} />
      </div>
      <Config {...props.HomePage.Config} />
    </>
  );
}

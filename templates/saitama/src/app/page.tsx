import "./index.page.css";

import Config from "@/components/Config";
import Footer from "@/components/layout/Footer";
import HowToBuy from "@/components/home/HowToBuy";
import HeroDisplay from "@/components/home/HeroDisplay";
import HeroSection from "@/components/home/HeroSection";

import { getProps } from "@/actions/saveProps";

export default async function HomePage() {
  const props = await getProps();

  return (
    <>
      <div className="page flex-1 flex flex-col">
        <HeroSection {...props.HomePage.HeroSection} />
        <HeroDisplay {...props.HomePage.HeroDisplay} />
        <HowToBuy {...props.HomePage.HowToBuy} />
        <Footer {...props.HomePage.Footer} />
      </div>
      <Config {...props.HomePage.Config} />
    </>
  );
}

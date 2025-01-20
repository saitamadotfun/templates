import props from "../../.saitama/saitama.json";
import "./index.page.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HowToBuy from "@/components/layout/HowToBuy";
import Herodisplay from "@/components/layout/HeroDisplay";
import Herosection from "@/components/layout/HeroSection";
import PurchaseWidget from "@/components/layout/PurchaseWidget";

export default function HomePage() {
  return (
    <div className="page flex-1 flex flex-col">
      <Header {...props.HomePage.Header} />
      <Herosection {...props.HomePage.Herosection} />
      <PurchaseWidget {...props.HomePage.PurchaseWidget} />
      <Herodisplay {...props.HomePage.Herodisplay} />
      <HowToBuy {...props.HomePage.HowToBuy} />
      <Footer {...props.HomePage.Footer} />
    </div>
  );
}

import props from "../../.saitama/saitama.json";
import { MdArrowOutward } from "react-icons/md";

import "./index.page.css";
import Header from "@/components/layout/Header";
import Herosection from "@/components/layout/Herosection";
import PurchaseWidget from "@/components/layout/PurchaseWidget";
import Herodisplay from "@/components/layout/Herodisplay";
import HowToBuy from "@/components/layout/HowToBuy";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="page flex-1 flex flex-col">
      <Header />
      <Herosection />
      <PurchaseWidget />
      <Herodisplay />
      <HowToBuy />
      <Footer />
    </div>
  );
}

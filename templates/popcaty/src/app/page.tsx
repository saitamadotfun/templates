import props from "../../.saitama/saitama.json";

import Header from "@/components/Header";
import Config from "@/components/Config";
import Background from "@/components/Background";
import HeroSection from "@/components/HeroSection";
import TokenomicSection from "@/components/TokenomicSection";

export default function Home() {
  return (
    <>
      <Config {...props.HomePage.Config} />
      <div className="flex-1 flex flex-col page">
        <Header {...props.HomePage.Header} />
        <div className="flex-1 flex flex-col">
          <HeroSection {...props.HomePage.HeroSection} />
        </div>
        <TokenomicSection {...props.HomePage.TokenomicSection} />
      </div>
      <Background {...props.HomePage.Background} />
    </>
  );
}

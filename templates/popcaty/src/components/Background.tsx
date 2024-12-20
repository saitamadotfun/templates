import Image from "next/image";
import { block } from "saitamadotfun/bunshi";

export default block(
  function Background({ image }) {
    return (
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-light-70 to-primary-dark-70 backdrop-blur-3xl" />
        <Image
          width={512}
          height={512}
          src={image.uri}
          alt={image.metadata?.alt}
          className="absolute blur-xl"
        />
      </div>
    );
  },
  {
    title: "Background",
    argsType: {
      image: {
        control: "asset",
      },
    },
    args: {
      image: {
        uri: "/bonk.png",
        metadata: {
          alt: "Bonk",
        },
      },
    },
  }
);

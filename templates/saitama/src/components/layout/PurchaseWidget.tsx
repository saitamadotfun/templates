import { block } from "saitamadotfun/bunshi";

export default block(
  function PurchaseWidget({
    ctaText,
    icon1,
    icon2,
    icon3,
    icon4,
    address,
    copyAddressText,
  }) {
    return (
      <div className="flex flex-col bg-white text-black mx-auto border border-b-8 border-black border-b-amber-500 rounded-md">
        <div className=" flex items-center justify-between p-4 rounded-lg shadow-md">
          <p className="">{ctaText}</p>

          <div className="flex space-x-4">
            <img
              src={icon1.uri}
              alt={icon1.metadata?.alt}
              className="w-6 h-6"
            />
            <img
              src={icon2.uri}
              alt={icon2.metadata?.alt}
              className="w-6 h-6"
            />
            <img
              src={icon3.uri}
              alt={icon3.metadata?.alt}
              className="w-6 h-6"
            />
            <img
              src={icon4.uri}
              alt={icon4.metadata?.alt}
              className=" w-6 h-6"
            />
          </div>

          <div className="bg-amber-500 flex">
            <span className="bg-white px-4 py-2 cursor-pointer rounded text-gray-700 text-sm font-mono">
              {address}
            </span>

            <button className=" bg-gray-800 text-white text-sm font-medium py-2 px-4 rounded hover:bg-gray-700">
              {copyAddressText}
            </button>
          </div>
        </div>
      </div>
    );
  },

  {
    // argsType: {
    //   ctaText: { control: "input" },
    //   icons: { control: "asset" },
    //   address: { control: "input" },
    //   copyAddressText: { control: "input" },
    // },

    argsType: {
      ctaText: { control: "input" },
      icon1: { control: "asset" },
      icon2: { control: "asset" },
      icon3: { control: "asset" },
      icon4: { control: "asset" },
      address: { control: "input" },
      copyAddressText: { control: "input" },
    },

    // args: {
    //   ctaText: "Buy Now",
    //   icons: {
    //     uri: "/logo1.png",
    //     metadata: {
    //       alt: "Background",
    //     },
    //   },
    //   icons: [
    //     {
    //       uri: "/logo1.png",
    //       metadata: {
    //         alt: "logo",
    //       },
    //     },
    //     {
    //       uri: "/logo2.png",
    //       metadata: {
    //         alt: "logo",
    //       },
    //     },
    //     {
    //       uri: "/logo3.png",
    //       metadata: {
    //         alt: "logo",
    //       },
    //     },
    //     {
    //       uri: "/logo4.png",
    //       metadata: {
    //         alt: "logo",
    //       },
    //     },
    //   ],
    //   address: "CA:TBk4xKfo6i3npPcV1DjhA78zWl2XHK1bi",
    //   copyAddressText: "Copy",
    // },
    args: {
      ctaText: "Buy Now",
      icon1: {
        uri: "/logo1.png",
        metadata: {
          alt: "Logo 1",
        },
      },
      icon2: {
        uri: "/logo2.png",
        metadata: {
          alt: "Logo 2",
        },
      },
      icon3: {
        uri: "/logo3.png",
        metadata: {
          alt: "Logo 3",
        },
      },
      icon4: {
        uri: "/logo4.png",
        metadata: {
          alt: "Logo 4",
        },
      },
      address: "CA:TBk4xKfo6i3npPcV1DjhA78zWl2XHK1bi",
      copyAddressText: "Copy",
    },
  }
);

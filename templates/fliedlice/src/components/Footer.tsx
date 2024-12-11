import { block } from "saitamadotfun/bunshi";

export default block(
  function Footer({ logo, warningText }) {
    return (
      <footer className="flex flex-col space-y-16 bg-black text-white p-4 ">
        <div>
          <h1 className="text-4xl text-secondary font-extrabold">{logo}</h1>
        </div>
        <div className="text-center text-sm">
          <p className="font-inter">{warningText}</p>
        </div>
      </footer>
    );
  },
  {
    title: "Footer",
    argsType: {
      logo: { control: "input" },
      warningText: { control: "input", inputType: "textarea" },
    },
    args: {
      logo: "FliedLice",
      warningText:
        "This token is simply a memecoin with no intrinsic value or\
         expectation of financial return.",
    },
  }
);

import { block } from "saitamadotfun/bunshi";
import Navigation from "./Navigation";

export default block(
  function Header({ logo, ...props }) {
    return (
      <header className="flex items-center py-2 phone:px-4 tablet:px-8">
        <div className="phone:flex-1 ">
          <h1 className="text-2xl text-secondary">{logo}</h1>
        </div>
        <Navigation {...props} />
      </header>
    );
  },
  {
    title: "Header",
    argsType: { logo: { control: "input" }, ...Navigation.argsType },
    args: { logo: "FliedLice", ...Navigation.args },
  }
);

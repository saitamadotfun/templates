import clsx from "clsx";
import { layer } from "saitamadotfun/bunshi";

export const layers = [
  layer(
    ({ children, className }) => (
      <div
        className={clsx(
          "flex flex-col space-y-8 font-inter-tight font-normal bg-black text-white text-sm md:text-base md:space-y-24 ",
          className
        )}
      >
        {children}
      </div>
    ),
    {
      title: "HomePage",
      children: [],
    }
  ),
];

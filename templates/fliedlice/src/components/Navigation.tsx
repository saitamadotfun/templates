"use client";

import { useState } from "react";
import { MdMenu } from "react-icons/md";

import LayoutNavigation from "./LayoutNavigation";
import { block } from "saitamadotfun/bunshi";

export default block(
  function Navigation(props) {
    const [show, setShow] = useState(false);

    return (
      <>
        <LayoutNavigation
          {...props}
          show={show}
          setShow={setShow}
        />
        <div className="tablet:hidden">
          <button onClick={() => setShow(!show)}>
            <MdMenu />
          </button>
        </div>
      </>
    );
  },
  {
    title: "Navigation",
    argsType: LayoutNavigation.argsType,
    args: LayoutNavigation.args,
  }
);

import React from "react";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import Script from "next/script";
import { useEffect } from "react";
import useTrans from "../useTrans";

export const Company = () => {
  const trans = useTrans();
  return (
    <div>
      <div className="  text-black text-[32px] font-normal px-32">
        {trans.home.company.bigtext}
      </div>
    </div>
  );
};

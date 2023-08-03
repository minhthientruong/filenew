import React from "react";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import Script from "next/script";
import { useEffect } from "react";
import useTrans from "../useTrans";

export const Hero = () => {
  const trans = useTrans();
  return (
    <div>
      <div className=" md:mt-24 ml-[120px] text-white text-[72px] font-normal leading-10">
        {trans.home.hero.bigtext}
      </div>
    </div>
  );
};

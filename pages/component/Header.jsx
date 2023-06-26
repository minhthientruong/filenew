import React from "react";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import Script from "next/script";
import { useEffect } from "react";

export const Header = () => {

  return (
    <div className="fixed bottom-4 top-0 ">
      <div className="w-[108px] h-[788px]  bg-rose-500 rounded-br-[999px]">
        <div className="w-24 h-[776px] rounded-br-full bg-white"></div>

      </div>
    </div>
  );
}
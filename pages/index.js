/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Darkmode } from "./component/Darkmode";
import { Header } from "./component/Header";
import { Hero } from "./component/Hero";
import { Projects } from "./component/Project";
import { Company } from "./component/Company";
import useTrans from "./useTrans";

export default function Home() {
  // const { systemTheme, theme, setTheme } = useTheme();
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) return null;
  // const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className=" w-full md:h-[4960px]">
      <div className="relative h-[896px] w-full ">
        <div className="absolute"></div>
        <div className="flex ">
          <div className=" h-[896px] w-full bg-linearred ">
            {/* <img src="Bg/bg.svg" className="h-auto w-full  object-cover"></img> */}
          </div>

          <div className="absolute">
            <div className="w-[108px]  h-[788px] bg-rose-500 rounded-br-[3rem]"></div>
          </div>
          <Projects> </Projects>
        </div>
      </div>

      <Header></Header>
      <Company></Company>

      {/* <Hero></Hero> */}
      {/* <Darkmode></Darkmode> */}
    </div>
  );
}

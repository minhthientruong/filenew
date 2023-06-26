import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Darkmode } from './component/Darkmode';
import { Header } from './component/Header';
import { Hero } from './component/Hero';
import { Projects } from './component/Project';
import useTrans from './useTrans';


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
      <div class=" h-[896px] w-full ">
        <div className="relative">
          <img
            src="./Bg/bg.svg"
            className="min-h-[896px] w-full object-cover"
          ></img>
          <Projects></Projects>
        </div>

        <Header></Header>

        <Hero></Hero>
        {/* <Darkmode></Darkmode> */}
      </div>
    </div>
  );
}

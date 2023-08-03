/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import Script from "next/script";
import { useEffect } from "react";
import useTrans from "../useTrans";
import { useState } from "react";

export const Projects = () => {
  const trans = useTrans();

  const posts = [
    {
      id: 1,

      imageUrl: "./header/imgheader/imgheader1.svg",
    },
    {
      id: 1,

      imageUrl: "./header/imgheader/imgheader1.svg",
    },
    {
      id: 1,

      imageUrl: "./header/imgheader/imgheader1.svg",
    },
    {
      id: 1,

      imageUrl: "./header/imgheader/imgheader1.svg",
    },
    {
      id: 1,

      imageUrl: "./header/imgheader/imgheader1.svg",
    },
  ];

  return (
    <div class="absolute w-full flex min-h-screen flex-col pl-32 mt-6 overflow-hidden py-3 sm:py-2">
      <div class="absolute inset-0 bg-[url(/img/grid.svg)] "></div>

      <div class="pointer-events-none relative flex gap-2 overflow-hidden">
        <div class="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-2">
          {posts.map((post, index) => (
            <img
              key={index}
              src={post.imageUrl}
              className=" object-cover shadow-md"
              alt=""
            />
          ))}
        </div>
        <div
          aria-hidden="true"
          class="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-2">
          <img
            class=" object-cover shadow-md"
            src="./header/imgheader/imgheader1.svg"
            alt=""
          />
          <img
            class=" object-cover shadow-md"
            src="./header/imgheader/imgheader1.svg"
            alt=""
          />
          <img
            class=" object-cover shadow-md"
            src="./header/imgheader/imgheader1.svg"
            alt=""
          />
          <img
            class=" object-cover shadow-md"
            src="./header/imgheader/imgheader1.svg"
            alt=""
          />
          <img
            class=" object-cover shadow-md"
            src="./header/imgheader/imgheader1.svg"
            alt=""
          />
        </div>
      </div>

      <div class="pointer-events-none relative mt-4 flex gap-2 overflow-hidden">
        <div class="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-2 ">
          {/* [animation-direction:reverse] */}
          <img
            class=" object-cover shadow-md"
            src="./header/imgheader/imgheader1.svg"
            alt=""
          />
          <img
            class=" object-cover shadow-md"
            src="./header/imgheader/imgheader1.svg"
            alt=""
          />
          <img
            class=" object-cover shadow-md"
            src="./header/imgheader/imgheader1.svg"
            alt=""
          />
          <img
            class=" object-cover shadow-md"
            src="./header/imgheader/imgheader1.svg"
            alt=""
          />
          <img
            class=" object-cover shadow-md"
            src="./header/imgheader/imgheader1.svg"
            alt=""
          />
        </div>
        <div
          aria-hidden="true"
          class="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-2 ">
          {/* [animation-direction:reverse] */}
          <img
            class=" object-cover shadow-md"
            src="./header/imgheader/imgheader1.svg"
            alt=""
          />
          <img
            class=" object-cover shadow-md"
            src="./header/imgheader/imgheader1.svg"
            alt=""
          />
          <img
            class=" object-cover shadow-md"
            src="./header/imgheader/imgheader1.svg"
            alt=""
          />
          <img
            class=" object-cover shadow-md"
            src="./header/imgheader/imgheader1.svg"
            alt=""
          />
          <img
            class=" object-cover shadow-md"
            src="./header/imgheader/imgheader1.svg"
            alt=""
          />
        </div>
      </div>
      <div class="relative mt-4 flex gap-2 overflow-hidden">
        <div class="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-2 ">
          <img
            class=" object-cover shadow-md"
            src="./header/imgheader/imgheader1.svg"
            alt=""
          />
          <img
            class=" object-cover shadow-md"
            src="./header/imgheader/imgheader1.svg"
            alt=""
          />
          <img
            class=" object-cover shadow-md"
            src="./header/imgheader/imgheader1.svg"
            alt=""
          />
          <img
            class=" object-cover shadow-md"
            src="./header/imgheader/imgheader1.svg"
            alt=""
          />
          <img
            class=" object-cover shadow-md"
            src="./header/imgheader/imgheader1.svg"
            alt=""
          />
        </div>
        <div
          aria-hidden="true"
          class="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-2 ">
          <img
            class=" object-cover shadow-md"
            src="./header/imgheader/imgheader1.svg"
            alt=""
          />
          <img
            class=" object-cover shadow-md"
            src="./header/imgheader/imgheader1.svg"
            alt=""
          />
          <img
            class=" object-cover shadow-md"
            src="./header/imgheader/imgheader1.svg"
            alt=""
          />
          <img
            class=" object-cover shadow-md"
            src="./header/imgheader/imgheader1.svg"
            alt=""
          />
          <img
            class=" object-cover shadow-md"
            src="./header/imgheader/imgheader1.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

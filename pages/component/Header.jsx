/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ArrowDownIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid";
import Script from "next/script";
import useTrans from "../useTrans";
import { useState, useEffect } from "react";

export const Header = () => {
  const [iOpen, setiOpen] = useState(false);
  console.log("iOpen: ", iOpen);
  const trans = useTrans();
  return (
    <div>
      <div className="w-full fixed bottom-4 top-0 ">
        <div className=" w-[96px] h-[776px]  rounded-br-[3rem] bg-white">
          <div
            className={` ${
              iOpen ? "block" : "hidden"
            } w-full h-[788px] absolute bg-white right-4 drop-shadow-2xl flex rounded-br-[3rem]`}>
            <div className="mt-4 flex-col flex  w-[96px]">
              <div className="md:ml-8  ">
                <img
                  src="./header/logosuzu.svg"
                  alt=""
                  className="md:mx-2 mt-2"
                />

                <img
                  src="./header/btnx.svg"
                  alt=""
                  className=" mt-[586px] "
                  onClick={() => setiOpen(!iOpen)}
                />
              </div>
            </div>
            <div className="w-full break-all h-full  flex items-center  text-7xl	px-[145px] justify-center">
              <div className="flex flex-col ">
                <p className="">
                  <span className="underline-offset-8 text-red-500 underline ">
                    SuZu Group
                  </span>{" "}
                  có ý tưởng tạo ra các
                </p>
                <p className="my-4">
                  <span className="underline-offset-8 underline ">
                    một nhóm
                  </span>{" "}
                  có ý tưởng tạo ra các
                </p>
                <p>
                  <span className="underline-offset-8  underline">
                    giải pháp
                  </span>{" "}
                  hiệu quả đa phương tiện.
                </p>
                <div className="mt-14 text-4xl font-bold flex">
                  <a href="#">Dự án</a>
                  <a href="#" className="mx-14 ">
                    Tuyển dụng
                  </a>

                  <a href="#">Liên hệ</a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:py-6 w-full flex-col flex ">
            <div className="md:mx-4  ">
              <img
                src="./header/logosuzu.svg"
                alt=""
                className="md:mx-2 justify-end "
              />

              <img src="./header/arrow.svg" alt="" className=" my-64  " />

              <img
                src="./header/btn.svg"
                alt=""
                className="  justify-end "
                onClick={() => setiOpen(!iOpen)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

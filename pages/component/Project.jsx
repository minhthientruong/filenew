/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import Script from "next/script";
import { useEffect } from "react";
import  useTrans  from "../useTrans";




export const Projects = () => {
const trans = useTrans();

return (
  <ul
    role="list"
    className=" absolute grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
  >



      <li key={trans.files.source} className="absolute top-0">
        <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
          <img
            src={trans.files.source}
            alt=""
            className="pointer-events-none object-cover group-hover:opacity-75"
          />
          <button type="button" className="absolute inset-0 focus:outline-none">
            <span className="sr-only">View details for {trans.files.title}</span>
          </button>
        </div>
        <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
          {trans.files.title}
        </p>
        <p className="pointer-events-none block text-sm font-medium text-gray-500">
          {trans.files.size}
        </p>
      </li>

  </ul>
);
}
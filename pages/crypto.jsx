import Image from "next/image";
import React from "react";
import cryptoImg from "../public/assets/projects/cryptoweb.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const crypto = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={cryptoImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">CryptoWeb</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            The application is built using ReactJS and styled with Tailwind CSS.
            Application wide state management is handeled by implementing Redux
            Toolkiit query. The data is coming from CoinRanking RapidAPI and is
            fetched using custom hooks supported by Redux Toolkit. Millify is
            used to round up decimal digits at places which has a complex
            numeric value. Along with that, momentjs library is used to display
            date and time in news generated for crypto. React ChartJS is
            utilized to build charts for each cryptocurrency which displays
            their timeline as mentioned. . Another feature of this application
            is dynamic routing through the &quot;React Router DOM&quot; package.
            This application was built using the Coin Gecko API.
          </p>
          {/* <a
            href="https://github.com/fireclint/crypto-react-firebase"
            target="_blank"
            rel="noreferrer"
          > */}
          <button className="px-8 py-2 mt-4 mr-8">Code</button>
          {/* </a> */}
          {/* <a
            href="https://cryptobase-yt.web.app/"
            target="_blank"
            rel="noreferrer"
          > */}
          <button className="px-8 py-2 mt-4">Demo</button>
          {/* </a> */}
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Coin Gecko API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Routes
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default crypto;

import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/projects/medweb.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={propertyImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">MedWeb</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            A healthcare management system is vitally required in the modern
            world, where an ongoing pandemic is turning into a significant
            obstacle for users. A chatbot that is accessible 24*7 will be part
            of this healthcare web application, enabling users to consult on any
            health-related queries whenever they want without having to leave
            their home. MedWeb is a full-stack web application with a built-in
            medical chatbot utilizing the DialogFlow framework that can interact
            with users about any health-related issues. The Layout is built in
            React with CSS3 styling and firebase in th backend. The application
            supports user authentication using firebase. Users are able to
            create a new account using their email address. The chatbot can
            suggest doctors for specific symptoms by sending their profile
            information to the users. Users may also access the doctor&apos;s
            profile, where they can learn more about the doctor and, if
            necessary, make an appointment. Along with scheduling appointments
            with the available doctors, the chatbot will be able to offer home
            remedies for the user&apos;s medical problems.
          </p>
          {/* <a
            href="https://github.com/samip9898/Project-MedWeb/tree/master"
            target="_blank"
            rel="noreferrer"
          > */}
          <button className="px-8 py-2 mt-4 mr-8">Code</button>
          {/* </a> */}
          {/* <a
            href="https://property-finder-development.web.app/"
            target="_blank"
            rel="noreferrer"
          > */}
          <button className="px-8 py-2 mt-4">Demo</button>
          {/* </a> */}
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
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
                <RiRadioButtonFill className="pr-1" /> Google API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Zillow API
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

export default property;

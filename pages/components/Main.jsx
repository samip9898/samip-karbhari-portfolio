import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-1 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 ">
            LET&apos;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#5651e5]">Samip</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Front-End Web Developer</h1>
          <p className="py4 text-gray-600">
            I am a Front-End web developer specializing in building and
            designing exceptional digital experiences. Currently, I&apos;m
            focussed on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="https://www.linkedin.com/in/samip-karbhari-140519171/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="https://github.com/samip9898"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="mailto:samipkarbhari80@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineMail />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="https://drive.google.com/file/d/1H5xcrhTJcvRJ4s6gwTRKKxjb6xA-jEW-/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <BsFillPersonLinesFill />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

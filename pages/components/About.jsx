import Image from "next/image";
import React from "react";
import dogCode from "../../public/assets/dogcode2.jpg";
import Link from "next/link";

// "https://images.unsplash.com/photo-1589652717406-1c69efaf1ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NTU1MjI3Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>

          <p className="py-2 text-gray-600">
            I hold a Master&apos;s degree in Computer Science from Lakehead
            University. I have around 3 years of work experience as a front-end
            developer. During these years I have worked with React, HTML, CSS,
            and also a little bit of Angular, and in terms of backend I have
            worked with Node and Express.JS. My role as a front-end developer is
            to produce clean and efficient code, based on specifications while
            collaborating with the development team, gathering product
            requirements from the client and stakeholders. I specialize in
            developing ReactJS web applications by creating custom reusable
            components for data manipulations and displaying data in company
            standard format.
          </p>
          <p className="py-2 text-gray-600">
            I am a very energetic guy and a great communicator, and my work
            experience in the domain of web development has helped me to build
            confidence and taught me the importance of teamwork. I am very
            punctual and dependable and can be counted upon to finish what I
            start. I consider myself as a very hardworking guy and I like to
            build a positive atmosphere around which also leads to a more
            productive work.{" "}
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={dogCode} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;

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
            A Web Developer, passionate about solving problems and developing
            web solutions, always eager to explore-learn-grab new skills and
            technologies for remaining upgraded to work in collaborative
            environments. A worthy team player with strong communication skills
            and willingness to help. I am a Master&apos;s graduate having around
            3 years of experience as a Front-End Developer primarily working
            with JavaScript, React, HTML, Git for version control, REST APIs,
            front-end designing and more. I specialize in developing ReactJS web
            applications by creating custom reusable components for data
            manipulations and displaying data in company standard format.
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

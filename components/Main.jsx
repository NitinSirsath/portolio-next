// import Link from "next/link";
import React from "react";
import { data } from "./mainSocialData";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#5651e5]"> Onkar</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I&apos;m focused on building front-end web applications and learning new
            technologies
          </p>
          <div className="flex items-center gap-3 justify-between max-w-[330px] m-auto py-4">
            {data.map((social) => (
              <a
                href={social.link}
                key={social.id}
                target="_blank"
                rel="noreferrer"
                download
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
               <social.logo />
                </div>
              </a>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

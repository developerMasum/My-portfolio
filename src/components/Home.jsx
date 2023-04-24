import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import photo from '../assets/photo.jpg'
import HomeSocial from "./HomeSocial";

const Home = () => {
  return (
    <>
      {/* <div className="my-container">
        <h3 className="text-2xl text-center mt-7 text-blue-400">
          Hello, I'm <br />
          <h5 className="text-6xl font-extrabold mt-20  mb-24">
            Farhan Adnan Masum
          </h5>
          <span className="text-green-500 text-5xl ">
            <Typewriter
              options={{
                strings: ["Web Developer", "Photographer","React Developer","Full Stack Developer","Freelancer"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h3>
      </div> */}


{/*  */}.


<div className="my-container flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-8">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Hello, I'm <br />
          <h5 className="text-4xl font-extrabold mt-8  mb-8">
            Farhan Adnan Masum
          </h5>
          <span className="text-green-500 text-5xl ">
            <Typewriter
              options={{
                strings: ["Web Developer", "Photographer","React Developer","Full Stack Developer","Freelancer"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          </h2>
          </div>

          <div className="flex flex-col items-center md:flex-row">
            <Link to="/" className="btno md:w-auto md:mr-4">
              <div className="inline-flex items-center justify-center w-full h-full">
                <p className="mr-3">Download CV </p>
              </div>
            </Link>
            <Link to="/" className="btno md:w-auto md:mr-4">
              <div className="inline-flex items-center justify-center w-full h-full">
                <p className="mr-3">Contact Me </p>
              </div>
            </Link>
          </div>
          <div>
            <HomeSocial />
          </div>
        </div>

        <div className="relative lg:w-1/2 ">
          <div className="w-full lg:w-4/5 lg:ml-auto h-56   sm:h-96">
            <img src={photo} alt="" className="w-[75%]  rounded-t-full rounded-b-full"  />
          </div>
        </div>
      </div>





    </>
  );
};

export default Home;

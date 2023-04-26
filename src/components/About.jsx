import React from "react";

import { BsAward, BsPeople } from 'react-icons/bs';
import { AiFillProject} from 'react-icons/ai';
import Lottie from "lottie-react";

import about from '../assets/about.json'


const About = () => {
  return (
    <div className="my-container" >
      <div className="text-center mb-20">
        <h2>
          <>Get to Know</>
        </h2>
        <h2 className="text-3xl">About Me </h2>
      </div>

      <div className="flex 	">
       
        <Lottie animationData={about} loop={true} className="mr-32" />
        
        <div className=" ">
           <div className="flex gap-6 mr-40 ">
           <div className="bg-blue-300 px-8 py-3 rounded-md  shadow-lg items-center hover:bg-green-400 hover:border-teal-200"> <BsAward className="text-3xl" /> <h3 className="mt-12">Experience</h3> <h5>2+ Years</h5> <h6>Working</h6> </div>
            <div className="bg-blue-300 px-8 py-3 rounded-md hover:bg-green-400 shadow-lg"> <BsPeople className="text-3xl" /> <h3 className="mt-12">Experience</h3> <h5>2+ Years</h5> <h6>Working</h6> </div>
            <div className="bg-blue-300 px-8 py-3 rounded-md hover:bg-green-400 shadow-lg"> <AiFillProject className="text-3xl" /> <h3 className="mt-12">Experience</h3> <h5>2+ Years</h5> <h6>Working</h6> </div>
           </div>
           <div className="mt-5 font-semibold">
            Hello !! My name is Farhan Adnan Masum. I want to gain confidence and fame <br /> using my potential in this position, and express my innovative creative skills <br /> for self and company growth. I am a hardworking and quick learner person. <br /> I believe hard work is the only way to success. Love to learn new technology <br /> and try to improve myself.
            </div>
            <button className="btno mt-5">Let's Talk </button>




            
            
          
      
        </div>
        
      </div>
     
    </div>
  );
};

export default About;

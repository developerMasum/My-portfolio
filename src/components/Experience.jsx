import React from "react";
import { BsFillPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section className="my-container">
      <div className="text-center mb-20">
        <h2>
          <>What Skills I Have</>
        </h2>
        <h2 className="text-3xl"> My Experience </h2>
      </div>

      <div className="flex gap-6 mx-auto mr-20 ">
        <div className="card w-[50%]  card-body px-12 py-8  bg-primary text-primary-content">
          <div className="">
            <h2 className="card-title text-center text-2xl ml-32 mb-5">Frontend Development</h2>
            <hr  className="mb-5"/>
           <div className="flex flex-col">
          <div>
          <div className="mb-8">
          <div className='flex items-center gap-2  px-12 font-bold'> <BsFillPatchCheckFill/> HTML5,CSS3 </div>
            <h6 className='ml-16  font-thin'>Expert</h6>
          </div>
            <div className="mb-8">
            <div className='flex items-center gap-2 px-12 font-bold'> <BsFillPatchCheckFill/> React </div>
            <h6 className='ml-16  '>Expert</h6>
            </div>
            <div className="mb-8">
            <div className='flex items-center gap-2 px-12 font-bold'> <BsFillPatchCheckFill/> Tailwind CSS</div>
            <h6 className='ml-16 '>Expert</h6>
            </div>
          </div>

          <div>
          <div className="mb-8">
            <div className='flex items-center gap-2 px-12 font-bold'> <BsFillPatchCheckFill/> Tailwind CSS</div>
            <h6 className='ml-16 '>Expert</h6>
            </div>

          </div>
           
           </div>

         
           
          </div>
        </div>
        <div className="card  w-[50%] card-body px-12 py-8  bg-primary text-primary-content">
          <div className="">
            <h2 className="card-title text-center text-2xl ml-32 mb-5">Backend Development</h2>
            <hr  className="mb-5"/>
            <div className="mb-8">
            <div className='flex items-center gap-2  px-12 font-bold'> <BsFillPatchCheckFill/> Express.Js </div>
            <h6 className='ml-16 mb-3 font-thin'>Expert</h6>
            </div>
            <div className="mb-8">
            <div className='flex items-center gap-2 px-12 font-bold'> <BsFillPatchCheckFill/> Node.Js </div>
            <h6 className='ml-16  mb-3'>Expert</h6>
            </div>
          <div className="mb-8">  <div className='flex items-center gap-2 px-12 font-bold'> <BsFillPatchCheckFill/> Rest API</div>
            <h6 className='ml-16 mb-3'>Expert</h6></div>
          <div className="mb-8"><div className='flex items-center gap-2 px-12 font-bold'> <BsFillPatchCheckFill/> Rest API </div>
            <h6 className='ml-16 mb-3'>Expert</h6></div>
          

         
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

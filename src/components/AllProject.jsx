import React from "react";

const AllProject = ({ project }) => {
  const { liveSite, image, codeLink } = project;
  return (
    <div>
      <div className=" my-container  flex  bg-slate-100">
        <div className="group h-96 w-80 [perspective:1000px] ">
          <div className="relative h-full w-full rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img
                className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                src={image}
                alt=""
              />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <button className="border-2 border-indigo-200 border-t-blue-500 px-5 py-2 rounded-lg">
                  <a href={liveSite} target="_blank">
                    Live Site{" "}
                  </a>
                </button>
                <button className="border-2 border-indigo-200 border-b-blue-500 px-5 py-2 rounded-lg mt-8 ">
                  <a href={codeLink} target="_blank">
                    Git Link{" "}
                  </a>
                </button>

                {/* Modaaaaaaaaaaaal */}

                <div className=" ">
                  {/* The button to open modal */}
                  <div className="mt-8">
                  <label htmlFor="my-modal-3" className="border-2 border-indigo-200 border-l-blue-500 border-r-blue-600  px-5 py-2 rounded-lg mt-8">
                    open modal
                  </label>
                  </div>

                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id="my-modal-3"
                    className="modal-toggle"
                  />
                  <div className="modal bg-black">
                    <div className="modal-box relative  bg-gray-500">
                      <label
                        htmlFor="my-modal-3"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <h3 className="text-lg font-bold">
                      JobHub
                      </h3>
                      <p className="py-4 text-sm font-semibold" >
                        This is Job Hunter Website with Login and Register also here. Used Technology: React, React Routing, Bootstrap, Firebase Authentication, Express, MongoDB, .
                        
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProject;

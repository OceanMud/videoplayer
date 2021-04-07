import React, { useState } from "react";
import movies from "./movies";
import "../styles/App.css";

function App() {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="  text-center  mt-16 ml-20  text-3xl text-gray-800 font-semibold">
        Watching {movies[index].title}
      </div>
      <div className=" mt-14 flex justify-center items-center text-md  ">
        <div className=" lg:max-w-3xl container shadow-2xl rounded-xl  ">
          <div className=" flex  ">
            <div className="border-gray-300 border-solid border-2 h-72  w-1/3   bg-gray-50   overflow-y-scroll  rounded-l-lg md:block hidden">
              {movies.map((movie, i) => (
                <div className=" border-b-2 border border-gray-200 ">
                  <button
                    className=" w-full  py-4 pl-4 text-left    hover:bg-pink-100 focus:border-l-4 focus:border-t-0 focus:border-b-0 outline-none focus:border-black focus:border-r-0 focus:outline-none  "
                    onClick={() => {
                      setIndex(i);
                    }}
                  >
                    {movie.title}
                  </button>
                </div>
              ))}
            </div>
            <div className="md:w-2/3 w-full md:p-0 , ">
              {movies.map((movie, i) => (
                <div className="">
                  {index === i ? (
                    <iframe
                      className="w-full h-72 md:rounded-r-lg md:rounded-t-none  rounded-t-lg  "
                      src={movie.url}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <> </>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="border-gray-300 bg-gray-50 border-solid border-2 h-72  w-full   overflow-y-scroll  ,md:rounded-l-lg md:rounded-b-none rounded-b-lg md:hidden block ">
            {movies.map((movie, i) => (
              <div className=" border-b-2 border border-gray-200 ">
                <button
                  className=" w-full py-4 pl-4 border border-solid text-left   hover:bg-pink-100 focus:border-l-4 focus:border-t-0 focus:border-b-0 outline-none focus:border-black focus:border-r-0  focus:outline-none "
                  onClick={() => {
                    setIndex(i);
                  }}
                >
                  {movie.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

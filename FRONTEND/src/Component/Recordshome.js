import React from "react";
import "./Home.css";
import imgSrc from "../Images/servicerec.jpeg";


export default function Recordshome() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-rows-1 p-10 bg-gray-200 bg-opacity-70 rounded-lg m-5 max-w-3xl mt-10 ">
        <p className="text-3xl font-bold text-gray-800 text-center ">
         Service Record.
        </p>
        <img src={imgSrc} alt="recodeimg" className="w-2/4 mx-auto mt-10 rounded-2xl" />
        <div className="text-1xl grid grid-cols-2 mt-8 gap-6">
          <a href="addrec">
            <button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                     hover:to-amber-700 text-white font-bold py-4 px-5 rounded-lg mr-2 opacity-90 transition duration-300 
                                     ease-in-out transform hover:scale-105">
              Add Record
            </button>
          </a>
          <a href="recview">
            <button className=" bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                     hover:to-amber-700 text-white font-bold py-4 px-5 rounded-lg mr-2 opacity-90 transition duration-300 
                                     ease-in-out transform hover:scale-105">
              View records
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

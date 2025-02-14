import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="relative h-screen w-full">
        <video
          src="/videos/game-bg.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          autoPlay
          loop
          muted
        ></video>

        <div className="text-center text-white ">
          <h1 className="text-4xl font-bold pt-60">Welcome to the Game Zone</h1>
          <p className="mt-4 text-lg">
            Experience the ultimate gaming adventure
          </p>
          <Link to="/signup">
            {" "}
            {/* Corrected Link path */}
            <button className="mt-10 hover:bg-gray-400 px-10 py-2 rounded-[5px]">
              Sign-up
            </button>
          </Link>
          <br />
          <Link to="/login">
            {" "}
            <button className="mt-5 hover:bg-gray-400 px-11 py-2 rounded-[5px]">
              Log-in
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Main;

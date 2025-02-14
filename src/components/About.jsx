import React from "react";

function About() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-4">About Us</h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Welcome to <span className="text-blue-500 font-bold">Game Zone</span>, 
          your ultimate destination for gaming! We are passionate about creating a
          vibrant community for gamers. Here, you can explore new games, connect
          with fellow enthusiasts, and level up your gaming experience.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed mt-4">
          Our mission is to provide a seamless and engaging platform for gamers
          of all skill levels. Thank you for being part of our journey!
        </p>
      </div>
    </div>
  );
}

export default About;

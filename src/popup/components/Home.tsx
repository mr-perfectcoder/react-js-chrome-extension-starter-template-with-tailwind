import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[350px] p-4">
      <img src="icon.png" className="w-32 h-32 animate-spin-slow" alt="Rotating Icon" />
      <p className="mt-4 text-base text-center">A starter template for a React JS Chrome extension with Tailwind CSS</p>
    </div>
  );
};

export default Home;

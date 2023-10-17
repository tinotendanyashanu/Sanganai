import React from "react";
import { useRouter } from "next/router";

const JoinButton = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("./join");
  };

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={handleButtonClick}
        className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-full shadow-lg transition duration-300 ease-in-out"
      >
        Join Whitelist
      </button>
    </div>
  );
};

export default JoinButton;

"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";
import { useRouter } from "next/router";

const Navbar = () => {
  // Initialize the router object
  const router = useRouter();

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[20%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <img
          src="/sanganai.svg"
          alt="search"
          className="w-[60px] h-[90px] object-contain"
        />
        <h2 className="font-extrabold text-[34px] leading-[30.24px] text-white">
          Sanganai
        </h2>
        <button
          onClick={() => router.push("/join")}
          className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-full transform transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring focus:border-purple-900"
        >
          Get Started
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;

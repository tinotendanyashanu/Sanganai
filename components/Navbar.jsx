"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";
import { useRouter } from "next/router";
import JoinButton from "./Button";

const Navbar = () => {
  // Initialize the router object
  const router = useRouter();

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative items-center`}
    >
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <img
          src="/sanganai.png"
          alt="search"
          className="w-[60px] h-[90px] object-contain left-20"
        />
        <div className="absolute w-[20%] inset-9 gradient-01" />
        {/* <h2 className="font-extrabold text-[34px] leading-[30.24px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-orange-500 to-yellow-500 via-pink-500">
          Sanganai
        </h2> */}
        <JoinButton />
        {/* <div className=" flex items-center justify-center gap-x-6 lg:justify-start">
          <a
            href="./join"
            className="rounded-md text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-orange-500 to-yellow-500 via-pink-500 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get started
          </a>
        </div> */}
      </div>
    </motion.nav>
  );
};

export default Navbar;

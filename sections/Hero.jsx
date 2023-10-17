"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import JoinButton from "../components/Button";

const images = [
  // "/Sangani.png",
  "/cover3.jpg",
  "/cover1.jpg",
  "/Entertainment.jpg",
  "/cover2.jpg",
  "/cover.jpg",
  "/Home.webp",
]; // Add paths to your images

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 5 seconds (5000 milliseconds)

    return () => {
      clearInterval(interval); // Clean up interval on component unmount
    };
  }, []);

  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Sanganai
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className={styles.heroParagraph}>
              {" "}
              Welcome to Sanganai: Where Every Event Connects a Story.
            </h1>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          {/* <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" /> */}

          <img
            src={images[currentImageIndex]}
            alt="hero_cover"
            className="w-full sm:h-[500px] h-[150px] object-cover rounded-tl-[40px] z-10 relative"
          />

          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
              <img
                src="/stamp.png"
                alt="stamp"
                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
              />
            </div>
          </a>
          <JoinButton />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

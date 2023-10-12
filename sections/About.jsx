"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Sananganai" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">At Sananganai</span> , we
        are redefining the way you experience events. Our platform is more than
        just a ticketing solution; it's a gateway to unforgettable moments. With
        Sananganai,{" "}
        <span className="font-extrabold text-white">
          event organizers can seamlessly manage their events
        </span>{" "}
        , while attendees enjoy a hassle-free ticketing experience. Our mission
        is to <span className="font-extrabold text-white">connect</span> people
        through events, fostering a vibrant and engaged community.{" "}
        <span className="font-extrabold text-white"> Discover</span> the future
        of event ticketing with Sananganai.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;

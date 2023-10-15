import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const EmailForm = ({ onFormSubmit }) => {
  const [email, setEmail] = useState("");
  const inputRef = useRef(); // Create a ref for the input field

  const handleEmailChange = ({ target: { value } }) => {
    setEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://sanganai-091f66f33c16.herokuapp.com/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        console.log("Email sent successfully!");
        window.location.href = "./";
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }

    onFormSubmit(email);
  };

  const handleClick = () => {
    inputRef.current.focus(); // Set focus on the input field when the parent div is clicked
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center justify-center mb-6 mx-4 sm:mx-0 w-full sm:w-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onClick={handleClick} // Add the onClick event to the parent div
    >
      <input
        ref={inputRef} // Assign the ref to the input field
        type="email"
        className="py-4 px-6 sm:px-8 border rounded-lg mb-2 sm:mb-0 w-full sm:w-auto focus:outline-none resize-none cursor-pointer"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
        onTouchStart={handleEmailChange}
      />

      <motion.button
        type="submit"
        className="bg-red-500 hover:bg-red-700 text-white py-2 px-6 sm:px-8 rounded focus:outline-none transition duration-300 resize-none cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onTouchStart={handleSubmit}
      >
        Notify Me
      </motion.button>
    </motion.form>
  );
};

const JoinUs = () => {
  const handleNotifyClick = (email) => {
    console.log(`Subscribed with email: ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-black overflow-hidden z-10">
      <div className="p-8 rounded-lg shadow-lg text-center max-w-lg w-full">
        <motion.h1
          className="text-6xl lg:text-8xl font-bold text-white mb-6"
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.2 }}
        >
          Join Our Newsletter
        </motion.h1>
        <motion.p
          className="text-xl lg:text-2xl text-gray-400 mb-8"
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.4 }}
        >
          Stay up-to-date with our latest news, events, and exclusive offers.
        </motion.p>

        <EmailForm onFormSubmit={handleNotifyClick} />
        <motion.p
          className="text-lg lg:text-xl text-gray-500 text-sm"
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.6 }}
        >
          We respect your privacy. Unsubscribe at any time.
        </motion.p>
      </div>
    </div>
  );
};

export default JoinUs;

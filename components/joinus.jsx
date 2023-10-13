import React, { useState } from "react";
import { motion } from "framer-motion";

const EmailForm = ({ onFormSubmit }) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = ({ target: { value } }) => {
    setEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend API endpoint
      const response = await fetch("http://localhost:3001/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      // Handle the response from the backend if needed
      if (response.ok) {
        // Optionally, you can handle a successful response here
        console.log("Email sent successfully!");

        // Redirect to the home page
        window.location.href = "./"; // Replace this URL with your home page URL
      } else {
        // Handle errors from the backend
        console.error("Failed to send email");
      }
    } catch (error) {
      // Handle network errors or other issues
      console.error("Error sending email:", error);
    }

    // Call the provided onFormSubmit callback if needed
    onFormSubmit(email);
  };
  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center justify-center mb-6 mx-4 sm:mx-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <input
        type="email"
        className="py-4 px-6 sm:px-8 border rounded-lg mb-2 sm:mb-0 w-full sm:w-auto focus:outline-none"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
      />

      <motion.button
        type="submit"
        className="bg-red-500 hover:bg-red-700 text-white py-2 px-6 sm:px-8 rounded focus:outline-none transition duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
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

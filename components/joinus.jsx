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

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="flex flex-col items-center space-y-4 p-6 rounded-lg shadow-md"
      style={{ maxWidth: "300px" }}
    >
      <input
        type="email"
        name="email"
        id="email"
        autoComplete="email"
        placeholder="Email Address"
        value={email}
        onChange={handleEmailChange}
        className="w-full p-2 border rounded-sm focus:outline-none focus:ring focus:border-indigo-600 text-black"
      />
      <div className="absolute w-[10%] inset-9 gradient-01" />
      <button
        type="submit"
        className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-700"
      >
        Notify Me
      </button>
    </motion.form>
  );
};

const JoinUs = () => {
  const handleNotifyClick = (email) => {
    console.log(`Subscribed with email: ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-black overflow-hidden z-10 text-white">
      <div className="isolate px-6 py-12 sm:py-24 lg:px-8 flex flex-col items-center w-full max-w-screen-lg">
        <h1 className="text-4xl lg:text-6xl xl:text-8xl font-bold text-center mb-6">
          Join our waiting list!
        </h1>
        <p className="text-lg lg:text-xl xl:text-2xl text-gray-400 text-center mb-8">
          Stay ahead of the curve and be the first to know about the release of
          Sangani. Leave your email to join our waiting list for exclusive
          updates.
        </p>

        <EmailForm onFormSubmit={handleNotifyClick} />

        <p className="text-base lg:text-lg xl:text-xl text-gray-500 text-center mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
      <div className="absolute w-[10%] inset-0 gradient-03" />
    </div>
  );
};

export default JoinUs;

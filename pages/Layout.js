import React from "react";

import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-primary-black overflow-hidden">
      {" "}
      {/* Add this line */}
      {/* <Header /> */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

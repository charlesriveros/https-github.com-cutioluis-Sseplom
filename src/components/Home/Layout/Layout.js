import React from "react";
import Promotion from "../Promotion/Promotion";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Promotion />
      <Navbar />
         {children}
      <Footer />
    </div>
  );
};

export default Layout;

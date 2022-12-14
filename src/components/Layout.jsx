import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export const Layout = ({ children }) => {
  return (
    <div id="pageContainer">
      <Header />
      <main>{children}</main>

      <Footer />
    </div>
  );
};

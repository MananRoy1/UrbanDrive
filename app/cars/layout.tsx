import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { Children } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="flex-grow mt-24">{children}</main>
      <Footer />
    </>
  );
};

export default layout;

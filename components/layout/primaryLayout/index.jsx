import React from "react";
import SideBar from "@/components/layout/sideBar";
import Header from "../header";

const PrimaryLayout = ({ children }) => {
  return (
    <main>
      <Header />
      <div className="flex">
        <SideBar />
        {children}
      </div>
    </main>
  );
};

export default PrimaryLayout;

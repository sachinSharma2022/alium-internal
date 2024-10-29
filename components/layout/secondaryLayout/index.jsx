import React from "react";
import SecondaryLeftSidebar from "./secondaryLeftSidebar";
import SecondaryRightSidebar from "./secondaryRightSidebar";

const SecondaryLayout = ({ children }) => {
    return (
            <div className="flex justify-between w-full">
                <SecondaryLeftSidebar />
                <div className="w-full p-6">
                    {children}
                </div>
                <SecondaryRightSidebar />
            </div>
    )
}
export default SecondaryLayout;
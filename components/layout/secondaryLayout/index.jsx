import React from "react";
import Header from "./header";
import LeftSidebar from "./leftSidebar";
import RightSidebar from "./rightSidebar";

const SecondaryLayout = ({ children }) => {
    return (
        <main>
            <Header />
            <div className="flex justify-between">
                <LeftSidebar />
                <div className="bg-white-smoke p-6">
                    {children}
                </div>
                <RightSidebar />
            </div>
        </main>
    )
}
export default SecondaryLayout;
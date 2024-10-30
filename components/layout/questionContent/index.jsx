import React from "react";
import QuestionLeftSidebar from "./questionLeftSidebar";
import QuestionRightSidebar from "./questionRightSidebar";

const QuestionContent = ({ children }) => {
    return (
            <div className="flex justify-between w-full">
            <QuestionLeftSidebar />
                <div className="w-full p-6">
                    {children}
                </div>
            <QuestionRightSidebar />
            </div>
    )
}
export default QuestionContent;
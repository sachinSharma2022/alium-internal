"use client";
import { useState } from "react";
import UserProfile from "@/components/profiles/userProfile";
import PrimaryLayout from "@/components/layout/primaryLayout";

const Profile = () => {
  const [selectedCode, setSelectedCode] = useState("+91");

  const handleSelectChange = (code) => {
    setSelectedCode(code);
  };
  return (
    <PrimaryLayout>
      <UserProfile />
    </PrimaryLayout>
  );
};

export default Profile;

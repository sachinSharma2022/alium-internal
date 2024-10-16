// hooks/useAuthRouting.js
"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getCookie } from "cookies-next";

const useAuthRouting = (redirectPath) => {
  const router = useRouter();
  const token = getCookie("authToken");

  useEffect(() => {
    console.log("Token from cookie:", token);
    if (token) {
      router.push(redirectPath);
    }
  }, [token, redirectPath, router]);

  return token;
};

export default useAuthRouting;

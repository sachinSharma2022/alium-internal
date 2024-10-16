// hooks/useAuthRouting.js
"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetResetPasswordSuccess } from "@/lib/redux/authSlice";

const useAuthRouting = (redirectPath, actionType) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { token, resetPasswordSuccess } = useSelector((state) => state.auth); // Access token from Redux state

  useEffect(() => {
    console.log("token", resetPasswordSuccess);
    if (token) {
      router.push(redirectPath); // Redirect if authenticated
    } else if (actionType === "resetPassword" && resetPasswordSuccess) {
      router.push(redirectPath); // Redirect after successful password reset
      dispatch(resetResetPasswordSuccess()); 
    }
  }, [token, redirectPath, router, resetPasswordSuccess]);

  return token;
};

export default useAuthRouting;

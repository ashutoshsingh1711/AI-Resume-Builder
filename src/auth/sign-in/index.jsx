import { SignIn } from "@clerk/clerk-react";
import React from "react";
const SignInPage = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <SignIn />
    </div>
  );
};

export default SignInPage;
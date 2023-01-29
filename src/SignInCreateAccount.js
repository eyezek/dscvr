import React from "react";
import { useNavigate } from "react-router-dom";

const SignInCreateAccount = () => {
  const navigate = useNavigate();

  return (
    <div id="logindiv">
      <div id="signincreateaccountcontainer">
        <button className="signinbuttons" id="createaccount">
          Create Account
        </button>
        <button className="signinbuttons" id="signin">
          Sign In
        </button>
      </div>
      <div id="continueasguestcontainer">
        <button
          onClick={() => navigate("/app")}
          className="signinbuttons"
          id="continueasguest"
        >
          Continue As Guest
        </button>
      </div>
    </div>
  );
};

export default SignInCreateAccount;

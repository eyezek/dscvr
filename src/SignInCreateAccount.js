import React from "react";

class SignInCreateAccount extends React.Component {
  render() {
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
          <button className="signinbuttons" id="continueasguest">
            Continue As Guest
          </button>
        </div>
      </div>
    );
  }
}

export default SignInCreateAccount;

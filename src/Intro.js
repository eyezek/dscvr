import React from "react";
import TypeWriter from "typewriter-effect";
import SignInCreateAccount from "./SignInCreateAccount";

class Intro extends React.Component {
  render() {
    return (
      <div id="introcontainer">
        <div id="introtextcontainer">
          <h1 id="title">dscvry</h1>
          <h2 id="description">
            {/* <TypeWriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(3000)
                .typeString(
                  "Discover the underground gems you never knew existed."
                )
                .changeDelay(0.01)
                .start();
            }}
          /> */}
            Discover the underground gems you never knew existed.
          </h2>
        </div>
        <div id="signincontainer">
          <SignInCreateAccount />
        </div>
      </div>
    );
  }
}

export default Intro;

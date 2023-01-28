import React from "react";
import DiscoveryModal from "./DiscoveryModal";

class Discovery extends React.Component {
  render() {
    return (
      <div id="discoverypage">
        <h1 id="discoverytitle">dscvry</h1>
        <div id="discoverycontainer">
          <img
            className="arrows"
            alt="Arrow"
            src={require("./images/icons/icons8-chevron-left-30.png")}
          />
          <DiscoveryModal />
          <img
            className="arrows"
            alt="Arrow"
            src={require("./images/icons/icons8-chevron-right-30.png")}
          />
        </div>
      </div>
    );
  }
}

export default Discovery;

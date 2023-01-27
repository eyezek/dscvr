import React from "react";
import DiscoveryInfo from "./DiscoveryInfo";

class DiscoveryModal extends React.Component {
  render() {
    return (
      <div>
        <div id="discoverymodal">
          <img
            className="avatar"
            alt="Avatar"
            src={require("./images/placeholder.jpg")}
          />
          <DiscoveryInfo />
        </div>
      </div>
    );
  }
}

export default DiscoveryModal;

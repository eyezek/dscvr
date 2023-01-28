import React from "react";

class DiscoveryInfo extends React.Component {
  render() {
    return (
      <div id="discoveryinfocontainer">
        <img className="avatar" alt="Avatar" src={this.props.img} />
        <h2 className="discoverytitle">{this.props.artist}</h2>
        <h3 className="description">{this.props.description}</h3>
      </div>
    );
  }
}

export default DiscoveryInfo;

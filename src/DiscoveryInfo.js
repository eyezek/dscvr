import React from "react";

class DiscoveryInfo extends React.Component {
  render() {
    return (
      <div id="discoveryinfocontainer">
        <h2 id="discoverytype">{this.props.type}</h2>
        <img className="avatar" alt="Avatar" src={this.props.img} />
        <h2 className="discoverytitle">{this.props.title}</h2>
        <h3 className="description">{this.props.description}</h3>
        <a className="links" target="_blank" href={this.props.youtubelink}>
          <h3>YouTube</h3>
        </a>
        <a className="links" target="_blank" href={this.props.spotifylink}>
          <h3>Spotify</h3>
        </a>
      </div>
    );
  }
}

export default DiscoveryInfo;

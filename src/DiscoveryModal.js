import React from "react";
import DiscoveryInfo from "./DiscoveryInfo";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class DiscoveryModal extends React.Component {
  render() {
    return (
      <div>
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          centerMode={true}
          centerSlidePercentage={100}
          width={650}
        >
          <div id="discoverymodal">
            <DiscoveryInfo
              img={require("./images/placeholder.jpg")}
              artist="Artist"
              description="Description"
            />
          </div>
          <div id="discoverymodal">
            <DiscoveryInfo
              img={require("./images/placeholder.jpg")}
              artist="Artist"
              description="Description"
            />
          </div>
          <div id="discoverymodal">
            <DiscoveryInfo
              img={require("./images/placeholder.jpg")}
              artist="Artist"
              description="Description"
            />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default DiscoveryModal;

import React from "react";
import DiscoveryInfo from "./DiscoveryInfo";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class DiscoveryModal extends React.Component {
  render() {
    return (
      <div>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          width={650}
        >
          <div id="discoverymodal">
            <DiscoveryInfo
              type="Song"
              img={require("./images/covers/NERD-InSearchOfUK.jpg")}
              title="N.E.R.D - Things Are Getting Better"
              // description="From the album In Search Of"
              youtubelink="https://www.youtube.com/watch?v=Ye2dXJXGMtA"
              spotifylink="https://open.spotify.com/track/3rTboU1EiIkKlA4CQh5i8W?si=59f82183e96e4655"
            />
          </div>
          <div id="discoverymodal">
            <DiscoveryInfo
              type="Artist"
              img={require("./images/covers/knxwledge.jpg")}
              title="Knxwledge"
              // description="Description"
              youtubelink="https://www.youtube.com/@knxwledge"
              spotifylink="https://open.spotify.com/artist/17Zu03OgBVxgLxWmRUyNOJ?si=c83bb0f8f4b74da7"
            />
          </div>
          <div id="discoverymodal">
            <DiscoveryInfo
              type="Song"
              img={require("./images/covers/LTD-LoveToTheWorld.jpg")}
              title="L.T.D. - Love Ballad"
              // description="Description"
              youtubelink="https://www.youtube.com/watch?v=rZHgUQqiWDI"
              spotifylink="https://open.spotify.com/track/3iCbTmcXnKlRZCdaYOukxq?si=f16e1b7d30c94966"
            />
          </div>
          <div id="discoverymodal">
            <DiscoveryInfo
              type="Album"
              img={require("./images/covers/Mustafa-WhenSmokeRises.jpg")}
              title="Mustafa - When Smoke Rises"
              // description="Description"
              youtubelink="https://www.youtube.com/watch?v=7E26_sjxbYY&list=PLoKyeCy41pGzSi_FMeRSze975m-HUWbQ6"
              spotifylink="https://open.spotify.com/album/0iPWPiOsdGaWgcy9RMpvXw?si=dNdxvIqtSbW10UF9L0212g"
            />
          </div>
          <div id="discoverymodal">
            <DiscoveryInfo
              type="Song"
              img={require("./images/covers/foreign-exchange-liab.jpg")}
              title="The Foreign Exchange - Leave It All Behind"
              // description="Description"
              youtubelink="https://www.youtube.com/watch?v=btS0v21HjiI"
              spotifylink="https://open.spotify.com/track/5M3czI8WoA43GbldxswMUY?si=def84f3146bf4ede"
            />
          </div>
          <div id="discoverymodal">
            <DiscoveryInfo
              type="Song"
              img={require("./images/covers/foreign-exchange-liab.jpg")}
              title="The Foreign Exchange - Leave It All Behind"
              // description="Description"
              youtubelink="https://www.youtube.com/watch?v=btS0v21HjiI"
              spotifylink="https://open.spotify.com/track/5M3czI8WoA43GbldxswMUY?si=def84f3146bf4ede"
            />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default DiscoveryModal;

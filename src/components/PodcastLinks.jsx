import React from "react";
import { Link } from "gatsby";
import MainLogo from "../../static/logos/code_chefs_main_logo.png";
import {ReactComponent as PodcastApple} from "../assets/podcastApple.svg";
import {ReactComponent as PodcastGoogle} from "../assets/podcastGoogle.svg";
import {ReactComponent as PodcastOvercast} from "../assets/podcastOvercast.svg";
import {ReactComponent as PodcastPocketcasts} from "../assets/podcastPocketcasts.svg";
import {ReactComponent as PodcastSpotify} from "../assets/podcastSpotify.svg";
import {ReactComponent as PodcastRss} from "../assets/podcastRss.svg";
import {ReactComponent as PodcastTwitter} from "../assets/podcastTwitter.svg";

import Pocketcasts from "../assets/pocketcasts.png"
import Itunes from "../assets/itunes.png"
import GooglePodcast from "../assets/google_podcasts.svg";
import Rss from "../assets/rss.svg";
import Overcast from "../assets/overcast.png";
import {ReactComponent as Newsletter} from "../assets/newsletter.svg";

const PodcastLinks = (props) => {
  return (
    <div className="follow-us">
      <a className="btn-social btn-spotify" target="_blank" rel="noreferrer" href="https://open.spotify.com/show/6DxHVg6CAOzwHnLgQClrs7">
        <PodcastSpotify/>
        <span>Spotify</span>
      </a>
      <a className="btn-social btn-pocketcasts" target="_blank" rel="noreferrer" href="https://pca.st/wtu4690d">
        <img src={Pocketcasts}/>
        <span>Pocketcasts</span>
      </a>
      <a className="btn-social btn-itunes" target="_blank" rel="noreferrer" href="https://podcasts.apple.com/us/podcast/code-chefs-hungry-web-developer-podcast/id1536223859">
        <img src={Itunes}/>
        <span>iTunes</span>
      </a>
      <a className="btn-social btn-googlepodcasts" target="_blank" rel="noreferrer" href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuY29kZWNoZWZzLmRldi9yc3MueG1s?sa=X&ved=0CBQQ27cFahcKEwjg4Obtj7_sAhUAAAAAHQAAAAAQAQ">
        <img src={GooglePodcast}/>
        <span>Google Podcast</span>
      </a>
      <a className="btn-social btn-overcasts" target="_blank" rel="noreferrer" href="https://overcast.fm/p2403384-t859cb">
        <img src={Overcast}/>
        <span>Overcast</span>
      </a>
      <a className="btn-social btn-rss" target="_blank" rel="noreferrer" href="https://codechefs.dev/rss.xml">
        <img src={Rss}/>
        <span>RSS</span>
      </a>
      <a className="btn-social btn-twitter" target="_blank" rel="noreferrer" href="https://twitter.com/codechefsdev">
        <PodcastTwitter/>
        <span>Twitter</span>
      </a>
      <a className="btn-social btn-newsletter" target="_blank" rel="noreferrer" href="https://tinyletter.com/vincentntang">
        <Newsletter/>
        <span>Newsletter</span>
      </a>
    </div>
  )
}

export default PodcastLinks
import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import PodcastLinks from "../components/PodcastLinks";

const AboutPage = () => {
  return (
    <Layout>
      <div className="about-container cc-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <div className="cc-card">
          <div className="cc-padding cc-support">
            <h3 className="color-offgray mt-0">Thanks for tuning in!</h3>
            <p>Follow us on <a className="newsletter-link text-21" href="https://twitter.com/codechefsdev">twitter </a>and our <a className="newsletter-link text-21" href="https://tinyletter.com/vincentntang">newsletter</a> for updates on new episodes!</p>
            <p>We're looking to air an episode every week!</p>
            {/* <p>Also don't forget to follow us on your favorite podcast platform!</p>
            <ul>
              <li><a target="_blank" rel="noreferrer" href="https://podcasts.apple.com/us/podcast/code-chefs-hungry-web-developer-podcast/id1536223859">Apple Podcasts</a></li>
              <li><a target="_blank" rel="noreferrer" href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuY29kZWNoZWZzLmRldi9yc3MueG1s?sa=X&ved=0CBQQ27cFahcKEwjg4Obtj7_sAhUAAAAAHQAAAAAQAQ">Google Podcasts</a></li>
              <li><a target="_blank" rel="noreferrer" href="https://open.spotify.com/show/6DxHVg6CAOzwHnLgQClrs7">Spotify</a></li>
              <li><a target="_blank" rel="noreferrer" href="https://pca.st/wtu4690d">Pocketcasts</a></li>
              <li><a target="_blank" rel="noreferrer" href="https://overcast.fm/p2403384-t859cb">Overcasts</a></li>
            </ul>
            <hr/> */}
            <p>If you'd like to sponsor an episode, please send an email to <a href="mailto:codechefshq@gmail.com">codechefshq@gmail.com</a></p>
            <br/>
            <br/>
            <br/>
            <br/>
            {/* <br/>
            <br/> */}
            {/* <br/> */}
            <div className="follow-us-wrapper">
              <hr/>
              <h2>Follow us!</h2>
              <PodcastLinks/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
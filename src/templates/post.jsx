import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import UserInfo from "../components/UserInfo";
import Disqus from "../components/Disqus";
import PostTags from "../components/PostTags";
import SocialLinks from "../components/SocialLinks";
import SEO from "../components/SEO";
// import Footer from "../components/Footer";
import config from "../../data/SiteConfig";
import Audio from "../components/audio/Audio";
import moment from "moment";
export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }

    console.log(postNode.html, "POST HTML");
    console.log(postNode.frontmatter.timestamps);

    console.log(moment.duration(`00:${"00:30"}`).asSeconds());

    return (
      <Layout>
        <section className="cc-container post-container">
          <div className="cc-post-card">
            <div className="cc-padding">
              <Helmet>
                <title>{`${post.title} | ${config.siteTitle}`}</title>
              </Helmet>
              <SEO postPath={slug} postNode={postNode} postSEO />
              {/* Start - Test Example */}
              {/* <div>
                <p>Hello world</p> */}
              {/* <img src={post.cover} alt="Arnold S"/> */}
              {/* </div> */}
              {/* End - Test Example */}
              <div>
                <Audio
                  id={1}
                  index={1}
                  mp3={
                    "https://codechefs.s3.amazonaws.com/000_preview_episode.mp3"
                  }
                  episodeName={post.title}
                  episodeHtml={postNode.html}
                  // currentTrack={currentTrack}
                  // setCurrentTrack={setCurrentTrack}
                  // currentVolume={currentVolume}
                  // setCurrentVolume={setCurrentVolume}
                  // isPlaying={isPlaying}
                  // setIsPlaying={setIsPlaying}
                  // setTrackPlayed={setTrackPlayed}
                />
                <div
                  class="content"
                  dangerouslySetInnerHTML={{ __html: postNode.html }}
                />
                {/* <div className="post-meta">
                  <PostTags tags={post.tags} />
                  <SocialLinks postPath={slug} postNode={postNode} />
                </div>
                <UserInfo config={config} /> */}
                {/* <Disqus postNode={postNode} /> */}
              </div>
            </div>
          </div>
        </section>
        {/* <Footer config={config} /> */}
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;

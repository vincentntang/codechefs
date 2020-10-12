import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
// import UserInfo from "../components/UserInfo";
// import Disqus from "../components/Disqus";
import PostTags from "../components/PostTags";
import SocialLinks from "../components/SocialLinks";
import SEO from "../components/SEO";
// import Footer from "../components/Footer";
import config from "../../data/SiteConfig";
import Audio from "../components/audio/Audio";

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }

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
                  mp3={post.audioUrl}
                  episodeName={post.title}
                  episodeHtml={postNode.html}
                  // currentTrack={currentTrack} 
                  // setCurrentTrack={setCurrentTrack}
                  // currentVolume={currentVolume}
                  // setCurrentVolume={setCurrentVolume}
                  // isPlaying={isPlaying}
                  // setIsPlaying={setIsPlaying}
                  // setTrackPlayed={setTrackPlayed}
                >
                  {/* <h3>{post.title}</h3>
                  <p>{post.shortDescription}</p> */}
                  {/* <div className="danger-html" dangerouslySetInnerHTML={{ __html: postNode.html }} /> */}
                </Audio>
                <div className="post-meta">
                  <PostTags tags={post.tags} />
                  <SocialLinks postPath={slug} postNode={postNode} />
                </div>
                {/* <UserInfo config={config} /> */}
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
        audioUrl
        shortDescription
      }
      fields {
        slug
        date
      }
    }
  }
`;

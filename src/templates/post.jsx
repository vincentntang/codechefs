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
              <div>
                <Audio 
                  id={1} 
                  index={1} 
                  mp3={config.s3bucket + post.audioPath}
                  episodeName={post.title}
                  episodeHtml={postNode.html}
                >
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
        audioPath
        shortDescription
      }
      fields {
        slug
        date
      }
    }
  }
`;

import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import UserInfo from "../components/UserInfo";
import Disqus from "../components/Disqus";
import PostTags from "../components/PostTags";
import SocialLinks from "../components/SocialLinks";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import config from "../../data/SiteConfig";

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
        <section className="cc-container mt-15 post-container">
          <div className="cc-card">
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
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
                <div className="post-meta">
                  <PostTags tags={post.tags} />
                  <SocialLinks postPath={slug} postNode={postNode} />
                </div>
                <UserInfo config={config} />
                {/* <Disqus postNode={postNode} /> */}
              </div>
            </div>
          </div>
        </section>
        <Footer config={config} />
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

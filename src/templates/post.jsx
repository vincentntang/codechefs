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
import PodcastLinks from "../components/PodcastLinks";

export default (props) => {

  const { data, pageContext } = props;
  const { slug } = pageContext;
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }


  const regex = /(\d[:])?\d\d[:]\d\d/g;
  // const regex = /\d\d[:]\d\d/g;
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  // its $& not $1 for whatever reason on capture group
  // let newHtml = episodeHtml.replace(regex, '<span class="timestamp" onClick={jumpToTimestampAudio(\`$&`)}>$&</span>')
  let newHtml = React.useMemo(
    () =>
      postNode.html.replace(
        regex,
        '<span class="timestamp" onClick=window.jumpToTimestamp(`$&`)>$&</span>'
      ),
    [postNode.html]
  );


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

              >
              </Audio>

              <div
                className="danger-html"
                dangerouslySetInnerHTML={{ __html: newHtml }}
              />


              <div className="post-meta">
                <PostTags tags={post.tags} />
              </div>
              <div className="follow-us-wrapper">
                <hr />
                <h2>Follow us!</h2>
                <PodcastLinks />
              </div>

            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
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
        episodeNumber
      }
      fields {
        slug
        date
      }
    }
  }
`;

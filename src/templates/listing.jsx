import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import dinerLogo from "../assets/diner_logo.svg";
import logo from "../assets/code_chefs_transparent.svg";
import sampleMp3 from "../assets/file_example.mp3";
import vincentntang from "../assets/vincentntang.png";
import germangamboa from "../assets/germangamboa.jpeg";
import Menu from "../layout/Menu";
import Footer from "../components/Footer";

class Listing extends React.Component {
  renderPaging() {
    const { currentPageNum, pageCount } = this.props.pageContext;
    const prevPage = currentPageNum - 1 === 1 ? "/" : `/${currentPageNum - 1}/`;
    const nextPage = `/${currentPageNum + 1}/`;
    const isFirstPage = currentPageNum === 1;
    const isLastPage = currentPageNum === pageCount;

    return (
      <div className="paging-container">
        {!isFirstPage && <Link to={prevPage}>Previous</Link>}
        {[...Array(pageCount)].map((_val, index) => {
          const pageNum = index + 1;
          return (
            <Link
              key={`listing-page-${pageNum}`}
              to={pageNum === 1 ? "/" : `/${pageNum}/`}
            >
              {pageNum}
            </Link>
          );
        })}
        {!isLastPage && <Link to={nextPage}>Next</Link>}
      </div>
    );
  }

  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    console.log(postEdges,"POST EDGES FROM ZE TOP!");

    return (
      <Layout>
        <div className="listing-container">
          <div className="posts-container">
            <Helmet title={config.siteTitle} />
            <SEO />
            <section className="cc-container">
              <div className="cc-logo-hero">
                <img src={logo} alt="logo"/>
              </div>
            </section>
            <section className="cc-container">
              <div className="cc-header cc-card">
                <div className="cc-padding cc-intro">
                  <p className="my-0"><span>🎤 </span>Code chefs is a podcast for developers seeking to learn more about webdevelopment. Whether your a fresh out of bootcamp graduate, or a fullstack veteran,
                    we do topics ranging for all levels. As developers who love learning, we hope you enjoy the content here</p>
                </div>
                <div className="cc-portraits">
                  <div className="cc-padding cc-portrait">
                    <div className="header">
                    </div> 
                    <div className="img-wrapper">
                      <img src={vincentntang} alt="vincent tang"/>
                    </div>
                    <div className="desc-wrapper">
                      <div className="description">👨‍🍳 Vincent Tang is a fullstack developer from Orlando, FL. Formerly a kitchen designer. Loves the outdoors and trying new things</div>
                    </div>
                  </div>
                  <div className="cc-padding cc-portrait">
                    <div className="img-wrapper">
                      <img src={germangamboa} alt="german gamboa"/>
                    </div>
                    <div className="desc-wrapper">
                      <div className="description">👨‍🍳 German Gamboa is a fullstack developer from Orlando, FL. Formerly a general manager for a restaurant chain. Likes to learn new things</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <Menu/> */}
            <PostListing postEdges={postEdges} />
            <section className="cc-container">
              {this.renderPaging()}
            </section>
            <Footer config={config} />
          </div>
        </div>
      </Layout>
    );
  }
}

export default Listing;

/* eslint no-undef: "off" */
export const listingQuery = graphql`
  query ListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            shortDescription
          }
        }
      }
    }
  }
`;

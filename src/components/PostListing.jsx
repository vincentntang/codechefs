import React from "react";
import { Link } from "gatsby";
import germanImg from "../../static/logos/germangamboa.jpeg";
import vincentImg from "../../static/logos/vincentntang.jpeg";
import moment from "moment";

const PostListing = props => {
  const getPostList = () => {
    const postList = [];
    props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        shortDescription: postEdge.node.frontmatter.shortDescription,
        description: postEdge.node.fields.description,
      });
    });
    return postList;
  }

  const postList = getPostList();
  return (
    <section className="cc-container post-listing-container">
      <div className="cc-podcast-wrapper">
        {postList.map((post, index) => {
          return (
            <div key={`podcast-${index}`} className="podcast-wrapper cc-card mb-7">
              <Link to={post.path}  className="podcast-episode">
                <div className="cc-padding">
                  <svg>
                    <rect>
                      
                    </rect>
                  </svg>
                  <div className="podcast-inner-card">
                    <div className="podcast-image-left">
                      <div className="portrait-hat">
                        <img className="portrait-img" src={vincentImg} alt="vincent"/>
                      </div>
                      <div className="portrait-hat">
                        <img className="portrait-img"src={germanImg} alt="german"/>
                      </div>
                    </div>
                    <div className="podcast-content-right">
                      <div className="podcast-title">{post.title}</div>
                      <p>{moment(post.date).format('ll')}</p>
                      <p className="mt-0 short-description">{post.shortDescription}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default PostListing;
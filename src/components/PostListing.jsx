import React from "react";
import { Link } from "gatsby";

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
  // return (
  //   <div>
  //     {/* Your post list here. */
  //     postList.map(post => (
  //       <Link to={post.path} key={post.title}>
  //         <h1>{post.title}</h1>
  //       </Link>
  //     ))}
  //   </div>
  // )
  console.log(props, "THIS PROPS");
  return (
    <section className="cc-container post-listing-container">
      {/* <h1 className="text-center mb-2">Episodes</h1> */}
        {/* <div className="menu-header">
          <hr />
          <hr />
          <hr />
          <hr />
        </div> */}
      <div className="cc-podcast-wrapper">
        {postList.map((post, index) => {
          const shortDate = new Date(post.date).toLocaleDateString('en-US');
          return (
            <div key={index} className="podcast-wrapper cc-padding cc-card mb-7">
              <svg>
                <rect>
                  
                </rect>
              </svg>
              <Link to={post.path} key={`podcast-${index}`} className="podcast-episode">
                <div className="podcast-title">{post.title}</div>
                <p>{shortDate}</p>
                <p className="mt-0 short-description">{post.shortDescription}</p>
                {/* <Audio 
                  id={index} 
                  index={index} 
                  mp3={item.audioFile} 
                  currentTrack={currentTrack} 
                  // setCurrentTrack={setCurrentTrack}
                  // currentVolume={currentVolume}
                  // setCurrentVolume={setCurrentVolume}
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  setTrackPlayed={setTrackPlayed}
                /> */}
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default PostListing;

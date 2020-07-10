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
    <section className="cc-container mt-30">
      <h1 className="text-center mb-2">Episodes</h1>
        {/* <div className="menu-header">
          <hr />
          <hr />
          <hr />
          <hr />
        </div> */}
      <div className="podcast-wrapper">
        {postList.map((post, index) => {
          return (
            <div key={index} className="cc-menu cc-padding cc-card mb-7">
              <div key={`podcast-${index}`} className="podcast-episode">
                <Link to={post.path}>{post.title}</Link>
                <p className="short-description">{post.shortDescription}</p>
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
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default PostListing;

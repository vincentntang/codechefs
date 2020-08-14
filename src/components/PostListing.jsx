import React from "react";
import { Link } from "gatsby";
import Audio from "./audio/Audio";
import codeChefsHat from "../assets/code_chefs_hat.svg";
import germanImg from "../assets/germangamboa.jpeg";
import vincentImg from "../assets/vincentntang.jpeg";
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
          return (
            <>
            {index===0 && 
              <>
                <div className="cc-post-card mb-15">
                  <div className="cc-padding">
                    <Audio 
                      id={1} 
                      index={1} 
                      mp3={'https://codechefs.s3.amazonaws.com/000_preview_episode.mp3'}
                      episodeName={post.title}
                      // currentTrack={currentTrack} 
                      // setCurrentTrack={setCurrentTrack}
                      // currentVolume={currentVolume}
                      // setCurrentVolume={setCurrentVolume}
                      // isPlaying={isPlaying}
                      // setIsPlaying={setIsPlaying}
                      // setTrackPlayed={setTrackPlayed}
                    />
                    <div className="frontpage-episode pt-5">
                      <Link to={post.path} key={`podcast-${index}`} className="podcast-episode">
                        <div className="podcast-title">{post.title}</div>
                        <p>{moment(post.date).format('ll')}</p>
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
                  </div>
                </div>
              </>
            }
          
            {index===1 && <div className="earlier-episodes-wrapper">
              <img className="hat-img" src={codeChefsHat} alt="logo hat"/>
              <p className="earlier-episodes-title">Older Episodes</p>
            </div>}
            {index >0 &&
              <div key={index} className="podcast-wrapper cc-card mb-7">
                <Link to={post.path} key={`podcast-${index}`} className="podcast-episode">
                  {/* <div className="lol-hats">
                    <img className="hat-img" src={codeChefsHat} alt="logo hat"/>
                  </div> */}
                  <div className="cc-padding">
                    <svg>
                      <rect>
                        
                      </rect>
                    </svg>
                    <div className="podcast-inner-card">
                      <div className="podcast-image-left">
                        <div className="portrait-hat">
                          <img className="portrait-img" src={vincentImg} alt="vincent"/>
                          {/* <img className="hat-img" src={codeChefsHat} alt="logo hat"/> */}
                        </div>
                        <div className="portrait-hat">
                          <img className="portrait-img"src={germanImg} alt="german"/>
                          {/* <img className="hat-img" src={codeChefsHat} alt="logo hat"/> */}
                        </div>
                      </div>
                      <div className="podcast-content-right">
                        <div className="podcast-title">{post.title}</div>
                        <p>{moment(post.date).format('ll')}</p>
                        <p className="mt-0 short-description">{post.shortDescription}</p>
                      </div>
                       
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
                </Link>
              </div>
              }
            </>
          )
        })}
      </div>
    </section>
  )
}
export default PostListing;

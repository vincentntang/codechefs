import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";

const PostTags = (props) => {
  const { tags } = props;
  return (
    <div className="post-tag-container">
      <div className="tag-desc">Tags:</div>
      <div className="tag-list">
        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <button type="button">{tag}</button>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default PostTags;

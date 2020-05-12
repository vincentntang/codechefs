import React, { Component } from "react";
import "./UserLinks.css";

const UserLinks = (props) => {
  const getLinkElements = () => {
    const { userLinks } = props.config;
    const { labeled } = props;
    return userLinks.map(link => (
      <a href={link.url}>
        <button type="button" key={link.label}>
          {labeled ? link.label : ""}
        </button>
      </a>
    ));
  }

  const { userLinks } = props.config;
  if (!userLinks) {
    return null;
  }
  return <div className="user-links">{getLinkElements()}</div>;
}

export default UserLinks;

import React from 'react';
import './PostDetails.css';

export function PostDetails({ postDetails }) {
  return (
    <div className="post-details">
      <h3>Posted by: {postDetails.username}</h3>
      {postDetails.imageURL && <img src={postDetails.imageURL} alt="Post" />}
    </div>
  );
}

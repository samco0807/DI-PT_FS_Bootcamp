import React from "react";

const Posts = ({ posts }) => {
  return (
    <div>
      <h1>Posts:</h1>
      {posts.map((post) => (
        <h2 key={post.id}>
          {post.username} - {post.email}
        </h2>
      ))}
    </div>
  );
};

export default Posts;

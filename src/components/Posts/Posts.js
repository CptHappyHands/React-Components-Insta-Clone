// import React from 'react';
// import Post from './Post';
// import './Posts.css';

// // const Posts = (props) => {
// //   // 🔥 Make sure the parent of Posts is passing the right props!
// //   const { likePost, posts } = props;
// //   console.log(props)
// //   return (
// //     <div className='posts-container-wrapper'>
// //       {/* Map through the posts array returning a Post component at each iteration */}
// //       {/* Check the implementation of Post to see what props it requires! */}
// //       {posts.map(post => {
// //       return <Post key={post.id} post={posts} likePost={likePost} />
// //     })}
// //     </div>
// //   );
// // };

// // export default Posts;

import React from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  console.log(props);
  return (
    <div className="posts-container-wrapper">
      {
        /* Map through the posts array returning a Post component at each iteration */
        posts.map((postObj) => {
          return Post({ post: postObj, likePost: likePost });
        })
      }

      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;

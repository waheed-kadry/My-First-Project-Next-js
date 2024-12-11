import React from "react";

async function PostDetails({ params }) {
  await new Promise((resolve) => {
    resolve();
  }, 2000);

  let res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postid}`,
    {
      cache: "force-cache", // SSG => do cache
      // cache: "no-store", // SSR => no cache [Never cache]
      next: {
        revalidate: 120, // seconds // ISR => do cache and control in update Data => [api]
      },
    }
  );
  let post = await res.json();

  return (
    <div className="posts">
      <h1>
        {post.id} ={">"} {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetails;

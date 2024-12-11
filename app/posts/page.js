import Link from "next/link";
import React from "react";
import "./posts.css";
export const metadata = {
  title: "Posts Route",
};
async function PostPage() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache", // SSG => do cache
    // cache: "no-store", // SSR => no cache [Never cache]
    next: {
      revalidate: 120, // seconds // ISR => do cache and control in update Data => [api]
    },
  });
  let posts = await res.json();


  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column",
    }}>
      <h1 className="posts-heading">post page</h1>
      {posts.map((e) => {
        return (
          <Link href={`/posts/${e.id}`} key={e.id} className="posts">
            <h1>
           {e.title}
            </h1>
   
          </Link>
        );
      })}
    </div>
  );
}

export default PostPage;

import React, { Suspense } from "react";
import Loading from "./loading";
import PostDetails from "@/app/Components/posts/PostDetails";

async function PostDetailsPage({ params }) {


  return (
    <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
      }}>
<h1 className="posts-heading">Post Details</h1>
<Suspense fallback={<Loading/>}>
      <PostDetails params={params}/>
</Suspense>
    
    </div>
  );
}

export default PostDetailsPage;

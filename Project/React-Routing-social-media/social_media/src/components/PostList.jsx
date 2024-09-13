import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostContext } from "../store/Post-store-app";
import WelcomeMassage from "./WelcomeMassage";
import LodingSpinner from "./LodingSpinner";

const PostList = () => {
  const { PostList, fetcheddata } = useContext(PostContext);


  return (
    <>
     {fetcheddata&& <LodingSpinner/>}
      { !fetcheddata&&PostList.length === 0 && (
        <WelcomeMassage ></WelcomeMassage>
      )}
      { !fetcheddata&&PostList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;

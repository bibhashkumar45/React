import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostContext } from "../store/Post-store-app";
import WelcomeMassage from "./WelcomeMassage";
import LodingSpinner from "./LodingSpinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const PostLists=useLoaderData();
  return (
    <>
      { PostLists.length === 0 && 
        <WelcomeMassage/>
      }
      { PostLists.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export const postLoader=async()=>
{
  return  await fetch("https://dummyjson.com/posts",)
  .then((res) => res.json())
  .then((data) => {
    return data.posts;
  });
}
export default PostList;

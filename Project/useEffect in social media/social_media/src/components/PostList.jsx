import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostContext } from "../store/Post-store-app";
import WelcomeMassage from "./WelcomeMassage";
import LodingSpinner from "./LodingSpinner";

const PostList = () => {
  const { PostList, addInitialPost } = useContext(PostContext);
  const [fetcheddata,setfetchData]=useState(false);



  // useEffect(()=>{
  //   setfetchData(true);
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPost(data.posts);
  //       setfetchData(false);
  //     });
  // },[]);


  // Advanced useEffect---------------------

  useEffect(()=>{
    setfetchData(true);

    const controller=new AbortController();
    const signal=controller.signal; 

    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setfetchData(false);
      });

      return ()=>{
        console.log("Cleaning up UseEffect.");
        controller.abort();
      };
  },[]);
    
    
  

  const handleFetchButton = () => {};

  return (
    <>
     {fetcheddata&& <LodingSpinner/>}
      { !fetcheddata&&PostList.length === 0 && (
        <WelcomeMassage onClickFetchButton={handleFetchButton}></WelcomeMassage>
      )}
      { !fetcheddata&&PostList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;

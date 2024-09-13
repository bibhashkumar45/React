import { createContext, useCallback, useEffect, useReducer, useState } from "react";
export const PostContext=createContext(
  {
    PostList:[],
    addPost:()=>{},
    deletepost:()=>{},
    fetcheddata: false,
  }
);

const postListReducer=(currPost,action)=>
{
  let newPostlist=currPost;
  if(action.type==="DELETE_POST")
  {
    newPostlist=currPost.filter((post)=>post.id!== action.payload.postId);

  }
  else if(action.type==="Add_Initial_Post")
  {
    newPostlist=action.payload.posts;
    
  }
  else if(action.type==="AddPost")
  {
    newPostlist=[action.payload, ...currPost];

  }
  return newPostlist;
}

const PostcontextProvider=({children})=>
{



  const [fetcheddata,setfetchData]=useState(false);
  const [PostList,postDispatch]=useReducer(postListReducer,[]);


  const addPost=(post)=>
  {

    postDispatch({
      type:"AddPost",
      payload:post,
    })

  }



  // use of callback

  const addInitialPost=(posts)=>
    {
      postDispatch({
        type:"Add_Initial_Post",
        payload:
        {
          posts,
        }
      })
    }

  const deletepost=useCallback((postId)=>
  {
    postDispatch({
      type:"DELETE_POST",
      payload:
      {
        postId,
      }
    });
    

  },[postDispatch]);



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
      })
      .catch((err) => {
        // Check if the error is due to fetch being aborted
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          console.error('Fetch error:', err);
        }
        setfetchData(false); // Make sure to stop loading indicator even on error
      });

      return ()=>{
        controller.abort();
      };
  },[]);


  return <PostContext.Provider  value={
    {PostList,addPost,deletepost,fetcheddata}
  }>{children}</PostContext.Provider>

}

export default PostcontextProvider;



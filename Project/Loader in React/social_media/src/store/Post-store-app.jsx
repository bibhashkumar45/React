import { createContext, useCallback, useEffect, useReducer, useState } from "react";
export const PostContext=createContext(
  {
    PostLists:[],
    addPost:()=>{},
    deletepost:()=>{},
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


  const [PostLists,postDispatch]=useReducer(postListReducer,[]);


  const addPost=(post)=>
  {

    postDispatch({
      type:"AddPost",
      payload:post,
    })

  }





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


  return <PostContext.Provider  value={
    {PostLists,addPost,deletepost}
  }>{children}</PostContext.Provider>

}

export default PostcontextProvider;



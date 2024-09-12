import { createContext, useReducer } from "react";
export const PostContext=createContext(
  {
    PostList:[],
    addPost:()=>{},
    deletepost:()=>{},
    addInitialPost:()=>{},
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

  const [PostList,postDispatch]=useReducer(postListReducer,[]);


  const addPost=(userId,title,body,reaction,tags)=>
  {

    postDispatch({
      type:"AddPost",
      payload:
      {
        id:Date.now(),
        userId:userId,
        title:title,
        body:body,
        reaction:reaction,
        tags:tags,

      }

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

  const deletepost=(postId)=>
  {
    postDispatch({
      type:"DELETE_POST",
      payload:
      {
        postId,
      }
    });
    

  }


  return <PostContext.Provider  value={
    {PostList,addPost,deletepost,addInitialPost}
  }>{children}</PostContext.Provider>

}

export default PostcontextProvider;



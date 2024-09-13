import { useContext, useRef } from "react";
import { PostContext } from "../store/Post-store-app";


const CreatePost=()=>
{
  const {addPost}=useContext(PostContext);

  const userIdComponent =useRef();
  const titleComponent =useRef();
  const bodyComponent =useRef();
  const ReactionComponent =useRef();
  const tagsComponent =useRef();

  const handleSummitBitton=(event)=>
  {
    event.preventDefault();
    const userId=userIdComponent.current.value;
    const title=titleComponent.current.value;
    const body=bodyComponent.current.value ;  
    const views=ReactionComponent.current.value;
    const tags=tagsComponent.current.value.split(' ');

    // userIdComponent.current.value=" ";
    // titleComponent.current.valu=" ";
    // bodyComponent.current.value=" ";
    // ReactionComponent.current.value=" ";
    // tagsComponent.current.value=" ";

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          userId:userId,
          title:title,
          body:body,
          views:views,
          tags:tags,
        }
      )
    })

    .then(res => res.json())
    .then((post)=> {addPost(post)});



    

    // addPost(userId,title,body,reaction,tags);

  }
  
  return (
    <>
    <form className="create-post" onSubmit={handleSummitBitton}>


    <div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter User Id here </label>
    <input type="text" className="form-control" id="userId" aria-describedby="emailHelp" placeholder="Your user id....." ref={userIdComponent}/>
  </div>

  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Tilte</label>
    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="How are you feeling....." ref={titleComponent}/>
  </div>

  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea type="text" className="form-control" id="body" aria-describedby="emailHelp" placeholder="tell me more about ...." rows={3} ref={bodyComponent} />
  </div>


  
  <div className="mb-3">
    <label htmlFor="views" className="form-label">Number of likes </label>
    <input type="Number" className="form-control" id="views" aria-describedby="emailHelp" placeholder="How many people reacted to this post....." ref={ReactionComponent}/>
  </div>


  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter your hashtag here </label>
    <input type="text" className="form-control" id="tags" aria-describedby="emailHelp"
    placeholder="Please enter tag using space....." ref={tagsComponent}/>
  </div>

  
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </>
  )
}

export default CreatePost;
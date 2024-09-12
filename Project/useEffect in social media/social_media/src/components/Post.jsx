import { useContext } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { PostContext } from "../store/Post-store-app";

const Post = ({ post }) => {
  const {deletepost}=useContext(PostContext);
  return (
    <>
      <div className="card post-card" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletepost(post.id)}>
              <RiDeleteBack2Fill />

              <span className="visually-hidden">unread messages</span>
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span className="badge text-bg-primary tag-post" key={tag}>
              {tag}
            </span>
          ))}
          <div className="like-Btn">
          <button type="button" className="btn btn-success position-relative likeBtn">
            Like
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
             {post.reaction}
            </span>
          </button>
          </div>
          
        
        
        </div>
      </div>
    </>
  );
};

export default Post;

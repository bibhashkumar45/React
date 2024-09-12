import { useContext } from "react";
import Post from "./Post";
import { PostContext } from "../store/Post-store-app";
import WelcomeMassage from "./WelcomeMassage";

const PostList = () => {
  const { PostList, addInitialPost } = useContext(PostContext);

  const handleFetchButton = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data)=>{addInitialPost(data.posts)});
  };

  return (
    <>
      {PostList.length === 0 && (
        <WelcomeMassage onClickFetchButton={handleFetchButton}></WelcomeMassage>
      )}
      {PostList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;

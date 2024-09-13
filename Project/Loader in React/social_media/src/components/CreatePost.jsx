import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  return (
    <>
      <Form method="POST"  className="create-post">
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter User Id here{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            aria-describedby="emailHelp"
            placeholder="Your user id....."
            name="userId"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Tilte
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            placeholder="How are you feeling....."
            name="title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            className="form-control"
            id="body"
            aria-describedby="emailHelp"
            placeholder="tell me more about ...."
            rows={3}
            name="body"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="views" className="form-label">
            Number of likes{" "}
          </label>
          <input
            type="Number"
            className="form-control"
            id="views"
            aria-describedby="emailHelp"
            placeholder="How many people reacted to this post....."
            name="views"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashtag here{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            aria-describedby="emailHelp"
            placeholder="Please enter tag using space....."
            name="tags"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </>
  );
};

export async function CreatePostAction(data){
const formData= await data.request.formData();
const postData=Object.fromEntries(formData);
postData.tags=postData.tags.split(" ");


  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(postData);
      // addPost(post);

    });

  return redirect("/");
};

export default CreatePost;

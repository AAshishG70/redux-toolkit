import { useState } from "react";
import { useSelector } from "react-redux";

const AddPost = () => {
  const users = useSelector((store) => store.users);

  console.log(users);

  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState("");
  const [content, setContent] = useState("");

  const submitHandler = () => {
    if (title && content && userId) {
      // dispatch
      setTitle("");
      setUserId("");
      setContent("");
    }
  };

  const userOptions = [];
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          // value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value=""></option>
          {/* <option value="1">Dude Lebowski</option> */}
          {userOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="button" onClick={submitHandler}>
          Save Post
        </button>
      </form>
    </section>
  );
};
export default AddPost;
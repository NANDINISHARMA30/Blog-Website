import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/blogs", { title, content });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Publish</button>
    </form>
  );
};

export default CreateBlog;
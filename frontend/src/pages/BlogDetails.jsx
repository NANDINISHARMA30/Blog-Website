import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const { data } = await API.get(`/blogs/${id}`);
      setBlog(data);
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <small>By {blog.author?.name}</small>
    </div>
  );
};

export default BlogDetails;
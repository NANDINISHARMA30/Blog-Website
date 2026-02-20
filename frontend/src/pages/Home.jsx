import { useEffect, useState } from "react";
import API from "../api/axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data } = await API.get("/blogs");
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      <h2>All Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <Link to={`/blog/${blog._id}`}>
            <h3>{blog.title}</h3>
          </Link>
          <p>By {blog.author?.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
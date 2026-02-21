import { useEffect, useState } from "react";
import API from "../api/axios";
import { Link } from "react-router-dom";

const fallbackPosts = [
  {
    _id: "f-1",
    title: "How AI services can transform your business",
    author: { name: "Smith" },
    createdAt: "2026-02-11",
    image:
      "https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&w=1200&q=80",
  },
  {
    _id: "f-2",
    title: "Top programming languages for AI development",
    author: { name: "Smith" },
    createdAt: "2026-02-10",
    image:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    _id: "f-3",
    title: "AI education: personalized learning and more",
    author: { name: "Smith" },
    createdAt: "2026-02-08",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    _id: "f-4",
    title: "Harnessing predictive analytics in business",
    author: { name: "Smith" },
    createdAt: "2026-02-06",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    _id: "f-5",
    title: "The future AI in healthcare: revolutionizing care",
    author: { name: "Smith" },
    createdAt: "2026-02-05",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    _id: "f-6",
    title: "AI revolutionizing customer experience in retail",
    author: { name: "Smith" },
    createdAt: "2026-02-03",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80",
  },
];

const formatDate = (value) => {
  const date = value ? new Date(value) : new Date();
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await API.get("/blogs");
        setBlogs(Array.isArray(data) ? data : []);
      } catch (error) {
        setBlogs([]);
      }
    };

    fetchBlogs();
  }, []);

  const displayPosts = (blogs.length ? blogs : fallbackPosts).slice(0, 6);
  const recentPosts = displayPosts.slice(0, 3);
  const categories = [
    "AI Integration Advisory",
    "AI Training & Workshops",
    "Data Analytics & Insights",
    "Open AI",
    "Robotic Process Automation",
  ];
  const tags = [
    "AI",
    "Agency",
    "Data Analytics",
    "Development",
    "Digital",
    "Robotics",
    "Software",
    "Technology",
  ];

  return (
    <div className="app-shell">
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1>Explore Our Blog For Creative Perspectives</h1>
            <p>
              Discover fresh insights and practical ideas by exploring our blog,
              where we share useful perspectives for modern teams.
            </p>
            <div style={{ marginTop: "1.35rem" }}>
              <Link to="/create" className="nav-btn primary-btn">
                Discover More
              </Link>
            </div>
          </div>
          <div className="hero-visual" />
        </div>
      </section>

      <section className="content">
        <div className="container content-grid">
          <div className="posts-grid">
            {displayPosts.map((blog, index) => {
              const image =
                blog.image ||
                fallbackPosts[index % fallbackPosts.length].image;

              return (
                <article key={blog._id} className="post-card">
                  <img src={image} alt={blog.title} className="post-image" />
                  <div className="post-content">
                    <Link to={`/blog/${blog._id}`}>
                      <h3>{blog.title}</h3>
                    </Link>
                    <p className="post-meta">
                      By {blog.author?.name || "Admin"} • {formatDate(blog.createdAt)}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="sidebar">
            <section className="sidebar-section">
              <h4>Search</h4>
              <div className="search-row">
                <input type="text" placeholder="Search here..." />
                <button type="button" className="nav-btn primary-btn">
                  Go
                </button>
              </div>
            </section>

            <section className="sidebar-section">
              <h4>Categories</h4>
              {categories.map((category) => (
                <p key={category} className="post-meta" style={{ margin: "0.4rem 0" }}>
                  ○ {category}
                </p>
              ))}
            </section>

            <section className="sidebar-section">
              <h4>Recent Posts</h4>
              {recentPosts.map((post, index) => (
                <div key={post._id} className="recent-item">
                  <img
                    src={post.image || fallbackPosts[index % fallbackPosts.length].image}
                    alt={post.title}
                  />
                  <p>{post.title}</p>
                </div>
              ))}
            </section>

            <section className="sidebar-section">
              <h4>Tags</h4>
              <div className="chip-list">
                {tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </section>

      <section className="footer-cta">
        <div className="container footer-cta-grid">
          <div>
            <h2>Let’s start project together!</h2>
            <p>
              To lead your market, you need ambition and smart execution. Share
              your goals and we’ll help shape the right blog strategy.
            </p>
          </div>

          <form className="contact-grid">
            <input type="text" placeholder="What is your name?" />
            <input type="email" placeholder="E-mail" />
            <input type="text" placeholder="Phone number" />
            <input type="text" placeholder="Company name" />
            <textarea placeholder="A few words about your project" />
            <div>
              <button type="submit" className="nav-btn primary-btn">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© 2026 AimoBlog. All rights reserved.</span>
          <span>Privacy Policy • Terms of Use</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
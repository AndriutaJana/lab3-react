import React from "react";
import "./Blog.css";
import code from "/images/code.png";
import blog from "/images/blog.png";
import blog2 from "/images/blog2.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>News and blog</h1>
        <p>
          Stay up to date with the latest opportunities and news in the IT field
        </p>
      </div>

      <div className="blog-posts">
        {[code, blog, blog2].map((image, index) => (
          <div key={index} className="blog-post">
            <div className="post-image">
              <img src={image} alt="Blog post" />
            </div>
            <div className="post-content">
              <div className="post-date">20 March 2024</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
              <button className="read-more-btn">
                Read more
                <KeyboardArrowRightIcon />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="view-all-btn">View all</button>
    </div>
  );
};

export default Blog;

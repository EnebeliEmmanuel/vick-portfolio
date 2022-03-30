import React from "react";
import "./BlockchainCard.css";

export default function BlockchainCard({blog, isDark}) {
  function openUrlInNewTab(url) {
    if (url !== undefined) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }

  return (

    <div onClick={() => openUrlInNewTab(blog.url)}>
      <div className={isDark ? "blog-container dark-mode" : "blog-container"}>
        
        <a
          className={
            isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"
          }
          href="#blockchain"
        >
          <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
            {blog.title}
          </h3>
          <p className={isDark ? "small-dark small" : "small"}>
            {blog.description}
          </p>
          <p className={isDark ? "small-dark small" : "small"}>
            {blog.iframe}
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
}

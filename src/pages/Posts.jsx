import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css"; 

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Errore nel caricamento:", error));
  }, []);

  return (
    <div className="container">
      <h1>Lista dei Post</h1>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.titolo || "Senza titolo"}</h3>
            <Link to={`/posts/${post.id}`}>
              <img 
                src={`http://localhost:3000${post.immagine}`} 
                alt={post.titolo} 
                onError={(e) => { e.target.src = "https://via.placeholder.com/300"; }} 
              />
            </Link>
            <p>{post.contenuto || "Nessun contenuto disponibile"}</p>
            <p className="tags"><strong>Tags:</strong> {post.tags ? post.tags.join(", ") : "Nessun tag"}</p>
            <Link to={`/posts/${post.id}`} className="details-link">Leggi di più</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
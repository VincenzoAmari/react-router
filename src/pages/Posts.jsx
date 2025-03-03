import React, { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/posts") // Assicurati che l'URL sia corretto
      .then((response) => response.json())
      .then((data) => {
        console.log("Dati ricevuti:", data);
        setPosts(data);
      })
      .catch((error) => console.error("Errore nel caricamento:", error));
  }, []);

  return (
    <div>
      <h1>Lista dei Post</h1>
      <div style={{ display: "grid", gap: "20px" }}>
        {posts.map((post) => (
          <div key={post.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
            <h3>{post.titolo || "Senza titolo"}</h3>
            <img src={post.immagine} alt={post.titolo} style={{ width: "100%", maxWidth: "300px" }} />
            <p>{post.contenuto || "Nessun contenuto disponibile"}</p>
            <p><strong>Tags:</strong> {post.tags ? post.tags.join(", ") : "Nessun tag"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;

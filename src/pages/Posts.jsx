import { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log("Dati ricevuti:", data); // Debug per vedere i dati
        setPosts(data);
      })
      .catch((error) => console.error("Errore nel caricamento dei post:", error));
  }, []);

  return (
    <div>
      <h2>Lista dei Post</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px" }}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px", background: "#f9f9f9" }}>
              <h3>{post.title || "Senza titolo"}</h3>
              <p>{post.body || "Nessun contenuto disponibile"}</p>
            </div>
          ))
        ) : (
          <p>⚡ Nessun post disponibile oppure in caricamento...</p>
        )}
      </div>
    </div>
  );
}

export default Posts;

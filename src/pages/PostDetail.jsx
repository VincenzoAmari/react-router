import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function PostDetail() {
  const { id } = useParams(); // ID  URL
  const [post, setPost] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        const foundPost = data.find((p) => p.id === parseInt(id));
        setPost(foundPost);
      })
      .catch((error) => console.error("Errore nel caricamento:", error));
  }, [id]);

 }
import axios from "axios";
import React, { useState, useEffect } from "react";

const Jump = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/")
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!post) return null;
  return (
    <div>
      <h1>
        {post.map((i) => {
          return (
            <section key={i._id}>
              <h1>{i.name}</h1>
              <p>{i.description}</p>
              <img src={i.image} alt="" />
            </section>
          );
        })}
      </h1>
    </div>
  );
};

export default Jump;

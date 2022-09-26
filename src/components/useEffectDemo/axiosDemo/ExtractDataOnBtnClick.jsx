import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function ExtractDataOnBtnClick() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(`Error:${error}`);
      });
  }, [idFromButtonClick]);

  //   const handleClick = () => {
  //     setIdFromButtonClick(id);
  //   };

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(event) => setId(event.target.value)}
      ></input>
      <button
        type="button"
        onClick={() => {
          setIdFromButtonClick(id);
        }}
      >
        Fetch Post
      </button>
      {/* <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul> */}
      <div>{post.title}</div>
    </div>
  );
}

export default ExtractDataOnBtnClick;

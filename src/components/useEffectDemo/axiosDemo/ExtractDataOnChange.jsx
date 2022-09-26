import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

/**
 * @description On change of the id the content is rendered
 * @returns
 */
function ExtractDataOnChange() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(`Error:${error}`);
      });
  }, [id]);

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(event) => setId(event.target.value)}
      ></input>
      {/* <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul> */}
      <div>{post.title}</div>
    </div>
  );
}

export default ExtractDataOnChange;

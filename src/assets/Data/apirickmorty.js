import React, { useEffect, useState } from "react";

//https://jsonplaceholder.typicode.com/guide/

const ApiRickMorty = props => {
  const fetchPosts = () => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(response => response.json())
      .then(json => console.log(json));
  };
  fetchPosts();
  useEffect(() => {
    console.log("Useeffect");
  }, []);
  return <h1>rick and morty22</h1>;
};

export default ApiRickMorty;

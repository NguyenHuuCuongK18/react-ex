import React, { useState, useEffect } from 'react';

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Adam" });
    }, 1000);
  });
}

function Slide10_17() {
  const [id, setId] = useState("loading...");
  const [name, setName] = useState("loading...");

  useEffect(() => {
    fetchUser().then((user) => {
      setId(user.id);
      setName(user.name);
    });
  }, []);

  return (
    <>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
    </>
  );
}

export default Slide10_17;
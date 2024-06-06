import React, { useState, useEffect } from 'react';
import axios from 'axios';

const E27 = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Lỗi: {error}</div>;
  }

  return (
    <div>
      <h1>Minh Họa Axios</h1>
      {data ? (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      ) : (
        <div>Đang tải...</div>
      )}
    </div>
  );
};

export default E27;

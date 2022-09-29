import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => navigate('/'),
    []);

  return (
    <h1 className="mx-5 my-5">Page NotFound</h1>
  );
};

export default NotFound;

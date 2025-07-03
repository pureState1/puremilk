// src/components/Loader.jsx
import React from 'react';
import '../styles/Loader.css';

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="spinner"></div>
      <p>Loading PureState...</p>
    </div>
  );
};

export default Loader;

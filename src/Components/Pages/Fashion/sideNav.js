import React from 'react'
import { Link } from 'react-router-dom';
import './Fashion.scss';

const SideNav = () => {
  return (
    <div className="side-nav">
      <h5>Category</h5>
      <p>
        <Link to="/women">women</Link>
      </p>
      <p>
        <Link to="/men">Men</Link>
      </p>
      <p>
        <Link to="/girls">Girls</Link>
      </p>
      <p>
        <Link to="/boys">Boys</Link>
      </p>
    </div>
  );
}

export default SideNav
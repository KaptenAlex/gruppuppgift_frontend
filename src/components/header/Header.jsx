import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        SomeGoodName?
      </Link>
      <div className="options">
        <Link className="option" to="/home">
          Home
        </Link>

        <Link className="option" to="/signin">
          Sign In
        </Link>
      </div>
    </div>
  );
}

import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <i className="fa fa-gift"></i>
        COOL-COMPANY
      </Link>
      <div className="options">
        <Link className="option" to="/home">
          <i className="fa fa-home mr-2"></i>
          Home
        </Link>

        <Link className="option" to="/login">
          <i className="fa fa-sign-in mr-2"></i>
          Sign In
        </Link>
      </div>
    </div>
  );
}

import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  function getToken() {
    return localStorage.getItem('token');
  }
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
        {getToken() !== null ? (
          <div
            className="option"
            onClick={() => localStorage.removeItem('token')}
          >
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/login">
            <i className="fa fa-sign-in mr-2"></i>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}

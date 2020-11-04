import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';

export default function Header({ isAuthenticated }) {
  return (
    <div className="header">
      <div className="logo-container">
        <i className="fa fa-gift"></i>
        COOL-COMPANY
      </div>
      <div className="options">
        <Link className="option" to="/home">
          <i className="fa fa-home mr-2"></i>
          Home
        </Link>
        {isAuthenticated ? (
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

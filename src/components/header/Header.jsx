import React, { useContext } from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/userContext';

export default function Header() {
  const { token, setToken } = useContext(UserContext);
  console.log(token, 'TOKEN');
  return (
    <div className="header">
      <div className="logo-container">
        <i className="fa fa-gift"></i>
        COOL-COMPANY
      </div>
      {token ? (
        <div className="options">
          <Link className="option" to="/home">
            <i className="fa fa-home mr-2"></i>
            Home
          </Link>
          <div
            className="option"
            onClick={() => {
              localStorage.removeItem('token');
              setToken(null);
            }}
          >
            Sign Out
          </div>
        </div>
      ) : (
        <div className="options">
          <Link className="option" to="/login">
            <i className="fa fa-sign-in mr-2"></i>
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
}

import React, { useContext } from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/userContext';
import { ReactComponent as Logo } from '../../assets/lego-head.svg';

export default function Header() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  return (
    <div className="header">
      <div className="logo-container">
        <Logo className="logo" />
      </div>
      {currentUser ? (
        <div className="options">
          <div className="option currentUser">
            Welcome : {currentUser.firstName}
          </div>
          <Link className="option" to="/home">
            <i className="fa fa-home mr-2"></i>
            Home
          </Link>
          <div
            className="option"
            onClick={() => {
              localStorage.removeItem('token');
              setCurrentUser(null);
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

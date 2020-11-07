import React, { useEffect, useState, useContext } from 'react';
import Input from './../components/Input';
import Title from './../components/Title';
import Button from './../components/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import UserContext from '../contexts/userContext';
import UserDatakit from '../data/UserDatakit';

const StyledWindow = styled.div`
    width 30%;
    padding: 30px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display:flex;
    justify-content: center;
`;

const ROOT_URL = 'https://frebi.willandskill.eu/';
const LOGIN_URL = `${ROOT_URL}api-token-auth/`;
const ACTIVATE_URL = `${ROOT_URL}auth/users/activate/`;

const userDataKit = new UserDatakit();

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const { setToken } = useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();
    const payload = {
      email,
      password,
    };
    try {
      fetch(LOGIN_URL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        if (res.status !== 200) {
          console.log(
            'Looks like there was a problem. Status Code: ' + res.status
          );
          setErrorMsg('Invalid credentials.');
          return;
        }
        res.json().then((data) => {
          userDataKit.setSessionToken(data.token);
          setToken(userDataKit.getSessionToken(data.token));
          props.history.push('/home');
        });
      });
    } catch (err) {
      console.log(err);
    }
    setEmail('');
    setPassword('');
  }
  /* VG*Aktiveraanvändaren */
  function activateAccount() {
    if (props.location.search !== '') {
      let params = queryString.parse(props.location.search);
      console.log(params);
      fetchActivateAccount(params.uid, params.token);
    }
    return;
  }
  function fetchActivateAccount(uid, token) {
    console.log(uid, token);
    const payload = {
      uid,
      token,
    };
    try {
      fetch(ACTIVATE_URL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        if (res.status !== 201) {
          console.log(
            'Looks like there was a problem. Status Code: ' + res.status
          );
          return;
        }
        props.history.push('/login');
      });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    activateAccount();
  }, []);
  return (
    <StyledWindow>
      <form onSubmit={handleSubmit}>
        <Title title="Log in" />

        {errorMsg && (
          <div className="alert alert-danger mb-3" role="alert">
            {errorMsg}{' '}
          </div>
        )}

        <Input
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" btnText="Log in" bgColor="#4CAF50" />
        <Link to="/signup">
          <p>I do not have an account</p>
        </Link>
      </form>
    </StyledWindow>
  );
}

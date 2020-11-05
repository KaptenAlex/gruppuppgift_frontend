import React, { useState } from 'react';
import Input from './../components/Input';
import Title from './../components/Title';
import Button from './../components/Button';
import styled from 'styled-components';

const StyledWindow = styled.div`
    width 30%;
    padding: 30px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20vh;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ROOT_URL = 'https://frebi.willandskill.eu/';
const LOGIN_URL = `${ROOT_URL}api-token-auth/`;

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const payload = {
      email,
      password,
    };
    console.log(payload);
    try {
      fetch(LOGIN_URL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        if (res.status !== 200) {
          console.log(res);
          console.log(
            'Looks like there was a problem. Status Code: ' + res.status
          );
          setErrorMsg('Invalid credentials.');
          return;
        }
        res.json().then((data) => {
          console.log(data);
          localStorage.setItem('token', data.token);
          props.history.push('/home');
        });
      });
    } catch (err) {
      console.log(err);
    }
    setEmail('');
    setPassword('');
  }

  return (
    <StyledWindow>
      <form onSubmit={handleSubmit}>
        <Title />

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
        <Button type="submit" />
      </form>
    </StyledWindow>
  );
}

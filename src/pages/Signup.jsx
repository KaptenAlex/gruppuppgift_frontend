import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import Title from '../components/Title';
import styled from 'styled-components';

const ROOT_URL = 'https://frebi.willandskill.eu/';
const SIGNUP_URL = `${ROOT_URL}auth/users/`;

const StyledWindow = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-bottom: 20px;
`;

export default function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [organisationName, setOrganisationName] = useState('');
  const [organisationKind] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSccessMsg] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMsg('Password dont match');
      return;
    }
    const payload = {
      firstName,
      lastName,
      email,
      password,
      organisationName,
      organisationKind,
    };
    console.log(payload);
    try {
      fetch(SIGNUP_URL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res);
        if (res.status !== 201) {
          return;
        }
        res.json().then((data) => {
          console.log(data);
          setSccessMsg('User Created!');
          setFirstName('');
          setLastName('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          setOrganisationName('');
        });
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <StyledWindow className="container">
      <form onSubmit={handleSubmit}>
        <Title title="Sign Up" />
        {errorMsg && (
          <div className="alert alert-danger mb-3" role="alert">
            {errorMsg}{' '}
          </div>
        )}

        {successMsg && (
          <div className="alert alert-success mb-3" role="alert">
            {successMsg}{' '}
          </div>
        )}
        <Input
          type="text"
          name="firstName"
          value={firstName}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <Input
          type="text"
          name="lastName"
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
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
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <Input
          type="organisationName"
          name="organisationName"
          placeholder="Organisation Name"
          value={organisationName}
          onChange={(e) => setOrganisationName(e.target.value)}
          required
        />
        <div className="text-center">
          <Button type="submit" btnText="Sign up" />
          <Link to="/login">
            <p className="mt-3">I already have an account</p>
          </Link>
        </div>
      </form>
    </StyledWindow>
  );
}

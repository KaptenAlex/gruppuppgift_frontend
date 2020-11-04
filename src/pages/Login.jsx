import React from 'react';
import Input from './../components/Input';
import Title from './../components/Title';
import styled from 'styled-components';

const StyledWindow = styled.div`
    border: 1px solid black;
    width 30%;
    padding: 30px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20vh;
    border-radius: 5%;
`;

export default function Login() {
  return (
    <StyledWindow>
      <Title />
      <Input />
      <Input />
    </StyledWindow>
  );
}

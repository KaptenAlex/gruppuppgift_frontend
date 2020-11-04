import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  margin-top: 20px;
  padding: 5px 11px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
`;

export default function Input({ onChange, ...otherProps }) {
  return (
    <div>
      <StyledInput onChange={onChange} {...otherProps}></StyledInput>
    </div>
  );
}

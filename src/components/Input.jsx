import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  margin-top: ${(props) => props.marginTop || '20px'};
  padding: 5px 11px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
`;

export default function Input({ onChange, ...otherProps }, props) {
  return (
    <div>
      <StyledInput
        margin={props.margin}
        placeholder={props.placerholder}
        onChange={onChange}
        {...otherProps}
      ></StyledInput>
    </div>
  );
}

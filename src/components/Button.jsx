import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color:  ${(props) => props.bgColor || '#4CAF50'}; 
    border: none;
    color: white;
    padding: 8px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
    margin-top 25px;
    width:${(props) => props.width}
`;

export default function Button({ ...otherProps }) {
  return <StyledButton {...otherProps}>{otherProps.btnText}</StyledButton>;
}

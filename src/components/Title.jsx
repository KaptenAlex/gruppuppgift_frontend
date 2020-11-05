import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.header`
  font-size: 3rem;
  font-family: arial;
`;
export default function Title(props) {
  return <StyledTitle>{props.title}</StyledTitle>;
}

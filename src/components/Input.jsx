import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  margin: 25px;
  padding: 5px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
`

export default function Input() {
    return (
        <div>
           <StyledInput></StyledInput> 
        </div>
    )
}

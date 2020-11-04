import React from 'react'
import Input from './../components/Input'
import Title from './../components/Title'
import Button from './../components/Button'
import styled from 'styled-components'

const StyledWindow = styled.div`
    width 30%;
    padding: 30px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20vh;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export default function Login() {
    return (
        <StyledWindow >  
            <Title/>
            <Input/>
            <Button/>
        </StyledWindow>        
    )
}

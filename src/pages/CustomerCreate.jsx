import React from 'react'
import Title from './../components/Title'
import Input from './../components/Input'
import styled from 'styled-components';
import Button from './../components/Button'
import Description from './../components/DescText'


const StyledContainer = styled.div`
    width 50%;
    padding: 30px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-top: 15px;
`


export default function CustomerCreate() {
    return (
        <div className="container">
              <Title
                title="Create Customer"
                />
            <StyledContainer>
                <Description
                    paragraph="Fill in the fields in order to create a new customer"
                />
                <div className="row justify-content-center">
                    <Input className="mr-3"
                        placeholder="Name"/>
                    <Input
                        placeholder="Organisation Number"/>
                </div>
                <div className="row justify-content-center">
                    <Input className="mr-3"
                        placeholder="Vat Number"/>
                    <Input
                        placeholder="Reference"/>
                </div>
                <div className="row justify-content-center">
                    <Input className="mr-3"
                        placeholder="Terms of payment"/>
                    <Input
                        placeholder="Website"/>
                </div>
                <div className="row justify-content-center">
                    <Input className="mr-3"
                        placeholder="Email"/>
                    <Input
                        placeholder="Phone Number"/>
                </div>
            </StyledContainer>
            <Button
                btnText="Create"
                width="50%"
                color=""
            />
        </div>
    )
}

import React, { useState } from 'react'
import Title from './../components/Title'
import Input from './../components/Input'
import styled from 'styled-components';
import Button from './../components/Button'
import Description from './../components/DescText'


const ROOT_URL = 'https://frebi.willandskill.eu/';
const CREATE_CUSTOMER_URL = `${ROOT_URL}api/v1/customers/`

const StyledContainer = styled.div`
    width 50%;
    padding: 30px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-top: 15px;
`

export default function CustomerCreate() {
      

    const [info, setInfo] = useState({
        name: "",
        organisationNr: "",
        vatNr: "",
        reference: "",
        paymentTerm: "",
        website: "",
        email: "",
        phoneNumber: ""
    });

    function handleChange(e) {
        const value = e.target.value;
        setInfo({
            ...info,
            [e.target.name]: value
        })
      }

    function createCustomer(event) {
        event.preventDefault();
           
        const payload = {
            name: info.name,
            organisationNr: info.organisationNr,
            vatNr: info.vatNr,
            reference: info.reference,
            paymentTerm: info.paymentTerm,
            website: info.website,
            email: info.email,
            phoneNumber: info.phoneNumber

        };
        console.log(payload);
        try{
            let bearer = 'Bearer ' + localStorage.getItem('token');
            console.log(bearer)
            fetch(CREATE_CUSTOMER_URL, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    authorization: bearer,
                    'Content-Type': 'application/json'
                },
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                
            });
            } catch(err){
                console.log(err)
            }
                setInfo({
                    name: "",
                    organisationNr: "",
                    vatNr: "",
                    reference: "",
                    paymentTerm: "",
                    website: "",
                    email: "",
                    phoneNumber: ""
                });
        }
            

    return (
        <div className="container">
              <Title
                title="Create Customer"
                />
            <form onSubmit={createCustomer}>
                <StyledContainer>
                    <Description
                        paragraph="Fill in the fields in order to create a new customer"
                    />
                    <div className="row justify-content-center">
                        <Input className="mr-3"
                            placeholder="Name"
                            value={info.name}
                            name="name"
                            onChange={handleChange}
                            type="text"/>
                        <Input
                            placeholder="Organisation Number"
                            value={info.organisationNr}
                            name="organisationNr"
                            onChange={handleChange}
                            type="number"
                            />
                    </div>
                    <div className="row justify-content-center">
                        <Input className="mr-3"
                            placeholder="Vat Number"
                            value={info.vatNr}
                            name="vatNr"
                            onChange={handleChange}
                            type="text"/>
                        <Input
                            placeholder="Reference"
                            value={info.reference}
                            name="reference"
                            onChange={handleChange}
                            type="text"/>
                    </div>
                    <div className="row justify-content-center">
                        <Input className="mr-3"
                            placeholder="Terms of payment"
                            value={info.paymentTerm}
                            name="paymentTerm"
                            onChange={handleChange}
                            type="number"/>
                        <Input
                            placeholder="Website"
                            value={info.website}
                            name="website"
                            onChange={handleChange}
                            type="text"/>
                    </div>
                    <div className="row justify-content-center">
                        <Input className="mr-3"
                            placeholder="Email"
                            value={info.email}
                            name="email"
                            onChange={handleChange}
                            type="email"/>
                        <Input
                            placeholder="Phone Number"
                            value={info.phoneNumber}
                            name="phoneNumber"
                            onChange={handleChange}
                            type="number"/>
                    </div>
                </StyledContainer>

                <Button
                    btnText="Create"
                    width="50%"
                    color=""
                />
            </form>
        </div>
    )
}

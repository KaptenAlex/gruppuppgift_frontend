import React, { useState } from 'react';
import Title from './../components/Title';
import Input from './../components/Input';
import styled from 'styled-components';
import Button from './../components/Button';
import Description from './../components/DescText';
import UserDatakit from '../data/UserDatakit';

const ROOT_URL = 'https://frebi.willandskill.eu/';
const CREATE_CUSTOMER_URL = `${ROOT_URL}api/v1/customers/`;
const userDataKit = new UserDatakit();

const StyledContainer = styled.div`
    width 60%;
    padding: 30px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
`;

export default function CustomerCreate(props) {
  const [validVatNr, setValidVatNr] = useState(true);
  const [info, setInfo] = useState({
    name: '',
    organisationNr: '',
    vatNr: '',
    reference: '',
    paymentTerm: '',
    website: '',
    email: '',
    phoneNumber: '',
  });

  function handleChange(e) {
    const value = e.target.value;
    setInfo({
      ...info,
      [e.target.name]: value,
    });
  }

  function createCustomer(event) {
    event.preventDefault();
    const controlVatNrInputRegExp = /(SE)\d{10}$/;
    /* VG: Validera så att detta fält innehåller "SE" och där efter 10 siffror */
    if (controlVatNrInputRegExp.test(info.vatNr) == false) {
      setValidVatNr(false);
      return;
    } else {
      setValidVatNr(true);
    }

    const payload = {
      name: info.name,
      organisationNr: info.organisationNr,
      vatNr: info.vatNr,
      reference: info.reference,
      paymentTerm: info.paymentTerm,
      website: info.website,
      email: info.email,
      phoneNumber: info.phoneNumber,
    };

    try {
      let bearer = 'Bearer ' + userDataKit.getSessionToken();
      fetch(CREATE_CUSTOMER_URL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          authorization: bearer,
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        if (res.status !== 201) {
          return;
        }
        props.history.push({
          pathname: '/home',
          state: { successMsg: 'User Created' },
        });
      });
    } catch (err) {
      console.log(err);
    }
    setInfo({
      name: '',
      organisationNr: '',
      vatNr: '',
      reference: '',
      paymentTerm: '',
      website: '',
      email: '',
      phoneNumber: '',
    });
  }

  return (
    <div className="container">
      <form onSubmit={createCustomer}>
        <Title className="ml-5" title="Create Customer" />
        <StyledContainer>
          <Description paragraph="Fill in the fields in order to create a new customer" />
          <div className="row justify-content-center">
            <Input
              className="mr-3"
              placeholder="Name"
              value={info.name}
              name="name"
              onChange={handleChange}
              type="text"
              margin="1rem"
            />
            <Input
              placeholder="Organisation Number"
              value={info.organisationNr}
              name="organisationNr"
              onChange={handleChange}
              type="number"
            />
          </div>
          <div className="row justify-content-center">
            <Input
              className="mr-3"
              placeholder="Vat Number"
              value={info.vatNr}
              name="vatNr"
              onChange={handleChange}
              type="text"
            />
            <Input
              placeholder="Reference"
              value={info.reference}
              name="reference"
              onChange={handleChange}
              type="text"
            />
          </div>
          <div className="row justify-content-center">
            <Input
              className="mr-3"
              placeholder="Terms of payment"
              value={info.paymentTerm}
              name="paymentTerm"
              onChange={handleChange}
              type="number"
            />
            <Input
              placeholder="Website"
              value={info.website}
              name="website"
              onChange={handleChange}
              type="text"
            />
          </div>
          <div className="row justify-content-center">
            <Input
              className="mr-3"
              placeholder="Email"
              value={info.email}
              name="email"
              onChange={handleChange}
              type="email"
            />
            <Input
              placeholder="Phone Number"
              value={info.phoneNumber}
              name="phoneNumber"
              onChange={handleChange}
              type="text"
            />
          </div>
          {!validVatNr && (
            <div className="row justify-content-center pt-2">
              <div className="alert alert-danger">
                VatNr must start with "SE" and end with 10 digits
              </div>
            </div>
          )}
        </StyledContainer>
        <div className="text-center mb-5">
          <Button btnText="Create" width="50%" color="" />
        </div>
      </form>
    </div>
  );
}

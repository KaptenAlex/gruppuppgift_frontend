import React, { useEffect, useState } from 'react';
import SignedInUser from '../components/SignedInUser';
import Title from './../components/Title';
import Button from './../components/Button';
import { Link } from 'react-router-dom';
import UserDatakit from '../data/UserDatakit';

const ROOT_URL = 'https://frebi.willandskill.eu/';
const API_URL = `${ROOT_URL}api/v1/`;

export default function CustomerList() {
  const [customerList, setCustomerList] = useState([]);
  const userDataKit = new UserDatakit();

  function getCustomerList() {
    const url = `${API_URL}customers`;
    return fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userDataKit.getSessionToken()}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setCustomerList(data.results);
        console.log(customerList);
      });
  }

  useEffect(() => {
    if (userDataKit.getSessionToken() !== null) {
      getCustomerList();
    }
  }, []);

  const renderedCustomer = customerList.map((customer, index) => {
    return (
      <tr key={customer.id}>
        <td>{index + 1}</td>
        <td>{customer.name}</td>
        <td>{customer.email}</td>
        <td>{customer.phoneNumber}</td>
      </tr>
    );
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <SignedInUser />
          </div>
          <div className="col-md-8">
            <div className="d-flex justify-content-between row mb-3">
              <Title title="Customer List" />
              <Link to="/create">
                <Button btnText="Create new customer"></Button>
              </Link>
            </div>
            {renderedCustomer && (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                  </tr>
                </thead>
                <tbody>{renderedCustomer}</tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

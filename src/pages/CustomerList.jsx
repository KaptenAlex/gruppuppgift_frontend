import React, { useEffect, useState } from 'react';
import CustomerDetail from '../components/CustomerDetail';
import SignedInUser from '../components/SignedInUser';

const ROOT_URL = 'https://frebi.willandskill.eu/';
const API_URL = `${ROOT_URL}api/v1/`;

export default function CustomerList() {
  const [customerList, setCustomerList] = useState([]);

  function getToken() {
    return localStorage.getItem('token');
  }

  function getCustomerList() {
    const url = `${API_URL}customers`;
    return fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`,
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
    if (getToken() !== null) {
      getCustomerList();
    }
  }, []);

  const renderedCustomer = customerList.map((customer, index) => {
    return (
      <>
        <tr>
          <td>{index + 1}</td>
          <td>{customer.name}</td>
          <td>{customer.email}</td>
          <td>{customer.phoneNumber}</td>
        </tr>
      </>
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
            <h2>Customer List</h2>
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

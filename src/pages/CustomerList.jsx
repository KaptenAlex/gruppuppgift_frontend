import React, { useEffect, useState } from 'react';
import CustomerDetail from '../components/CustomerDetail';

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

  const renderedCutomer = customerList.map((customer) => {
    return (
      <>
        <CustomerDetail customer={customer} />
      </>
    );
  });
  return (
    <div className="container">
      {renderedCutomer && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Organisation Number</th>
              <th scope="col">Vat Number</th>
              <th scope="col">Reference</th>
              <th scope="col">PaymentTerm</th>
              <th scope="col">Website</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <tbody>{renderedCutomer}</tbody>
        </table>
      )}
    </div>
  );
}

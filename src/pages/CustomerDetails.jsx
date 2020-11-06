import React, { useState, useEffect } from 'react';
import UserDatakit from '../data/UserDatakit';
import Button from './../components/Button';
import { Link } from 'react-router-dom';

export const CustomerDetails = (props) => {
  const [customerData, setCustomerData] = useState(null);

  const ID = props.match.params.id;

  const ROOT_URL = "https://frebi.willandskill.eu/";
  const API_URL = `${ROOT_URL}api/v1/customers/${ID}/`;
  const userDataKit = new UserDatakit();

  function fetchCustomerDetails(id) {
    fetch(API_URL, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userDataKit.getSessionToken()}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCustomerData(data);
      });
  }
  function deleteCustomer() {
    console.log('click');
    fetch(API_URL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userDataKit.getSessionToken()}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  useEffect(() => {
    fetchCustomerDetails();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row justify-content-between mr-1 ml-1">
          <Link to="/">
            <Button btnText="Customers List"></Button>
          </Link>
          <Button
            onclick={deleteCustomer}
            btnText="Delete"
            bgColor="red"
          ></Button>
        </div>
        <div className="card mt-3">
          <div className="card-header">Customer Details</div>

          <div className="card-body">
            <table className="table table-bordered table-striped">
              {customerData && (
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>{customerData.name}</td>
                  </tr>
                  <tr>
                    <th>Organisation number</th>
                    <td>{customerData.organisationNr}</td>
                  </tr>
                  <tr>
                    <th>VAT number</th>
                    <td>{customerData.name}</td>
                  </tr>
                  <tr>
                    <th>Reference</th>
                    <td>{customerData.reference}</td>
                  </tr>
                  <tr>
                    <th>Payment term</th>
                    <td>{customerData.paymentTerm}</td>
                  </tr>
                  <tr>
                    <th>Website</th>
                    <td>{customerData.website}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{customerData.email}</td>
                  </tr>
                  <tr>
                    <th>Phone number</th>
                    <td>{customerData.phoneNumber}</td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

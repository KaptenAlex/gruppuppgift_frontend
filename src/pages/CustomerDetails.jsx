import React, { useState, useEffect } from "react";
import UserDatakit from "../data/UserDatakit";
import Button from "./../components/Button";
import { Link } from "react-router-dom";

export const CustomerDetails = (props) => {
  const [customerData, setCustomerData] = useState(null);

  const ID = props.match.params.id;

  const ROOT_URL = "https://frebi.willandskill.eu/";
  const API_URL = `${ROOT_URL}api/v1/customers/${ID}`;
  const userDataKit = new UserDatakit();

  function fetchCustomerDetails() {
    fetch(API_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userDataKit.getSessionToken()}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setCustomerData(data.results);
      });
  }

  useEffect(() => {
    fetchCustomerDetails();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Link to="/">
              <Button btnText="Customers list"></Button>
            </Link>
          </div>
        </div>
        <div className="card mt-3">
          <div className="card-header">Customer Details</div>

          <div className="card-body">
            <table className="table table-bordered table-striped">
              {customerData &&
                customerData.map((customer, index) => {
                  return (
                    <tbody key={index}>
                      <tr>
                        <th>Name</th>
                        <td>{customer.name}</td>
                      </tr>
                      <tr>
                        <th>Organisation number</th>
                        <td>{customer.organisationNr}</td>
                      </tr>
                      <tr>
                        <th>VAT number</th>
                        <td>{customer.name}</td>
                      </tr>
                      <tr>
                        <th>Reference</th>
                        <td>{customer.reference}</td>
                      </tr>
                      <tr>
                        <th>Payment term</th>
                        <td>{customer.paymentTerm}</td>
                      </tr>
                      <tr>
                        <th>Website</th>
                        <td>{customer.website}</td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>{customer.email}</td>
                      </tr>
                      <tr>
                        <th>Phone number</th>
                        <td>{customer.phoneNumber}</td>
                      </tr>
                    </tbody>
                  );
                })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

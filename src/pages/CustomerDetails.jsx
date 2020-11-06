import React, { useState, useEffect } from 'react';
import UserDatakit from '../data/UserDatakit';
import Button from './../components/Button';
import Modal from 'react-bootstrap/Modal';

export const CustomerDetails = (props) => {
  const [customerData, setCustomerData] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ID = props.match.params.id;

  const ROOT_URL = 'https://frebi.willandskill.eu/';
  const API_URL = `${ROOT_URL}api/v1/customers/${ID}/`;
  const userDataKit = new UserDatakit();

  function fetchCustomerDetails() {
    fetch(API_URL, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userDataKit.getSessionToken()}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
    }).then((res) => {
      if (res.status === 204) {
        setShow(false);
        props.history.push('/home');
      }
      return;
    });
  }

  useEffect(() => {
    fetchCustomerDetails();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row  justify-content-end mr-2">
          <Button onClick={handleShow} btnText="Delete" bgColor="red"></Button>
        </div>
        <div className="card mt-3">
          <div className="card-header">Customer Details</div>

          <div className="card-body">
            <table className="table table-bordered table-striped">
              {customerData && (
                <>
                  <tbody key={customerData.id}>
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
                      <td>{customerData.vatNr}</td>
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
                </>
              )}
            </table>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button btnText="No" bgColor="#6c757d" onClick={handleClose}></Button>
          <Button
            btnText="Delete"
            bgColor="red"
            onClick={deleteCustomer}
          ></Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

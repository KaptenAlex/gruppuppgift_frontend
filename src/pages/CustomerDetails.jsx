import React, { useState, useEffect } from 'react';
import UserDatakit from '../data/UserDatakit';
import Button from './../components/Button';
import Modal from 'react-bootstrap/Modal';
import Input from '../components/Input';
import Spinner from 'react-bootstrap/Spinner';

export const CustomerDetails = (props) => {
  const [defaultCustomerData, setDefaultCustomerData] = useState(null);
  const [customerData, setCustomerData] = useState(null);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);

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
        setCustomerData(data);
        setDefaultCustomerData(data)
        setLoading(true);
      });
  }
  /* VG: Delete customer */
  function deleteCustomer() {
    fetch(API_URL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userDataKit.getSessionToken()}`,
      },
    }).then((res) => {
      if (res.status === 204) {
        setShow(false);
        props.history.push({
          pathname: '/home',
          state: { deleteMsg: 'Customer Deleted' },
        });
      }
      return;
    });
  }
  /* VG: Edit customer details */
  function editCustomer() {
    const payload = {
      name: customerData.name,
      organisationNr: customerData.organisationNr,
      vatNr: customerData.vatNr,
      reference: customerData.reference,
      paymentTerm: customerData.paymentTerm,
      website: customerData.website,
      email: customerData.email,
      phoneNumber: customerData.phoneNumber,
    };

    fetch(API_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userDataKit.getSessionToken()}`,
      },
      body: JSON.stringify(payload),
    }).then((res) => {
      if (res.status === 200) {
        setEdit(false);
        props.history.push({
          pathname: '/home',
          state: { successMsg: 'Customer Edited' },
        });
      }
      return;
    });
  }

  function handleChange(e) {
    const value = e.target.value;
    setCustomerData({
      ...customerData,
      [e.target.name]: value,
    });
  }

  function cancelEdit() {
    setEdit(false);
    setCustomerData(defaultCustomerData);
  }

  useEffect(() => {
    fetchCustomerDetails();
  }, []);

  return (
    <>
      <div className="container">
        {loading ? (
          <>
            <div className="row  justify-content-end mr-2">
              {edit ? (
                <>
                  {' '}
                  <Button
                    onClick={cancelEdit}
                    btnText="Cancel"
                    bgColor="#6c757d"
                    className="mr-3"
                  ></Button>
                  <Button onClick={editCustomer} btnText="Save"></Button>
                </>
              ) : (
                  <>
                    <Button
                      onClick={() => setEdit(true)}
                      btnText="Edit"
                      bgColor="#3b8db4"
                      className="mr-3"
                    ></Button>
                    <Button
                      onClick={handleShow}
                      btnText="Delete"
                      bgColor="#bb3129"
                    ></Button>
                  </>
                )}
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
                          {edit ? (
                            <td>
                              <Input
                                marginTop="0px"
                                name="name"
                                value={customerData.name}
                                onChange={handleChange}
                              ></Input>
                            </td>
                          ) : (
                              <td>{customerData.name}</td>
                            )}
                        </tr>
                        <tr>
                          <th>Organisation number</th>
                          {edit ? (
                            <td>
                              <Input
                                marginTop="0px"
                                name="organisationNr"
                                onChange={handleChange}
                                value={customerData.organisationNr}
                              ></Input>
                            </td>
                          ) : (
                              <td>{customerData.organisationNr}</td>
                            )}
                        </tr>
                        <tr>
                          <th>VAT number</th>
                          {edit ? (
                            <td>
                              <Input
                                marginTop="0px"
                                name="vatNr"
                                onChange={handleChange}
                                value={customerData.vatNr}
                              ></Input>
                            </td>
                          ) : (
                              <td>{customerData.vatNr}</td>
                            )}
                        </tr>
                        <tr>
                          <th>Reference</th>
                          {edit ? (
                            <td>
                              <Input
                                marginTop="0px"
                                name="reference"
                                onChange={handleChange}
                                value={customerData.reference}
                              ></Input>
                            </td>
                          ) : (
                              <td>{customerData.reference}</td>
                            )}
                        </tr>
                        <tr>
                          <th>Payment term</th>
                          {edit ? (
                            <td>
                              <Input
                                marginTop="0px"
                                name="paymentTerm"
                                onChange={handleChange}
                                value={customerData.paymentTerm}
                              ></Input>
                            </td>
                          ) : (
                              <td>{customerData.paymentTerm}</td>
                            )}
                        </tr>
                        <tr>
                          <th>Website</th>
                          {edit ? (
                            <td>
                              <Input
                                marginTop="0px"
                                name="website"
                                onChange={handleChange}
                                value={customerData.website}
                              ></Input>
                            </td>
                          ) : (
                              <td>{customerData.website}</td>
                            )}
                        </tr>
                        <tr>
                          <th>Email</th>
                          {edit ? (
                            <td>
                              <Input
                                marginTop="0px"
                                name="email"
                                onChange={handleChange}
                                value={customerData.email}
                              ></Input>
                            </td>
                          ) : (
                              <td>{customerData.email}</td>
                            )}
                        </tr>
                        <tr>
                          <th>Phone number</th>
                          {edit ? (
                            <td>
                              <Input
                                marginTop="0px"
                                name="phoneNumber"
                                onChange={handleChange}
                                value={customerData.phoneNumber}
                              ></Input>
                            </td>
                          ) : (
                              <td>{customerData.phoneNumber}</td>
                            )}
                        </tr>
                      </tbody>
                    </>
                  )}
                </table>
              </div>
            </div>
          </>
        ) : (
            <div className="col-md-12 text-center">
              <div className="mb-5">Loading...</div>
              <Spinner animation="border" size="lg"></Spinner>
            </div>
          )}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button btnText="No" bgColor="#6c757d" onClick={handleClose}></Button>
          <Button
            btnText="Yes"
            bgColor="#007bff"
            onClick={deleteCustomer}
          ></Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

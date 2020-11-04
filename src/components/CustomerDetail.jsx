import React from 'react';

export default function CustomerDetail({ customer }) {
  return (
    <tr>
      <td>{customer.name}</td>
      <td>{customer.email}</td>
      <td>{customer.organisationNr}</td>
      <td>{customer.vatNr}</td>
      <td>{customer.reference}</td>
      <td>{customer.paymentTerm}</td>
      <td>{customer.website}</td>
      <td>{customer.phoneNumber}</td>
    </tr>
  );
}

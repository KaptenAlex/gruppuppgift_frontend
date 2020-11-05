import React from 'react';
import Title from './../components/Title'
import Button from './../components/Button'
import { Link } from 'react-router-dom' 

export default function CustomerList() {
  return <div className="container">
    <Title
    title="Customer List"
    />
    <Link to ='/create' >
      <Button btnText="Create new customer"></Button>
    </Link>
  </div>;
}

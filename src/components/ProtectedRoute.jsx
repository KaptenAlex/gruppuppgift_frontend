import React from 'react';
import { Redirect } from 'react-router-dom';

export default class ProtectedRoute extends React.Component {
  render() {
    const Component = this.props.component;
    const isAuthenticated = localStorage.getItem('token');
    return isAuthenticated ? (
      <Component {...this.props} />
    ) : (
      <Redirect to={{ pathname: '/login' }} />
    );
  }
}

import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import CustomerList from './pages/CustomerList';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const isAuthenticated = localStorage.getItem('token');
  console.log(isAuthenticated);

  useEffect(() => {}, [isAuthenticated]);
  return (
    <div className="App">
      <Header isAuthenticated={isAuthenticated} />
      <Switch>
        <ProtectedRoute path="/home" component={CustomerList}></ProtectedRoute>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </div>
  );
}

export default App;

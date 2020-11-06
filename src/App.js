import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import CustomerList from './pages/CustomerList';
import Login from './pages/Login';
import CustomerCreate from './pages/CustomerCreate';
import ProtectedRoute from './components/ProtectedRoute';
import Signup from './pages/Signup';
import UserContext from './contexts/userContext';

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <UserContext.Provider value={{ token, setToken }}>
        <Header />
        <Switch>
          <ProtectedRoute
            path="/home"
            component={CustomerList}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/"
            component={CustomerList}
          ></ProtectedRoute>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/create" component={CustomerCreate}></Route>
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;

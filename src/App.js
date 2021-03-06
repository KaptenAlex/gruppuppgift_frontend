import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import CustomerList from './pages/CustomerList';
import Login from './pages/Login';
import CustomerCreate from './pages/CustomerCreate';
import ProtectedRoute from './components/ProtectedRoute';
import Signup from './pages/Signup';
import UserContext from './contexts/userContext';
import { CustomerDetails } from './pages/CustomerDetails';
import UserDatakit from './data/UserDatakit';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const userDataKit = new UserDatakit();

  useEffect(() => {
    if (userDataKit.getSessionToken() !== null) {
      setCurrentUser(userDataKit.getSessionToken());
    }
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
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
          <Route path="/show/:id" component={CustomerDetails}></Route>
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;

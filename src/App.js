import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import CustomerList from './pages/CustomerList';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/home" component={CustomerList}></Route>
        <Route path="/login"></Route>
      </Switch>
    </div>
  );
}

export default App;

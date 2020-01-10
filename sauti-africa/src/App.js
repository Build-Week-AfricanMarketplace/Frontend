import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import UserLogin from './components/UserLogin';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import Register from './components/Register';
import MarketPrice from './components/MarketPrice';
import SetPrice from './components/SetPrice';
import AddItem from './components/AddItem';
import CategorySelect from './components/CategorySelect';
import LocationSelect from './components/LocationSelect';
// import {UserContext} from "./contexts/UserContext";
import Edit from './components/Edit';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={UserLogin} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/market-price" component={MarketPrice} />
        <Route exact path="/market-price/:id" render={(props) => <CategorySelect {...props} />}/>
        <Route exact path="/set-price/:id" render={(props) => <Edit {...props} />} />
        <Route exact path="/set-price" component={SetPrice} />
        <Route exact path="/add-item" component={AddItem} />
        </div>
    </Router>
    );
  }
  
export default App;
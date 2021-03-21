import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import './App.scss';
import ContactsListPage from './pages/contacts-list-page';
import ContactsFormPage from './pages/contacts-form-page';
import './bootstrap';


function App() {
  return (
    <Router>
      <div className="container">
        <div className="two item menu">
          <NavLink className="item" activeClassName="active" exact to="/">Contacts List</NavLink>
          <NavLink className="item" activeClassName="active" exact to="/contacts/new">Add Contact</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={ContactsListPage}/>
          <Route path="/contacts/new" component={ContactsFormPage}/>
          <Route path="/contacts/edit/:index" component={ContactsFormPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

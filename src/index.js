import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';
import UserComponent from "./UIUser/UserComponent";
import AddressComponent from "./UIUser/AddressComponent";
import PhoneComponent from "./UIUser/PhoneComponent";
import RoleComponent from "./UIUser/RoleComponent";

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                <NavLink exact activeClassName="active" to="/">
                Home
                </NavLink>
                </li>
                <li>
                <NavLink exact activeClassName="active" to="/Users">
                Users
                </NavLink>
                </li>
                <li>
                <NavLink exact activeClassName="active" to="/Address">
                Address
                </NavLink>
                </li>
                <li>
                <NavLink exact activeClassName="active" to="/Phone">
                Phone
                </NavLink>
                </li>
                <li>
                <NavLink exact activeClassName="active" to="/Role">
                Role
                </NavLink>
                </li>
                
            </ul>
            <hr />
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/Users" component={UserComponent} />
                <Route path="/Address" component={AddressComponent} />
                <Route path="/Phone" component={PhoneComponent} />
                <Route path="/Role" component={RoleComponent} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));



import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";
function Nav() {
    const history = useHistory();
    const logoutUser = () =>{
        let path = `/login`; 
        history.push(path);
        localStorage.removeItem('username');
    }

    return (
        <div>
            
    <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav">
            <NavLink exact to="/" className="nav-item nav-link">Home</NavLink>
            <NavLink to="/users" className="nav-item nav-link">Users</NavLink>
        </div>
            <span onClick={() => logoutUser()} className="logout"> Logout </span>
        </nav>
        </div>
    );
}

export { Nav };
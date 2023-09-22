import React from "react";
import { Link } from "react-router-dom";
import * as usersService from "../utilities/users-service";

export default function NavBar({user, setUser}) {
   const handleLogout = () => {
     usersService.logOut();
     setUser(null);
   };
  return (
    <nav>
      <h1>Welcome, {user.name}</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/orders">Order History</Link>
        <Link to="/orders/new">New Order</Link>
      </div>
      <div className="logOut-btn">
        <Link to="" onClick={handleLogout}>
          Log Out
        </Link>
      </div>
    </nav>
  );
}

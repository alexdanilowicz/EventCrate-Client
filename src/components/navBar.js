import React from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavBar = (props) => {
  return (
    <nav>
      <NavLink exact to="/"><img id="logo" alt="logo" src="../img/teddit.png" /></NavLink>
      <div className="link-all-container">
        <div className="link-container">
          <NavLink exact to="/"><div className="icon-container"> <div> Home </div> </div></NavLink>
          <NavLink exact to="/posts/new"><div className="icon-container"> <div> Create New </div> </div></NavLink>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        pauseOnHover={false}
      />
    </nav>

  );
};

export default NavBar;

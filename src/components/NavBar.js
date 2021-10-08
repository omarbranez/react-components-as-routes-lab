import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar"> 
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/movies" exact >Movies</NavLink>
      <NavLink to="/directors" exact >Directors</NavLink>
      <NavLink to="/actors" exact >Actors</NavLink>
      {/*{code here}*/}
    </div>
  );
};

export default NavBar;

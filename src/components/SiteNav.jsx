import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function SiteNav() {
  return (
    <nav>
      <NavLink to={`/`}>Home</NavLink>
      <NavLink to={`/about`}>About</NavLink>
    </nav>
  );
}

export default SiteNav;

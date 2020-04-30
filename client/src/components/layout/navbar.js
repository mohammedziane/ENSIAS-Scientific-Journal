import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code'></i> onScience
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/profiles'>Scientists</Link>
        </li>
        <li>
          <Link to='/auth'>Sign In || Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;

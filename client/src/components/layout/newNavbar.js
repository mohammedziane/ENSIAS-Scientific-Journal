import React from 'react';
import { Link } from 'react-router-dom';

const Newnav = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code'></i> onScience
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/dashboard/profiles'>Scientists</Link>
        </li>
        <li>
          <Link to='/posts'>Posts</Link>
        </li>
        <li>
          |
          <Link to='/dashboard' title='Dashboard'>
            <i className='fas fa-user'></i>
            <span className='hide-sm'>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to='/' title='Logout'>
            <i className='fas fa-sign-out-alt'></i>
            <span className='hide-sm'>Logout</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Newnav;

import React from 'react';
import { Link } from 'react-router-dom';

const landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Scientist Connector</h1>
          <p className='lead'>
            Create a scientist profile,<br/>
            share posts, <br/>get help from
            other scientists
          </p>
          <div className='buttons' id='btn'>
            <Link to='/auth' className='btn btn-primary'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default landing;

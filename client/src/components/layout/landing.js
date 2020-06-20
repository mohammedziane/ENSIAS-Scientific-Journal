import React from 'react';
import { Link } from 'react-router-dom';
import ScrollPanel1 from './ScrollPannel';

const landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Scientist Connector</h1>
          <div className="p-grid">
            <div className="p-col-12 p-md-4">
              <ScrollPanel1/>
            </div>
            <div className="p-col-12 p-md-4" > 
          <p className='lead'>
            <h1>
            On line
            JOURNAL OF RESEARCH 
            where you can :<br/>
            </h1>
            <h3>
            Create a scientist profile<br/>            
            share posts <br/>
            get help from other scientists ...
            </h3>
          </p>
          <div className='buttons'>
            <Link to='/auth' className='btn btn-primary'>
              Sign In
            </Link>
          </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default landing;

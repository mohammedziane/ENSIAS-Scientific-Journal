import React from 'react';
import loginImg from '../../img/login.svg';
import './style.scss';
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='auth-container'>
        <div className='base-container' ref={this.props.containerRef}>
          <div className='header'>Register</div>
          <div className='content'>
            <div className='image'>
              <img src={loginImg} />
            </div>
            <div className='forme'>
              <div className='forme-groupe'>
                <label htmlFor='username'>Username</label>
                <input type='text' name='username' placeholder='username' />
              </div>
              <div className='forme-groupe'>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' placeholder='email' />
              </div>
              <div className='forme-groupe'>
                <label htmlFor='password'>Password</label>
                <input type='text' name='password' placeholder='password' />
              </div>
            </div>
          </div>

          <button type='button' className='btn btn-primary'>
            Register
          </button>
        </div>
      </div>
    );
  }
}
export default Register;

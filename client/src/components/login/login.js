import React from 'react';
import loginImg from '../../img/login.svg';
import './style.scss';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  render() {
    return (
      <div className='auth-container'>
        <div className='base-container' ref={this.props.containerRef}>
          <div className='header'>Login</div>
          <div className='content'>
            <div className='image'>
              <img src={loginImg} />
            </div>
            <div className='forme'>
              <div className='forme-groupe'>
                <label htmlFor='username'>Username</label>
                <input
                  type='text'
                  name='username'
                  placeholder='username'
                  value={this.state.username}
                  onChange={this.onChange}
                />
              </div>
              <div className='forme-groupe'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  name='password'
                  placeholder='password'
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
            </div>
          </div>
          <div className='footer'>
            <button type='button' className='btn btn-primary'>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

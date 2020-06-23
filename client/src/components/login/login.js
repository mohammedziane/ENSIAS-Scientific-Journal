import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import React from 'react';
import loginImg from '../../img/login.svg';
import login from '../../actions-services/auth/auth.service';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.scss';

const required = (value) => {
  if (!value) {
    return (
      <div className='alert alert-danger' role='alert'>
        This field is required!
      </div>
    );
  }
};
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.state = {
      username: '',
      password: '',
      loading: false,
      message: '',
      redirect: false,
    };
  }
  componentDidMount() {
    // calling the new action creator
    this.props.login();
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  handleLogin(e) {
    e.preventDefault();
    this.setState({
      message: '',
      loading: true,
    });

    this.props.login(this.state.username, this.state.password);
  }
  render() {
    const redirect = this.props.isAuthenticated;
    if (redirect) {
      return <Redirect to='/dashboard' />;
    }
    return (
      <div className='auth-container'>
        <div className='base-container' ref={this.props.containerRef}>
          <div className='header'>Login</div>
          <div className='content'>
            <div className='image'>
              <img src={loginImg} />
            </div>
            <Form onSubmit={this.handleLogin}>
              <div className='form'>
                <div className='p-fluid'>
                  <div className='p-field'>
                    <InputText
                      type='text'
                      name='username'
                      placeholder='username'
                      value={this.state.username}
                      onChange={this.onChangeUsername}
                      validations={[required]}
                    />
                  </div>
                </div>
                <div className='p-fluid'>
                  <div className='p-field'>
                    <InputText
                      type='password'
                      name='password'
                      placeholder='password'
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      validations={[required]}
                    />
                  </div>
                </div>
                <div className='footer'>
                  <Button
                    id='login'
                    type='submit'
                    label='Login'
                    className='p-button-rounded'
                  />
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  username: state.user.username,
});
export default connect(mapStateToProps, { login })(Login);

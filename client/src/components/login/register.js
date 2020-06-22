import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import React from 'react';
import loginImg from '../../img/login.svg';
import Form from 'react-validation/build/form';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { isEmail } from 'validator';
import register from '../../actions-services/auth/register.service';
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
const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className='alert alert-danger' role='alert'>
        This is not a valid email.
      </div>
    );
  }
};
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.componentDidMount = this.componentDidMount(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.state = {
      username: '',
      email: '',
      password: '',
      successful: false,
      message: '',
    };
  }
  componentDidMount() {
    // calling the new action creator
    this.props.register();
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  handleRegister(e) {
    e.preventDefault();
    this.props.register(
      this.state.username,
      this.state.password,
      this.state.email
    );
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
            <Form onSubmit={this.handleRegister}>
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
                      type='text'
                      name='email'
                      placeholder='email'
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      validations={[required, email]}
                    />
                  </div>
                </div>
                <div className='p-fluid'>
                  <div className='p-field'>
                    <Password
                      type='password'
                      name='password'
                      placeholder='password'
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      validations={[required]}
                    />
                  </div>
                </div>
                <Button
                  type='submit'
                  label='Register'
                  className='p-button-rounded'
                />
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isRegistred: state.auth.isRegistred,
});
export default connect(mapStateToProps, { register })(Register);

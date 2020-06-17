import React from 'react';
import { Redirect } from 'react-router-dom';
import loginImg from '../../img/login.svg';
import './style.scss';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { isEmail } from 'validator';
import register from '../../actions-services/register.service';
import { connect } from 'react-redux';
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
    /*AuthService.register(
            this.state.username,
            this.state.password,
            this.state.email
        ).then(
            response => {
                this.setState({
                    message: response.data.message,
                    successful: true
                });
                console.log("User Registred !");
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message
                    ) || error.message
                    || error.toString();
                this.setState({
                    successful: false,
                    message: resMessage
                });
            }
        );*/
  }

  render() {
    if (this.props.isRegistred) {
      return <Redirect to='/dashboard/edit-profile' />;
    }
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
                <div className='form-group'>
                  <label htmlFor='username'>Username</label>
                  <Input
                    type='text'
                    name='username'
                    placeholder='username'
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required]}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='email'>Email</label>
                  <Input
                    type='text'
                    name='email'
                    placeholder='email'
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='password'>Password</label>
                  <Input
                    type='password'
                    name='password'
                    placeholder='password'
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required]}
                  />
                </div>
                <button type='submit' className='btn btn-primary'>
                  Register
                </button>
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

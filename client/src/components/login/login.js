import React from 'react';
import loginImg from '../../img/login.svg';
import './style.scss';
import AuthService from "../../JWT-Services/auth.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { Redirect } from 'react-router-dom';
const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

export default class Login extends React.Component {
  constructor(props) {
      super(props);
      this.handleLogin = this.handleLogin.bind(this);
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.state = {
          username: '',
          password: '',
          loading: false,
          message: "",
          redirect: false
      };
  }
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    handleLogin(e) {
        e.preventDefault();
        this.setState({
            message: "",
            loading: true
        });


            AuthService.login(this.state.username, this.state.password).then(
                () => {
                    console.log("Login Success");
                    this.setState({
                        redirect: true
                    })
                    window.location.reload();
                },
                error => {
                    const resMessage = (error.response &&
                        error.response.data && error.response.data.message)
                        || error.message || error.toString();
                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );

    }
    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/dashbord' />;
        }
    return (
      <div className='auth-container'>
        <div className='base-container' ref={this.props.containerRef}>
          <div className='header'>Login</div>
          <div className='content'>
            <div className='image'>
              <img src={loginImg} />
                    </div>
                    <Form
                        onSubmit={this.handleLogin}
                        >
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
                            <div className='footer'>
                                <button type='submit' className='btn btn-primary'>
                                    Login
                                </button>
                            </div>

                        </div>
                        </Form>
          </div>
        </div>
      </div>
    );
  }
}

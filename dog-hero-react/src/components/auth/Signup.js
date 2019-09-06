import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link, Redirect } from "react-router-dom";
import "./signup.css";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      username: '',
      password: '',
      name: '',
      email: ''
    };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const name = this.state.name;
    const email = this.state.email;
    this.service.signup(username, password, name, email)
      .then(response => {
        this.setState({
          redirect: true,
          username: "",
          password: "",
          name: "",
          email: "",
        });
      })
      .catch(error => console.log(error));
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to='/login' />
    }
    return (
      <form className='signup-form' onSubmit={this.handleFormSubmit}>

        <input
          type='text'
          placeholder='Seu nome'
          name='name'
          value={this.state.name}
          onChange={e => this.handleChange(e)}
        />

        <input
          type='text'
          name='email'
          placeholder='Insira seu email'
          value={this.state.email}
          onChange={e => this.handleChange(e)}
        />

        <input
          type='text'
          name='username'
          placeholder='Crie o seu usuário'
          value={this.state.username}
          onChange={e => this.handleChange(e)}
        />

        <input
          type='password'
          name='password'
          placeholder='Crie uma senha'
          value={this.state.password}
          onChange={e => this.handleChange(e)}
        />
        <input type='submit' value='Criar' />
        <Link className='login-button' to={"/login"}> Entrar </Link>
      </form>
    );
  }
}


export default Signup;
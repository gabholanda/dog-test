import React, { useState } from "react";
import axios from 'axios';

const SignupOwner = () => {
  const handleChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value)
    }
    else if (event.target.name === "age") {
      setAge(parseInt(event.target.value))
    }
    else if (event.target.name === "email") {
      setEmail(event.target.value)
    }
    else if (event.target.name === "username") {
      setUsername(event.target.value)
    }
    else if (event.target.name === "password") {
      setPassword(event.target.value)
    }
    else if (event.target.address === "address") {
      setAddress(event.target.value)
    }
  }

  const formSubmit = (e) => {
    e.preventDefault();
    const password_digest = password;
    const image = "none"
    axios
      .post(`${process.env.REACT_APP_API_URL}/owners`, { name, age, image, address, email, password_digest, username })
      .then(responseFromApi => {
        setName('')
        setAge(0)
        setEmail('')
        setUsername('')
        setPassword('')
        setAddress('')
      })
      .catch(error => console.log(error));
  }
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  return (
    <div className="dog-image">
      <form className='signup-form' onSubmit={formSubmit}>

        <input
          type='text'
          placeholder='Seu nome'
          name='name'
          onChange={e => handleChange(e)}
        />

        <input
          type='text'
          name='email'
          placeholder='Insira seu email'
          onChange={e => handleChange(e)}
        />

        <input
          type='number'
          name='age'
          placeholder='Insira sua idade'
          onChange={e => handleChange(e)}
        />

        <input
          type='text'
          name='username'
          placeholder='Crie o seu usuário'
          onChange={e => handleChange(e)}
        />

        <input
          type='text'
          name='address'
          placeholder='Informe seu endereço'
          onChange={e => handleChange(e)}
        />

        <input
          type='password'
          name='password'
          placeholder='Crie uma senha'
          onChange={e => handleChange(e)}
        />

        <input type='submit' value='Criar' />
        <hr className='signup-div' />
      </form>
    </div>
  )
}

export default SignupOwner
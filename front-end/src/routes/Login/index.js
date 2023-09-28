import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./login.css"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const URL = 'http://localhost:3001/login'

  const submitForm = async (e) => {
    e.preventDefault()
    const formData = {
      email,
      password,
    }
    try {
      const response = await axios.post(
        URL, 
        formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
                                                //lembrar tambem da checagem de senha
      console.log('Response:', response.data); //tirar depois
      setError(null);

    } catch(error) {
        if (error.response) {
        setError(error.response.data);
      } else {
        setError('Error: Could not connect to the server.');
      }
    }
  };

  return(
    <div className="login">
     {error && <div style={{ color: 'red' }}>{error}<br/><br/></div>}
      <form  onSubmit={submitForm}>
        <label htmlFor="Email">Email: </label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} ></input>
        <br/>
        <br/>
        <label htmlFor="password">Password: </label>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} ></input>
        <br/>
        <br/>
        <input type="submit" value="Submit" onSubmit={submitForm}></input>
      </form>
    </div>
  )
}

export default Login

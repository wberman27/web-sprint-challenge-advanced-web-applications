import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialValues = {
    username: '',
    password: ''
}


const Login = () => {
  const [value, setValue] = useState(initialValues)

  
  const handleChange = (e) =>{
    setValue({...value, [e.target.name]:e.target.value})
  }

  const {push} = useHistory();

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const login = (e) =>{
    e.preventDefault();
    
    axios.post('http://localhost:5000/api/login', value)
    .then(res =>{
      //res.data.payload
      localStorage.setItem('token', res.data.payload)
      push('/BubblePage')

    })
    .catch(err =>{
      console.log('POST ERROR: ', err.response)
    })

    setValue(initialValues)
  }
  
  useEffect(()=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  });
  return (
    <>
      <h1>
        Welcome to the Bubble App!
      </h1>
      <form onSubmit={login}>
        <label>username
          <input type='text' name='username' onChange={handleChange} value={value.username} placeholder='enter username'/>
        </label>
        <label>password
          <input type='text' name='password' onChange={handleChange} value={value.password} placeholder='enter password'/>
        </label>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
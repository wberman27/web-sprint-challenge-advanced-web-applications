import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialValues = {
    username: '',
    password: ''
}


const Login = () => {
  const [value, setValue] = useState(initialValues)
  const [error, setError] = useState(false)

  
  const handleChange = (e) =>{
    setValue({...value, [e.target.name]:e.target.value})
  }

  const {push} = useHistory();

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const login = (e) =>{
    e.preventDefault();
    
    //post value to server
    axios.post('http://localhost:5000/api/login', value)
    .then(res =>{
      //res.data.payload
      //set token to payload from server
      localStorage.setItem('token', res.data.payload)
      //route to bubblepage
      push('/BubblePage')

    })
    .catch(err =>{
      setError(true)
      console.log('POST ERROR: Username/Password are incorrect!', err, err.response)
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
        {error ? <p style={{color: 'red'}}>Username/Password incorrect.</p> : null}
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
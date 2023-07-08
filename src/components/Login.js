import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from "./firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'


function Login() {

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const login = (event) => {
    // form reloads page, to stop page reload
    event.preventDefault()

    // do login logic
    signInWithEmailAndPassword(auth, email, password)
      .then((auth)=>{
        // logged in, redirect to homepage
        navigate('/')
      }).catch(e=>alert(e.message))
  }

  const register = (event) => {
    event.preventDefault()

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth)=>{
        // create user and logged in, redirect to homepage
        navigate('/')
      }).catch(e=>alert(e.message))
  }


  return (
    <React.Fragment>
      <div className='login'> 
          <Link to='/'>
                <img
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                    alt=''
                />
          </Link>

          <div className='login__container'>
              <h1>Sign In</h1>
              <form onSubmit={login} autoComplete='on'>
                <h5>Email</h5>
                <input type='email' value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  autoComplete='email' autoFocus></input>
                <h5>Password</h5>
                <input type='password' value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  autoComplete='current-password'></input>
                <button type='submit' className='login__signInButton'>Sign In</button>
              </form>
              <p>
                  By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
              </p>
              <button onClick={register} className='login__registerButton'>Create Your Amazon Account</button>
          </div>

      </div>
    </React.Fragment>
  )
}

export default Login

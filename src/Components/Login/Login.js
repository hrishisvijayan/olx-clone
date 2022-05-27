import React, { useState,useContext  } from 'react';
import {FirebaseContext} from '../../store/Context'
import Logo from '../../olx-logo.png';
import './Login.css';
import {useHistory} from 'react-router-dom'

function Login() {
  const [email,setEmail] =useState('')
  const [err,setErr] =useState('')
  const [password,setPassword] = useState('')
  const {firebase} =useContext(FirebaseContext)
  const history = useHistory()

  const [emailError,setEmailError] = useState("");
  const [passwordError, setPassError] = useState("");


  const handleLogin = (e)=>{
    e.preventDefault()
    if(isValid()){firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push('/')
    }).catch((err)=>{
      setErr(err.message)
    })}
  }

  const isValid = ()=> {
    let Valid = true;
    if(email == "" || password == "" ){
      setEmailError("Email is required")
      setPassError("Password is required")
      Valid = false;
    }

    if(!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){

      setEmailError("Email is not valid")
      Valid=false;
    }
  
    if(password.length ==" "){
  
      setPassError("Password must be greater than 8 letter")
      Valid=false;
    }

    return Valid;

  }

  
  

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            onChange={(e)=>{
              setEmailError("")
              setEmail(e.target.value)}}
            name="email"
          />
          <span className='error'>{emailError}</span>
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            onChange={(e)=>{
              setPassError("")
              setPassword(e.target.value)}}
            name="password"
          />
          <span className='error'>{passwordError}</span>
          <br />
          <br />
          <p style={{color:'red'}}>{err}</p>
          <button>Login</button>
        </form>
        <a onClick={()=>history.push('/signup')}>Signup</a>
      </div>
    </div>
  );
}

export default Login;

import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import './Signup.css';

export default function Signup() {
  const history = useHistory()
  const [username, setusername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const { firebase } = useContext(FirebaseContext)
  const [err, setErr] = useState('')

  const [errors, setErrors] = useState({
    username:"",
    password:"",
    email:"",
    phone:""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isValid()) {
      firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
        result.user.updateProfile({ displayName: username }).then(() => {
          firebase.firestore().collection('users').add({
            id: result.user.uid,
            username: username,
            phone: phone
          }).then(() => {
            history.push('/login')
          })
        })
      }).catch((error) => {
        console.log(error.message)
        setErr(error.message)
      })
    }
  }



  const isValid = () => {
    let isValid=true;

    if(email==="" || !email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){

      setErrors((prevState)=>({
        ...prevState,
        email:"Email is not valid"
      }))

      isValid=false;
    }
    if(password==="" || password.length<8 || password[0]==" "){

      setErrors((prevState)=>({
        ...prevState,
        password:"Password is not valid"
      }))

      isValid=false;
    }
    if(username==="" || username[0]==" "){

      setErrors((prevState)=>({
        ...prevState,
        username:"Username is not valid"
      }))
      
      isValid=false;
    }

    if(phone ==="" || !phone.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)){
      setErrors((prevState)=>({
        ...prevState,
        phone:"Phone is not valid"
      }))
      
      isValid=false;
    }
    return isValid;
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => {
              setusername(e.target.value)
              setErrors((prevState)=>({
                ...prevState,
                username:""
              }))
            }}
            id="fname"
            name="name"

          />
          <span className='error'>{errors.username}</span>
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            id="fname"
            onChange={(e) => {
              setEmail(e.target.value)
              setErrors((prevState)=>({
                ...prevState,
                email:""
              }))
            }}
            name="email"

          />
          <span className='error'>{errors.email}</span>
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            id="lname"
            name="phone"
            onChange={(e) => {
              setPhone(e.target.value)
              setErrors((prevState)=>({
                ...prevState,
                phone:""
              }))
            }}

          />
          <span className='error'>{errors.phone}</span>
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            id="lname"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value)
              setErrors((prevState)=>({
                ...prevState,
                password:""
              }))
            }}

          />
          <span className='error'>{errors.password}</span>
          <p style={{ color: 'red' }}>{err}</p>
          <br />

          <button>Signup</button>
        </form>
        <a onClick={() => history.push('/login')}>Login</a>
      </div>
    </div>
  );
}
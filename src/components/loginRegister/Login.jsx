import React, { useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Login({setShowLogin}) {
  const [currentState, setCurrentState] = useState('Login')

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isMess, setIsMess] = useState('');

  var connectionUrl = "";
  
  const handleSubmit = (e) =>{
    e.prevantDefault();
    if(!currentState == 'Login') {
      connectionUrl = "http://localhost:3001/register"
    } else {
      connectionUrl = "http://localhost:3001/login"
    }
    axios.post(connectionUrl, {name, email, password, isMess})
    .then(result => console.log(result))
    .catch(err => console.log(err))

  }
  return (
    <>
      <div className="login_popup">
        <form onSubmit={handleSubmit} className="login_popup_container">
          <div className="login_popup_title">
            <h2>{currentState}</h2>
            <i onClick={()=>setShowLogin(false)} class='bx bx-x'></i>
          </div>
          <div className="login_popup_inputs">
            {currentState=="Login"? <></> : <input type="text" placeholder='Your name' required onChange={(e)=>setName(e.target.value)} />}
            <input type="email" placeholder='Your email' required onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder='Your password' required onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <button>{currentState === "Sign Up" ? "Create account" : "Login"}</button>
          <div className="login_popup_condition">
            <input type="checkbox" name="" id="" onChange={(e) => setIsMess(e.target.value)} />
            <p>Mess Admin</p>
          </div>
          {
            currentState=="Login"
            ? <p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p> 
            : <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p> 
          }
          
        </form>
      </div>
    </>
  )
}

export default Login

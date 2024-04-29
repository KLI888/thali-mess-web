import React, { useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
// import crossIcon from '../../assets/cross_icon.png'

function Login({setShowLogin}) {
  const [currentState, setCurrentState] = useState('Login')
  return (
    <>
      <div className="login_popup">
        <form action="" className="login_popup_container">
          <div className="login_popup_title">
            <h2>{currentState}</h2>
            <i onClick={()=>setShowLogin(false)} class='bx bx-x'></i>
          </div>
          <div className="login_popup_inputs">
            {currentState=="Login"? <></> : <input type="text" placeholder='Your name' required />}
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='Your password' required />
          </div>
          <button>{currentState === "Sign Up" ? "Create account" : "Login"}</button>
          <div className="login_popup_condition">
            <input type="checkbox" name="" id="" required />
            <p>By continuing, i agree to the term of use & privacy policy.</p>
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

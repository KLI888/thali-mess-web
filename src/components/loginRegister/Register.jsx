import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <>
    <div className="navbar_srtip">
      <p>Introducing <span>OnlyMess Treats</span>, treat yourself with delighful recipes</p>
    </div>
    <div className="login">
      <div className="login_content">
        <div className="login_img">
          <img src="https://www.onlymess.in/_next/image?url=%2Fsignup%2Fhero.jpg&w=1920&q=75" alt="" />
        </div>
        <div className="login_form">
          <form action="">
            <div className="input">
              <input type="email" placeholder='your@gmail.com' />
            </div>
            <div className="input">
              <input type="email" placeholder='your@gmail.com' />
            </div>
            <div className="input">
              <input type="password" placeholder='Strong password' />
            </div>
            <div className="btn"><input type="submit" value="LOGIN" /></div>
            <p className="signup">Have an account? <Link to="/login" className="a_link">SignIn</Link></p>
            <p>Go to? <Link to="/" className='a_link'>Home</Link></p>
          </form>

        </div>
      </div>
    </div>
  </>
  )
}

export default Register

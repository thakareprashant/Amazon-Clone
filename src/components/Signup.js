import React from 'react'
import "./sign.css"
export const Signup = () => {
  return (
    <>
    <div className="sign-body">
         <form className="sign-form">
           <label className="title-sign">
           Sign Up
           </label>
           <label className="username-label">Name</label>
           <input className="email-input" type={"text"}/>
           <label className="password-label">Email</label>
           <input className="password-input" type={"email"}/>
           <label className="password-label">New Password</label>
           <input className="password-input" type={"password"}/>
           <button className="sign-button">Sign Up</button>
           





          </form>
           


        </div>


    </>
  )
}

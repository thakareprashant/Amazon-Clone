import react from "react";
import "./sign.css"
function Signin(){
    return(
        <>
        <div className="sign-body">
         <form className="sign-form">
           <label className="title-sign">
           Sign In
           </label>
           <label className="username-label">Username</label>
           <input className="email-input" type={"email"}/>
           <label className="password-label">password</label>
           <input className="password-input" type={"password"}/>
           <button className="sign-button">Sign In</button>
           





          </form>
           


        </div>




        </>



    )






}

export default Signin;
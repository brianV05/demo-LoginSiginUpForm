import React, { useState } from "react";
import facebook_icon from '../Components/Assets/fb.png';
import x_icon from '../Components/Assets/X.png';
import google_icon from '../Components/Assets/google.png';


export const LoginForm = () =>{
    const [action, setAction] = useState("Welcome back");



    return (
        <div className = "Container">
            <div className = "header">
                <div className = "text"> {action}</div>
            </div>
            
            <div className = "inputs">

                {action==="Welcome Back!"? <div></div> : <div className = "input">
                    <input placeholder="Name" type="text" />
                </div>}
                
                    
                <div className = "input">
                    <input placeholder="Email" type="email" />
                </div>

                <div className = "input">
                    <input placeholder="Password" type="password" />
                </div>
                
            </div>

            <div className="submit-container">
              {/*  <div className="submit">Sign Up</div>*/}
              <button className={action==="Sign Up"? "submit gray" : "submit"} onClick={() =>{setAction("Nice To Meet You!")}}> Sign Up</button>

                {action==="Nice To Meet You!"? <div></div> : <div className="forgot-password">Forgot Password?</div>}
                
            </div>

            <br></br>
            <div> Or continue with </div>
            <div className="log-container">
                <img src={google_icon}></img>
                <img src={facebook_icon}></img>
                <img src={x_icon}></img>
            </div>


            <div> Don't have an account yet?</div>
            <button className={action==="Login"? "submit gray" : "submit"} onClick={() =>{setAction("Welcome Back!")}}>Login</button>
            


        </div>
            
           


    

    )
   
}
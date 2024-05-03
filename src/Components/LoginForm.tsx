import React, { ChangeEvent, HTMLInputTypeAttribute, useState } from "react";
import facebook_icon from '../Components/Assets/fb.png';
import x_icon from '../Components/Assets/X.png';
import google_icon from '../Components/Assets/google.png';


export const LoginForm = () =>{
    // form title state
    const [action, setAction] = useState("Welcome back");

    // form state
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");


    //user input
    const UserOnChangeFunction = (synthEvent: ChangeEvent<HTMLInputElement>) => {
        if(synthEvent.target.name === "userName" ){
            setUserName(synthEvent.target.value);
        }
        else if(synthEvent.target.name === "userEmail"){
            setUserEmail(synthEvent.target.value);
        }
        else if(synthEvent.target.name === "userPassword"){
            setUserPassword(synthEvent.target.value);
        }
    }


    return (
        <div className = "Container">
            <div className = "header">
                <div className = "text"> {action}</div>
            </div>
            
            <form className = "inputs">

                {action==="Welcome Back!"? <div></div> : <div className = "input">
                    <input placeholder="Name" type="text" value ={userName} onChange={UserOnChangeFunction} name="userName"/>
                </div>}
                
                    
                <div className = "input">
                    <input placeholder="Email" type="email" value={userEmail} onChange={UserOnChangeFunction} name="userEmail"/>
                </div>

                <div className = "input">
                    <input placeholder="Password" type="password" value={userPassword} onChange={UserOnChangeFunction} name="userPassword"/>
                </div>
                
            </form>

            <div className="submit-container">
              {/*  <div className="submit">Sign Up</div>*/}
              <button className={action} onClick={() =>{setAction("Nice To Meet You!")}}> Sign Up</button>

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
            <button className={action} onClick={() =>{setAction("Welcome Back!")}}>Login</button>
            


        </div>
            
           


    

    )
   
}
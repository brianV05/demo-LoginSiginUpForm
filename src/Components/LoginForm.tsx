import React, { ChangeEvent, HTMLInputTypeAttribute, useState } from "react";
import facebook_icon from '../Components/Assets/fb.png';
import x_icon from '../Components/Assets/X.png';
import google_icon from '../Components/Assets/google.png';


import Validation from "./LoginValidator";
import { setConstantValue } from "typescript";


// Interface representing the state of the form
interface FormState {
    userName: string;
    userEmail: string;
    userPassword: string;
}


export const LoginForm = () =>{
    // form title state
    const [action, setAction] = useState("Welcome back");

    // form state
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    // Sign In error states
    const[errors, setErrors] = useState<FormState>({userName: '',userEmail: '', userPassword: ''});

    // form submission handler 
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        // Calling the Validation function to check for errors
        const validationErrors = Validation({email :userEmail, password:userPassword});

// Creating a new object to hold errors based on FormState interface
        const newErrors: FormState = {
            userName: validationErrors.email || '',
            userEmail: validationErrors.email || ' ',
            userPassword: validationErrors.password || ' '

        };
        // Setting the errors state with the new errors object
        setErrors(newErrors);


        // If there are no validation errors, log success message
        if(Object.keys(validationErrors).length === 0){
            console.log("SUCCESSFUL!")
        }
        

       

        };

         // user input, operate simply input. Without this "onChange" event, we cannot type.
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

          
            
            <form onSubmit={handleSubmit}>

                {action==="Welcome Back!"? <div></div> : <div className = "input">
                    <input placeholder="Name" type="text" value ={userName} onChange={UserOnChangeFunction} name="userName"/>
                </div>}
                
                    
                <div className = "input">
                    <input placeholder="Email" type="email" value={userEmail} onChange={UserOnChangeFunction} name="userEmail"/>
                    {errors.userEmail && <span className="text-error"> {errors.userEmail}</span>}
                </div>
                

                <div className = "input">
                    <input placeholder="Password" type="password" value={userPassword} onChange={UserOnChangeFunction} name="userPassword"/>
                    {errors.userPassword && <span className="text-error"> {errors.userPassword}</span>}
                </div>

                
        

                <div className="submit-container">
                {/*  <div className="submit">Sign Up</div>*/}
                <button type = "submit" className={action} onClick={() =>{setAction("Nice To Meet You!")}}> Sign Up</button>

                    {action==="Nice To Meet You!"? <div></div> : <div className="forgot-password">Forgot Password?</div>}
                    
                </div>
            </form>
            <br></br>
            <div> Or continue with </div>
            <div className="log-container">
                <img src={google_icon}></img>
                <img src={facebook_icon}></img>
                <img src={x_icon}></img>
            </div>


            <div> Don't have an account yet?</div>
            <button type = "submit" className={action} onClick={() =>{setAction("Welcome Back!")}}>Login</button>
            


        </div>
            

    )
   
}


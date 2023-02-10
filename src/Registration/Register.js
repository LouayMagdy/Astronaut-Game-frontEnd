import React, {useEffect, useState} from "react";
import image from '../Images/astro-removebg-preview.png'
import './Register.css'
import SignUpForm from "./signUpForm";
import SignInForm from "./SignInForm";
import astro from "../Images/sleep_astro-removebg-preview.png";
import NavBar from "../nav-bar/nav-bar";
let Register = () => {
    let [signUp, setSignUp] = useState(false)
    useEffect( () => {
        if(signUp){
            let btn = document.querySelector(".sign-up");
            btn.style.backgroundColor = 'darkGrey'
            btn.style.color = 'black'
            let btn2 = document.querySelector(".sign-in");
            btn2.style.backgroundColor = 'black'
            btn2.style.color = 'lightGrey'
        }
        else{
            let btn = document.querySelector(".sign-in");
            btn.style.backgroundColor = 'darkGrey'
            btn.style.color = 'black'
            let btn2 = document.querySelector(".sign-up");
            btn2.style.backgroundColor = 'black'
            btn2.style.color = 'lightGrey'
        }
    }, [signUp])
    return <div className={'page'}>
        <NavBar/>
        <div className={'Register'} style={{position:"absolute", left: window.innerWidth / 2.6}}>
            <div className={'buttons'}>
                <button className={'sign-up'} onClick={() => setSignUp(true)}>
                    Sign-Up <i className={'fas fa-user-edit'}></i> </button>
                <button className={'sign-in'} onClick={() => setSignUp(false)}>
                    Sign-In <i className={'fas fa-user-clock'}></i> </button>
            </div>
            <img src={image} alt={'astronaut'} className={'astronaut'}/>
            {signUp? <SignUpForm/> : <SignInForm/>}
        </div>
        <div className={"gameTitle"}>
            <h1> The Missing Astronaut </h1>
            <img src={astro} alt={'astronaut'} className={'astronautS'}/>
        </div>
    </div>
}
export default Register;
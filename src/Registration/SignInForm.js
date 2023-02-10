import React, {useState} from "react";
import './SignUpForm.css'
import {useNavigate} from "react-router-dom";

let SignInForm = () =>{
    let navigate = useNavigate();
    let [user, setUser] = useState({userName: "", password: ""})
    let updateUser = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    let submit = async (e) => {
        e.preventDefault()
        let response = await fetch("http://localhost:8080/api/v1/auth/astronaut-game/sign-in",
            {
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }).then((res) => res.json()).then((data) => {
                if(data.token !== "No Token cuz The User Not Registered") {
                    console.log(data.token)
                    localStorage.setItem("jastro-wgamet", data.token)
                    navigate('/AstronautGame/Game')
                }
                else alert('No Such User Registered!!')
        })
        console.log(user)
        setUser({name: '', userName: '', password: '', gender: ''});
    }

    return <form className={'signInForm'} onSubmit={(event) => submit(event)}>
        <div className={'item'}>
            <label htmlFor={'userName'}>UserName: </label>
            <input type={'text'} name={'userName'} required={true} value={user.userName} onChange={(event) => updateUser(event)}/>
        </div>
        <div className={'item'}>
            <label htmlFor={'password'}>Password: </label>
            <input type={'password'} name={'password'} required={true} value={user.password} onChange={(event) => updateUser(event)}/>
        </div>
        <div className={'item'}>
            <button type={'submit'} className={'btnR'}>
                Sign-in <i className={'fas fa-user-check'}></i> </button>
            <button className={'btnJ'} onClick={() => { localStorage.removeItem("jastro-wgamet"); navigate('/AstronautGame/Game')}} >
                Join as Random User <i className='fas fa-user-secret'></i>
            </button>
        </div>
    </form>
}
export default SignInForm
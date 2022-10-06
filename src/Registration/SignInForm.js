import React, {useState} from "react";
import './SignUpForm.css'
import {useNavigate, useParams} from "react-router-dom";

let SignInForm = () =>{
    let {id} = useParams();
    let navigate = useNavigate();
    let [user, setUser] = useState({userName: "", password: ""})
    let updateUser = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    let submit = async (e) => {
        e.preventDefault()
        if(user.userName && user.password){
            let response = await fetch("http://localhost:8080/AstronautGame/Registration/SignIn",
                {
                    method : 'POST',
                    headers : {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                }).then((res) => res.json()).then((data) => {
                    if(data >= 0) navigate(`/AstronautGame/Game:${data}`)
                    else if (data < 0) alert('No Such User Registered!!')
            })
        }
        else alert("Some fields needs to be filled!!")
        console.log(user)
        setUser({name: '', userName: '', password: '', gender: ''});
        ////navigate using user id
    }
    return <form className={'signInForm'} onSubmit={(event) => submit(event)}>
        <div className={'item'}>
            <label htmlFor={'userName'}>UserName: </label>
            <input type={'text'} name={'userName'} value={user.userName} onChange={(event) => updateUser(event)}/>
        </div>
        <div className={'item'}>
            <label htmlFor={'password'}>Password: </label>
            <input type={'password'} name={'password'} value={user.password} onChange={(event) => updateUser(event)}/>
        </div>
        <div className={'item'}>
            <button type={'submit'} className={'btnR'}>
                Sign-in <i className={'fas fa-user-check'}></i> </button>
            <button className={'btnJ'} onClick={() => {navigate('/Game000')}}>
                Join as Random User <i className='fas fa-user-secret'></i>
            </button>
        </div>
    </form>
}
export default SignInForm
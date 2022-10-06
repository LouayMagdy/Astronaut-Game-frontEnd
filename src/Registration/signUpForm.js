import React from "react";
import './SignUpForm.css'
import {useNavigate} from "react-router-dom";
let SignUpForm = () => {
    let navigate = useNavigate()
    let [user, setUser] = React.useState({name: '', userName: '', password: '', gender: ''})
    let updateUser = (e) =>{
        if(e.target.name !== 'male' && e.target.name !== 'female') setUser({...user, [e.target.name]: e.target.value})
        else setUser({...user, gender: e.target.name})
    }
    let submit = async (e) => {
        e.preventDefault()
        if (user.name && user.userName && user.password && user.gender){
            let response = await fetch("http://localhost:8080/AstronautGame/Registration/SignUp", {
                method : "POST",
                headers : {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(
                    {"fullName" : user.name, "userName" : user.userName, "password" : user.password, "gender" : (user.gender === "male")}
                )
            }).then(res => res.json()).then(data => {
                console.log(JSON.stringify(user))
                if(data === -1) alert("Already Registered!!, Go and Sign-in...")
                else navigate(`/AstronautGame/Game:${data}`)
            })
        }
        console.log(user)
        setUser({name: '', userName: '', password: '', gender: ''});
        ///navigate using the user id
    }
    return <form className={'SignUpForm'} onSubmit={(event) => submit(event)}>
        <div className={'item'}>
            <label htmlFor={'name'}>Name: </label>
            <input type={"text"} id={'name'} name={'name'} value={user.name} onChange={(event) => updateUser(event)}/>
        </div>
        <div className={'item'}>
            <label htmlFor={'userName'}>UserName: </label>
            <input type={"text"} id={'userName'} name={'userName'} value={user.userName} onChange={(event) => updateUser(event)}/>
        </div>
        <div className={'item'}>
            <label htmlFor={'password'}>Password: </label>
            <input type={"password"} id={'password'} name={'password'} value={user.password} onChange={(event) => updateUser(event)}/>
        </div>
        <div className={'item'}>
            <label htmlFor={'gender'}>Gender: </label>
            <div className={'itemGG'}>
                <div className={'item'}>
                    <input type={'radio'} className={'radio'} name={'male'} onChange={(event) => updateUser(event)}
                    checked={user.gender === 'male'}/>
                    <label htmlFor={'male'}>Male </label>
                </div>
                <div className={'item'}>
                    <input type={'radio'} className={'radio'} name={'female'} onChange={(event) => updateUser(event)}
                    checked={user.gender === 'female'}/>
                    <label htmlFor={'Female'}>Female </label>
                </div>
            </div>
        </div>
        <div className={'item'}>
            <button type={'submit'} className={'btnR'}>
                Register <i className={'fas fa-user-check'}></i> </button>
            <button className={'btnJ'} onClick={() => {navigate('/Game000')}}>
                Join as Random User <i className='fas fa-user-secret'></i>
            </button>
        </div>

    </form>
}
export default SignUpForm;
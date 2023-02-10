import React from "react";
import astro from '../Images/sleep_astro-removebg-preview.png'
import './Loading.css'
let Loading = () => {
    return <div className={'loading'}>
        <img src={astro} alt="astronaut" className={'load'}/>
    </div>;
}
export default Loading
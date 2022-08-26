import React, {useEffect} from "react";
import './Game.css'
import NavBar from "../nav-bar/nav-bar";
import {useNavigate, useParams} from "react-router-dom";
import flyAstro from './flyAstro-removebg-preview.png'
let Game = () => {
    let {id} = useParams()
    let navigate = useNavigate();
    return <div className={'gamePage'}>
        <div className={'header'}>
            <NavBar/>
        </div>
        <div className={'GameMenu'} style ={{left: window.innerWidth / 4.5}}>
            <div className={'titleImage'}>
                <img src={flyAstro} alt={'astronaut'} className={'astronautF'}/>
                <h1 className={'title'}>The Missing Astronaut</h1>
            </div>
            <div className={'menu'}>
                <button onClick={() => navigate(`/match${id}`)}> Play A Game <i className={'fas fa-user-astronaut'}></i></button>
                <button onClick={() => navigate(`/Ranking${id}`)}> Ranking <i className={'fas fa-medal'}></i> </button>
                <button> Statistics <i className={'fas fa-chart-pie'}></i> </button>
                <button onClick={() => navigate(`/${id}`)}> Sign-Out <i className={'fas fa-door-open'} ></i> </button>
            </div>
        </div>
    </div>
}
export default Game;
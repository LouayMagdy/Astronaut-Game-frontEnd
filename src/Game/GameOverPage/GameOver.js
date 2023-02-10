import './GameOver.css'
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

let GameOver = () => {
    let navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {navigate('/AstronautGame/Game')}, 2000);
    })
    return <div className={'GameOverPage'}>
        <div className={'GameOverWindow'} style={{top:window.innerHeight * 0.35, left: window.innerWidth * 0.30}}>
            <h1 className={'GameOver'}>Game Over</h1>
        </div>
    </div>
}

export default GameOver;
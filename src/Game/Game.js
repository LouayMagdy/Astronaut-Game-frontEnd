import './Game.css'
import NavBar from "../nav-bar/nav-bar";
import {useNavigate} from "react-router-dom";
import flyAstro from './Images/flyAstro-removebg-preview.png'
let Game = () => {
    let navigate = useNavigate();
    const isNormal = localStorage.getItem("jastro-wgamet") !== null;
    let signOut = () => {
        localStorage.removeItem("jastro-wgamet")
        navigate("/AstronautGame/Register")
    }

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
                <button onClick={() => navigate(`/AstronautGame/Rules`)}> Play A Game <i className={'fas fa-user-astronaut'}></i></button>
                <button onClick={() => navigate(`/AstronautGame/Ranking`)}> Ranking <i className={'fas fa-medal'}></i> </button>
                <button disabled={!isNormal} onClick={() => signOut()}> Sign-Out <i className={'fas fa-door-open'} ></i> </button>
                <button disabled={isNormal} onClick={() => navigate("/AstronautGame/Register")}> Register <i className={'fas fa-user-edit'}></i>  </button>
            </div>
        </div>
    </div>
}
export default Game;
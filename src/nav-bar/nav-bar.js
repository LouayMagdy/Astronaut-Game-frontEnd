import {BrowserRouter, Route, Routes, useNavigate, Link, useParams} from "react-router-dom";
import './nav-bar.css'
let NavBar = () => {
    let {id} = useParams();
    let navigator = useNavigate()
    return <nav className='navBar'>
        <ul>
            <li className={'l'} onClick={() => navigator(`/AstronautGame/${id}`)}><label>home</label></li>
            <li className={'l'}><label onClick={() => navigator(`/AstronautGame/About${id}`)}>about</label></li>
            <li className={'l'}><label onClick={() => navigator(`/AstronautGame/Ranking${id}`)}>ranking</label></li>
            <li className={'l'}><label>contact</label></li>
        </ul>
    </nav>
}
export default NavBar;
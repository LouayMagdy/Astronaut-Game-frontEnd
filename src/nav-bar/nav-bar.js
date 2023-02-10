import {useNavigate} from "react-router-dom";
import './nav-bar.css'
let NavBar = () => {
    let navigator = useNavigate()
    return <nav className='navBar'>
        <ul>
            <li className={'l'} onClick={() => navigator(`/AstronautGame`)}><label>home</label></li>
            <li className={'l'}><label onClick={() => navigator(`/AstronautGame/About`)}>about</label></li>
            <li className={'l'}><label onClick={() => navigator(`/AstronautGame/Ranking`)}>ranking</label></li>
            <li className={'l'}><label> <a href={'https://mail.google.com/mail/u/0/#inbox?compose=VpCqJXKBhfNkWwZfrghGdmNDJCLGmfwbbGhzdfSxzgztHhMNVljnsPfcLdbGSRLkPtPbFQq'}>
                Contact </a></label></li>
        </ul>
    </nav>
}
export default NavBar;
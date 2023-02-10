import React, {useEffect, useState} from "react";
import NavBar from "../nav-bar/nav-bar";
import './About.css'
import Loading from "../Loading/Loading";
let About = () => {
    let [loading, isLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => isLoading(false), 4000)
    }, loading)
    if(loading) return <Loading/>
    return <div className={'About'}>
        <NavBar/>
        <div className={'aboutBody'}>
            <h1>About Us</h1>
            <div className={'paragraph'}>
                <p>this game is about a missing astronaut floating in space and trying to find his space-ship but during his journey he will face different things like:</p>
                <ul className={'facings'}>
                    <li className={'f'}>some lava stone that may burn him</li>
                    <li className={'f'}>some snacks that he should collect as much as possible of them</li>
                </ul>
                <p>the astronaut should reach the space-ship before it leaves in two minutes time and should avoid the lava stones</p>
                <p>for further knowledge about the design and the development of the game contact the developer and ask for the Github Repo.</p>
            </div>
        </div>
    </div>
}
export default About;
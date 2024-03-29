import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import './Rules.css'
import astronautGif from "../Images/Untitled-unscreen.gif"
let Rules = () =>{
    let navigate = useNavigate()
    useEffect(() => {
        let navi = setTimeout(() => {
            navigate(`/AstronautGame/Match`)
        }, 120000)
        return () => {clearTimeout(navi)}
    }, [])
    return <div className={'mainRef'}>
        <div className={'titleR'}>
            The Missing Astronaut
        </div>
        <div className={'rules'} style={{top: window.innerHeight * 0.17}}>
            <ul className={'r'}>
                <li>you have only two minutes till the space ship arrives to save your astronaut</li>
                <li>Collect as much snacks as possible as your score depends on it the most</li>
                <li>avoid hitting lava rocks as long as possible ... each take 20 points from your life</li>
            </ul>
        </div>
        <div className={'movements'} style={{top: window.innerHeight * 0.35}}>
            <p> Arrows And Movement</p>
            <ul className={'moves'}>
                <li>
                    <img src={astronautGif} alt={"standing astronaut"} />
                    <ul className={'moveRR'}>
                        <li> &#x2191; and &#x2193; will cause the astronaut to move ups or down .</li>
                    </ul>
                </li>
                <li>
                    <img src={astronautGif} alt={"standing astronaut"} style={{transform: 'rotate(-45deg)'}}/>
                    <ul className={'moveRR'}>
                        <li> this rotation is caused by the &#x2190; .</li>
                        <li> &#x2191; and &#x2193; will cause the astronaut to move to the top-left corner or the bottom-right one . </li>
                    </ul>
                </li>
                <li>
                    <img src={astronautGif} alt={"standing astronaut"} style={{transform: 'rotate(45deg)'}}/>
                    <ul className={'moveRR'}>
                        <li> this rotation is caused by the &#x2192; .</li>
                        <li> &#x2191; and &#x2193; will cause the astronaut to move to the top-right corner or the bottpm-left one .</li>
                    </ul>
                </li>
            </ul>
            <div className={'btn'}>
                <button onClick={() => navigate("/AstronautGame/Match")}> Proceed To The Game </button>
            </div>
        </div>

    </div>
}
export default Rules;
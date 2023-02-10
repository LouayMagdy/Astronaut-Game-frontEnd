import React, {useState} from "react";
import './Ranking.css'
import NavBar from "../nav-bar/nav-bar";
import Loading from "../Loading/Loading";
let Ranking = () => {
    let [data, setData] = useState([]);
    React.useEffect(() => {
        fetch("http://localhost:8080/api/v1/auth/astronaut-game/stats").then(response => response.json()).then(table => {
            console.log(table)
            setData(table)
        })
    }, [])

    let [loading, isLoading] = useState(true);
    React.useEffect(() => {
        setTimeout(() => {
            isLoading(false)
        }, 2000)
    })

    if(loading) return <Loading/>
    return <div className={'rank'}>
        <NavBar/>
        <div className={'ranking'}>
            <h2>Ranking</h2>
            <div className={'ranks'}>
                {data.map((user, index) => {
                    if (index === 0)
                        return <label className={'first'}><i className={'fas fa-medal'} style={{color: 'gold', fontSize: 30}}></i> First
                            <br/> Username : {user.userName} <br/> Average Life : {user.avgLife} <br/> Max.Collected Food : {user.maxCollectedFood} <br/> Games Played : {user.gamesPlayedNum}
                        </label>
                    else if(index === 1)
                        return <label className={'second'}><i className={'fas fa-medal'} style={{color: 'silver', fontSize: 30}}></i> Second
                            <br/> Username : {user.userName} <br/> Average Life : {user.avgLife} <br/> Max.Collected Food : {user.maxCollectedFood} <br/> Games Played : {user.gamesPlayedNum}
                        </label>
                    else if(index === 2)
                        return <label className={'third'}><i className={'fas fa-medal'} style={{color: 'sandybrown', fontSize: 30}}></i>Third
                            <br/> Username : {user.userName} <br/> Average Life : {user.avgLife} <br/> Max.Collected Food : {user.maxCollectedFood} <br/> Games Played : {user.gamesPlayedNum}
                        </label>
                    return null
                })}
            </div>
        </div>
    </div>
}
export default Ranking;
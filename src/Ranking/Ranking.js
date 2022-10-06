import React, {useState} from "react";
import './Ranking.css'
import NavBar from "../nav-bar/nav-bar";
import Loading from "../Loading/Loading";
import {useParams} from "react-router-dom";
let Ranking = () => {
    let {id} = useParams()
    let [data, setData] = useState([]);
    let [currUser, setUser] = useState(null)
    React.useEffect(() => {
        fetch("http://localhost:8080/AstronautGame/Stats/Rankings").then(response => response.json()).then(table => {
            let tableArr = [];
            table.forEach(t => tableArr.push(JSON.parse(t)))
            setData(tableArr)
            console.log(tableArr)
            setUser(tableArr.find(u => u.iD === Number.parseInt(id)));
            console.log(currUser)
        })
    }, [])
    let [loading, isLoading] = useState(true);
    React.useEffect(() => {
        setTimeout(() => {
            isLoading(false)
        }, 4000)
    })
    if(loading) return <Loading/>
    return <div className={'rank'}>
        <NavBar/>
        <div className={'ranking'}>
            <h2>Ranking</h2>
            <div className={'ranks'}>
                {data.map((user, index) => {
                    if (index === 0)
                        return <label className={'first'}><i className={'fas fa-medal'} style={{color: 'gold'}}></i> First
                            : <br/> Username : {user.userName} <br/> Average Life : {user.score.avgLife} <br/> Average Collected Food : {user.score.avgCollectedFood} <br/> Games Played : {user.score.gamesPlayed}
                        </label>
                    else if(index === 1)
                        return <label className={'second'}><i className={'fas fa-medal'} style={{color: 'silver'}}></i> Second
                            : <br/> Username : {user.userName} <br/> Average Life : {user.score.avgLife} <br/> Average Collected Food : {user.score.avgCollectedFood} <br/> Games Played : {user.score.gamesPlayed}
                        </label>
                    else if(index === 2 && !currUser)
                        return <label className={'third'}><i className={'fas fa-medal'} style={{color: 'sandybrown'}}></i>Third
                            : <br/> Username : {user.userName} <br/> Average Life : {user.score.avgLife} <br/> Average Collected Food : {user.score.avgCollectedFood} <br/> Games Played : {user.score.gamesPlayed}
                        </label>
                    return null
                })}
                {currUser? <label className={'you'}> You <br/>
                    Rank : {data.indexOf(currUser) + 1}
                    <br/> Average Life : {currUser.score.avgLife} <br/> Average Collected Food : {currUser.score.avgCollectedFood} <br/> Games Played : {currUser.score.gamesPlayed}
                </label> : null}

            </div>
        </div>
    </div>
}
export default Ranking;
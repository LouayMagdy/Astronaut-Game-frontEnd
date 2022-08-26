import React, {useState} from "react";
import './Ranking.css'
import NavBar from "../nav-bar/nav-bar";
import Loading from "../Loading/Loading";
import {useParams} from "react-router-dom";
let Ranking = () => {
    let {id} = useParams()
    React.useEffect(() => {
        //////getting data...
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
                <label className={'first'}>First <i className={'fas fa-medal'} style={{color: 'gold'}}></i> : ...</label>
                <label className={'second'}>Second <i className={'fas fa-medal'} style={{color: 'silver'}}></i>: ...</label>
                <label className={'third'}>Third <i className={'fas fa-medal'} style={{color: 'sandybrown'}}></i>: ...</label>
                {id !== '000'? <label className={'you'}>You : ...</label> : ''}
            </div>
        </div>
    </div>
}
export default Ranking;
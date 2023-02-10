import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import './App.css'
import NavBar from "./nav-bar/nav-bar";
import astro from "./sleep_astro-removebg-preview.png"
import Loading from './Loading/Loading'


function App() {
    let [loading, isLoading] = useState(true)
    let intro = ["welcome to the missing astronaut game...", "Come and help our astronaut to survive the space", "keep your eyes open"]
    let [textArr, setArr] = useState(['', '', ''])
    let [index, setIndex] = useState(0)
    let [indexWithin, setIndexWithin] = useState(-1)

    useEffect(() => { setTimeout(() =>{
        let temp = textArr;
        if(!loading && index < intro.length && indexWithin < intro[index].length)
            temp[index] += intro[index].at(indexWithin);
        setArr(temp);
        if(!loading && intro[index] && indexWithin < intro[index].length) setIndexWithin(indexWithin + 1)
        else if (!loading && index < intro.length){setIndexWithin(0); setIndex(index + 1)}
    }, 100)}, [intro, textArr, index, indexWithin, loading])

    useEffect(() => {
        if(loading){
            setTimeout(() => isLoading(false), 4000)
        }
    }, [loading])

    let navigate = useNavigate();

    if(loading) return <div> <Loading/> </div>
    if(!loading) return (
    <div className='welcome'>
      <NavBar/>
      <div className={'body'}>
          <div className='intro'>
              {textArr.map(text => <p key={text}> {text}</p>)}
          </div>
          <div className={"gameTitle"}>
              <h1> The Missing Astronaut </h1>
              <img src={astro} alt={'astronaut'} className={'astronautS'}/>
          </div>
          <div className={'start'}>
              <button onClick={() => navigate('/AstronautGame/Register')}>
                  Get Started
                  <i className={'fas fa-user-astronaut'}></i>
              </button>
          </div>
      </div>

    </div>
    );
}

export default App;

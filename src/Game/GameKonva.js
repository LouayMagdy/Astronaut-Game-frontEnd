import React, {useCallback, useEffect, useState} from "react";
import './GameKonva.css'
import {Image, Star, Stage, Text, Rect, FastLayer, Layer} from 'react-konva';
import 'gifler'
import lava from './lava rock.png'
import foods from './food.png'
import gif from './Untitled-unscreen.gif'
import {useParams} from "react-router-dom";
import Missle from "./Missle";

const wsAPI = new WebSocket("ws://localhost:8080/AstronautGame/Match")

let GameKonva = () => {
    let {id} = useParams()
    let [dataSent, setDataSent] = useState(true);
    let [Astronaut, setAstronaut] = useState({x: 200, y: 100, rotation: 0})
    let [rocks, setRocks] = useState([]);
    let [food, setFood] = useState([]);
    let [stars, setStar] = useState([])
    let [circles, setCircles] = useState(
        [{x: Astronaut.x + 90, y: Astronaut.y + 60, radius: 24},
                  {x: Astronaut.x + 88, y: Astronaut.y + 90, radius: 20},
                  {x: Astronaut.x + 86, y: Astronaut.y + 110, radius: 18}]
    )
    let [time, setTime] = useState(120)
    let [life, setLife] = useState(1)
    /// focusing on canvas element to listen to keyboard
    useEffect(() => {
        let match = document.querySelector('.match')
        match.focus()
    }, [])
    /// sending data to the backend
    useEffect(() => {
        if (time <= 0) return
        setTimeout(() => {
            let match = document.querySelector('.match');
            let right =  Number.parseInt(match.style.width)
            let bottom = Number.parseInt(match.style.height)
            if (wsAPI.readyState === wsAPI.OPEN) {
                wsAPI.send(JSON.stringify({
                    iD: id,
                    x: right,
                    y: bottom,
                    circles: circles
                })
                )
                console.log("some data sent to the backend")
                setDataSent(!dataSent)
            }
            else console.log("ws closed")
        }, 500)
    }, [time, circles, id, dataSent])
    /// decrementing time
    useEffect(() => {
        if(time <= 0) return;
        setTimeout(() => {setTime(time - 1);}, 1000)
    }, [time])
    /// getting data from the backend
    useEffect(() => { //// on message
        if (time <= 0) return;
        let missles = [], tFood = [], tRocks = []
        wsAPI.onmessage = (data) => {
            console.log("some data received")
            if (data.data === "Game Over") setTime(0)
            let parsedData = JSON.parse(data.data)
            setLife(parsedData.life / 100)
            parsedData.movables.forEach( movable => missles.push(JSON.parse(movable)))
            missles.forEach(missle => {
                if(missle.type === 'rock' && tRocks.length < 10) tRocks.push({x: missle.point.x, y: missle.point.y})
                if(missle.type === 'food' && tFood.length < 10) tFood.push({x: missle.point.x, y: missle.point.y})
            })
            setFood(tFood)
            setRocks(tRocks)
        }
        console.log(food, rocks)
    }, [time, rocks, food, life, dataSent])
    /// for stars
    useEffect(() => {
        if(time === 0) return;
        let size = Math.trunc(Math.random() * 50)
        let array = [];
        let match = document.querySelector('.match');
        let left = 0, right =  Number.parseInt(match.style.width)
        let top = 0, bottom = Number.parseInt(match.style.height)
        for(let i = 0; i < size; i++)
            array.push({x: Math.trunc(Math.random() * (right - left)) + left, y: Math.trunc(Math.random() * (bottom - top)) + top})
        setStar(array)
    }, [])
    /// listening to keyboard
    let moveAstronaut = useCallback(e => {
        console.log("key pressed")
        let match = document.querySelector('.match');
        let left = 0, right =  Number.parseInt(match.style.width)
        let top = 0, bottom = Number.parseInt(match.style.height)
        if(e.keyCode === 37){ //left
            if(Astronaut.rotation === 0)
                setAstronaut({...Astronaut, rotation: -45, y: Math.min(Astronaut.y + 70, bottom), x: Math.min(Math.max(Astronaut.x, left), right - 130)})
            else if(Astronaut.rotation === 45)
                setAstronaut({...Astronaut, rotation: 0, y:Math.min(Astronaut.y + 30, bottom - 130), x: Math.max(Astronaut.x - 40, left + 30)})
        } else if(e.keyCode === 39){ /// right
            if(Astronaut.rotation === 0)
                setAstronaut({...Astronaut, rotation: 45, y: Math.max(Astronaut.y - 55, top - 60), x: Math.max(Math.min(Astronaut.x + 30, right - 130), left + 30)})
            else if(Astronaut.rotation === -45)
                setAstronaut({...Astronaut, rotation: 0, y: Math.max(Astronaut.y - 50, top)})
        } else if(e.keyCode === 38){ //up
            if(Astronaut.rotation === 0) setAstronaut({...Astronaut, y: Math.max(Astronaut.y - 10, top - 10)})
            else if(Astronaut.rotation === 45) setAstronaut({...Astronaut, y: Math.max(Astronaut.y - 10, top - 60), x: Math.min(Astronaut.x + 10, right - 70)})
            else if(Astronaut.rotation === -45) setAstronaut({...Astronaut, y: Math.max(Astronaut.y - 10, top + 60), x: Math.max(Astronaut.x - 10, left - 70)})
        }else if(e.keyCode === 40){ //down
            if(Astronaut.rotation === 0) setAstronaut({...Astronaut, y: Math.min(Astronaut.y + 10, bottom - 130)})
            else if(Astronaut.rotation === 45) setAstronaut({...Astronaut, y: Math.min(Astronaut.y + 10, bottom - 150), x: Math.max(Astronaut.x - 10, left + 30)})
            else if(Astronaut.rotation === -45) setAstronaut({...Astronaut, y: Math.min(Astronaut.y + 10, bottom - 50), x: Math.min(Astronaut.x + 10, right - 160)})
        }
        if (Astronaut.rotation === 0)
            setCircles([{x: Astronaut.x + 90, y: Astronaut.y + 60, radius: 24},
                {x: Astronaut.x + 88, y: Astronaut.y + 90, radius: 20},
                {x: Astronaut.x + 86, y: Astronaut.y + 110, radius: 18}])
        else if (Astronaut.rotation === 45)
            setCircles([{x: Astronaut.x + 26, y: Astronaut.y + 100, radius: 23},
                {x: Astronaut.x + 5, y: Astronaut.y + 120, radius: 18},
                {x: Astronaut.x - 10, y: Astronaut.y + 135, radius: 16}])
        else
            setCircles([{x: Astronaut.x + 105, y: Astronaut.y - 18, radius: 23},
                {x: Astronaut.x + 120, y: Astronaut.y, radius: 18},
                {x: Astronaut.x + 139, y: Astronaut.y + 18, radius: 16}])
    }, [Astronaut])
    const seconds = useCallback((time) => {
        return time%60 < 10? `0${time % 60}` : `${time % 60}`
    }, [])

    let length = 500;

    return <div className={'gameKonva'} >
        <div className={'match'} tabIndex={0} onKeyDown={e => {moveAstronaut(e)}}
        style={{height: window.innerHeight * 2.2 /3, width: window.innerWidth * 2 / 3, left: window.innerWidth * 0.17, top: window.innerHeight * 0.17}}>
            <Stage height={window.innerHeight * 2.2 /3} width={window.innerWidth * 2 / 3}
                style={{height: "inherit", width: "inherit", left: "inherit", top: 'inherit'}}>
                <Layer listening={false}>
                    {stars.map(str => <Star numPoints={4} innerRadius={1} outerRadius={5} x={str.x} y={str.y} fill={'beige'} key={`${str.x} ${str.y}`}/>)}
                </Layer>
                <FastLayer>
                    {rocks.map(rocka => <Missle src={lava} x={0 + rocka.x} y={0 + rocka.y} height={50} width={50} isRock={true}/>)}
                    {food.map(sandwich => <Missle src={foods} x={0 + sandwich.x} y={0 + sandwich.y} height={38} width={48} isRock={false}/>)}
                </FastLayer>
                <FastLayer>
                    <GIF src={gif} x={Astronaut.x} y={Astronaut.y} rotation={Astronaut.rotation} />
                </FastLayer>
                <FastLayer>
                    <Text x={50} y={10} text={`${Math.trunc(time / 60)} : ${seconds(time)}`} fill={'white'} fontSize={25} fontFamily={'Games'}></Text>
                    <Rect x={270} y={8} width={length} height={25} stroke={'red'} cornerRadius={4}></Rect>
                    <Rect x={270} y={8} width={length * life} height={24} fill={'darkRed'} cornerRadius={4}></Rect>
                </FastLayer>
            </Stage>
         </div>
    </div>
}

let GIF = ({src, x, y, rotation}) => {
    const imageRef = React.useRef(null);
    const canvas = React.useMemo(() => {
        return document.createElement("canvas");
    }, []);
    React.useEffect(() => {
        // save animation instance to stop it on unmount
        let anim;
        window.gifler(src).get(a => {
            anim = a;
            anim.animateInCanvas(canvas);
            anim.onDrawFrame = (ctx, frame) => {
                ctx.drawImage(frame.buffer, frame.x, frame.y);
                imageRef.current.getLayer().draw();
            };
        });
        // return () => anim.stop();
    }, [src, canvas]);

    return <Image image={canvas} ref={imageRef} x={x} y={y} width={180} height={230} rotation={rotation}/>
}

export default GameKonva;
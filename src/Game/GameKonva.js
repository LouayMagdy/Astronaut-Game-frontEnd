import React, {useCallback, useEffect, useState} from "react";
import './GameKonva.css'
import {Image, Layer, Star, Stage, Text, Rect} from 'react-konva';
import 'gifler'
import useImage from "use-image";
import lava from './lava rock.png'
import foods from './food.png'
import gif from './Untitled-unscreen.gif'
import {Link, useParams} from "react-router-dom";

let GameKonva = () => {
    let [Astronaut, setAstronaut] = useState({x: 310, y: 160, rotation: 0})
    let [rocks, setRocks] = useState([]);
    let [food, setFood] = useState([]);
    let [stars, setStar] = useState([])
    let [time, setTime] = useState(120)
    let [life, setLife] = useState(0.6)
    useEffect(() => {
        let match = document.querySelector('.match')
        match.focus()
    }, [])
    useEffect(() => {
        if(time === 0) return;
        setTimeout(() => {
            setTime(time - 1);
        }, 1000)
    }, [time])
    useEffect(() => {
        ////send request to get food position
        setFood([{x: 20, y: 50}, {x: 120, y: 150}, {x: 220, y: 250}])
    }, [])
    useEffect(() => {
        ////send request to get rocks position
        setRocks([{x: 30, y: 60}, {x: 140, y: 160}, {x: 240, y: 280}])
    }, [])
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
    }, [time])
    useEffect(() => {
        if(time === 0) return;
        //////get the remaining life
    }, [time])

    let moveAstronaut = useCallback(e => {
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
    }, [Astronaut])
    let {id} = useParams()
    let [rock] = useImage(lava)
    let [foodI] = useImage(foods)
    let length = 500;

    return <div className={'gameKonva'} >
        <div className={'match'} tabIndex={0} onKeyDown={e => {moveAstronaut(e)}}
        style={{height: window.innerHeight * 2.2 /3, width: window.innerWidth * 2 / 3, left: window.innerWidth * 0.17, top: window.innerHeight * 0.17}}>
            <Stage height={window.innerHeight * 2.2 /3} width={window.innerWidth * 2 / 3}
                style={{height: "inherit", width: "inherit", left: "inherit", top: 'inherit'}}>
                <Layer >
                    <Text x={50} y={10} text={`${Math.trunc(time / 60)} : ${time % 60}`} fill={'white'} fontSize={25} fontFamily={'Games'}/>
                    <Rect x={270} y={8} width={length} height={25} stroke={'red'} cornerRadius={4}/>
                    <Rect x={270} y={8} width={length * life} height={24} fill={'darkRed'} cornerRadius={4}/>
                    {stars.map(str => <Star numPoints={4} innerRadius={1} outerRadius={5} x={str.x} y={str.y} fill={'beige'} key={`${str.x} ${str.y}`} />)}
                    {rocks.map(rocka => <Image image={rock} x={rocka.x} y={rocka.y} height={50} width={50} key={`${rocka.x} ${rocka.y}`}/>)}
                    {food.map(sandwich => <Image image={foodI} x={sandwich.x} y={sandwich.y} height={38} width={48} key={`${sandwich.x} ${sandwich.y}`}/>)}
                    <GIF src={gif} x={Astronaut.x} y={Astronaut.y} rotation={Astronaut.rotation} />
                </Layer>
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
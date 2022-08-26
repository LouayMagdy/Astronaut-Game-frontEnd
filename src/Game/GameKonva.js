import React from "react";
import './GameKonva.css'
import { Stage, Layer, Image} from 'react-konva';
import Konva from "konva";
import useImage from "use-image";
import imageSrc from './floatAstro2.png'
import downAstro from './downAstro.png'
import lava from './lava rock.png'
import food from './food.png'
import {useParams} from "react-router-dom";
let GameKonva = () => {
    let {id} = useParams()
    let [image] = useImage(imageSrc)
    let[down] = useImage(downAstro)
    let [rock] = useImage(lava)
    let [foodI] = useImage(food)
    return <div className={'gameKonva'}>
        <div className={'match'}
        style={{height: window.innerHeight * 2 /3, width: window.innerWidth * 2 / 3, left: window.innerWidth * 0.17, top: window.innerHeight * 0.17}}>
            <Stage onClick={(evt) => console.log(evt)}
                height={window.innerHeight * 2 /3} width={window.innerWidth * 2 / 3}
                style={{height: "inherit", width: "inherit", left: "inherit", top: 'inherit'}}>
                <Layer>
                    <Image x={50} y={50} height={150} width={150}  image={image} rotation={45} />
                    <Image image={down} x={150} y={50} height={135} width={120} rotation={-11}/>
                    <Image image={rock} x={50} y={50} height={50} width={50}/>
                    <Image image={rock} x={250} y={150} height={50} width={50}/>
                    <Image image={foodI} x={350} y={150} height={38} width={48}/>
                </Layer>
            </Stage>
        </div>
    </div>
}

export default GameKonva;
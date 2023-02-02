import useImage from "use-image";
import {Image} from "react-konva";

let Missle = ({src, height, width, x, y, isRock}) => {
    const [image] = useImage(src);
    return isRock? <Image image={image} height={height} width={width} x={x - 25} y={y - 25} key={`${x} ${y}`}
                  shadowColor={'brown'} shadowEnabled={true} shadowBlur={10}/> :
                   <Image image={image} height={height} width={width} x={x - 24} y={y - 20} key={`${x} ${y}`}
                    shadowColor={'orange'} shadowEnabled={true} shadowBlur={5}/>
}

export default Missle;
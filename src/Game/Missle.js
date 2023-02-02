import useImage from "use-image";
import {Image} from "react-konva";

let Missle = ({src, height, width, x, y}) => {
    const [image] = useImage(src);
    return <Image image={image} height={height} width={width} x={x} y={y} key={`${x} ${y}`}/>
}

export default Missle;
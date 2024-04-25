'use client'
import Image from "next/image"

interface props {
    width:number | string,
    height?:number | string,
    src:any,
    fill:boolean,
    alt:string,
}

function CustomImage(props:props) {
const {
src,
fill = true,
 alt = 'Image Alt' ,
 width,
 height,
} = props

    return (
        <div className="image_container">
            <div
             className="image_wrapper"
             style={{
                maxWidth:width,
                maxHeight:fill ? `100%` : `${height}px`,
             }}
             >
            <Image
      src={src}
      width={300}
      height={300}
      alt={alt}
    />
            </div>
        </div>
    );
}

export default CustomImage;
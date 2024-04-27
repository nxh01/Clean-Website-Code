'use client'
import Image from "next/image"

interface props {
    width: any,
    src: any,
    fill: boolean,
    alt: string,
    height?: any,
    priority?: boolean,
    borderRadius?: number,
    className?: string,
    children?: any,
    style?: any,
}

function CustomImage(props: props) {
    const {
        src,
        fill = true,
        alt = 'Image Alt',
        width,
        height,
        priority = false,
        borderRadius,
        className,
        children,
        style,
    } = props

    return (
        <div
            className={`image_container ${className}`}
            style={{
                ...style,
                maxWidth: width,
                maxHeight: height,
                borderRadius: `${borderRadius}px`,
            }}
        >
            <div
                className="image_container_wrapper"
            >
                {fill ?
                    <Image
                        src={src}
                        width={width}
                        height={height}
                        alt={alt}
                        priority={priority}
                    />
                    :
                    <Image
                        src={src}
                        alt={alt}
                        fill={true}
                        priority={priority}
                    />

                }
                {children}
            </div>
        </div>
    );
}

export default CustomImage;
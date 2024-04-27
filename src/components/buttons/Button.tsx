'use client'
import Link from "next/link"

interface props {
    text: string,
    onClick?: any,
    className?: string,
    style?: any,
    href?: any
    size?: string,
    type?: any,
    children?: any,
}

const _size: any = {
    'xs': { width: '125px' },
    'md': { width: '141px' },
    'lg': { width: '175px' },
    'full': { width: '100%' },
    'auto': { width: 'fit-content' },
}

const _type: any = {
    'contained': { fill: 'contained' },
    'outlined': { fill: 'outlined' },
}

function Button(props: props) {
    const {
        text = 'button text',
        className,
        style,
        href,
        onClick,
        size = 'xs',
        type = 'contained',
        children
    } = props
    const buttonWidth = _size[size].width
    const buttonType = _type[type].fill

    return (
        <>
            <button
                className={`button ${className} button_${buttonType}`}
                style={{
                    ...style,
                    maxWidth: buttonWidth,
                }}
                onClick={onClick}
            >
                {href ?
                    <Link href={href}>
                        {text}
                    </Link>
                    :
                    <>
                        {children} {text}
                    </>
                }
            </button>
        </>
    );
}

export default Button;
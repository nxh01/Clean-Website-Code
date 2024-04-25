'use client'

import Link from "next/link"

interface props {
    text: string,
    className?: string,
    style?: any,
    href?: any
}

function Button(props: props) {
    const {
        text = 'button text',
        className,
        style,
        href,
    } = props
    return (
        <>
            <button
                className={`button ${className}`
                }
                style={style}
            >
                {href ?
                    <Link href={href}>
                        {text}
                    </Link>
                    :
                    text
                }
            </button>
        </>
    );
}

export default Button;
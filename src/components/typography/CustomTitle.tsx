interface props {
    text: string,
    className?: any,
    style?: any,
}

function CustomTitle(props: props) {
    const {
        text = 'Title',
        className,
        style,
    } = props
    return (
        <>
            <h1
                className={`custom_title ${className}`}
                style={style}
            >
                {text}
            </h1>
        </>
    );
}

export default CustomTitle;
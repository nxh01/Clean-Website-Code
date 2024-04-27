interface props {
    style?: any,
    className?: any,
}

function CustomLineSplitter(props: props) {
    const {
        style,
        className
    } = props
    return (
        <span
            className={`custom_splitter ${className}`}
            style={style}
        >

        </span>
    );
}

export default CustomLineSplitter;
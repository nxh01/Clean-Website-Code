'use client'

interface props {

}

function MenuButton(props: props) {
    const {

    } = props
    return (

        <>
            <button className="menu_button">
                <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H19" stroke="white" />
                    <path d="M0 6H19" stroke="white" />
                    <path d="M0 12H19" stroke="white" />
                </svg>
                <h3>Menu</h3>
            </button>
        </>
    );
}

export default MenuButton;
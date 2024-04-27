'use client'
import Logo from '@/assets/svg/logo.svg'
import CustomImage from "../images/CustomImage";
import MenuButton from '../buttons/MenuButton';
import { useEffect, useState } from 'react';

function Navbar() {
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10);
        });
    }, []);
    return (
        <nav className={`navbar ${scroll ? 'scroll_navbar' : ''}`}>
            <div className="navbar_wrapper container">
                <CustomImage
                    width={'103px'}
                    height={'100%'}
                    src={Logo}
                    alt='Navbar Logo'
                    fill={true}
                    priority={true}
                />
                <MenuButton />
            </div>
        </nav>
    );
}

export default Navbar;
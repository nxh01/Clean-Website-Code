'use client'
import Link from "next/link";
import CustomImage from "@/components/images/CustomImage";

// Assets
import FacebookIcon from '@/assets/icons/facebook.svg'
import InstagramIcon from '@/assets/icons/instagram_icon.svg'
import LinkedInIcon from '@/assets/icons/linkedin.svg'

const navigation = [
    'Home', 'About Us', "Explore", 'Gallery', 'Blogs', 'Contact'
]
const contact = [
    'T: +383 45 111 222', 'E: info@trvlstudio.com',
]
const address = [
    'trvl.studio', 'KAWA Group, Rruga B, Prishtina 10000'
]
const socialMedia = [
    {
        value: 'facebook icon',
        src: FacebookIcon,
        href: 'https://www.facebook.com/'
    },
    {
        value: 'Instagram icon',
        src: InstagramIcon,
        href: 'https://www.instagram.com/'
    },
    {
        value: 'Linkedin icon',
        src: LinkedInIcon,
        href: 'https://www.linkedin.com/'
    },
]


function FooterMenu() {
    return (
        <div className="footer_menu">
            <div className="footer_menu_item">
                <h3>Navigation</h3>
                {navigation.map((item: any, index: number) => {
                    return (
                        <>
                            <Link href={'#'}>
                                <h4 key={index}>
                                    {item}
                                </h4>
                            </Link>
                        </>
                    )
                })}
            </div>
            <div className="footer_menu_item">
                <h3>Contact</h3>
                {contact.map((item: any, index: number) => {
                    return (
                        <>
                            <h4 key={index}>
                                {item}
                            </h4>
                        </>
                    )
                })}
            </div>
            <div className="footer_menu_item">
                <h3>Address</h3>
                {address.map((item: any, index: number) => {
                    return (
                        <>
                            <h4 key={index}>
                                {item}
                            </h4>
                        </>
                    )
                })}
            </div>
            <div className="footer_menu_item ">
                <h3>Social Media</h3>
                <div className="social_media">
                    {
                        socialMedia.map((item: any, index: number) => {
                            return (
                                <>
                                    <Link
                                        key={index}
                                        href={item.href}
                                        target="_blank"
                                    >
                                        <CustomImage
                                            width={'24.17px'}
                                            height={'24.07px'}
                                            src={item.src}
                                            alt={item.value}
                                            fill={true}
                                            style={{
                                                overflow: 'visible'
                                            }}
                                        />
                                    </Link>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default FooterMenu;
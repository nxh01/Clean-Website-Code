'use client'

import CustomImage from "../images/CustomImage";
import LogoColor from "@/assets/svg/logo_color.svg"
import FooterContent from "../sections/layout/FooterContent";
import CustomLineSplitter from "../splitters/CustomLineSplitter";

function Footer(props: any) {
    const {

    } = props

    return (
        <footer className="footer ">
            <div className="footer_container container">
                <CustomImage
                    width={'103.08px'}
                    height={'86.29px'}
                    fill={true}
                    src={LogoColor}
                    alt='Footer Logo'
                />
                <FooterContent />
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <CustomLineSplitter
                        style={{
                            marginTop: '10px',
                            marginBottom: '30px',
                        }}
                    />
                    <div className="footer_credits">
                        <h5>2024 © trvl.studios Impressum</h5>
                        <h5>Made by Talenko Agency</h5>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
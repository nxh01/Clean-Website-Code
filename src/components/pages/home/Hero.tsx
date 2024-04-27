'use client'
import Button from "@/components/buttons/Button";
import HeroImage from "@/components/images/HeroImage";

function Hero() {
    return (
        <section className="hero_section container">
            <HeroImage />
            <div className="hero_section_wrapper">
                <h1>Your next adventure...</h1>
                <p>Discover your next journey with us let&#39;s embark together where adventures await. Explore enchanting places below.</p>
                <Button
                    text={'See more'}
                />
            </div>
        </section>
    );
}

export default Hero;
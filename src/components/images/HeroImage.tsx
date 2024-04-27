import Image from "next/image";
import HeroImageSrc from '@/assets/images/hero_image.png'

function HeroImage() {
    return (
        <div className="hero_image">
            <Image
                src={HeroImageSrc}
                alt={'Hero image'}
                fill={true}
                priority={true}
            />
        </div>
    );
}

export default HeroImage;
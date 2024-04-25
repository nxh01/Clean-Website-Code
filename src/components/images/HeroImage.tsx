import Image from "next/image";
import HeroImageSrc from '@/assets/images/hero_image.png'

function HeroImage() {
    return (
        <div className="hero_image">
            <Image
                src={HeroImageSrc}
                width={300}
                height={300}
                alt={'Hero image'}
            />
        </div>
    );
}

export default HeroImage;
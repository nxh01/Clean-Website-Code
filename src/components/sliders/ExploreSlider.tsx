'use client'
import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

import CustomImage from '../images/CustomImage';
import { useEffect, useState } from 'react';

interface props {
    images: any,
    style?: any,
}

function ExploreSlider(props: props) {
    const { images, style } = props
    const [imageSize, setImageSize] = useState<string>('408px')
    const isMediumDevice = useMediaQuery({ query: '(max-width: 1400px)' })
    const isSmallDevice = useMediaQuery({ query: '(max-width: 900px)' })

    console.log(imageSize);
    useEffect(() => {
        if (isSmallDevice) {
            setImageSize('100%')
        }
    }, [isSmallDevice])


    return (
        <div className="explore_slider" style={style}>
            <Swiper
                slidesPerView={isSmallDevice ? 1 : isMediumDevice ? 2 : 4}
                centeredSlides={isSmallDevice}
                spaceBetween={10}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Navigation]}
                className="explore_swiper"
            >
                {
                    images.map((item: any, index: number) => {
                        return (
                            <SwiperSlide key={index}>
                                <CustomImage
                                    width={imageSize}
                                    height={"552px"}
                                    src={item.src}
                                    alt={'image'}
                                    fill={true}
                                    borderRadius={10}
                                    priority={true}
                                />
                            </SwiperSlide>
                        )
                    })
                }
                <span className='explore_line' />
            </Swiper>
        </div>
    );
}

export default ExploreSlider;
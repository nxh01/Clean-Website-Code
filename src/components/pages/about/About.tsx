import PlaneIcon from '@/assets/icons/plane.svg'
import BedIcon from '@/assets/icons/bed.svg'
import CheckIcon from '@/assets/icons/check.svg'
import Image from 'next/image'
import CustomImage from '@/components/images/CustomImage'
import AboutImage from '@/assets/images/about_us.png'
import CustomTitle from '@/components/typography/CustomTitle'

const aboutText = [
    {
        id: 0,
        title: 'Sed ut perspiciatis unde omnis',
        icon: PlaneIcon,
        width: '19.25px',
        height: '19.25px',
    },
    {
        id: 1,
        title: 'Ut enim ad minima veniam',
        icon: BedIcon,
        width: '20px',
        height: '21.81px',
    },
    {
        id: 2,
        title: 'Lorem Ipsum dolare sit amet el',
        icon: CheckIcon,
        width: '20px',
        height: '20px',
    },
]

function About() {
    return (
        <section className='about container'>
            <div className="about_wrapper">
                <div className="about_content">
                    <CustomTitle
                        text={'Who we are'}
                    />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <br />
                        <br />
                        <br />
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                        <br />
                        <br />
                        <br />
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos:
                    </p>
                    <div className="about_information">
                        {
                            aboutText.map((item: any, index: number) => {
                                return (
                                    <>
                                        <div key={index} className="about_information_content">
                                            <div className="icon_container">
                                                <Image
                                                    src={item.icon}
                                                    alt={item.title}
                                                    width={item.width}
                                                    height={item.height}
                                                    fill={false}
                                                />
                                            </div>
                                            <p>{item.title}</p>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="about_video">
                    {/* <div className="about_video_container"> */}
                    <CustomImage
                        width={'100%'}
                        height={'100%'}
                        src={AboutImage}
                        alt={'About Image'}
                        fill={true}
                    />
                    {/* </div> */}
                </div>
            </div>
        </section>
    );
}

export default About;
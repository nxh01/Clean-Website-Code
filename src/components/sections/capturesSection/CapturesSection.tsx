import CustomImage from "@/components/images/CustomImage";
import Link from "next/link";
import InstagramIcon from '@/assets/icons/instagram.svg'

interface props {
    options: any
}

function CapturesSection(props: props) {
    const {
        options,
    } = props
    return (
        <div className="captures_container">
            {
                options.map((item: any, index: number) => {
                    return (
                        <>
                            <CustomImage
                                width={'100%'}
                                src={item.img}
                                alt={`capture-${index + 1}`}
                                fill={true}
                                className={`${item.columnSpan} ${item.rowSpan}`}
                                borderRadius={10}
                            >
                                <div className="capture_hover">
                                    <Link href={'https://xhemajli.com/'} target="_blank">
                                        <CustomImage
                                            src={InstagramIcon}
                                            alt={'Instagram'}
                                            width={'41px'}
                                            height={'41px'}
                                            fill={true}
                                        />
                                    </Link>
                                </div>
                            </CustomImage>
                        </>
                    )
                })
            }
        </div>
    );
}

export default CapturesSection;
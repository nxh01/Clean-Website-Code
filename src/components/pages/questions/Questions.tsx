import Button from "@/components/buttons/Button";
import CustomImage from "@/components/images/CustomImage";
import CustomTitle from "@/components/typography/CustomTitle";
import EmailIcon from '@/assets/icons/email.svg'
import PhoneIcon from '@/assets/icons/phone.svg'
import QuestionSection from "@/components/sections/questionsSection/QuestionSection";
import { questionsArr } from '@/service/arrays'

function Questions() {
    return (
        <section className="questions ">
            <div className="questions_wrapper container">
                <div className="questions_title">
                    <CustomTitle
                        text={'Any Questions Contact us here.'}
                        style={{ color: '#FFFFFF' }}
                    />
                    <p>Quis autem vel eum iure reprehenderit.</p>
                    <div style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        gap: '35px',
                    }}>
                        <Button
                            text={` E-Mail`}
                            style={{
                                backgroundColor: '#fff',
                                color: '#AD9E80',
                                gap: '15px'
                            }}
                        >
                            <CustomImage
                                width={'19px'}
                                height={'19px'}
                                src={EmailIcon}
                                alt={'Email Icon'}
                                fill={true}
                            />
                        </Button>
                        <Button
                            text={`Telephone`}
                            style={{
                                border: '1px solid #fff',
                                color: '#fff',
                                gap: '15px'
                            }}
                            type={'outlined'}
                            size="auto"
                        >
                            <CustomImage
                                width={'20.31px'}
                                height={'19.27px'}
                                src={PhoneIcon}
                                alt={'Email Icon'}
                                fill={true}
                            />
                        </Button>
                    </div>
                </div>
                <QuestionSection
                    options={questionsArr}
                />
            </div>
        </section>
    );
}

export default Questions;
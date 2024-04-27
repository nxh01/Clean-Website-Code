'use client'
import QuestionDropDown from '@/components/dropdowns/QuestionDropDown';
import { useState } from 'react';

interface props {
    options: any
}

function QuestionSection(props: props) {
    const {
        options
    } = props
    const [currentId, setCurrentId] = useState<number>(0)

    return (
        <div className="questions_container">
            {
                options.map((item: any, index: number) => {
                    return (
                        <>
                            <QuestionDropDown
                                key={index}
                                title={item.title}
                                description={item.desc}
                                open={currentId == item.id ? true : false}
                                onClick={() => { setCurrentId(item.id) }}
                            />
                        </>
                    )
                })
            }
        </div>
    );
}

export default QuestionSection;
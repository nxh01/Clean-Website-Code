'use client'
import { useState } from "react";
import CustomImage from "../images/CustomImage";
import PlusIcon from '@/assets/icons/plus_icon.svg'
import MinusIcon from '@/assets/icons/minus_icon.svg'

interface props {
    title: string,
    description: string,
    open: boolean
    onClick: any,
    className?: string
    border?: string
}

function QuestionDropDown(props: props) {
    const {
        title,
        description,
        className,
        border = 'bottom',
        onClick,
        open,
    } = props

    return (
        <div
            className={`question_dropdown border_${border} ${className}`}
            style={{
                height: open ? '100%' : '85px',
            }}
            onClick={onClick}
        >
            <div className="question_dropdown_title">
                <p>
                    {title}
                </p>
                <div
                    style={{
                        width: '21px',
                        height: '21px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <CustomImage
                        src={open ? MinusIcon : PlusIcon}
                        alt='Plus Icon'
                        width={'21px'}
                        height={'21px'}
                        fill={true}
                    />
                </div>
            </div>
            <div className="question_dropdown_description">
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default QuestionDropDown;
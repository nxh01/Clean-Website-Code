'use client'
import { useState } from "react";

function NewsletterInput() {
    const [disabled, setDisabled] = useState<boolean>(false)
    return (
        <div className="newsletter_input_container">
            <input
                placeholder="Email Address"
                disabled={disabled}
                style={{
                    border: disabled ? "solid 1px #484848" : 'solid 1px #AD9E80',
                }}
            />
            <button
                onClick={() => { setDisabled(true) }}
                disabled={disabled}
                style={{
                    backgroundColor: disabled ? "#484848" : '#AD9E80',
                    cursor: !disabled ? 'pointer' : 'default',
                }}
            >
                Confirm
            </button>
        </div>
    );
}

export default NewsletterInput;
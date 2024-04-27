'use client'
import { useEffect, useState } from "react";
import Button from "../buttons/Button";
import Link from "next/link";

const filterButtons = [
    {
        text: 'All',
        value: 1,
        size: 'xs',
    },
    {
        text: 'Beaches',
        value: 2,
        size: 'xs',
    },
    {
        text: 'Mountains',
        value: 3,
        size: 'xs',
    },
    {
        text: 'Upcoming events',
        value: 4,
        size: 'auto',
    },
]

function ExploreFilters(props: any) {
    const { setFilter } = props
    const [filterVariant, setFilterVariant] = useState<number>(1)

    useEffect(() => {
        setFilter(filterVariant)
    }, [filterVariant])

    return (
        <div className="explore_filters">
            <div style={{
                width: '80%',
                display: 'flex',
                alignItems: 'center',
                gap: '30px',
            }}>
                {
                    filterButtons.map((item: any, index: any) => {
                        return (
                            <>
                                <Button
                                    key={index}
                                    text={item.text}
                                    onClick={() => { setFilterVariant(item.value) }}
                                    size={item.size}
                                    type={item.value == filterVariant ? 'contained' : 'outlined'}
                                />
                            </>
                        )
                    })
                }
            </div>
            <Link href={'#'}>
                View all
            </Link>
        </div>
    );
}

export default ExploreFilters;
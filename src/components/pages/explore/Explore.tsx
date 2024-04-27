'use client'
import ExploreFilters from "@/components/filters/ExploreFilters";
import ExploreSlider from "@/components/sliders/ExploreSlider";
import CustomTitle from "@/components/typography/CustomTitle";
import { exploreArray } from '@/service/arrays'
import { useEffect, useState } from "react";

function Explore() {
    const [filter, setFilter] = useState<number>(1)

    const filterApplied = filter === 1 ? exploreArray : exploreArray.filter(item => item.belongs === filter);

    return (
        <section className="explore container">
            <div className="explore_wrapper">
                <CustomTitle
                    text={'Explore the world'}
                />
                <ExploreFilters
                    setFilter={setFilter}
                />
                <ExploreSlider
                    images={filterApplied}
                    style={{ marginTop: '15px' }}
                />
            </div>
        </section>
    );
}

export default Explore;
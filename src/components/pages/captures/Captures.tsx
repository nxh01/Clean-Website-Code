import CapturesSection from "@/components/sections/capturesSection/CapturesSection";
import CustomTitle from "@/components/typography/CustomTitle";
import { capturesArr } from "@/service/arrays"

function Captures() {
    return (
        <section className="captures container">
            <div className="captures_wrapper">
                <CustomTitle
                    text={'Travelogue Captures'}
                />
                <CapturesSection
                    options={capturesArr}
                />
            </div>
        </section>
    );
}

export default Captures;
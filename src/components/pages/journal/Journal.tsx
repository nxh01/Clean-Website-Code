import Link from "next/link";
import CustomTitle from "@/components/typography/CustomTitle";
import JournalSection from "@/components/sections/journalSection/JournalSection";
import { journalsArr } from '@/service/arrays'

function Journal() {
    return (
        <section className="journal container">
            <div className="journal_wrapper">
                <div className="journal_title">
                    <CustomTitle
                        text={'Journal of adventures'}
                        style={{ marginBottom: '20px' }}
                    />
                    <Link href={'#'}>
                        View all
                    </Link>
                </div>
                <JournalSection
                    options={journalsArr}
                />
            </div>
        </section>
    );
}

export default Journal;
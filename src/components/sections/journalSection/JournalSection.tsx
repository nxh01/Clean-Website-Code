import CustomImage from '@/components/images/CustomImage';
import CustomLineSplitter from '@/components/splitters/CustomLineSplitter';

interface props {
    options: any,
}

function JournalSection(props: props) {
    const {
        options,
    } = props
    return (
        <div className='journal_content'>
            <CustomLineSplitter
                className={'column_span'}
            />
            {
                options.map((item: any, index: number) => {
                    return (
                        <>
                            <div key={index} className="item_container">
                                <CustomImage
                                    width={'219px'}
                                    height={'181px'}
                                    src={item.img}
                                    alt={item.title}
                                    fill={true}
                                    borderRadius={10}
                                />
                                <div className="item_content">
                                    <span>{item.date}</span>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            {
                                index == 1 &&
                                <CustomLineSplitter
                                    className={'column_span'}
                                />
                            }
                        </>
                    )
                })
            }
            <CustomLineSplitter
                className={'column_span'}
            />
        </div>
    );
}

export default JournalSection;
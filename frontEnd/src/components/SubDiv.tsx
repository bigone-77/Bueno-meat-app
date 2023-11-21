interface SubDivProps {
    firstTitle: string;
    subTitle: any;
}

const SubDiv = ({
    firstTitle,
    subTitle
}: SubDivProps) => {
    return (
        <div className='flex items-center justify-between gap-10 mb-4 font-bold'>
            <p>{firstTitle}</p>
            <p>{subTitle}</p>
        </div>
    )
}

export default SubDiv
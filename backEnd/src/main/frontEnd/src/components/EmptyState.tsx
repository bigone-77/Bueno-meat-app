interface EmptyStateProps {
    title: string;
    subTitle: string;
}

const EmptyState = ({
    title, 
    subTitle
}: EmptyStateProps) => {
    return (
        <div className='h-[100vh] flex flex-col gap-2 justify-center items-center'>
            <section className='text-2xl text-bold'>
                {title}
            </section>
            <section className='mt-2 font-light text-neutral-500'>
                {subTitle}
            </section>
        </div>
    )
}

export default EmptyState
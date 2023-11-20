interface ProductLabelProps {
    title: string;

}

const ProductLabel = ({
    title
}: ProductLabelProps) => {
    return (
        <div className='px-4 py-2 font-bold bg-gray-500 border rounded-md w-fit'>
            <p className='text-white'>{`${title}/500g`}</p>
        </div>
    )
}

export default ProductLabel
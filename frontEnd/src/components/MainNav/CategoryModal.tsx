import { ShowCategoryItems } from "./CategoryItems"

interface Props {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}


const CategoryModal = ({ setShowModal }: Props) => {

    return (
        <div role='presentation' className='absolute z-10 w-full'> 
            <div className='fixed top-0 bottom-0 left-0 flex justify-center'>
                <div 
                    className='relative overflow-y-scroll duration-300 ease-in-out rounded-lg w-96 animate-fadeOut bg-zinc-50'
                >
                    <span
                        className='absolute right-[20px] top-[20px] cursor-pointer'
                        onClick={() => {
                            setTimeout(() => {
                                setShowModal(false);
                            }, 300)}
                        }
                    >
                        X
                    </span>
                    <div className="mx-10 mt-5">
                        <p className="text-4xl font-Cafe24Shiningstar">Category</p>
                        <ShowCategoryItems />
                        <hr className="h-1 mt-10 border-0 bg-zinc-800" />
                        <ul className="flex flex-col gap-3 mt-10 text-xl">
                            <li>Event</li>
                            <li>Best Bueno</li>
                            <li>Delivery Info</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryModal
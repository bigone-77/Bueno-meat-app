import { FaCow, FaPiggyBank, FaFish } from "react-icons/fa6"
import { GiChicken, GiKnifeFork, GiSheep } from "react-icons/gi"
import IconCard from "../IconCard"

const Categories = [
    {
        id: 1,
        label: 'Pig',
        icon: FaPiggyBank
    },
    {
        id: 2,
        label: 'Cow',
        icon: FaCow
    },
    {
        id: 3,
        label: 'Chicken',
        icon: GiChicken
    },
    {
        id: 4,
        label: 'Sheep',
        icon: GiSheep
    },
    {
        id: 5,
        label: 'Fishery',
        icon: FaFish
    },
    {
        id: 6,
        label: 'MealKit',
        icon: GiKnifeFork
    }
]

export const ShowCategoryItems = () => {
    return (
        <div className="grid grid-cols-3 gap-2 mt-12">
            {Categories.map(c => (
                <IconCard
                    key={c.id}
                    label={c.label}
                    icon={c.icon}
                />
            ))}
        </div>
    )
}
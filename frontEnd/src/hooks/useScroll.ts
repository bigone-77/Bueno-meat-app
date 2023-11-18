import { useEffect, useState } from "react"

const useScroll = (): boolean => {
    const [show, setShow] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setShow(true);
        }   else {
            setShow(false);
        }
    };

    useEffect(() => {
        const scrollHandler = () => handleScroll();

        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    return show;
}

export default useScroll;
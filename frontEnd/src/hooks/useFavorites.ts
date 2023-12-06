// import { useMemo } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../redux";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// interface UseFavorite {
//     productId?: number;
//     userId: number;
// }

// const useFavorite = ({ userId, productId }: UseFavorite) => {
//     const navigate = useNavigate();
//     const favorites = useSelector((state: RootState) => state.currentUser.favorites)

//     const hasFavorite = useMemo(() => {
//         const list = userId ? favorites : [];
//         return list.includes(productId!);
//     }, [userId, productId, favorites])
    
//     const toggleFavorite = async (e: React.MouseEvent<HTMLDivElement>) => {
//         e.stopPropagation();
//         if (!userId) {
//             navigate('/auth/login');
//         }
//         try {
//             if (hasFavorite) {
//                 axios.delete(`/products/favorites/${userId}/${productId}`)
//                     .then((response) => {
//                         console.log(response.data);
//                     })
//                     .catch((error) => {
//                         console.log(error)
//                     }
//                     ) 
//             } else {
//                 axios.post(`/products/favorites/${userId}/${productId}`, {
//                     'userId': userId,
//                     'productId': productId
//                 })
//                     .then((response) => {
//                         console.log(response.data);
//                     })
//                     .catch((error) => {
//                         console.log(error);
//                     })
//             }

//         } catch(error) {
//             console.log(error);
//         }
//     }

//     return {
//         hasFavorite,
//         toggleFavorite
//     }
// }

// export default useFavorite;
import { useSelector } from "react-redux"
import { RootState } from "redux/rootReducer"

export const useHeader = () => {
    const { total, count } = useSelector((state: RootState) => state.cart);

    return { count, total };
}
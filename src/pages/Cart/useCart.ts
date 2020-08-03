import { useDispatch, useSelector } from "react-redux"
import { RootState } from "redux/rootReducer";

export const useCart = () => {
    const dispatch = useDispatch();
    const { items, count, total } = useSelector((state: RootState) => state.cart);

    return { items: Object.entries(items), count, total };
}
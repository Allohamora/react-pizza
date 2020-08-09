import { useDispatch, useSelector } from "react-redux"
import { RootState } from "redux/rootReducer";
import { clear } from "redux/slices/cart";

export const useCart = () => {
    const dispatch = useDispatch();
    const { items, count, total } = useSelector((state: RootState) => state.cart);

    const clearHandler = () => {
        dispatch(clear());
    }

    return { items: Object.entries(items), count, total, clearHandler };
}
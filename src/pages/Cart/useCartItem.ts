import { add, remove, clear } from "redux/slices/cart";
import { useDispatch } from "react-redux";

export const useCartItem = (id: string) => {
    const dispatch = useDispatch();
    
    const addHandler = () => {
        dispatch(add(id));
    };

    const removeHandler = () => {
        dispatch(remove(id))
    }

    const clearHandler = () => {
        dispatch(clear(id));
    }

    return { addHandler, clearHandler, removeHandler };
};
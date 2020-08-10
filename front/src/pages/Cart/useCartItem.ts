import { add, remove, deleteAction } from "redux/slices/cart";
import { useDispatch } from "react-redux";

export const useCartItem = (id: string) => {
    const dispatch = useDispatch();
    
    const addHandler = () => {
        dispatch(add(id));
    };

    const removeHandler = () => {
        dispatch(remove(id))
    }

    const deleteHandler = () => {
        dispatch(deleteAction(id));
    }

    return { addHandler, deleteHandler, removeHandler };
};
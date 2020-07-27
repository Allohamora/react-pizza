import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/rootReducer";
import { incrementAction, decrementAction, asyncIncrementAction } from "redux/slices/counter";

export const useReduxCounter = () => {
    const dispatch = useDispatch();

    const counter = useSelector((state: RootState) => state.counter);
    const increment = () => dispatch(incrementAction());
    const decrement = () => dispatch(decrementAction());
    const asyncIncrement = () => dispatch(asyncIncrementAction());

    return { counter, increment, decrement, asyncIncrement };
};
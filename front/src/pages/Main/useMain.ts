import { useSelector, useDispatch } from "react-redux"
import { RootState } from "redux/rootReducer"
import { allCategory, byCategory, sort } from "redux/slices/pizza";

export const useMain = () => {
    const {activeCategory, activeSort} = useSelector((state: RootState) => state.pizza);
    const dispatch = useDispatch();

    const setActiveCategory = (category: number | "ALL") => {
        const action = category === "ALL" ? allCategory() : byCategory(category);
        dispatch(action);
    }

    const setActiveSort = (index: number) => {
        dispatch(sort(index));
    }

    return {activeCategory, activeSort, setActiveCategory, setActiveSort};
}
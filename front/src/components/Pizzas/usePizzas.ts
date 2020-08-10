import { useEffect } from "react"
import { api } from "services/api"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "redux/rootReducer"
import { setPizzas } from "redux/slices/pizza"

export const usePizzas = () => {
    const pizza = useSelector((state: RootState) => state.pizza );
    const dispatch = useDispatch();
    
    useEffect(() => {
        (async() => {
            dispatch(setPizzas(await api.getPizzas()));
        })()
    }, []);

    return { pizzas: pizza.sorted };
}
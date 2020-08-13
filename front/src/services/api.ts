import axios from "axios";

export const TYPES = ["тонкое", "традиционное"];
export const CATEGORIES = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

export interface Pizza {
    id: number,
    imageUrl: string,
    name: string,
    types: number[],
    sizes: number[],
    price: number,
    category: number,
    rating: number,
}
export type Pizzas = Pizza[];

interface Api {
    getPizzas: () => Promise<Pizzas>
}

export class JsonServerApi implements Api {
    private baseUrl: string = "http://localhost:2020"

    public async getPizzas(){
        const response = await axios.get(this.baseUrl + "/pizzas");
        const data: Pizzas = response.data;
        return data;
    }
}

export class BackEndApi implements Api {
    public async getPizzas(){
        const response = await axios.get("/pizzas");
        const data: Pizzas = response.data;
        return data;
    }
}

// if this is production build => BackEndApi, if this development build => JsonServerApi
export const api = process.env.NODE_ENV !== "production" ? new JsonServerApi() : new BackEndApi();
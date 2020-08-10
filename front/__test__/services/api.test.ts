import axios from "axios";
import { JsonServerApi, BackEndApi } from "services/api";
jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("api", () => {
    it("JsonServerApi must send request to json-server", async () => {
        mockedAxios.get.mockResolvedValue([]);
        await new JsonServerApi().getPizzas();
        expect(mockedAxios.get).toBeCalledWith("http://localhost:2020/pizzas");
    });

    it("BackEndApi must send request to back-end", async() => {
        mockedAxios.get.mockResolvedValue([]);
        await new BackEndApi().getPizzas();
        expect(mockedAxios.get).toBeCalledWith("/pizzas");
    })
})
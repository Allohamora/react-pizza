import axios from "axios";
import { api } from "services/api";
jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("api", () => {
    it("should send get request to json-server", async () => {
        mockedAxios.get.mockResolvedValue([]);
        await api.getPizzas();
        expect(mockedAxios.get).toBeCalledWith("http://localhost:2020/pizzas");
    })
})
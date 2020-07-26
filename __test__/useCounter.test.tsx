import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../src/useCounter";
import { delay } from "./helpers";

describe("useCounter", () => {
    let { result } = renderHook(() => useCounter());

    beforeEach(() => {
        const render = renderHook(() => useCounter());
        result = render.result;
    })

    it("counter increment", () => {
        expect(result.current.count).toEqual(0);

        act(() => {
            result.current.increment();
        });

        expect(result.current.count).toEqual(1);
    });

    it("counter decrement", () => {
        expect(result.current.count).toEqual(0);

        act(() => {
            result.current.decrement();
        });

        expect(result.current.count).toEqual(-1);
    });

    it("counter asyncIncrement", async () => {
        expect(result.current.count).toEqual(0);

        await act(async () => {
            result.current.asyncIncrement();
            await delay(1000);
        });

        expect(result.current.count).toEqual(1);
    })
});
import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "useCounter";

describe("useCounter", () => {
    let { result, waitForNextUpdate } = renderHook(() => useCounter());

    beforeEach(() => {
        const render = renderHook(() => useCounter());
        result = render.result;
        waitForNextUpdate = render.waitForNextUpdate;
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

        act(() => {
            result.current.asyncIncrement();
        });

        await waitForNextUpdate();

        expect(result.current.count).toEqual(1);
    })
});
import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useReduxCounter } from "useReduxCounter";
import { Provider } from "react-redux";
import { createStore } from "redux/store";

describe("useReduxCounter", () => {

    const renderCounter = () => renderHook(() => useReduxCounter(), {
        wrapper: ({ children }) => (<Provider store={createStore()} >{ children }</Provider>)
    });

    let { result, waitForNextUpdate } = renderCounter()

    beforeEach(() => {
        const render = renderCounter();

        result = render.result;
        waitForNextUpdate = render.waitForNextUpdate;
    });

    it("increment", () => {
        expect(result.current.counter).toBe(0);
        
        act(() => {
            result.current.increment()
        });

        expect(result.current.counter).toBe(1);
    });

    it("decrement", () => {
        expect(result.current.counter).toBe(0);

        act(() => {
            result.current.decrement();
        })

        expect(result.current.counter).toBe(-1);
    })

    it("asyncIncrement", async () => {
        expect(result.current.counter).toBe(0);

        act(() => {
            result.current.asyncIncrement();
        });

        await waitForNextUpdate();

        expect(result.current.counter).toBe(1);
    })
});
import React from "react";
import ReactDOM from "react-dom";
import { App } from "App";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "style";
import { BrowserRouter } from "react-router-dom";

const app = (
    <Provider store={store} >
        <BrowserRouter>
            <ThemeProvider theme={theme} >
                <GlobalStyles />
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById("app"));
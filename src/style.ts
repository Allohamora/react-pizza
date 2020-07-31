import { createGlobalStyle } from "styled-components"

const { white, orange, black } = {
    white: "#FFFFFF",
    orange: "#FE5F1E",
    black: "#000000",
}

export const breakpoints = {
    lg: "1220px",
    md: "600px",
}

// block__elem_mod$property
export const theme = {
    wrap$bg: "#FFDF8C",

    app$bg: white,

    header$border: "#F7F7F7",

    brand__title$color: "#181818",
    brand__text$color: "#7B7B7B",

    select_selected$color: orange,
    select_selected$border: orange,
    select__options$bg: white,
    select__option_selected$bg: "rgba(254, 95, 30, 0.05)",
    select__option_selected$color: orange,

    pizzas$color: black,

    pizza$color: black,
    pizza__price$color: black,
    pizza__selector$bg: "#F3F3F3",
    pizza__option$color: "#2C2C2C",
    pizza__option_selected$bg: white,

    btn_secondary$bg: "#F9F9F9",
    btn_secondary$color: "#2C2C2C",
    btn_secondary_active$bg: "#282828",
    btn_secondary_active$color: white,

    btn_add$color:"#EB5A1E",
    btn_add$border: "#EB5A1E",
    btn_add_hover$bg: orange,
    btn_add_hover$color: white,
    btn_add_hover$plusBg: white,

    btn_cart$color: white,
    btn_cart$bg: orange,
    btn__delimiter_cart$bg: "rgba(255, 255, 255, 0.25)",
};

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    button {
        outline: none;

        border: none;

        cursor: pointer;

        background: transparent;
    }

    ul {
        list-style none;
    }

    body {
        font-family: Roboto;
        font-style: normal;
    }
`;
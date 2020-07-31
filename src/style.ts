import { createGlobalStyle } from "styled-components"
import reset from "styled-reset";

const { white, orange, black } = {
    white: "#FFFFFF",
    orange: "#FE5F1E",
    black: "#000000",
}

export const breakpoints = {
    lg: "1220px",
    md: "600px",
    cartPizza: "700px",
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

    btn_primary$bg: orange,
    btn_primary$color: white,

    btn_gray$bg: "transparent",
    btn_gray$border: "#D3D3D3",
    btn_gray$color: "#D3D3D3",

    btn_secondary$bg: "#282828",
    btn_secondary$color: white,

    btn_sort$bg: "#F9F9F9",
    btn_sort$color: "#2C2C2C",
    btn_sort_active$bg: "#282828",
    btn_sort_active$color: white,

    btn_add$color: "#EB5A1E",
    btn_add$bg: white,
    btn_add$border: "#EB5A1E",
    btn_add_hover$bg: orange,
    btn_add_hover$color: white,
    btn_add_hover$plusBg: white,

    btn_cart$color: white,
    btn_cart$bg: orange,
    btn__delimiter_cart$bg: "rgba(255, 255, 255, 0.25)",

    emptyCart__title$color: black,
    emptyCart__text$color: "#777777",

    cart__header$border: "#F4F4F4",

    cart__cartBlock$color: black,
    cart__cartBlock$stroke: "#3F3F3F",

    cart__clearBtn$color: "#B6B6B6",

    cart__total$color: black,

    cart__sum$color: orange,

    cart__item$border: "#F4F4F4",
    cart__item__title$color: black,
    cart__item__text$color: "#8D8D8D",
    cart__item__count$color: black,
    cart__item__price$color: black,
};

export const GlobalStyles = createGlobalStyle`
    ${reset}

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
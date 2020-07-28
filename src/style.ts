import { createGlobalStyle } from "styled-components"

const { white, orange } = {
    white: "#FFFFFF",
    orange: "#FE5F1E",
}

export const theme = {
    wrap: {
        bg: "#FFDF8C",
    },

    app: {
        bg: white,
    },

    header: {
        border: "#F7F7F7"
    },

    brand: {
        title: {
            color: "#181818",
        },
        text: {
            color: "#7B7B7B",
        }
    },

    select: {
        bg: "#F3F3F3",
        color: "#2C2C2C",

        option: {
            bg: "transparent",

            active: {
                bg: white,
            }
        }
    },

    btn: {
        secondary: {
            bg: "#F9F9F9",
            color: "#2C2C2C",
    
            active: {
                bg: "#282828",
                color: white,
            }
        },

        add: {
            bg: orange,
            color: white,
            border: orange,

            active: {
                bg: white,
                color: "#EB5A1E",
            }
        },

        cart: {
            bg: orange,
            color: white,

            delimiter: {
                bg: "rgba(255, 255, 255, 0.25)",
            }
        }
    },
}

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

    body {
        font-family: Roboto;
        font-style: normal;
    }
`;
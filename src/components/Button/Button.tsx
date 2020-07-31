import styled from 'styled-components';
import plus from "assets/plus.svg";

interface ButtonProps {
    cart?: boolean,
    primary?: boolean,
    secondary?: boolean,
    add?: boolean,
    active?: boolean,
    pd1?: boolean,
};

export const Button = styled.button<ButtonProps>`
    padding: 12px 25px;

    font-size: 16px;
    line-height: 19px;
    font-style: normal;
    font-weight: 700;

    border-radius: 30px;

    &:hover {
        opacity: .7;
    }

    ${({ secondary, active, theme }) => secondary && `
            padding: 14px 25px;
            color: ${theme.btn_secondary$color};
            background: ${theme.btn_secondary$bg};

            ${active && `
                color: ${theme.btn_secondary_active$color};
                background: ${theme.btn_secondary_active$bg};
            `}
        `
    }

    ${props => props.cart && `
        color: ${props.theme.btn_cart$color};
        background: ${props.theme.btn_cart$bg};
    `}

    ${props => props.add && `
        border: 1px solid ${props.theme.btn_add$border};

        color: ${props.theme.btn_add$color};

        &:hover {
            background: ${props.theme.btn_add_hover$bg};
            color: ${props.theme.btn_add_hover$color};

            opacity: 1;
        }

        &::before {
            content: "";
            
            display: inline-block;

            margin-right: 8px;

            width: 12px;
            height: 12px;

            background: ${props.theme.btn_add$border};
            mask-image: url(${plus});
        }

        &:hover::before {
            background: ${props.theme.btn_add_hover$plusBg};
        }
    `}
`;

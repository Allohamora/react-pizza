import styled from 'styled-components';
import plus from "assets/plus.svg";
import { Count } from 'components/Pizza';

interface ButtonProps {
    cart?: boolean,
    primary?: boolean,
    secondary?: boolean,
    gray?: boolean,
    sort?: boolean,
    add?: boolean,
    active?: boolean,

    pd1?: boolean,
};

export const Button = styled.button<ButtonProps>`
    padding: 12px 25px;

    font-size: 16px;
    font-weight: 700;

    border-radius: 30px;

    &:hover {
        opacity: .7;
    }

    ${props => `
        color: ${props.theme.btn_primary$color};
        background: ${props.theme.btn_primary$bg};
    `}

    ${props => props.pd1 && `
        padding: 18px 45px;
    `}

    ${({gray, theme}) => gray && `
        color: ${theme.btn_gray$color};
        background: ${theme.btn_gray$bg};
        border: 2px solid ${theme.btn_gray$border};
    `}

    ${({ secondary, theme }) => secondary && `
        color: ${theme.btn_secondary$color};
        background: ${theme.btn_secondary$bg};
        
        padding-left: 40px;
        padding-right: 40px;
    `}

    ${({ sort, active, theme }) => sort && `
            padding: 14px 25px;
            color: ${theme.btn_sort$color};
            background: ${theme.btn_sort$bg};

            ${active && `
                color: ${theme.btn_sort_active$color};
                background: ${theme.btn_sort_active$bg};
            `}
        `
    }

    ${props => props.cart && `
        color: ${props.theme.btn_cart$color};
        background: ${props.theme.btn_cart$bg};
    `}

    ${({ add, theme }) => add && `
        border: 1px solid ${theme.btn_add$border};

        height: 46px;

        padding: 12px 18px;

        color: ${theme.btn_add$color};
        background: ${theme.btn_add$bg};

        & ${Count} {
            font-weight: 700;
            font-size: 13px;

            border-radius: 50%;

            color: ${theme.btn_add__count$color};
            background-color: ${theme.btn_add__count$bg};

            padding: 3px 7px;
        }

        &:hover ${Count} {
            background-color: ${theme.btn_add__count_hover$bg};
            color: ${theme.btn_add__count_hover$color};
        }

        &:hover {
            background: ${theme.btn_add_hover$bg};
            color: ${theme.btn_add_hover$color};

            opacity: 1;
        }
        

        &::before {
            content: "";
            
            display: inline-block;

            margin-right: 8px;

            width: 12px;
            height: 12px;

            background: ${theme.btn_add$border};
            mask-image: url(${plus});
        }

        &:hover::before {
            background: ${theme.btn_add_hover$plusBg};
        }
    `}
`;

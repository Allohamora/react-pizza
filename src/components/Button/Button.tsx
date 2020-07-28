import styled, { css } from 'styled-components';

interface ButtonProps {
    cart?: boolean,
    primary?: boolean,
    secondary?: boolean,
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

    ${({ secondary, active, theme }) => secondary && css`
            padding: 14px 25px;
            color: ${theme.btn.secondary.color};
            background: ${theme.btn.secondary.bg};

            ${active && css`
                color: ${theme.btn.secondary.active.color};
                background: ${theme.btn.secondary.active.bg};
            `}
        `
    }

    ${props => props.cart && css`
        color: ${props.theme.btn.cart.color};
        background: ${props.theme.btn.cart.bg};
    `}
`;

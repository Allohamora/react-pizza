import styled, { css } from 'styled-components';

interface ButtonProps {
    cart?: boolean
};

export const Button = styled.button<ButtonProps>`
    padding: 12px 25px;

    font-size: 16px;
    line-height: 19px;
    font-style: normal;
    font-weight: 800;

    border: none;

    border-radius: 30px;

    outline: none;

    cursor: pointer;

    ${props => props.cart && css`
        color: ${props.theme.btn.cart.color};
        background: ${props.theme.btn.cart.bg};
    `}

    &:hover {
        opacity: .7;
    }
`;

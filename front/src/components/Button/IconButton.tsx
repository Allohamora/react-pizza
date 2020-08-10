import styled from 'styled-components';
import minus from "assets/minus.svg";
import plus from "assets/plus.svg";
import xMark from "assets/xMark.svg";

interface IconButtonProps {
    plus?: boolean,
    minus?: boolean,
    xMark?: boolean,

    gray?: boolean,
};

export const IconButton = styled.button<IconButtonProps>`
    position: relative;

    display: block;

    width: 32px;
    height: 32px;

    border-radius: 50%;

    border: 2px solid #FE5F1E;

    &::after {
        content: "";

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);

        background-color: #FE5F1E;
    }

    ${props => props.minus && `
        &::after {
            width: 10px;
            height: 2px;

            mask-image: url(${minus});
        }
    `}

    ${props => props.plus && `
        &::after {
            width: 12px;
            height: 12px;

            mask-image: url(${plus});
        }
    `}

    ${props => props.xMark && `
        &::after {
            width: 15px;
            height: 15px;

            mask-image: url(${xMark});
        }
    `}

    ${props => props.gray && `
        border-color: #D7D7D7;

        &::after {
            background-color: #D7D7D7;
        }
    `}

`;

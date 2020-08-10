import React from 'react';
import styled from 'styled-components';
import { Container } from 'containers/Container';
import { Brand } from 'components/Brand';
import { Button } from "components/Button";
import { Link } from 'react-router-dom';
import { ReactComponent as CartIcon } from "assets/cart.svg";
import { useHeader } from './useHeader';

interface HeaderProps {};

const Inner = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 50px 0;

    @media(max-width: 635px) {
        flex-flow: column wrap;

        & a[href="/cart"] {
            padding-top: 10px;
            align-self: flex-end;
        }
    }
`;

const Wrap = styled.div`
    border-bottom: 1px solid ${props => props.theme.header$border};
`;

const CartInner = styled.span`
    display: flex;

    align-items: center;

    & svg {
        width: 18px;
        height: 18px;

        margin-right: 7px;
    }
`;

const Delimiter = styled.div`
    width: 1px;
    height: 25px;

    margin: 0 14px;

    background: ${props => props.theme.btn__delimiter_cart$bg};
`;

export const Header: React.FC<HeaderProps> = props => {

    const { total, count } = useHeader();

    return (
        <Wrap>
            <Container>
                <Inner>
                    <Link to="/" >
                        <Brand />
                    </Link>
                    <Link to="/cart">
                        <Button cart >
                            <CartInner>
                                <span>{total} ₽</span>
                                <Delimiter />  
                                <CartIcon />
                                <span>{count}</span>
                            </CartInner>
                        </Button>
                    </Link>
                </Inner>
            </Container>
        </Wrap>
    );
};

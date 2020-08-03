import React from 'react';
import styled from 'styled-components';
import { EmptyCart } from './EmptyCart';
import { ReactComponent as CartIcon }  from "assets/cart.svg";
import { ReactComponent as TrashIcon } from "assets/trash-icon.svg";
import { CartItem } from './CartItem';
import { Button } from 'components/Button';
import { ReactComponent as LeftIcon } from "assets/left.svg";
import { Link } from 'react-router-dom';
import { breakpoints } from 'style';
import { useCart } from './useCart';

interface CartProps {};

const Container = styled.div`
    min-height: 80vh;
    max-width: 820px;

    margin: 0 auto;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;

    padding-bottom: 33px;

    border-bottom: 1px solid ${props => props.theme.cart__header$border};

    @media (max-width: ${breakpoints.cartPizza}) {
        flex-flow: column wrap;

        & > * {
            margin-top: 5px;
        }
    }
`;

const CartBlock = styled.span`
    display: flex;
    align-items: center;

    font-weight: 700;
    font-size: 32px;
    letter-spacing: 0.01em;

    color: ${props => props.theme.cart__cartBlock$color};

    & svg {
        width: 30px;
        height: 30px;

        margin-right: 15px;
    }

    & svg path {
        stroke: ${props => props.theme.cart__cartBlock$stroke};
    }
`;

const ClearButton = styled.button`
    display: flex;
    align-items: center;

    font-size: 16px;

    color: ${props => props.theme.cart__clearBtn$color};

    & svg {
        margin-right: 5px;
    }
`;

const Total = styled.div`
    display: flex;
    justify-content: space-between;

    padding-top: 30px;

    font-size: 22px;
    letter-spacing: 0.01em;

    color: ${props => props.theme.cart__total$color};

    @media (max-width: ${breakpoints.cartPizza}) {
        flex-flow: column wrap;

        & > * {
            margin-top: 5px;
        }
    }
`;

const Count = styled.span`
    font-weight: 700;
`;

const Sum  = styled.span`
    font-weight: 700;
    color: ${props => props.theme.cart__sum$color};
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;

    padding-top: 30px;

    @media (max-width: ${breakpoints.cartPizza}) {
        flex-flow: wrap column-reverse;

        & > * {
            margin-top: 10px;
        }

        & a > button {
            width: 100%;
        }
    }
`;

const BackInner = styled.div`
    display: flex;
    justify-content: center;
    aligh-items: center;

    margin-left: -10px;

    & svg {
        margin-right: 10px;
        transform: translateY(2px);
    }
`;

export const Cart: React.FC<CartProps> = props => {

    const { items, total, count } = useCart();


    // if length === 0
    if( !items.length ) {
        return (
            <Container>
                <EmptyCart />
            </Container>
        );
    }

    return (
        <Container>
            <Header>
                <CartBlock>
                    <CartIcon /> Корзина
                </CartBlock>

                <span>
                    <ClearButton>
                        <TrashIcon /> Очистить корзину
                    </ClearButton>
                </span>
            </Header>

            <div>
                {
                    items.map( ([id, pizza]) => (
                        <CartItem key={id} pizza={pizza} />
                    ) )
                }
            </div>

            <Total>
                <span>
                    Всего пиц: <Count>{count} шт.</Count>
                </span>

                <span>
                    Сумма заказа: <Sum>{total} ₽</Sum>
                </span>
            </Total>

            <Buttons>
                <Link to="/" >
                    <Button gray pd1 >
                        <BackInner>
                            <LeftIcon /> Вернуться назад
                        </BackInner>
                    </Button>
                </Link>

                <Button pd1 >Оплатить сейчас</Button>
            </Buttons>

        </Container>
    );
};

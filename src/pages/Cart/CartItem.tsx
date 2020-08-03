import React from 'react';
import styled from 'styled-components';
import { IconButton } from 'components/Button';
import { breakpoints } from 'style';
import { CartItem as iItem, createUniqueID } from 'redux/slices/cart';
import { TYPES } from 'services/api';
import { useCartItem } from './useCartItem';

interface CartItemProps {
    pizza: iItem
};

const Container = styled.div`
    display: flex;

    padding: 20px 0;

    border-bottom: 1px solid ${props => props.theme.cart__item$border};

    @media( max-width: ${breakpoints.cartPizza} ) {
        flex-flow: column wrap;   
    }
`;

const ImageBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    display: block;

    width: 80px;
    height: 80px;
`;

const Content = styled.div`
    flex-grow: 1;

    padding: 14px 0;
    margin: 0 15px;
`;

const Title = styled.h3`
    font-weight: 700;
    letter-spacing: 0.01em;

    color: ${props => props.theme.cart__item__title$color};
`;

const Text = styled.p`
    font-size: 18px;
    letter-spacing: 0.01em;

    color: ${props => props.theme.cart__item__text$color};
`;

const Count = styled.div`
    min-width: 102px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-weight: 700;
    font-size: 22px;
    letter-spacing: 0.01em;

    color: ${props => props.theme.cart__item__count$color};
`;

const Price = styled.div`
    flex-grow: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 700;
    font-size: 22px;
    letter-spacing: 0.01em;

    color: ${props => props.theme.cart__item__price$color};
`;

const Remove = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const First = styled.div`
    flex-grow: 1;

    max-width: 50%;

    display: flex;

    @media( max-width: ${breakpoints.cartPizza} ) {
        max-width: 100%;

        margin-bottom: 20px;

        & ${Content} {
            text-align: center;
        }

        & ${Image} {
            margin-left: 10px;
        }
    }
`;

const Second = styled.div`
    flex-grow: 1;

    display: flex;
`;

export const CartItem: React.FC<CartItemProps> = ({ pizza }) => {

    const { name, imageUrl, price, size, type, count } = pizza;
    const { addHandler, removeHandler, clearHandler } = useCartItem( createUniqueID(pizza) );

    return (
        <Container>
            <First>
                <ImageBlock>
                    <Image src={imageUrl} alt="pizza" />
                </ImageBlock>

                <Content>
                    <Title>{name}</Title>
                    <Text>{TYPES[type]} тесто, {size} см.</Text>
                </Content>
            </First>

            <Second>
                <Count>
                    <IconButton minus onClick={removeHandler} />
                        {count}
                    <IconButton plus onClick={addHandler} />
                </Count>

                <Price>
                    {price * count} ₽ 
                </Price>

                <Remove>
                    <IconButton gray xMark onClick={clearHandler} />
                </Remove>
            </Second>

        </Container>
    );
};

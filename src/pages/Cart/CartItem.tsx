import React from 'react';
import { CartPizza } from './Cart';
import styled from 'styled-components';
import { IconButton } from 'components/Button';

interface CartItemProps {
    pizza: CartPizza
};

const Container = styled.div`
    display: grid;

    grid-template-columns: 80px 1fr 102px 1fr 32px;

    padding: 20px 0;

    border-bottom: 1px solid #F4F4F4;
`;

const Image = styled.img`
    display: block;

    width: 80px;
    height: 80px;
`;

const TextBlock = styled.div`
    padding: 14px 0;
    margin: 0 15px;
`;

const Title = styled.h3`
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 27px;

    letter-spacing: 0.01em;

    color: #000000;
`;

const Text = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;

    letter-spacing: 0.01em;

    color: #8D8D8D;
`;

const Count = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 27px;

    letter-spacing: 0.01em;

    color: #000000;
`;

const Price = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 27px;

    letter-spacing: 0.01em;

    color: #000000;
`;

const RemoveBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CartItem: React.FC<CartItemProps> = ({ pizza }) => {

    const { id, name, imageUrl, price, size, type } = pizza;

    return (
        <Container>
            <Image src={imageUrl} alt="pizza" />

            <TextBlock>
                <Title>{name}</Title>
                <Text>{type} тесто, {size} см.</Text>
            </TextBlock>

            <Count>
                <IconButton minus />
                    2
                <IconButton plus />
            </Count>

            <Price>
                {price} ₽ 
            </Price>

            <RemoveBlock>
                <IconButton gray xMark />
            </RemoveBlock>

        </Container>
    );
};

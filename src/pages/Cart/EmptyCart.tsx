import React from 'react';
import styled from 'styled-components';
import img from "assets/empty-cart.svg";
import { Button } from 'components/Button';
import { Link } from 'react-router-dom';

interface EmptyCartProps {};

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-flow: wrap column;

    padding: 80px 0;
`;

const Title = styled.h2`
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 39px;

    color: #000000;
`;

const Text = styled.p`
    padding-top: 10px;

    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;

    text-align: center;
    letter-spacing: 0.01em;

    color: #777777;
`;

const Image = styled.img`
    display: block;
    
    padding-top: 47px;
`;

const SLink = styled(Link)`
    margin-top: 70px;
`;

export const EmptyCart: React.FC<EmptyCartProps> = props => {
    return (
        <Container>
            <Title>Корзина пустая <span>😕</span></Title>
            <Text>
                Вероятней всего, вы не заказывали ещё пиццу.
                <br />
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </Text>
            <Image src={img} alt="empty cart image" />
            <SLink to="/" >
                <Button secondary active >
                    Вернуться назад
                </Button>
            </SLink>
        </Container>
    );
};

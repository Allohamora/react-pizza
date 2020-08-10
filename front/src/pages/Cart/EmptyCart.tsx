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

    padding: 40px 0;
`;

const Title = styled.h2`
    font-weight: 700;
    font-size: 32px;

    color: ${props => props.theme.emptyCart__title$color};
`;

const Text = styled.p`
    padding-top: 10px;

    font-size: 18px;
    letter-spacing: 0.01em;

    text-align: center;
    color: ${props => props.theme.emptyCart__text$color};
`;

const Image = styled.img`
    display: block;
    
    margin-top: 47px;
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

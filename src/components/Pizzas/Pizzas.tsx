import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PizzaLoading, Pizza } from 'components/Pizza';

interface PizzasProps {};

const Title = styled.h2`
    font-weight: 800;
    font-size: 32px;
    line-height: 39px;

    letter-spacing: 0.01em;

    margin-bottom: 32px;

    color: ${props => props.theme.pizzas.color};
`;

const Container = styled.div`

`;

const pizza = {
    id: 0,
    imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
    name: "Пепперони Фреш с перцем",
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 803,
    category: 0,
    rating: 4
}

export const Pizzas: React.FC<PizzasProps> = props => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(setLoading, 1000, false)
    }, [])

    return (
        <div>
            <Title>Все пиццы</Title>
            <Container>
                {
                    loading
                        ? <PizzaLoading />
                        : <Pizza pizza={pizza} />
                }
            </Container>
        </div>
    );
};

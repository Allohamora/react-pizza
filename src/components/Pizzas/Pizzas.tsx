import React from 'react';
import styled from 'styled-components';
import { PizzaLoading, PizzaLoadingContainer, Pizza, PizzaContainer } from 'components/Pizza';
import { usePizzas } from './usePizzas';

interface PizzasProps { };

const Title = styled.h2`
    font-weight: 800;
    font-size: 32px;
    letter-spacing: 0.01em;

    margin-bottom: 32px;

    color: ${props => props.theme.pizzas$color};
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;

    justify-content: space-around;

    & > ${PizzaContainer}, 
    & > svg {
        margin-left: 4px;
        margin-right: 4px;
        margin-bottom: 65px;
    }
`;

export const Pizzas: React.FC<PizzasProps> = props => {

    const { pizzas } = usePizzas();

    return (
        <div>
            <Title>Все пиццы</Title>
            <Container>
                {
                    pizzas
                        ? pizzas.map((pizza) => (
                            <Pizza key={pizza.id} pizza={pizza} />
                         ))
                        : new Array(8).fill(null).map((_, i) => (
                            <PizzaLoading key={i} />
                        ))
                }
            </Container>
        </div>
    );
};

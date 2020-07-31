import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PizzaLoading, PizzaLoadingContainer, Pizza, PizzaContainer } from 'components/Pizza';
import db from "../../../public/db.json";

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

    & > ${PizzaContainer} {
        padding-bottom: 65px;
    }

    & > ${PizzaLoadingContainer} {
        padding-bottom: 65px;
    }
`;

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
                        ? new Array(8).fill(null).map((_, i) => (
                            <PizzaLoading key={i} />
                        ))
                        : db.pizzas.map((pizza) => (
                            <Pizza key={pizza.id} pizza={pizza} />
                        ))
                }
            </Container>
        </div>
    );
};

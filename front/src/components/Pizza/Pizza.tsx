import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'components/Button';
import { Pizza as iPizza, TYPES } from "services/api";
import { usePizzas } from 'components/Pizzas/usePizzas';
import { usePizza } from './usePizza';

interface PizzaProps {
    pizza: iPizza,
};

export const PizzaContainer = styled.div`
    width: 280px;
`;

const Img = styled.img`
    width: 260px;
    height: 260px;

    display: block;

    margin: 0 auto;
`;

const Title = styled.h3`
    padding: 10px 0 20px 0;

    font-weight: 800;
    font-size: 20px;
    letter-spacing: 0.01em;

    text-align: center;
    color: ${props => props.theme.pizza$color};
`;

const Selector = styled.div`
    padding: 7px;

    background: ${props => props.theme.pizza__selector$bg};

    border-radius: 10px;
`;

const Options = styled.ul`
    display: flex;

    padding-bottom: 7px;

    &:last-child {
        padding-bottom: 0;
    }
`;

const Option = styled.li<{selected?: boolean}>`
    flex-grow: 1;

    padding: 10px;

    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.015em;

    text-align: center;
    color: ${props => props.theme.pizza__option$color};

    cursor: pointer;

    ${props => props.selected && `
        background: ${props.theme.pizza__option_selected$bg};
        border-radius: 5px;
    `}
`;

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-top: 17px;
`;

const Price = styled.div`
    font-weight: 800;
    font-size: 22px;
    letter-spacing: 0.015em;

    color: ${props => props.theme.pizza__price$color};
`;

export const Count = styled.span<{show?: boolean}>`
    display: none;

    ${props => props.show && `
        display: inline-block;
    `}
`;

export const Pizza: React.FC<PizzaProps> = ({ pizza }) => {

    const { imageUrl, name, types, sizes, price } = pizza;
    const { activeType, setActiveType, activeSize, setActiveSize, addHandler, count } = usePizza(pizza);

    return (
        <PizzaContainer >
            <Img src={imageUrl} alt={name} />
            <Title>{name}</Title>

            <Selector>
                <Options>
                    { types.map(type => (
                        <Option 
                            key={type} 
                            selected={activeType === type}
                            onClick={() => setActiveType(type)}
                        >
                            {TYPES[type]}
                        </Option>
                    )) }
                </Options>

                <Options>
                    { sizes.map(size => (
                        <Option 
                            key={size}
                            selected={activeSize === size}
                            onClick={() => setActiveSize(size)}
                        >
                            {size} см.
                        </Option>
                    )) }
                </Options>
            </Selector>

            <Footer>
                <Price>от {price} ₽</Price>
                <Button add onClick={addHandler} >
                    Добавить <Count show={!!count} >{count}</Count>
                </Button>
            </Footer>

        </PizzaContainer>
    );
};

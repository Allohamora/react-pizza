import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'components/Button';

interface Pizza {
    id: number,
    imageUrl: string,
    name: string,
    types: number[],
    sizes: number[],
    price: number,
    category: number,
    rating: number,
}

interface PizzaProps {
    pizza: Pizza,
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
    line-height: 24px;

    text-align: center;

    letter-spacing: 0.01em;

    color: ${props => props.theme.pizza.color};
`;

const Selector = styled.div`
    padding: 7px;

    background: ${props => props.theme.pizza.selector.bg};

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

    font-style: normal;
    font-weight: 700;
    font-size: 14px;

    line-height: 17px;

    text-align: center;

    letter-spacing: 0.015em;

    color: ${props => props.theme.pizza.option.color};

    cursor: pointer;

    ${props => props.selected && `
        background: ${props.theme.pizza.option.selected.bg};
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
    line-height: 27px;

    letter-spacing: 0.015em;

    color: ${props => props.theme.pizza.price.color};
`;

const TYPES = ["тонкое", "традиционное"];

export const Pizza: React.FC<PizzaProps> = ({ pizza }) => {

    const { imageUrl, name, types, sizes, price } = pizza;

    const [activeSize, setActiveSize] = useState(sizes[0]);
    const [activeType, setActiveType] = useState(types[0]);

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
                <Button add >
                    Добавить
                </Button>
            </Footer>

        </PizzaContainer>
    );
};

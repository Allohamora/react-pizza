import React from 'react';
import logo from "assets/logo.png";
import styled from 'styled-components';

interface BrandProps {};

const Title = styled.h1`
    color: ${props => props.theme.brand.title.color};

    font-weight: 900;
    font-size: 24px;

    line-height: 29px;

    letter-spacing: 0.01em;

    text-transform: uppercase;
`;

const Text = styled.p`
    color: ${props => props.theme.brand.text.color};

    font-style: normal;
    font-weight: normal;
    font-size: 16px;

    line-height: 19px;
`;

const Container = styled.div`
    display: flex;
    align-items: center;

    img:first-child {
        margin-right: 17px;
    }
`;

export const Brand: React.FC<BrandProps> = props => {
    return (
        <Container>
            <img width={38} height={38} src={logo} alt="logo" />
            <div>
                <Title>
                    REACT PIZZA
                </Title>
                <Text>
                    самая вкусная пицца во вселенной
                </Text>
            </div>
        </Container>
    );
};

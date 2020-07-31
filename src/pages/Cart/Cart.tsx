import React from 'react';
import styled from 'styled-components';
import { EmptyCart } from './EmptyCart';

interface CartProps {};

const Container = styled.div`
    min-height: 80vh;
`;

export const Cart: React.FC<CartProps> = props => {
    return (
        <Container>
            <EmptyCart />
        </Container>
    );
};

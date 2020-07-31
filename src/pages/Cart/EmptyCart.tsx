import React from 'react';
import styled from 'styled-components';

interface EmptyCartProps {};

const Container = styled.div`
    padding-top: 160px;
`;

export const EmptyCart: React.FC<EmptyCartProps> = props => {
    return (
        <Container>
            EmptyCart
        </Container>
    );
};

import React from 'react';
import styled from 'styled-components';
import { ReduxCounter } from 'ReduxCounter';

interface AppProps {

};

const Container = styled.div`
    color: red;
`;

export const App: React.FC<AppProps> = props => {
    return (
        <Container>
            <ReduxCounter />
        </Container>
    );
};

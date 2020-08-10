import React from 'react';
import styled from 'styled-components';
import { Header } from 'components/Header';
import { Switch, Redirect, Route } from 'react-router-dom';
import { Container } from 'containers/Container';

const Cart = React.lazy(() => import("pages/Cart"));
const Main = React.lazy(() => import("pages/Main"));

interface AppProps {};

const Wrap = styled.div`
    padding: 50px 0;
    margin: 0 auto;

    background-color: ${props => props.theme.wrap$bg};
`;

const AppContainer = styled.div`
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.03);

    border-radius: 10px;

    background: ${props => props.theme.app$bg};

    width: calc(100vw - 100px);
    max-width: 1400px;

    min-height: 100vh;

    margin: 0 auto;
`;

const Content = styled(Container)`
    padding: 40px 0;
`;

export const App: React.FC<AppProps> = props => {
    return (
        <Wrap>
            <AppContainer>
                <Header />
                <Content>
                    <Switch>
                        <Route path="/" exact render={() => (
                            <React.Suspense fallback={<div>loading...</div>} >
                                <Main />
                            </React.Suspense>
                        )} />

                        <Route path="/cart" render={() => (
                            <React.Suspense fallback={<div>loading...</div>} >
                                <Cart />
                            </React.Suspense>
                        )} />
                        
                        <Redirect to="/" />
                    </Switch>
                </Content>
            </AppContainer>
        </Wrap>
    );
};

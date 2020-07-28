import React from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

interface PizzaLoadingProps {};

export const PizzaLoadingContainer = styled.div`

`;

// created by https://create-content-loader.now.sh

export const PizzaLoading: React.FC<PizzaLoadingProps> = props => {
    return (
        <PizzaLoadingContainer>
            <ContentLoader 
                    speed={2}
                    width={280}
                    height={471}
                    viewBox="0 0 280 471"
                    backgroundColor="#e3e3e3"
                    foregroundColor="#eeeded"
                    {...props}
                >
                    <circle cx="140" cy="130" r="130" /> 
                    <rect x="0" y="276" rx="0" ry="0" width="280" height="25" /> 
                    <rect x="0" y="320" rx="10" ry="10" width="280" height="85" /> 
                    <rect x="130" y="422" rx="30" ry="30" width="150" height="45" /> 
                    <rect x="0" y="433" rx="0" ry="0" width="91" height="27" />
            </ContentLoader>
        </PizzaLoadingContainer>
    );
};

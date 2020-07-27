import React from 'react';
import ContentLoader from 'react-content-loader';

interface PizzaLoadingProps {

};

// created by https://create-content-loader.now.sh

export const PizzaLoading: React.FC<PizzaLoadingProps> = props => {
    return (
        <ContentLoader 
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#e3e3e3"
            foregroundColor="#eeeded"
            {...props}
        >
            <circle cx="140" cy="130" r="130" /> 
            <rect x="0" y="276" rx="0" ry="0" width="280" height="25" /> 
            <rect x="0" y="320" rx="10" ry="10" width="280" height="85" /> 
            <rect x="160" y="420" rx="30" ry="30" width="120" height="40" /> 
            <rect x="2" y="434" rx="0" ry="0" width="90" height="26" />
        </ContentLoader>
    );
};

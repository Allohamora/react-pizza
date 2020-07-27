import React from 'react';
import { PizzaLoading } from 'components/Pizza';

interface MainProps {};

export const Main: React.FC<MainProps> = props => {
    return (
        <div>
            <PizzaLoading />
        </div>
    );
};

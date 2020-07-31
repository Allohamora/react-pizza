import React from 'react';
import styled from 'styled-components';
import { EmptyCart } from './EmptyCart';

interface CartProps {};

export const Cart: React.FC<CartProps> = props => {
    return (
        <div>
            <EmptyCart />
        </div>
    );
};

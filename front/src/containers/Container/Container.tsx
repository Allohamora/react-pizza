import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
    className?: string,
};

const Wrap = styled.div`
    width: 90%;
    
    margin: 0 auto;
`;

export const Container: React.FC<ContainerProps> = ({children, className}) => {
    return (
        <Wrap className={className} >{children}</Wrap>
    );
};

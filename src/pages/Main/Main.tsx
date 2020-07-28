import React, { useState } from 'react';
import { PizzaLoading } from 'components/Pizza';
import { Button } from 'components/Button';
import styled from 'styled-components';
import arrow from "assets/arrow.svg";

interface MainProps {};

const Categories = styled.div`
    & > ${Button}:not(:last-child) {
        margin-right: 10px;
    }
`;

const SortBlock = styled.div`
    display: flex;

    justify-content: space-between;
`;

const SelectBlock = styled.div`
    position: relative;

    display: flex;
    align-items: center;
`;

const Select = styled.button<{show?: boolean}>`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;

    letter-spacing: 0.015em;

    display: flex;
    align-items: center;

    &::before {
        content: "";

        display: inline-block;
        margin-right: 7px;

        background: url(${arrow});

        ${props => !props.show && `
            transform: rotate(180deg);
        ` }

        width: 10px;
        height: 6px;
    }
`;

const Selected = styled.span`
    color: #FE5F1E;

    padding-bottom: 1px;
    margin-left: 8px;

    border-bottom: 1px dashed #FE5F1E;
`;

const Options = styled.div<{show?: boolean}>`
    position: absolute;
    top: 100%;
    right: 0;

    display: none;
    ${props => props.show && "display: block;"}

    padding: 14px 0;

    background: #FFFFFF;

    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
    
    border-radius: 10px;
`;

const Option = styled.button<{selected?: boolean}>`
    display: block;

    width: 100%;

    padding: 10px 16px;

    text-align: left;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;

    &:hover {
        background: rgba(254, 95, 30, 0.05);
    }

    ${props => props.selected && `
        background: rgba(254, 95, 30, 0.05);
        color: #FE5F1E;
        font-weight: 700;
    `}
`;

const Pizzas = styled.div`
    margin-top: 32px;
`;

export const Main: React.FC<MainProps> = props => {

    const [show, setShow] = useState(false);

    const clickHandler = () => setShow(!show);

    return (
        <div>
            <SortBlock>

                <Categories>
                    <Button secondary active >Все</Button>
                    <Button secondary >Мясные</Button>
                    <Button secondary >Вегетарианская</Button>
                    <Button secondary >Гриль</Button>
                    <Button secondary >Острые</Button>
                    <Button secondary >Закрытые</Button>
                </Categories>

                <SelectBlock>
                    <Select show={show} onClick={clickHandler} >
                        Сортировка по: <Selected>популярности</Selected>
                    </Select>
                    <Options show={show} >
                        <Option selected >популярности</Option>
                        <Option>по цене</Option>
                        <Option>по алфавиту</Option>
                    </Options>
                </SelectBlock>

            </SortBlock>

            <Pizzas>
                <PizzaLoading />
            </Pizzas>
        </div>
    );
};

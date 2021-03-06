import React, { useState } from 'react';
import styled from 'styled-components';
import arrow from "assets/arrow.svg";
import { Button } from 'components/Button';
import { Pizzas } from 'components/Pizzas';
import { breakpoints } from 'style';
import { CATEGORIES } from 'services/api';
import { useMain } from './useMain';

interface MainProps {};

const Categories = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    & > ${Button} {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    & > ${Button}:not(:last-child) {
        margin-right: 10px;
    }

    @media (max-width: ${breakpoints.md}) {
        flex-direction: column;
        align-items: normal;

        & > ${Button} {
            flex-grow: 1;

            margin-right: 0 !important;
            margin-top: 5px;
            margin-bottom: 5px;
        }
    }
`;

const SortBlock = styled.div`
    display: flex;

    justify-content: space-between;

    @media (max-width: ${breakpoints.lg}) {
        flex-flow: column wrap;
    }
`;

const SelectBlock = styled.div`
    position: relative;

    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.lg}) {
        margin-top: 20px;
        justify-content: flex-end;
    }
`;

const Select = styled.button<{show?: boolean}>`
    display: flex;

    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.015em;

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
    padding-bottom: 1px;
    margin-left: 8px;

    color: ${props => props.theme.select_selected$color};

    border-bottom: 1px dashed ${props => props.theme.select_selected$border};
`;

const Options = styled.div<{show?: boolean}>`
    position: absolute;
    top: 100%;
    right: 0;

    display: none;
    ${props => props.show && "display: block;"}

    padding: 14px 0;

    background: ${props => props.theme.select__options$bg};

    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
    
    border-radius: 10px;
`;

const Option = styled.button<{selected?: boolean}>`
    display: block;

    width: 100%;

    padding: 10px 16px;

    font-size: 14px;

    text-align: left;

    &:hover {
        background: ${props => props.theme.select__option_selected$bg};
    }

    ${props => props.selected && `
        background: ${props.theme.select__option_selected$bg};
        color: ${props.theme.select__option_selected$color};
        font-weight: 700;
    `}
`;

const PizzasWrap = styled.div`
    margin-top: 32px;
`;

const sortOptions = ["популярности", "цене", "алфавиту"]

export const Main: React.FC<MainProps> = props => {

    const { activeCategory, activeSort, setActiveCategory, setActiveSort } = useMain();

    // sort
    const [show, setShow] = useState(false);
    const clickHandler = () => setShow(!show);

    return (
        <div>
            <SortBlock>

                <Categories>
                    <Button
                        sort
                        active={"ALL" === activeCategory}
                        onClick={() => setActiveCategory("ALL")}
                    >
                        Все
                    </Button>
                    {
                        CATEGORIES.map((category, i) => (
                            <Button
                                key={i}
                                sort 
                                active={i === activeCategory}
                                onClick={() => setActiveCategory(i)}
                            >
                                {category}
                            </Button>
                        ))
                    }
                </Categories>

                <SelectBlock>
                    <Select show={show} onClick={clickHandler} >
                        Сортировка по: <Selected>{sortOptions[activeSort]}</Selected>
                    </Select>
                    <Options show={show} >
                        {
                            sortOptions.map((option, i) => (
                                <Option 
                                    key={i} 
                                    selected={i === activeSort}
                                    onClick={() => {
                                        setActiveSort(i);
                                        setShow(false);
                                    }}
                                >
                                    {option}
                                </Option>
                            ))
                        }
                    </Options>
                </SelectBlock>

            </SortBlock>

            <PizzasWrap>
                <Pizzas />
            </PizzasWrap>
        </div>
    );
};

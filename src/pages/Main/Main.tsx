import React, { useState } from 'react';
import { Button } from 'components/Button';
import { Pizzas } from 'components/Pizzas';
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
    padding-bottom: 1px;
    margin-left: 8px;

    color: ${props => props.theme.select.selected.color};

    border-bottom: 1px dashed ${props => props.theme.select.selected.border};
`;

const Options = styled.div<{show?: boolean}>`
    position: absolute;
    top: 100%;
    right: 0;

    display: none;
    ${props => props.show && "display: block;"}

    padding: 14px 0;

    background: ${props => props.theme.select.options.bg};

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
        background: ${props => props.theme.select.option.selected.bg};
    }

    ${props => props.selected && `
        background: ${props.theme.select.option.selected.bg};
        color: ${props.theme.select.option.selected.color};
        font-weight: 700;
    `}
`;

const PizzasWrap = styled.div`
    margin-top: 32px;
`;

const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
const sortOptions = ["популярности", "цене", "алфавиту"]

export const Main: React.FC<MainProps> = props => {

    const [show, setShow] = useState(false);
    const [activeCategory, setActiveCategory] = useState(0);
    const [activeSort, setActiveSort] = useState(0);

    const clickHandler = () => setShow(!show);

    return (
        <div>
            <SortBlock>

                <Categories>
                    {
                        categories.map((category, i) => (
                            <Button
                                key={i}
                                secondary 
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

import { func } from "prop-types";
import React from "react";
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let endIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, index) =>{
            return <BurgerIngredient key={igKey + index} type={igKey} />
        })
    })
    .reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if(endIngredients.length === 0) {
        endIngredients = <p>Please start adding ingredients</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {endIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;
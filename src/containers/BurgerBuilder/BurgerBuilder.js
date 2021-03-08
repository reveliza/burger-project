import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
    salad: 0.5,
    onion: 0.8,
    tomato: 0.7,
    cheese: 1.2,
    meat: 2
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            onion: 0,
            tomato: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 2,
        purchaseable: false
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
        .map(key => {
            return ingredients[key];
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0);

        this.setState({purchaseable: sum > 0})
    }

    addIngredientHandler = (type) => {
        const newCount = this.state.ingredients[type] + 1;
        const newIngredients = {
            ...this.state.ingredients
        }
        newIngredients[type] = newCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice + priceAddition;

        this.setState({totalPrice: newPrice, ingredients: newIngredients});
        this.updatePurchaseState(newIngredients);
    }

    removeIngredientHandler = (type) => {
        const newCount = this.state.ingredients[type] > 0 ? this.state.ingredients[type] -1 : 0
        const newIngredients = {
            ...this.state.ingredients
        }
        newIngredients[type] = newCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice - priceDeduction;

        this.setState({totalPrice: newPrice, ingredients: newIngredients});
        this.updatePurchaseState(newIngredients);
    }

    render() {
        const disabletInfo = {
            ...this.state.ingredients
        }

        for (let key in disabletInfo) {
            disabletInfo[key] = disabletInfo[key] <=0
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled={disabletInfo}
                    price={this.state.totalPrice.toFixed(2)}
                    purchaseable={this.state.purchaseable}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;
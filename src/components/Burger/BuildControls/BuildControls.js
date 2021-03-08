import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Onion", type: "onion" },
    { label: "Tomato", type: "tomato" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p className={classes.TotalPrice}>Current Price: {props.price}</p>
            {controls.map(ctrl => {
                return <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disable={props.disabled[ctrl.type]}
                />
            })}
            <button 
                className={classes.OrderButton}
                disabled={!props.purchaseable}>
                Order now
            </button>
        </div>
    )
};

export default buildControls;
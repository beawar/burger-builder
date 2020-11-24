import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const BuildControls = ({disabled, ingredientAdded, ingredientRemoved, ordered, price, purchasable}) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{price.toFixed(2)}</strong> $</p>
            {controls.map(c => {
                return <BuildControl
                    key={c.label}
                    label={c.label}
                    added={() => ingredientAdded(c.type)}
                    removed={ingredientRemoved.bind(this, c.type)}
                    disabled={disabled[c.type]}
                />
            })}
            <button
                className={classes.OrderButton}
                disabled={!purchasable}
                onClick={ordered}>ORDER NOW</button>
        </div>
    );
};

export default BuildControls;
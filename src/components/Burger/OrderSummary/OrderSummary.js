import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from "../../UI/Button/Button";

const OrderSummary = ({ingredients, purchaseCancel, purchaseContinue, totalPrice}) => {

    const ingredientSummary = Object.keys(ingredients)
        .map((igKey) => {
            return <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {ingredients[igKey]}
            </li>;
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {totalPrice}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={purchaseCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={purchaseContinue}>CONTINUE</Button>
        </Aux>
    );
};

function shouldComponentUpdate(prevProps, nextProps) {
    return prevProps.show !== nextProps.show;
}

export default React.memo(OrderSummary, shouldComponentUpdate);
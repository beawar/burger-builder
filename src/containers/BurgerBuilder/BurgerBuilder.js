import React, {useEffect, useState} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}


const BurgerBuilder = props => {
    const [ingredients, setIngredients] = useState(null);
    const [totalPrice, setTotalPrice] = useState(4)
    const [purchasing, setPurchasing] = useState(false);
    const [purchasable, setPurchasable] = useState(false);

    useEffect(() => {
        setIngredients({
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        })
    }, [])
    const updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map((igKey) => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        setPurchasable(sum > 0);
    }

    const addIngredientHandler = (type) => {
        const oldCount = ingredients[type];
        const updatedIngredients = {
            ...ingredients
        };
        updatedIngredients[type] = oldCount + 1;
        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = totalPrice + priceAddition;
        setIngredients(updatedIngredients);
        setTotalPrice(newPrice);
        updatePurchaseState(updatedIngredients);
    }

    const removeIngredientHandler = (type) => {
        const oldCount = ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedIngredients = {
            ...ingredients
        };
        updatedIngredients[type] = oldCount - 1;
        const priceDeduction = INGREDIENT_PRICES[type];
        const newPrice = totalPrice - priceDeduction;
        setTotalPrice(newPrice);
        setIngredients(updatedIngredients);
        updatePurchaseState(updatedIngredients);
    }

    const purchaseHandler = () => {
        setPurchasing(true);
    }

    const purchaseCancelHandler = () => {
        setPurchasing(false);
    }

    const purchaseContinueHandler = () => {
        alert('You continue!');
    }


    const disabledInfo = {
        ...ingredients
    };
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    }


    return (
        <Aux>
            <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                <OrderSummary
                    ingredients={ingredients}
                    purchaseCancel={purchaseCancelHandler}
                    purchaseContinue={purchaseContinueHandler}
                    totalPrice={totalPrice.toFixed(2)}
                />
            </Modal>
            <Burger ingredients={ingredients}/>
            <BuildControls
                ingredientAdded={addIngredientHandler}
                ingredientRemoved={removeIngredientHandler}
                disabled={disabledInfo}
                purchasable={purchasable}
                price={totalPrice}
                ordered={purchaseHandler}
            />
        </Aux>
    );

}

export default BurgerBuilder;
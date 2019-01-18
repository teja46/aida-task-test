import React from 'react';
import Aux from '../../../hoc/Aux';

const cartItem = (props) => {
    return (
        <Aux>
            <div>
                Name: <b>{props.productName}</b>
            </div>
            <div>
                Price: ${props.productPrice}
            </div>
            <div>
                Quantity: {props.quantity}
            </div>
            <button onClick={props.removeCart}>Remove From Cart</button>
        </Aux>
    );
}

export default cartItem;
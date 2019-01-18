import React from 'react';
import "./ProductTile.css";
const productTile = (props) => {
    return (
        <div className="Product-tile">
            <div><b>{props.productName}</b></div>
            <div><b>Individual Price:</b> ${props.productPrice}</div>
            <div><b>Total Price:</b> ${props.totalPrice}</div>
            {/* <div>{props.addedToCart}</div> */}
            {/* {props.addedToCart ? <div>True</div> : <div>False</div>} */}
            <div>
                <b>Quantity:</b>
                <select onChange={props.changeQuantity} disabled={props.addedToCart}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <button onClick={props.addToCart} disabled={props.addedToCart}>Add to Cart</button>
        </div>
    );
}

export default productTile;
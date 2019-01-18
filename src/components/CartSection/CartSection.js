import React from 'react';
import "./CartSection.css";
const cartSection = (props) => {
    return (
        <div className="Cart-Section" onClick={props.showModal}>
            Cart: {props.cartProducts.length}
        </div>
    );
}

export default cartSection;
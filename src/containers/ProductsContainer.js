import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from "../hoc/Aux";
import "./ProductsContainer.css";
import * as actionTypes from '../store/actions';
import ProductTile from "../components/ProductTile/ProductTile";
import CartSection from "../components/CartSection/CartSection";
import CartItem from "../components/CartSection/CartItem/CartItem";
import Modal from "../components/Modal/Modal";
class ProductsContainer extends Component {
    state = {
        showModal: false,
    }
    hideModal = () => {
        this.setState({ showModal: false });
    };
    showModal = () => {
        this.setState({ showModal: true });
    };
    render() {
        let selectedCartItems = this.props.products.filter(product => { return product.addedToCart === true });
        let cartItems = [];
        selectedCartItems.map(item => {
            return cartItems.push(
                <CartItem
                    key={item.id}
                    productName={item.name}
                    productPrice={item.totalProductPrice}
                    quantity={item.quantity}
                    removeCart={() => this.props.removeFromCart(item.id)} />)
        });

        console.log(cartItems);
        return (
            <Aux>
                <div className="aida-heading">
                    Welcome To AIDA Code Sample Cart Application
                </div>
                <CartSection cartProducts={selectedCartItems} showModal={this.showModal} />
                {this.props.products.map(product => (
                    <ProductTile
                        key={product.id}
                        productName={product.name}
                        productPrice={product.price}
                        productQuantity={product.quantity}
                        addToCart={() => this.props.addToCart(product.id)}
                        changeQuantity={(event) => this.props.changeQuantity(event.target.value, product.id)}
                        addedToCart={product.addedToCart}
                        totalPrice={product.totalProductPrice}
                    />
                ))}
                <Modal
                    show={this.state.showModal}
                    modalClosed={this.hideModal}
                >
                    Cart Items
                    {cartItems}
                    <div>Total Price: {this.props.totalCartValue}</div>
                </Modal>
            </Aux>
        )
    }
}
const mapStateToProps = state => {
    return {
        products: state.products,
        totalCartValue: state.totalCartValue
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (pId) => dispatch({ type: actionTypes.ADD_TO_CART, productId: pId }),
        removeFromCart: (pId) => dispatch({ type: actionTypes.REMOVE_FROM_CART, productId: pId }),
        changeQuantity: (quantity, id) => dispatch({ type: actionTypes.INCREASE_QUANTITY, details: { "quantity": quantity, "productId": id } })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
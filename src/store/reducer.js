import * as actionTypes from './actions';

const initialState = {
    products: [
        {
            "name": "Mobile Phone",
            "id": 1,
            "price": 25,
            "quantity": 1,
            "addedToCart": false,
            "totalProductPrice": 25
        },
        {
            "name": "Refregirator",
            "id": 2,
            "price": 10,
            "quantity": 1,
            "addedToCart": false,
            "totalProductPrice": 10
        },
        {
            "name": "Laptop",
            "id": 3,
            "price": 125,
            "quantity": 1,
            "addedToCart": false,
            "totalProductPrice": 125
        },
        {
            "name": "Geyser",
            "id": 4,
            "price": 120,
            "quantity": 1,
            "addedToCart": false,
            "totalProductPrice": 120
        },
        {
            "name": "TV",
            "id": 5,
            "price": 34,
            "quantity": 1,
            "addedToCart": false,
            "totalProductPrice": 34
        },
        {
            "name": "Air Conditioner",
            "id": 6,
            "price": 90,
            "quantity": 1,
            "addedToCart": false,
            "totalProductPrice": 90
        },
    ],
    totalCartValue: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const updatedProducts = [...state.products];
            let totalCartValue = 0;
            updatedProducts.map((product, index) => {
                product.id === action.productId ? product.addedToCart = true : product.addedToCart;
                if (product.addedToCart)
                    totalCartValue += product.totalProductPrice
                return product;
            })
            return {
                ...state,
                products: updatedProducts,
                totalCartValue: totalCartValue
            }
        case actionTypes.REMOVE_FROM_CART:
            const allProducts = [...state.products];
            let newCartValue = state.totalCartValue;
            allProducts.map(product => {
                product.id === action.productId ? (product.addedToCart = false, newCartValue -= product.totalProductPrice) : product.addedToCart;
                return product;
            })
            return {
                ...state,
                products: allProducts,
                totalCartValue: newCartValue
            }
        case actionTypes.INCREASE_QUANTITY:
            const updatedQuantity = [...state.products];
            updatedQuantity.map((prod, index) => {
                prod.id === action.details.productId ? (prod.quantity = action.details.quantity, prod.totalProductPrice = prod.price * action.details.quantity) : prod.quantity;
                return prod;
            })
            return {
                ...state,
                products: updatedQuantity
            }
    }
    return state;
};

export default reducer;
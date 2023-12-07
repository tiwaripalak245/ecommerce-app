const ProductReducer = (state, action) => {
    switch (action.type) {

        case "GET_PRODUCTS":
            return {
                ...state,
                products: action.payload
            }
            
case "ADD_ITEMS":
return {
    ...state,
    cartItems: [action.payload, ...state.cartItems]
}


// case "INCREASE_QUANTITY":
//    {
//   const updatedCartItems = state.cartItems.map(item => {
//     if (item.id === action.payload) {
//       return { ...item, quantity: item.quantity + 1 };
//     }
//     return item;
//   });

//   return {
//     ...state,
//     cartItems: updatedCartItems,
//   };
// }
case "REMOVE_ITEMS":
    return{
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload)
    }


        default:
            return state;
    }
}

export default ProductReducer;
const ProductReducer = (state, action) => {
    switch (action.type) {

case "GET_PRODUCTS":
            return {
                ...state,
                products: action.payload
            }

case "ADD_TO_WISHLIST": 
return{
  ...state,
  wishItem: [...state.wishItem, action.payload]
};

case "PRODUCT_DETAIL":
return{
  ...state,
  productItem: action.payload,
}

            
case "ADD_ITEMS":

const updateIndex =  state.cartProduct.findIndex((currentItem) => currentItem.id== action.payload.product.id ) 

if (updateIndex >= 0) {
  return{
    ...state,
   cartProduct: state.cartProduct.map((item, index) => 
   index === updateIndex ? {...item, itemQuantity: item.itemQuantity+1} : item
   ) ,
   total: state.total+1

  };
}
else {
 const tempProduct = {...action.payload.product, itemQuantity: 1} ;
 return {
  ...state,
  cartProduct: [...state.cartProduct, tempProduct],
  total: state.total+1
 }
}  

// return {
// ...state,
//    cartProduct: [...state.cartProduct, action.payload]

// }

case "INCREASE_ITEMS":
  const checkIndex = state.cartProduct.findIndex((currentItem) => {
    return currentItem.id === action.payload.id
  })
    return {
      ...state,
      cartProduct: state.cartProduct.map((currentItem, index) =>
        index === checkIndex ? { ...currentItem, itemQuantity: currentItem.itemQuantity + 1 } : currentItem
      )
    };
  case "DECREASE_ITEMS":
    const checkItemIndex = state.cartProduct.findIndex((currentItem) => {
      return currentItem.id === action.payload.id
    })
    return {
      ...state,
      cartProduct: state.cartProduct.map((currentItem, index) =>
        index === checkItemIndex ? { ...currentItem, itemQuantity: currentItem.itemQuantity > 1 ?
           currentItem.itemQuantity -1 : 1 } : currentItem
      )
    };

case "REMOVE_ITEMS":
    return{
        ...state,
        cartProduct: state.cartProduct.filter((item) => item.id !== action.payload)
    }
        default:
            return state;
    }
}

export default ProductReducer;
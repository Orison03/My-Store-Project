const reducer = (state, action) => {
if(action.type === "CLEAR_CART"){
    return {...state, cartData : []}
}

if(action.type === "DELETE_ITEM"){
    const newItems = state.cartData.filter((item) => {
        return item.id !== action.payload
    })
    return {...state, cartData : newItems}
}

if(action.type === "INCREASE_ITEM"){
    const newItem = state.cartData.map((cartItem) => {
        if(cartItem.id === action.payload){
            return {...cartItem, amount : cartItem.amount + 1}
        }
        return cartItem
    })
    return{...state, cartData : newItem}
}

if(action.type === "DECREASE_ITEM"){
    const newItem = state.cartData.map((cartItem) => {
        if(cartItem.id === action.payload){
            return {...cartItem, amount : cartItem.amount -1}
        }
        return cartItem
    })
    .filter((cartItem) => cartItem.amount !== 0)
   return {...state, cartData : newItem}
}

if(action.type === "GET_TOTALS"){
    let {total,amount} = state.cartData.reduce((totalItems,cartItem)=> {
        const {price,amount} = cartItem
    //   sum of amounts
     totalItems.amount += amount
    //  sum of total
    totalItems.total += price * amount
        return totalItems
    },{total: 0, amount : 0})

    total = parseFloat(total.toFixed(2))
    return {...state,total, amount}
}
  return state;
};

export default reducer;

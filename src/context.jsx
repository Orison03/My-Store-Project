import React, { createContext, useContext, useEffect, useReducer} from "react";
import reducer from "./reducer";
import { data } from "./data";

const initialState = {
    cartData : data,
    amount : 0,
    total : 0
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({type : "CLEAR_CART"})
  }

  const deleteItem = (id) => {
    dispatch({type : "DELETE_ITEM", payload : id})
  }

  const increaseItem = (id) => {
   dispatch({type : "INCREASE_ITEM", payload : id})
  }

  const decreaseItem = (id) => {
    dispatch({ type: "DECREASE_ITEM", payload: id });
  };

  useEffect(()=> {
    dispatch({type : "GET_TOTALS"})
  },[state.cartData])

  return <AppContext.Provider value={{...state, clearCart, deleteItem, increaseItem,decreaseItem}}>{children}</AppContext.Provider>;
};

// global custom hook
export const useGlobalCustomHook = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

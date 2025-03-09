import { createContext, useContext, useReducer, useEffect } from 'react';  

const OrderContext = createContext();  

const initialState = {  
  orders: JSON.parse(localStorage.getItem('orders')) || [],  
};  

const orderReducer = (state, action) => {  
  switch (action.type) {  
    case 'ADD_ORDER': {  
      const existingOrder = state.orders.find((order) => order.id === action.payload.id);  
      if (existingOrder) {  
        return {  
          ...state,  
          orders: state.orders.map((order) =>  
            order.id === action.payload.id  
              ? { ...order, quantity: order.quantity + 1 }  
              : order  
          ),  
        };  
      } else {  
        return { ...state, orders: [...state.orders, { ...action.payload, quantity: 1 }] };  
      }  
    }  
    case 'REMOVE_ORDER': {  
      const existingOrder = state.orders.find((order) => order.id === action.payload.id);  
      if (existingOrder.quantity > 1) {  
        return {  
          ...state,  
          orders: state.orders.map((order) =>  
            order.id === action.payload.id  
              ? { ...order, quantity: order.quantity - 1 }  
              : order  
          ),  
        };  
      } else {  
        return {  
          ...state,  
          orders: state.orders.filter((order) => order.id !== action.payload.id),  
        };  
      }  
    }  
    default:  
      return state;  
  }  
};  

export const OrderProvider = ({ children }) => {  
  const [state, dispatch] = useReducer(orderReducer, initialState);  

  const addOrder = (order) => {  
    dispatch({ type: 'ADD_ORDER', payload: order });  
  };  

  const removeOrder = (order) => {  
    dispatch({ type: 'REMOVE_ORDER', payload: order });  
  };  

  const getTotalPrice = () => {  
    return state.orders.reduce((total, order) => total + order.price * order.quantity, 0);  
  };  

  useEffect(() => {  
    localStorage.setItem('orders', JSON.stringify(state.orders));  
  }, [state.orders]);  

  return (  
    <OrderContext.Provider value={{ orders: state.orders, addOrder, removeOrder, getTotalPrice }}>  
      {children}  
    </OrderContext.Provider>  
  );  
};  

export const useOrderContext = () => {  
  const context = useContext(OrderContext);  
  if (!context) {  
    throw new Error('useOrderContext must be used within an OrderProvider');  
  }  
  return context;  
};  
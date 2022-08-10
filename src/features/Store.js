import {configureStore} from '@reduxjs/toolkit';
import authReducers from '../features/authSlice';
import cartReducers, { getTotals } from '../features/cartSlice';


export const store = configureStore({
  reducer: {
    auth: authReducers,
   cart:cartReducers
  },
});
store.dispatch(getTotals())
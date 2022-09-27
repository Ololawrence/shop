import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import { baseUrl } from "../Components/Common/baseurl";

const initialState = {
  user: localStorage.getItem("id"),
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: [],
  cartTotalAmount: [],
  signleCartDetails: [],
  userInfo: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {},
  getUserStatus: "",
};

export const getUser = createAsyncThunk(
  "user/getUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}/user/${id}`);
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      rejectWithValue(error.data);
    }
  }
);
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const itemIdex = state.cartItems.findIndex(
        (item) => item.id === payload.id
      );

      if (itemIdex >= 0) {
        state.cartItems[itemIdex] = {
          ...state.cartItems[itemIdex],
          cartQuantity: state.cartItems[itemIdex].cartQuantity + 1,
        };
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        const tempProduct = { ...payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${payload.title} added to cart successfully`, {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    getUser: (state, { payload }) => {
      return {
        ...state,
        userInfo: payload,
      };
    },

    viewCartDetails: (state, { payload }) => {
    },

    removeFromCart: (state, { payload }) => {
      const nextCartItems = state.cartItems.filter(
        (itemId) => itemId.id !== payload.id
      );

      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      toast.success(`${payload.title}  successfully removed from cart `, {
        position: "top-right",
      });
    },

    decreaseCart: (state, { payload }) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (itemId) => itemId.id !== payload.id
        );

        state.cartItems = nextCartItems;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

        toast.success(`${payload.title}  successfully removed from cart `, {
          position: "top-right",
        });
      }
    },

    clearCart: (state, { payload }) => {
      state.cartItems = [];
      state.user = "";
      state.userInfo = {};
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("user", JSON.stringify(state.userInfo));
      toast.success(`cart  cleared`, {
        position: "top-right",
      });
    },

    getTotals: (state, { payload }) => {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const ItemTotal = price * cartQuantity;

          cartTotal.total += ItemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
  extraReducers: {
    [getUser.pending]: (state) => {
      return { ...state, getUserStatus: "pending" };
    },
    [getUser.fulfilled]: (state, { payload }) => {
      return { ...state, userInfo: payload, getUserStatus: "fulfilled" };
    },
    [getUser.rejected]: (state) => {
      return { ...state, getUserStatus: "rejected" };
    },
  },
});

export const {
  addToCart,
  viewCartDetails,
  removeFromCart,
  decreaseCart,
  clearCart,
  getTotals,
} = cartSlice.actions;
export default cartSlice.reducer;

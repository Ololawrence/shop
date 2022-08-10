import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: [],
  cartTotalAmount: [],
  signleCartDetails: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const itemIdex = state.cartItems.findIndex(
        (item) => item.id === payload.id
      );

      if (itemIdex >= 0) {
        // state.cartItems[itemIdex].cartQuantity += 1;
        // toast.info(`increased ${state.cartItems[itemIdex].title} quantity `, {
        //   position: "bottom-left",
        // });

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

    viewCartDetails: (state, { payload }) => {
      console.log(payload)
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
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
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

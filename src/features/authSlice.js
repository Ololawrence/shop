import { createSlice, createAsyncThunk,  } from "@reduxjs/toolkit";
import { baseUrl } from "../Components/Common/baseurl";
import axios from "axios";

const initialState = {
  token: localStorage.getItem("token"),
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
  userId: "",
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user, { rejectWithValue }) => {
    try {
      let response = await axios.post(`${baseUrl}/auth/signup`, user);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "login/loginUser",

  async (user, { rejectWithValue }) => {
    try {
      let response = await axios.post(`${baseUrl}/auth/signin`, user);
      localStorage.setItem("token", JSON.stringify(response.data.accessToken));
      localStorage.setItem("id", JSON.stringify(response.data.id));
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser: (state, { payload }) => {
      console.log(state)
      state.userId = payload;
      state.userLoaded = true;
    },
    loginUsers: (state, { payload }) => {
      state.auth = payload;
      state.userLoaded = true;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("cartItems");
      localStorage.removeItem("id");
      return {

        ...state,
        token: "",
        loginStatus: "",
        userLoaded: false,
      };
    }
  },
  extraReducers: {
    [registerUser.pending]: (state, { payload }) => {
    
      return { ...state, registerStatus: "pending" };
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      if (payload) {
        return { ...state, token: payload, registerStatus: "success" };
      } else return state;
    },
    [registerUser.rejected]: (state, { payload }) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: payload,
      };
    },

    [loginUser.pending]: (state) => {
      return { ...state, loginStatus: "pending" };
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      if (payload) {
        return { ...state, userId: payload, loginStatus: "success" };
      } else return state;
    },
    [loginUser.rejected]: (state, { payload }) => {

      
      return {
        ...state,
        loginStatus: "rejected",
        loginError: payload,
      };
    },
  },
});

export const { loadUser, loginUsers, logout} = authSlice.actions;
export default authSlice.reducer;
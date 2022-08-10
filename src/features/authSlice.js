import { createSlice, createAsyncThunk,  } from "@reduxjs/toolkit";
import { baseUrl } from "../Components/Common/baseurl";
import axios from "axios";

const initialState = {
  token: localStorage.getItem("token"),
  auth: {
    email: "",
    password: "",
    registerStatus: "",
    registerError: "",
    loginStatus: "",
    loginError: "",
    userLoaded: false,
  },
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user, { rejectWithValue }) => {
    try {
      let response = await axios.post(`${baseUrl}/signup`, user);

      localStorage.setItem("token", JSON.stringify(response.data.token.token));
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
      let response = await axios.post(`${baseUrl}/login`, user);
 
      localStorage.setItem("token", JSON.stringify(response.data.token.token));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser: (state, { payload }) => {
      state.auth = payload;
      state.userLoaded = true;
    },
    loginUsers: (state, { payload }) => {
      state.auth = payload;
      state.userLoaded = true;
    },
  },
  extraReducers: {
    [registerUser.pending]: (state, { payload }) => {
      console.log("pending");
      return { ...state, registerStatus: "pending" };
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      if (payload) {
        return { ...state, token: payload, registerStatus: "success" };
      } else return state;
    },
    [registerUser.rejected]: (state, { payload }) => {
      console.log("rejected");
      return {
        ...state,
        registerStatus: "rejected",
        registerError: payload,
      };
    },

    [loginUser.pending]: (state, { payload }) => {
      console.log("pending");
      return { ...state, loginStatus: "pending" };
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      if (payload) {
        return { ...state, token: payload, loginStatus: "success" };
      } else return state;
    },
    [loginUser.rejected]: (state, { payload }) => {
      console.log("rejected");
      return {
        ...state,
        loginStatus: "rejected",
        loginError: payload,
      };
    },
  },
});

export const { loadUser, loginUsers } = authSlice.actions;
export default authSlice.reducer;

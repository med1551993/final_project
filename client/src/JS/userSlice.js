import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const userRegister = createAsyncThunk("user/register", async (user) => {
  
  try {
    let result = await axios.post("http://localhost:5000/user/register", user);
    console.log('user', user)
    return  result;
  } catch (error) {
    console.log(error);
  }
});

export const userLogin = createAsyncThunk("user/login", async (user) => {
  try {
    let result = await axios.post("http://localhost:5000/user/login", user);
    return  result;
  } catch (error) {
    console.log(error);
  }
});

export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
    let result = await axios.get("http://localhost:5000/user/current", {
      headers: { Authorization: localStorage.getItem("token") },
    });
    return  result;
  } catch (error) {
    console.log(error);
  }
});

export const updateUser = createAsyncThunk("user/update", async ({id,updatedUser}) => {
  try {
    let result = axios.put(`http://localhost:5000/user/${id}`,updatedUser);
    return result;
  } catch (error) {
    console.log(error)
  }
})

const initialState = {
  user: null,
  status: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout:(state) => {
        state.user = null;
        localStorage.removeItem('token')
    }
  },
  extraReducers: {
    [userRegister.pending]: (state) => {
      state.status = " pending";
    },
    [userRegister.fulfilled]: (state, action) => {
      state.status = " success";
      state.user = action.payload.data.user; 
      localStorage.setItem("token", action.payload.data.token);
    },
    [userRegister.rejected]: (state) => {
      state.status = " fail";
    },
    [userLogin.pending]: (state) => {
      state.status = " pending";
    },
    [userLogin.fulfilled]: (state, action) => {
      state.status = " success";
      state.user = action.payload.data.user;
      localStorage.setItem("token", action.payload.data.token);
    },
    [userLogin.rejected]: (state) => {
      state.status = " fail";
    },
    [userCurrent.pending]: (state) => {
      state.status = " pending";
    },
    [userCurrent.fulfilled]: (state, action) => {
      state.status = " success";
      state.user = action.payload.data.user;
    },
    [userCurrent.rejected]: (state) => {
      state.status = " fail";
    },
    [updateUser.pending]:(state) => {
      state.status = " pending";
    },
    [updateUser.fulfilled]:(state) => {
      state.status = " fulfilled";
    },
    [updateUser.rejected]:(state) => {
      state.status = " rejected";
    }
  },
});

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions

export default userSlice.reducer;

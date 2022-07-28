import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const AddVoyage = createAsyncThunk("voyage/create", async (voyage) => {
  try {
    let result = await axios.post("http://localhost:5000/voyage/create", voyage);
    
    return result;
  } catch (error) {
    console.log(error);
  }
});


export const getVoyage = createAsyncThunk("voyage/getvoyage", async () => {
  try {
    let result = await axios.get("http://localhost:5000/voyage/getvoyage");
    return result;
    
  } catch (error) {
    console.log(error);
  }
});

export const updateCov = createAsyncThunk("voyage/update", async ({id,updatedCov}) => {
  try {
    let result = axios.put(`http://localhost:5000/voyage/${id}`,updatedCov);
    return result;
  } catch (error) {
    console.log(error)
  }
});

export const deleteCov = createAsyncThunk("voyage/delete", async ({id}) => {
  try {
    let result = axios.delete(`http://localhost:5000/voyage/${id}`);
    return result;
  } catch (error) {
    console.log(error)
  }
});

const initialState = {
    voyage: null,
    status: null,
  };
export const voyageSlice = createSlice({
  name: "voyage",
  initialState,
  reducers: {},
  extraReducers: {
    [AddVoyage.pending]: (state) => {
      state.status = "pending";
    },
    [AddVoyage.fulfilled]: (state) => {
      state.status = "success";
    },
    [AddVoyage.rejected]: (state) => {
      state.status = "Fail";
    },
    [getVoyage.pending]:(state) => {
      state.status = " pending";
    },
    [getVoyage.fulfilled]:(state, action) => {
      state.status = " fulfilled";
      state.voyage = action.payload.data.voyages;
    },
    [getVoyage.rejected]:(state) => {
      state.status = " rejected";
    },
    [updateCov.pending]:(state) => {
      state.status = " pending";
    },
    [updateCov.fulfilled]:(state) => {
      state.status = " fulfilled";
    },
    [updateCov.rejected]:(state) => {
      state.status = " rejected";
    },
    [deleteCov.pending]:(state) => {
      state.status = " pending";
    },
    [deleteCov.fulfilled]:(state) => {
      state.status = " fulfilled";
    },
    [deleteCov.rejected]:(state) => {
      state.status = " rejected";
    },
  },
});

// export const { createVoyage } = voyageSlice.actions;

export default voyageSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const userExist = (localStorage.getItem("user"));
const initialState = {
  user: userExist ? userExist : null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false
        state.user = null
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false
        state.user = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(logOutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.user = null;
      })
  },
});

export default authSlice.reducer;

// regsiter user

export const registerUser = createAsyncThunk(
  "REGISTER/USER",
  async (formdata, thunkAPI) => {
    try {
      return await authService.register(formdata);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// LOGIN USER//

export const loginUser = createAsyncThunk("LOGIN/USER", async (formdata, thunkAPI) => {
  try {
    return await authService.login(formdata);
  } catch (error) {
    const message = error.response.data.message;
    return thunkAPI.rejectWithValue(message);
  }
});

// LOGOUT USER//

export const logOutUser = createAsyncThunk("LOGOUT/USER", async() => {
    localStorage.removeItem('user')
})
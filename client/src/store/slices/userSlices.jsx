import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUserAsync = createAsyncThunk("user/getUser", async (token) => {
  try {
    const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data.body;
  } catch (error) {
    throw error;
  }
});

const user = createSlice({
  name: "user",
  initialState: {
    user: {},
    loading: false,
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = {};
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUserAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = user.actions;
export default user.reducer;

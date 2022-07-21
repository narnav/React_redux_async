import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData } from './myAPI';

const initialState = {
  ar:[],
  value: 0,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'my/fetchData',
  async (amount) => {
    const response = await fetchData(amount);
    return response.data;
  }
);

export const mySlice = createSlice({
  name: 'my',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.ar = action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount} = mySlice.actions;
export const selectCount = (state) => state.my.value;
export const selectar = (state) => state.my.ar;
export default mySlice.reducer;

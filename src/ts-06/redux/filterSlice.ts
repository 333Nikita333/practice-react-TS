import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '' as string,
  reducers: {
    onChangeFilter(_, action) {
      return action.payload;
    },
  },
});

export const { onChangeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

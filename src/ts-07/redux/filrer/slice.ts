import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '' as string,
  reducers: {
    filterContacts(_, action: PayloadAction<string>) {
      return action.payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

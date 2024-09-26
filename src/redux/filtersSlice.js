import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setStatusFilter(state, {payload}) {
        state.name = payload,
      }
    },
 
});

export const selectNameFilter = (state) => state.filters.name;

export const { setStatusFilter } = filtersSlice.actions;

export default filtersSlice.reducer;



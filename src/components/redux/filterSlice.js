const { createSlice } = require('@reduxjs/toolkit');

const filterSlice = createSlice({
  name: `filter`,
  initialState: { filter: `` },

  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const getFilter = state => state.filter.filter;

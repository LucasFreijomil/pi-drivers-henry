import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drivers: [],
};

const driverSlice = createSlice({
  name: "drivers",
  initialState,
  reducers: {
    fetchAllDrivers: (state, action) => {
      state.drivers = action.payload;
    },
  },
});

export const { fetchAllDrivers } = driverSlice.actions;
export default driverSlice.reducer;
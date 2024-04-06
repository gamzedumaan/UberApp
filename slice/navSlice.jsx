import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: 'nav',
  initialState: {
    reducer: {
      setOrign: (state, action) => {
        state.origin = action.paylod;
      },
      setDestination: (state, action) => {
        state.destination = action.paylod;
      },
      setTravelTimeInformation: (state, action) => {
        state.travelTimeInformation = action.paylod;
      },
    },
  },
});

export const { setOrign, setDestination, setTravelTimeInformation } = navSlice.actions;

export const selectOrign = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;
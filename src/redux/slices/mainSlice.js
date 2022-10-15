import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  setModalOpen: false
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.setModalOpen = action.payload;
    },

    resetState: () => initialState
  }
});

export const { openModal, resetState } = mainSlice.actions;

export default mainSlice.reducer;

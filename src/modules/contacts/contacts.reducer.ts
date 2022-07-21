import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TContactState } from "./contacts.types";

const initialState = {
  name: "Initial Name",
} as TContactState;

const _setName = (state, action: PayloadAction<string>) => {
  state.name = action.payload;
};

export const contactsSlice = createSlice({
  name: "ContactsReducer",
  initialState,
  reducers: {
    setName: _setName,
  },
});

export const { setName } = contactsSlice.actions;

export default contactsSlice.reducer;

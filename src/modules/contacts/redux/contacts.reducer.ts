import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TSection } from "../../../components/uvsectionlist.types";
import { TContact, TContactState } from "../contacts.types";

const initialState = {
  name: "Initial Name",
  contactsData: [],
} as TContactState;

const _setName = (state: TContactState, action: PayloadAction<string>) => {
  state.name = action.payload;
};

const _setContacts = (
  state: TContactState,
  action: PayloadAction<TSection<TContact>[]>
) => {
  state.contactsData = action.payload;
};

export const contactsSlice = createSlice({
  name: "ContactsReducer",
  initialState,
  reducers: {
    setName: _setName,
    setContacts: _setContacts,
  },
});

export const { setName, setContacts } = contactsSlice.actions;

export default contactsSlice.reducer;

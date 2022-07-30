import { configureStore } from "@reduxjs/toolkit";
import ContactsReducer from "../../modules/contacts/redux/contacts.reducer";

export const store = configureStore({
  reducer: {
    contacts: ContactsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

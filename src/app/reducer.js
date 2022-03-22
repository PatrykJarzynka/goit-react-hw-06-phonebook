import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

const reducer = createReducer(initialState, builder => {
  builder
    .addCase('addContact', (state, action) => {
      state.contacts.items.push(action.payload);
    })
    .addCase('deleteContact', (state, action) => {
      state.contacts.items.pop(
        state.contacts.items.filter(contact => contact.id !== action.payload),
      );
    });
});

export default reducer;

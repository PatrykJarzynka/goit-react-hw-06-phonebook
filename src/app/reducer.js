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
      state.contacts.items.pop(action.payload);
    })
    .addCase('filterContacts', (state, action) => {
      state.contacts.filter = action.payload
    });
});

export default reducer;

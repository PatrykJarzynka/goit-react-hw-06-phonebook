import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

const reducer = createReducer(initialState, builder => {
    builder.addCase("addContact", (state, action) => {
        state.contacts.items.push(action.payload);
        console.log(action.type)
  });
});

export default reducer;

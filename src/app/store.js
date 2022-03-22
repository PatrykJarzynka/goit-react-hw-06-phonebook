import { createStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import { persistReducer, persistStore } from 'redux-persist';
import localStorage from 'redux-persist/es/storage';

const persistConfig = {
  key: 'root',
  storage: localStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
export let store = createStore(persistedReducer);
export let persistor = persistStore(store);

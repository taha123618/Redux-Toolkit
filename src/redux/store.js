import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import filterReducer from "./filterReducer";

// export const store = configureStore({
//   reducer: { cart: cartReducer , filters: filterReducer },
// });

// For hold the data after the refresh the page we use redux -persists

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducers = combineReducers({
  cart: cartReducer,
  filters: filterReducer,
});

const persistedReducer = persistReducer(
  persistConfig,
  // cartReducer,
  // filterReducer
  reducers
);

export const store = configureStore({
  reducer:
    // cart: persistedReducer,
    // filters: filterReducer
    persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

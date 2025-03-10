import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import productsReducer, { productsFetch } from "./products/productsSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import { productsApi } from "./products/productsApi";
import cartReducer, { getTotals } from "./products/cartSlice";
import languageReducer from "./languageSlice";

// Combine the reducers
const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  [productsApi.reducerPath]: productsApi.reducer, // Add the productsApi reducer
  cart: cartReducer,
  language: languageReducer,
});

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(productsApi.middleware), // Add productsApi middleware
});

store.dispatch(productsFetch());
store.dispatch(getTotals());

// Persistor setup
export const persistor = persistStore(store);

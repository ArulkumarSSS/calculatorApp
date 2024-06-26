import { configureStore } from "@reduxjs/toolkit";
import IdReducer from '../Feature/MovieIdStore';
const store = configureStore({
  reducer: {
    id: IdReducer,
  },
});
export default store;
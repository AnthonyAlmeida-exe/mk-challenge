import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/usersReducer";

const store = configureStore({
  reducer: usersReducer,
});

export default store;

import { combineReducers } from "redux";
import usersReducer from "./reducers/usersReducer";

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;

import { ADD_USER, UserActionTypes, UserState } from "../types";

const initialState: UserState = {
  users: [],
};

const usersReducer = (
  state = initialState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export default usersReducer;

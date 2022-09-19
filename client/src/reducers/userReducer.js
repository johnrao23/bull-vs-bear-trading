import { REFRESH_USER_DATA, RESET_USER_DATA } from "../actions/types";

const initialState = {
  user: null,
  balance: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REFRESH_USER_DATA:
      return {
        ...state,
        user: action.payload,
        //balance: action.payload.balance
      };

    case RESET_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}

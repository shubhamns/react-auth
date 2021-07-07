import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE,
} from "./../types/user";

const initialState = {
  loading: false,
  user: null,
};

export function user(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case USER_PROFILE_REQUEST:
      return {
        ...state,
      };
    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case USER_PROFILE_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
}

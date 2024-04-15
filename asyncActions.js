//  4 - Import Redux and createStore function
const redux = require("redux");
const createStore = redux.createStore;

// 1 - Define initial state
const initalState = {
  loading: false,
  users: [],
  error: "",
};

// 2 - Define action types as constants
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// 2 - Define action creators
// These functions create actions that will be dispatched to the Redux store
const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUserFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

// 3- Define reducer function
// Reducer takes the current state and an action, then returns the new state based on the action type
const reducers = (state = initalState, action) => {
  switch (action.state) {
    // If action type is FETCH_USERS_REQUEST, set loading to true
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    // If action type is FETCH_USERS_SUCCESS, update users with payload and set loading to false
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };

    // If action type is FETCH_USERS_FAILURE, set error with payload and loading to false
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };

    // If action type does not match any cases, return current state
    default:
      break;
  }
};

// 5 - Create Redux store with the reducers
const store = createStore(reducers);

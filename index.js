const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  // returns a actions
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}
// (previousState, action) => newState

// we will create a store to hold this initalState
// const initalState = {
//   numOfCakes: 10,
//   numOfIceCream: 20,
// };

const initalCakeState = {
  numOfCakes: 10,
};

const initalIceCreamState = {
  numOfIceCream: 20,
};

const cakeReducer = (state = initalCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initalIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducer({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Inital State", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();

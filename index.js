
const redux = require('redux');

const createStore = redux.createStore
const BUY_CAKE = 'BUY_CAKE'


function buyCake() {
    // returns a actions
    return 
    {
        type: BUY_CAKE
    }
}

// (previousState, action) => newState

// we will create a store to hold this initalState
const initalState = {
    numOfCakes: 10,
}

const reducers = (state = initalState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const store = createStore(reducers)
console.log("Inital state", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated state", store.getState()));
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()
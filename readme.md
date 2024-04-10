## Three Core Concept

- Store: Holds the state of your application.
- Action: Describe what happened.
- Reducer: Ties the store and actions together.

## Three Principles

- First Principle: The state of your whole application is stored in an object tree within a single store.
- Second Principe: The only way to change the state is to emit an action, an object describing what happened.
- Third Principle: To specify how the state tree is transformed by actions, you write pure reducers.

  Reducer - (previousState, action) => newState

## Flow of the redux

- JS APP -> (dispatch) Action -> Reducer ->(subcribed) Store-> JS APP

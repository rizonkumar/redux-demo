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

---

### Async

- Fetches a list of users from an API end point and stores it in the redux store

  - State
  - Actions
  - Reducer

- State

  ```
  state = {
    loading: true,
    data = [],
    error: ''
  }

  ```

  1. loading - Display a loading spinner in your component
  2. data - List of users
  3. error - Display error to the user

- Action

  ```
  FETCH_USERS_REQUEST = Fetch list of users.
  FETCH_USERS_SUCCESS = Fetched successfully.
  FETCH_USERS_FAILURE = Error fetching the data.
  ```

- Reducers

  ```
  case: FETCH_USERS_REQUEST
        loading: true
  case: FETCH_USERS_SUCCESS
        loading: false
        users: data
  case: FETCH_USERS_FAILURE
        loading: false
        error: error

  ```

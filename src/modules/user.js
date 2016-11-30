import {createAction, handleActions} from 'redux-actions';

const INITIAL_STATE = {
  loading: false,
  data: {},
  errors: null
};

const requestedUsers = createAction('users/REQUESTED_USERS');
const receivedUsers = createAction('users/RECEIVED_USERS');

export default handleActions({
  [requestedUsers]: (state) => ({
    ...state,
    loading: true
  }),
  [receivedUsers]: (state, {payload, isError}) => ({
    ...state,
    loading: false,
    data: isError ? payload : state.data,
    errors: isError ? payload : state.errors
  })
}, INITIAL_STATE);

function reducer(state, action) {
  switch(action.type) {
    case 'users/REQUESTED_USER':
      return Object.assign({}, state, { loading: true });
    case 'user/RECEIVED_USER':
      return Object.assign({}, state, {
        loading: false,
        data: !action.isError ? action.payload : state.data,
        errors: action.isError ? state.error : action.payload
      })
    default:
      return state
  }
}

export const fetchUsers = (userId) => (dispatch, getState) => {

  dispatch(requestedUsers())
  client.get('/api/temperature')
    .then((users) => dispatch(receivedUsers(users)))
    .catch(err => dispatch(receivedUsers(err)))
}
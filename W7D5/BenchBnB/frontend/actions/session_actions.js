export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
import * as APIUtil from '../util/session_api_util';


const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = user => dispatch => (
  APIUtil.login(user).then(u => (dispatch(receiveCurrentUser(user))),
  err => (dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(u => (dispatch(receiveCurrentUser(null))
  ))
);

export const signup = user => dispatch => (
  APIUtil.signup(user).then(u => (
    dispatch(receiveCurrentUser(u))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  checkUserExists: ['name', 'phone', 'callback'],
  checkUserExistsSuccess: ['user'],
  checkUserExistsFailure: ['errors']
});

const INITIAL_STATE = {
  isLoading: false,
  user: {},
  errors: []
};

const checkUserExists = state => ({ ...state, isLoading: true });

const checkUserExistsSuccess = (state, { user }) => ({
  ...state,
  user,
  isLoading: false
});

const checkUserExistsFailure = (state, { errors }) => ({
  ...state,
  errors,
  isLoading: false
});

export default createReducer(INITIAL_STATE, {
  [Types.CHECK_USER_EXISTS]: checkUserExists,
  [Types.CHECK_USER_EXISTS_SUCCESS]: checkUserExistsSuccess,
  [Types.CHECK_USER_EXISTS_FAILURE]: checkUserExistsFailure
});

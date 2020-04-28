import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  createProfileRequest: ['payload'],
  createProfileSuccess: ['data'],
  createProfileFail: ['errors'],
  validationProfileRequest: ['payload'],
  validationProfileSuccess: ['data'],
  validationProfileFail: ['errors']
});

const INITIAL_STATE = {
  isLoading: false,
  data: {},
  errors: [],
  success: false
};

const createProfileRequest = () => ({ ...INITIAL_STATE, isLoading: true });

const createProfileSuccess = (state, { data }) => {
  return {
    ...state,
    data,
    isLoading: false,
    errors: [],
    success: true
  };
};

const createProfileFail = (state, { errors }) => {
  return {
    ...state,
    errors,
    isLoading: false
  };
};

const validationProfileRequest = () => ({ ...INITIAL_STATE, isLoading: true });

const validationProfileSuccess = (state, { data }) => ({
  ...state,
  data,
  isLoading: false,
  errors: []
});

const validationProfileFail = (state, { errors }) => {
  return {
    ...state,
    errors,
    isLoading: false
  };
};

export default createReducer(INITIAL_STATE, {
  [Types.CREATE_PROFILE_REQUEST]: createProfileRequest,
  [Types.CREATE_PROFILE_SUCCESS]: createProfileSuccess,
  [Types.CREATE_PROFILE_FAIL]: createProfileFail,
  [Types.VALIDATION_PROFILE_REQUEST]: validationProfileRequest,
  [Types.VALIDATION_PROFILE_SUCCESS]: validationProfileSuccess,
  [Types.VALIDATION_PROFILE_FAIL]: validationProfileFail
});

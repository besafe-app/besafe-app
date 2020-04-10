import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  updateProfileRequest: ['payload'],
  updateProfileSuccess: ['data'],
  updateProfileFail: ['errors']
});

const INITIAL_STATE = {
  isLoading: false,
  data: {},
  errors: []
};

const updateProfileRequest = () => ({ ...INITIAL_STATE, isLoading: true });

const updateProfileSuccess = (state, { data }) => ({
  ...state,
  data,
  isLoading: false,
  errors: []
});

const updateProfileFail = (state, { errors }) => {
  return {
    ...state,
    errors,
    isLoading: false
  };
};

export default createReducer(INITIAL_STATE, {
  [Types.UPDATE_PROFILE_REQUEST]: updateProfileRequest,
  [Types.UPDATE_PROFILE_SUCCESS]: updateProfileSuccess,
  [Types.UPDATE_PROFILE_FAIL]: updateProfileFail
});

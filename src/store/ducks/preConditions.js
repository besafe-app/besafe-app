import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  listPreConditionsRequest: ['payload'],
  listPreConditionsSuccess: ['data'],
  listPreConditionsFail: ['errors'],
  savePreConditionsRequest: ['payload'],
  savePreConditionsSuccess: [''],
  savePreConditionsFail: ['errors']
});

const INITIAL_STATE = {
  isLoading: false,
  errors: [],
  listPreConditions: []
};

const listPreConditionsRequest = () => ({ ...INITIAL_STATE, isLoading: true });

const listPreConditionsSuccess = (state, { data }) => ({
  ...state,
  data,
  isLoading: false,
  errors: []
});

const listPreConditionsFail = (state, { errors }) => ({
  ...state,
  errors,
  isLoading: false
});

const savePreConditionsRequest = () => ({ ...INITIAL_STATE, isLoading: true });

const savePreConditionsSuccess = state => ({
  ...state,
  isLoading: false,
  errors: []
});

const savePreConditionsFail = (state, { errors }) => ({ ...state, isLoading: false, errors });

export default createReducer(INITIAL_STATE, {
  [Types.LIST_PRE_CONDITIONS_REQUEST]: listPreConditionsRequest,
  [Types.LIST_PRE_CONDITIONS_SUCCESS]: listPreConditionsSuccess,
  [Types.LIST_PRE_CONDITIONS_FAIL]: listPreConditionsFail,
  [Types.SAVE_PRE_CONDITIONS_REQUEST]: savePreConditionsRequest,
  [Types.SAVE_PRE_CONDITIONS_SUCCESS]: savePreConditionsSuccess,
  [Types.SAVE_PRE_CONDITIONS_FAIL]: savePreConditionsFail
});

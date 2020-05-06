import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  listSymptomsRequest: ['payload'],
  listSymptomsSuccess: ['data'],
  listSymptomsFail: ['errors'],
  saveSymptomsRequest: ['payload'],
  saveSymptomsSuccess: [''],
  saveSymptomsFail: ['errors']
});

const INITIAL_STATE = {
  isLoading: false,
  errors: [],
  listSymptoms: []
};

const listSymptomsRequest = () => ({ ...INITIAL_STATE, isLoading: true });

const listSymptomsSuccess = (state, { listSymptoms }) => ({
  ...state,
  listSymptoms,
  isLoading: false,
  errors: []
});

const listSymptomsFail = (state, { errors }) => ({
  ...state,
  errors,
  isLoading: false
});

const saveSymptomsRequest = () => ({ ...INITIAL_STATE, isLoading: true });

const saveSymptomsSuccess = state => ({
  ...state,
  isLoading: false,
  errors: []
});

const saveSymptomsFail = (state, { errors }) => ({ ...state, isLoading: false, errors });

export default createReducer(INITIAL_STATE, {
  [Types.LIST_SYMPTOMS_REQUEST]: listSymptomsRequest,
  [Types.LIST_SYMPTOMS_SUCCESS]: listSymptomsSuccess,
  [Types.LIST_SYMPTOMS_FAIL]: listSymptomsFail,
  [Types.SAVE_SYMPTOMS_REQUEST]: saveSymptomsRequest,
  [Types.SAVE_SYMPTOMS_SUCCESS]: saveSymptomsSuccess,
  [Types.SAVE_SYMPTOMS_FAIL]: saveSymptomsFail
});

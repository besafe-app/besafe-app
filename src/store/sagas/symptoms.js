import { takeLatest, put, call } from 'redux-saga/effects';
import { Types } from '../ducks/symptoms';
import { api } from 'utils';
import AsyncStorage from '@react-native-community/async-storage';
import constants from 'config/constants';
import { getLanguage } from 'helpers';

function* listSymptoms({ payload: { token } }) {
  try {
    const response = [
      {
        id: 0,
        name: 'Febre',
        complement: true,
        language: 'pt',
        createdAt: 1586293846607,
        updatedAt: 1586366152316
      },
      {
        id: 1,
        name: 'Cansaço',
        complement: false,
        language: 'pt',
        createdAt: 1586293846607,
        updatedAt: 1586366152316
      },
      {
        id: 2,
        name: 'Nariz entupido',
        complement: false,
        language: 'pt',
        createdAt: 1586293846607,
        updatedAt: 1586366152316
      },
      {
        id: 3,
        name: 'Corisa(Corrimento nasal)',
        complement: false,
        language: 'pt',
        createdAt: 1586293846607,
        updatedAt: 1586366152316
      },
      {
        id: 4,
        name: 'Dificuldade para respirar',
        complement: false,
        language: 'pt',
        createdAt: 1586293846607,
        updatedAt: 1586366152316
      },
      {
        id: 5,
        name: 'Dor de cabeça',
        complement: false,
        language: 'pt',
        createdAt: 1586293846607,
        updatedAt: 1586366152316
      },
      {
        id: 6,
        name: 'Dor de garganta',
        complement: false,
        language: 'pt',
        createdAt: 1586293846607,
        updatedAt: 1586366152316
      },
      {
        id: 7,
        name: 'Tosse',
        complement: false,
        language: 'pt',
        createdAt: 1586293846607,
        updatedAt: 1586366152316
      },
      {
        id: 8,
        name: 'Diarréia',
        complement: false,
        language: 'pt',
        createdAt: 1586293846607,
        updatedAt: 1586366152316
      },
      {
        id: 9,
        name: 'Dor abdominal',
        complement: false,
        language: 'pt',
        createdAt: 1586293846607,
        updatedAt: 1586366152316
      }
    ];
    yield put({
      type: Types.LIST_SYMPTOMS_SUCCESS,
      listSymptoms: response
    });
  } catch (error) {
    yield put({
      type: Types.LIST_SYMPOMTS_FAIL,
      errors: [error]
    });
  }
}

function* saveSymptoms({ payload: { symptoms, token } }) {
  try {
    AsyncStorage.setItem('@Symptoms_selected_object', JSON.stringify(symptoms));
    yield put({ type: Types.SAVE_SYMPTOMS_SUCCESS });
  } catch (error) {
    yield put({
      type: Types.SAVE_SYMPTOMS_FAIL,
      errors: [error]
    });
  }
}

function* listSeletedSymptoms({ payload: { token } }) {
  try {
    const response = [
      {
        id: 0,
        name: 'Febre',
        complement: true,
        language: 'pt',
        createdAt: 1586293846607,
        updatedAt: 1586366152316
      },
      {
        id: 1,
        name: 'Cansaço',
        complement: false,
        language: 'pt',
        createdAt: 1586293846607,
        updatedAt: 1586366152316
      },
      {
        id: 2,
        name: 'Nariz entupido',
        complement: false,
        language: 'pt',
        createdAt: 1586293846607,
        updatedAt: 1586366152316
      },
      {
        id: 3,
        name: 'Corisa(Corrimento nasal)',
        complement: false,
        language: 'pt',
        createdAt: 1586293846607,
        updatedAt: 1586366152316
      }
    ];
    yield put({
      type: Types.LIST_SYMPTOMS_SELECTED_SUCCESS,
      selectedSymptoms: response
    });
  } catch (error) {
    yield put({
      type: Types.LIST_SYMPTOMS_SELECTED_FAIL,
      errors: [error]
    });
  }
}

export default function* watcherSaga() {
  yield takeLatest(Types.LIST_SYMPTOMS_REQUEST, listSymptoms);
  yield takeLatest(Types.SAVE_SYMPTOMS_REQUEST, saveSymptoms);
  yield takeLatest(Types.LIST_SYMPTOMS_SELECTED_REQUEST, listSeletedSymptoms);
}

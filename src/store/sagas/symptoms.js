import { takeLatest, put } from 'redux-saga/effects';
import { Types } from '../ducks/symptoms';
import { api } from 'utils';
import constants from 'config/constants';
import { getLanguage } from 'helpers';

function* listSymptoms({ payload: { token } }) {
  try {
    response = [
      { id: 0, name: 'Febre', complement: true },
      { id: 1, name: 'Cansaço', complement: false },
      { id: 2, name: 'Nariz entupido', complement: false },
      { id: 3, name: 'Corisa(Corrimento nasal)', complement: false },
      { id: 4, name: 'Dificuldade para respirar', complement: false },
      { id: 5, name: 'Dor de cabeça', complement: false },
      { id: 6, name: 'Dor de garganta', complement: false },
      { id: 7, name: 'Tosse', complement: false },
      { id: 8, name: 'Diarréia', complement: false },
      { id: 9, name: 'Dor abdominal', complement: false }
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
    yield api.post(
      constants.api.symptoms.save,
      {
        symptoms
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    yield put({ type: Types.SAVE_SYMPTOMS_SUCCESS });
  } catch (error) {
    yield put({
      type: Types.SAVE_SYMPTOMS_FAIL,
      errors: [error]
    });
  }
}

export default function* watcherSaga() {
  yield takeLatest(Types.LIST_SYMPTOMS_REQUEST, listSymptoms);
  yield takeLatest(Types.SAVE_SYMPTOMS_REQUEST, saveSymptoms);
}
